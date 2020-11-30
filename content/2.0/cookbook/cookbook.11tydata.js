module.exports = {
    eleventyComputed: {
        eleventyNavigation: {
            version: '2.0',
            key: data => data.title,
            parent: 'Cookbook'
        }
    }
};