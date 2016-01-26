---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
         
layout:  default
title:   Updating the Website
---

# Updating the PDFBox Website

The content for the PDFBox website is kept in a [git repository](https://git-wip-us.apache.org/repos/asf/pdfbox-docs) which is also mirrored to [GitHub](https://github.com/apache/pdfbox-docs). The site is split into two parts: the static content and the Javadoc for the PDFBox API. Both parts are build independently as further described below.

## Project info
The site is based on [Jekyll](http://jekyllrb.com). So you have to be familiar with the [Markdown](http://daringfireball.net/projects/markdown/syntax) template language and have Jekyll (ver. 2+) installed to contribute to the project.

## Contribute
If you would like to enhance the website content you can submit a patch. To do so please open a ticket at our [Issue Tracker](https://issues.apache.org/jira/browse/PDFBOX), use `Documentation` for the `Component` and add your patch to the ticket.

## Development

### Install Jekyll
Follow the instructions available on the [Jekyll](http://jekyllrb.com) website.

### Check out from the git repository
Before you can edit the site, you need to check it out from the git repository:

~~~
git clone https://git-wip-us.apache.org/repos/asf/pdfbox-docs
~~~

### Local changes
You can now do the changes and additions to the sources of the PDFBox website. To test these locally use

~~~
jekyll serve
~~~

which will compile the changes and run a local webserver at 

~~~
http://localhost:4000
~~~

### Publish the website (for comitters only)
After you have done the local changes follow these steps to publish the content:

Add the following server configuration in your ~/.m2/settings.xml file

	<server>
	  <id>pdfbox-site</id>
	  <username>** USERNAME **</username>
	  <password>** PASSWORD **</password>
	</server>

`pdfbox-site` is referenced from the PDFBox pom.xml file.

<p class="alert alert-warning">The password should be encrypted following <a href="https://maven.apache.org/guides/mini/guide-encryption.html">Maven Password Encryption</a></p>

Ensure that the new website content is build locally

~~~~
jekyll build
~~~

This will read the sources and generate the new content in the ``./staging`` directory.

When you are happy with the new content update the source repository

~~~~
git commit -m "..."
~~~

Upload the new content to the production site

~~~
mvn scm-publish:publish-scm
~~~

This will checkout the current content into the ``./target``directory, apply the changes from ``./staging`` and publish
the changes to the PDFBox production website.

### Update the JavaDocs for PDFBOX 2.x
To publish the javadocs follow these steps:

Run

	$ mvn clean javadoc:aggregate scm-publish:publish-scm

from the `<SVN_ROOT>/../pdfbox` directory.

It uses the same `pdfbox-site` settings from above to connect to the repository.

<p class="alert alert-info">As <code>mvn clean</code> will delete the javadoc files download from the Apache CMS it's advised to configure <code>${svn.scmJavadocCheckoutDirectory}</code> to a local directory not below <code>./target</code>.</p>