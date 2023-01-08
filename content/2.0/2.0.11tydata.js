module.exports = {
    eleventyComputed: {
        release: '2.0.27',
        eleventyNavigation: {
            version: '2.0',
            key: data => data.eleventyNavigation && data.eleventyNavigation.key ? data.eleventyNavigation.key : data.title,
            parent: data => data.parent
        },
        permalink: data => data.permalink === false ? false : data.page.filePathStem + '.html'
    }
};
