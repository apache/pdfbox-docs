module.exports = {
    eleventyComputed: {
        release: '1.8.16',
        eleventyNavigation: {
            version: '1.8',
            key: data => data.eleventyNavigation && data.eleventyNavigation.key ? data.eleventyNavigation.key : data.title,
            parent: data => data.parent
        },
        permalink: data => data.permalink === false ? false : data.page.filePathStem + '.html'
    }
};