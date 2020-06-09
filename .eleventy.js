module.exports = function(eleventyConfig) {

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
