const snippets = require("./lib/filters/snippets");

module.exports = function(eleventyConfig) {

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // enable generation of header anchor tags
  // needs the markdown-it-anchor plugin
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const options = {
    html: true
  };

    // add anchor generation to markdown
  // needed for toc plugin to work
  const markdownLib = markdownIt(options).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  // table of contents plugin
  const pluginTOC = require('eleventy-plugin-nesting-toc');
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2', 'h3']});

  // syntax highlighting plugin
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  eleventyConfig.addPlugin(syntaxHighlight);

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

  eleventyConfig.addCollection("docs", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return item.data.eleventyNavigation !== undefined; 
    });
  });

  eleventyConfig.addLiquidShortcode('codesnippet', async function(url, version) {
    return await snippets(url, version);
  });

  eleventyConfig.addFilter('navigation', require("./lib/filters/navigation.js"));

  eleventyConfig.addWatchTarget("./content/css");
  eleventyConfig.addWatchTarget("./content/_sass");

  return {
    dir: {
      input: "content",
      layouts: "_layouts",
      output: "staging/content"
    }
  };
};
