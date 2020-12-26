const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('et-book');
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });
    return {
        passthroughFileCopy: true,
        dir: { output: "dist" },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}
