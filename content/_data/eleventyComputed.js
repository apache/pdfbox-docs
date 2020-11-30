module.exports = {
  date: function(inputPath) {
    return new Date();
  },
    permalink: (data) => {
      // ignore templates in _posts
      if (data.page.inputPath.indexOf('_posts') != -1) {
        return false; 
      }

      if (data.page.fileSlug === 'blog') {
        return data.page.filePathStem + '/index.html';
      }
      
      return data.page.filePathStem + '.html';
    }
  };