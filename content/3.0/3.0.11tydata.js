module.exports = {
    eleventyComputed: {
        release: '3.0.0-alpha3',
        eleventyNavigation: {
            version: '3.0',
            key: data => data.eleventyNavigation && data.eleventyNavigation.key ? data.eleventyNavigation.key : data.title,
            parent: data => data.parent
        },
        permalink: data => data.permalink === false ? false : data.page.filePathStem + '.html'
    }
};