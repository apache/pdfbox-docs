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
title:   External Links
---

# External Links

This page lists projects that utilize PDFBox and articles that have been written about PDFBox. 
Please file an [improvement issue](https://issues.apache.org/jira/browse/PDFBOX) to get new projects or articles added to this page, or to update the information on existing links.

## Projects Using PDFBox

| Project Name | License | Project Description |
| --- | --- | --- |
{% for reference in references -%}
| [{{ reference[1].name }}]({{ reference[1].url }}) | {{ reference[1].license }} | {{ reference[1].description }} |
{% endfor %}

## Articles/Books

| Article Name | Article Abstract|
| --- | --- |
| Build an eDoc Reader for your iPod <br/> [Part 1 - User Interface](http://www.oreillynet.com/pub/a/mac/2004/12/14/ipod_reader.html) <br/> [Part 2 - Document Reading Engine](http://www.oreillynet.com/pub/a/mac/2004/12/17/ipod_reader.html) <br/> [Part 3 - *Integration with PDFBox*](http://www.oreillynet.com/pub/a/mac/2005/01/07/ipod_reader.html) | A three part article that discusses the implementation of the PodReader application. PodReader is Cocoa application written in Objective-C and article discusses how to use the Cocoa-Java bridge to integrate with the Java version of PDFBox.|
| [Lucene In Action](http://www.manning.com/hatcher2/) | A book that discusses integrating with the lucene search engine. One chapter discusses how to index various file formats and highlights PDFBox for indexing PDF documents.|
| [Java Developers Journal - March 2005](http://java.sys-con.com/node/48543) | An article written by the lead developer of PDFBox discussing text extraction and AcroForm integration using PDFBox functionality.|
| [Refactoring trends across N versions of N Java open source systems: an empirical study](http://www.dcs.bbk.ac.uk/research/techreps/2005/bbkcs-05-02.pdf) | This article describes an empirical study of multiple versions of a range of open source Java systems in an attempt to understand whether refactoring occur and, if so, which types of refactoring were most (and least) common. PDFBox is used as a case study. |