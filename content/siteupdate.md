---
layout: default
title:  Updating the Website
---

# Update the JavaDocs for PDFBOX 2.x

## Contribute
If you would like to submit a javadoc patch through Jira, please open a ticket at our [Issue Tracker](https://issues.apache.org/jira/browse/PDFBOX) and use `Documentation` for the `Component`.

## Publish (for committers only)
To publish the javadocs follow these steps:

Add the following server configuration in your ~/.m2/settings.xml file

	<server>
	  <id>pdfbox-site</id>
	  <username>** USERNAME **</username>
	  <password>** PASSWORD **</password>
	</server>

`pdfbox-site` is referenced from the PDFBox pom.xml file.

<p class="alert alert-warning">The password should be encrypted following <a href="https://maven.apache.org/guides/mini/guide-encryption.html">Maven Password Encryption</a></p>

Run

	$ mvn clean javadoc:aggregate scm-publish:publish-scm

from the `<SVN_ROOT>/../pdfbox` directory.

<p class="alert alert-info">As <code>mvn clean</code> will delete the javadoc files download from the Apache CMS it's advised to configure <code>${svn.scmJavadocCheckoutDirectory}</code> to a local directory not below <code>./target</code>.</p>