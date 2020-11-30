module.exports = {
    eleventyComputed: {
        eleventyNavigation: {
            version: '1.8',
            key: data => data.title,
            parent: 'Cookbook'
        }
    }
};