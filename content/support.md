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
title:   Support
---

# Support

## Questions About How to Use PDFBox

If you have questions about how to use PDFBox do ask on the [Users Mailing List](/mailinglists.html "Subscribe to Mailing List"). This will get you help from the entire community.

The PDFBox examples and the test code in the sources will also provide additional information.

And there are additonal resources available on sites such as [Stack Overflow](http://stackoverflow.com/search?q=pdfbox "Stack Overflow").


## Filing a Bug Report or Enhancement Request

<p class="alert alert-info">Please refrain from immediately opening a ticket in the JIRA issue tracker unless
you are really certain it's a problem in the PDFBox software. Try using the Mailing Lists first.</p>

If you are sure you have found a bug then please report the problem in our
[JIRA Issue Tracker](https://issues.apache.org/jira/browse/PDFBOX).

**Before you submit a bug there are several things you can try first**

 - For **PDFBOX 1.8.x** try using the non-sequential parser (``PDDocument.loadNonSeq`` instead of ``PDDocument.load``, and "-nonSeq" with the command-line applications)
 - For issues with text extraction try if Adobe Reader can extract the text
 - Try the latest SNAPSHOT to see if it's fixed in the pre-release
 - Search the mailing list to see if has been discussed before
 - Check the JIRA issue tracker to see if the issue has already been reported

**To help us resolve a bug quicker**

 - Attach the PDF that makes trouble by using "More", "Attach files" in the JIRA issue tracker
 - If your file is too large, upload it to a sharehoster, or use the PDFSplit application to isolate the troublesome page
 - Mention the PDFBox version you are using.
 - Attach the shortest possible code that reproduces the problem. Insert java code between {code}...{code}. Or try to reproduce the problem with the command-line applications.
 - Mention what you were doing, what was the expected behaviour, and what happened instead
 - Provide a stack trace of an exception if there is one
 - Be patient: all the people here are unpaid volunteers who work for you in their free time

**And please DON'T**

 - Upload files to a host that requires registration to read the file.
 - Create an issue in the JIRA issue tracker and then go on vacation so you won't repond to our questions / suggestions.
 - Ask "how to" questions in the JIRA issue tracker. Ask such questions on the mailing lists, on stackoverflow.com, and look at the sample and the test code in the sources.
 - Attach PDF files with confidential and/or personal data (name, DoB, bank data, health data, SSN) without getting permission from the client and/or the people mentioned on the PDF
 - Create issues about obsolete PDFBox versions

<p class="alert alert-info">We can sometimes solve problems without having the PDF, but it is difficult.</p>
