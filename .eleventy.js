module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy("et-book");
    return {
        passthroughFileCopy: true,
        dir: { output: "dist" },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}
