
const fs = require('fs');
const yaml = require('js-yaml');

const laravelExportedData = process.env.LARAVEL_EXPORTED_DATA;
console.log(`LARAVEL_EXPORTED_DATA: ${laravelExportedData}`);

const laravelImageData = process.env.LARAVEL_IMAGES;
console.log(`LARAVEL_IMAGES: ${laravelImageData}`);

const defaultAuthor = process.env.DEFAULT_AUTHOR;
console.log(`DEFAULT_AUTHOR: ${defaultAuthor}`);

const blogRecordDataPath = `${laravelExportedData}/blog_records/blog_records.json`;


const parseBlogRecords = (blogRecords) => {
    console.log(`found this number of blog records: ${blogRecords.length}`);

    blogRecords.forEach(record => {

        /*
        const id = record.id;
        const name = record.name;
        const description = record.description;
        const keywords = record.keywords;
        const title = record.title;
        const image = record.image;
        const tags = record.tags;
        const content = record.content;
        const catorgory = record.catorgory;
        const created_at = record.created_at;
        */
        const slug = record.slug;
        const newPageFilePath = `../src/content/missivz/${slug}.md`;
        const updated_at = record.updated_at;

        // const publishedDate = new Date(updated_at).toLocaleDateString('en-US');
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
                "laravel",
                "livewire",
                "jetstream",
                "filament",
                "JavaScript",
                "LLMs"
              ],
            image: record.image,
            canonicalURL: "https://headshed.dev"
        }

        /*
        console.log(`id: ${id}`);
        console.log(`slug: ${slug}`);
        console.log(`title: ${title}`);
        */
        // const headMatterYaml = yaml.dump(headMatter);
        const headMatterYaml = yaml.dump(headMatter, { flowLevel: -1 });

        // console.log(headMatterYaml);

        newBlogPage = `---
${headMatterYaml}
---
${record.content}
`
        console.log(`path: ${newPageFilePath}`);
        // console.log(newBlogPage);

        // fs.writeFileSync(newPageFilePath, newBlogPage);
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


fs.readFile(blogRecordDataPath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file from disk: ${err}`);
    } else {
        try {
            const blogRecords = JSON.parse(data);
            // console.log('Blog records:', blogRecords);
            parseBlogRecords(blogRecords);
        } catch (err) {
            console.error(`Error parsing JSON string: ${err}`);
        }
    }
});