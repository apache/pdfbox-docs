module.exports = function(eleventyConfig) {

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
