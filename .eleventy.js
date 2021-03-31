const { DateTime } = require("luxon");
const format = require("date-fns/format")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('et-book');
    eleventyConfig.addPassthroughCopy('images')

    // Creates human readable formatted date for articles
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Creates date filter for sitemap
    eleventyConfig.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat)
    });
    return {
        passthroughFileCopy: true,
        dir: { output: "dist" },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}
