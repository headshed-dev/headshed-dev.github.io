const fs = require('fs');
const yaml = require('js-yaml');
const laravelExportedData = process.env.LARAVEL_EXPORTED_DATA;
// const laravelImageData = process.env.LARAVEL_IMAGES;
const defaultAuthor = process.env.DEFAULT_AUTHOR;
const blogRecordDataPath = `${laravelExportedData}/blog_records/blog_records.json`;

const parseBlogRecords = (blogRecords) => {
    console.log(`found this number of blog records: ${blogRecords.length}`);
    blogRecords.forEach(record => {
        const slug = record.slug;
        const newPageFilePath = `../src/content/missivz/${slug}.md`;
        const updated_at = record.blog_date
        const publishedDate = new Date(updated_at).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '-');

        console.log(`publishedDate: ${publishedDate}`);

        const headMatter = {
            title: record.title,
            author: defaultAuthor,
            isDraft: false,
            publishedDate: publishedDate,
            tags: [
                "missivz",
              ],
            image: record.image,
            canonicalURL: "https://headshed.dev"
        }
        const headMatterYaml = yaml.dump(headMatter, { flowLevel: -1 });

        newBlogPage = `---
${headMatterYaml}
---
${record.markdown}
`
        console.log(`path: ${newPageFilePath}`);

        fs.writeFileSync(newPageFilePath, newBlogPage, (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
            } else {
                console.log(`Successfully wrote file: ${newPageFilePath}`);
            }
        });



    });
}


/*
 * main function
 *
 * Read the blog records from the JSON file.
 */

console.log(`reading blog records from: ${blogRecordDataPath}`);    

fs.readFile(blogRecordDataPath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file from disk: ${err}`);
    } else {
        try {
            const blogRecords = JSON.parse(data);
            parseBlogRecords(blogRecords);
        } catch (err) {
            console.error(`Error parsing JSON string: ${err}`);
        }
    }
});