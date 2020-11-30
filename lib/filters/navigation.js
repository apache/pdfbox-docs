module.exports = function(nodes = [], navigation = {}, key = "") {
    let pages = [];

    let versionNodes = nodes.filter(a => a.data.eleventyNavigation.version == navigation.version);

    for(let entry of versionNodes) {
		if(entry.data && entry.data.eleventyNavigation) {
			let nav = entry.data.eleventyNavigation;
			if(!key && !nav.parent || nav.parent === key) {
				pages.push(Object.assign({}, nav, {
					url: nav.url || entry.data.page.url,
					pluginType: "eleventy-navigation"
				}, key ? { parentKey: key } : {}));
			}
		}
    }

    return pages.sort(function(a, b) {
		return (a.order || 0) - (b.order || 0);
	}).map(function(entry) {
		if(!entry.title) {
			entry.title = entry.key;
		}
		if(entry.key) {
			entry.children = findChildEntries(versionNodes, entry.key, entry.version);
		}
		return entry;
    });
    
    function findChildEntries(versionNodes, key, version) {
        let childs = [];

        for(let entry of versionNodes) {
            if(entry.data && entry.data.eleventyNavigation) {
                let nav = entry.data.eleventyNavigation;
                if (version == nav.version) {
                    if(!key && !nav.parent || nav.parent === key) {
                        childs.push(Object.assign({}, nav, {
                            url: nav.url || entry.data.page.url,
                            pluginType: "eleventy-navigation"
                        }, key ? { parentKey: key } : {}));
                    }
                }
            }
        }
        return childs;
    }



};