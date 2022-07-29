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

The content for the PDFBox website is kept in a [Git repository](https://gitbox.apache.org/repos/asf/pdfbox-docs) which is also mirrored to [GitHub](https://github.com/apache/pdfbox-docs). The site is split into two parts: the static content and the Javadoc for the PDFBox API. Both parts are build independently as further described below.

# Contribute
If you would like to enhance the website content you can submit a patch. To do so please open a ticket at our [Issue Tracker](https://issues.apache.org/jira/browse/PDFBOX), use `Documentation` for the `Component` and add your patch to the ticket.

## Development

Tools used to generate the website:

- [Git](https://git-scm.com/) a source code management tool used to fetch document sources from different
  github repositories.
- [Node.js](https://nodejs.org/) a JavaScript runtime used to build the website. You will need to use Node.js version 10.
  and manage required libraries.
- (installed via npm) [Eleventy](https://www.11ty.dev//) a simpler static site generator.
- (optional) [Maven](https://maven.apache.org/) a build tool used to run the complete website generating process

### Checkout from the Git Repository

Before you can edit the site, you need to check it out from the Git repository:

~~~
git clone https://gitbox.apache.org/repos/asf/pdfbox-docs
~~~

### Local Changes

To build the website go to the project root directory and run:

~~~
$ npm install # needed only once, or if dependencies change
$ npm run build   # to perform the build
~~~

### Preview Changes

While changing the content the website generation can be done in **Preview** mode. This will fire up a little webserver and update the browser window when there are changes so these are reflected immediately.
~~~
$ npm install # needed only once, or if dependencies change
$ npm run preview   # to start the preview mode
~~~

### Validate the generated files

To validate the generated website document go to the project root directory and run:

~~~
$ npm run checks
~~~

### Reuse code from examples in the documentation

In order to reuse code from the examples project in the documentation the shortcode `codesnippet` can be used.

The shortcode expects two variables 

- the **relative** path to the examples code such as `interactive/form/CreateCheckBox.java`
- the version to be used such as `trunk` or `2.0`

In addition - in order to be able to only put parts of the code into
the documentation the following comments can be added to the java code

~~~
//DOC-START
...
//DOC-END
~~~

The DOC-START/DOC-END pair can be placed multiple times into the Java
code. Everything between these special comment lines will be added the
other content will be omitted. This will allow to skip license
header, import statements etc. to concentrate on the important bits.


### Publish the Website (For Comitters Only)
After you have done the local changes follow these steps to publish the content:

Add the following server configuration in your ~/.m2/settings.xml file

~~~xml
<server>
  <id>pdfbox-site</id>
  <username>** USERNAME **</username>
  <password>** PASSWORD **</password>
</server>
~~~

`pdfbox-site` is referenced from the PDFBox pom.xml file.

<p class="alert alert-warning">The password should be encrypted following <a href="https://maven.apache.org/guides/mini/guide-encryption.html">Maven Password Encryption</a></p>

Ensure that the new website content can build locally

~~~
npm run build
~~~

This will read the sources and generate the new content in the ``./staging`` directory.

When you are happy with the new content update the source repository

~~~
git commit -m "..."
git push origin master
~~~

Upload the new content to the production site

~~~
mvn scm-publish:publish-scm
~~~

This will checkout the current content into the ``./target``directory, apply the changes from ``./staging`` and publish
the changes to the PDFBox production website.

### Update the Javadoc for PDFBox
The Javadoc for PDFBox is hosted on [javadoc.io](https://javadoc.io/) which uses the `pdfbox-<version>-javadoc.jar` built at release time as a source. javadoc.io also makes older versions of the Javadoc available.

In order to update the documentation to match a latest release of a branch

- update the `release` variable in the matching subdirectories `<version>.11tydata.js` file
- update the link(s) in the `_layouts\documentation.html` file

## Build with Maven

The project provides a simple way to build the website sources locally using the build tool [Maven](https://maven.apache.org/).

The Maven build automatically downloads the tool binaries such as `node` and `npm` for you. You do not need to install
those tools on your host then. The binaries are added to the local project sources only and generate the website content.

As the Maven build uses pinned versions of `node` and `npm` that are tested to build the website you most likely avoid
build errors due to incompatible versions of `node.js` tooling installed on your machine.

### Preparing Maven

Make sure that you have Maven installed.

    $ mvn --version

If this command fails with an error, you do not have Maven installed.

Please install Maven using your favorite package manager (like [Homebrew](https://brew.sh/)) or from
official [Maven binaries](https://maven.apache.org/install.html)

### Building from scratch

When building everything from scratch the build executes following steps:

- Download `Node.js` and `npm` binaries to the local project
- Load required libraries to the local project using `npm`
- Build the website content using Eleventy

You can do all of this with one single command:

    $ mvn package

The whole process takes up to five minutes (time to grab some coffee!)

When the build is finished you should see the generated website in the `public` directory.

### Clean build

When rebuilding the website the process uses some cached content.
If you want to start from scratch for some reason you can simply add the `clean` operation to the build which removes
all generated sources in the project first.

    $ mvn clean package
