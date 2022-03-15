const fetch = require("node-fetch");
const CacheAsset = require("@11ty/eleventy-fetch");
const baseUrls = [];
baseUrls['trunk'] = "https://svn.apache.org/viewvc/pdfbox/trunk/examples/src/main/java/org/apache/pdfbox/examples/";
baseUrls['2.0'] = "https://svn.apache.org/viewvc/pdfbox/branches/2.0/examples/src/main/java/org/apache/pdfbox/examples/";

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

function splitSnippet(data) {
  var regex = /\/\/DOC-START([\s\S]*?)\/\/DOC-END/g

  if (data.indexOf("//DOC-START") != -1 && data.indexOf("//DOC-END") != -1) {
    var matches;
    var codeSnippets = [];
    while (matches = regex.exec(data)) {
      codeSnippets.push(matches[1]);
    }
    return codeSnippets.join("\n");
  } else {
    return data;
  }
}

async function fetchData(url) {
	try {
		return CacheAsset(url, {
			duration: "1d",
      type: "text",
      directory: ".cache"
		});
	} catch(e) {
    console.log("error fetching data for " + url);
    console.log(e);
		return "";
	}
}

module.exports = async function(snippet, version) {
  if (snippet && baseUrls[version]) {
    let url = baseUrls[version] + snippet + "?view=co";

    return fetchData(url)
      .then(res => {return splitSnippet(res);})
      .catch(function(error){console.log(error)});
  }
};