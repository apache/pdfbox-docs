module.exports = function(eleventyConfig) {

  // enable generation of header anchor tags
  // needs the markdown-it-anchor plugin
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownLib = markdownIt().use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  // copy static files to output
  eleventyConfig.addPassthroughCopy("./content/bootstrap");
  eleventyConfig.addPassthroughCopy("./content/css/*.css");
  eleventyConfig.addPassthroughCopy("./content/images");
  eleventyConfig.addPassthroughCopy("./content/.htaccess");
  eleventyConfig.addPassthroughCopy("./content/doap_PDFBox.rdf");
  eleventyConfig.addPassthroughCopy("./content/download.cgi");

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/_posts/*.md");
  });

  return {
    dir: {
      input: "content",
      layouts: "_layouts",
      output: "staging/content"
    }
  };
};
