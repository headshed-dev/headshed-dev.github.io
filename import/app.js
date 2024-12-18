const fs = require('fs');
const yaml = require('js-yaml');
const laravelExportedData = process.env.LARAVEL_EXPORTED_DATA;
// const laravelImageData = process.env.LARAVEL_IMAGES;
const defaultAuthor = process.env.DEFAULT_AUTHOR;
const blogRecordDataPath = `${laravelExportedData}/blog_records/blog_records.json`;


const parseArticleRecords = (articleRecords) => {
    console.log(`found this number of article records: ${articleRecords.length}`);


    articleRecords.forEach(record => {

        // console.log(record);


        const headMatter = {
            layout: "../../layouts/CustomMarkdown.astro",
            title: record.title,
            image: `assets/${record.image}`,
            created: record.created_at,
            updated: record.updated_at,
            author: defaultAuthor,
            tags: record.tags,
            description: record.description,
            keywords: record.keywords,
        }
        // console.log(headMatter);
        
        const headMatterYaml = yaml.dump(headMatter, { flowLevel: -1 });

        newArticlePage = `---
${headMatterYaml}
---
${record.markdown}
`
        console.log(newArticlePage);

        
        // src/pages/uploadz/astro-static-site-generator.md

        const articleFilePath = "../src/pages/uploadz/" + record.slug + ".md";

        try {
            fs.writeFileSync(articleFilePath, newArticlePage);
            console.log(`Successfully wrote file: ${articleFilePath}`);
        } catch (err) {
            console.error(`Error writing file: ${err}`);
        }






    });
}

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
            const records = JSON.parse(data);
            
            const pageRecords = records.filter(record => record.category === "Article");
            const blogRecords = records.filter(record => record.category === "Default");


            parseBlogRecords(blogRecords);
            parseArticleRecords(pageRecords);


        } catch (err) {
            console.error(`Error parsing JSON string: ${err}`);
        }
    }
});