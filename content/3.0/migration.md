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

layout:  documentation
title:   PDFBox 3.0 Migration Guide
eleventyNavigation:
  order: 0
  key: Migration
---

# PDFBox 3.0 Migration Guide

<p class="alert alert-warning">Work in progress!  This is guide is improved over time. If you believe there is
a missing topic, open an issue or help us with a contribution to improve the guide.
</p>

This guide describes the updates in Apache PDFBox 3.0 release. Use the information provided to upgrade your PDFBox 2.x applications
to PDFBox 3.0. It provides information about the new, deprecated and unsupported features in this release.

## Java Versions
PDFBox 3.0 requires at least Java 8. Testing has been done up to Java 11.

## Dependency Updates
All libraries on which PDFBox depends are updated to their latest stable versions:

- Bouncy Castle 1.68
- Apache Commons Logging 1.2

For test support the libraries are updated to

- JUnit 5.7
- JAI Image Core 1.4.0
- JAI JPEG2000 1.4.0
- JBIG ImageIO Plugin 3.0.3
- Apache Commons IO 2.8

## General Changes for PDFBox 3.0

This section explains the fundamental differences between PDFBox 3.0 and 2.x releases.

### Deprecated APIs and Components

All deprecated APIs and components from PDFBox 2.x have been removed in PDFBox 3.0. Deprecated APIs in
`PDPageContentStream` have been kept but you are encouraged to replace them with the non deprecated calls
as they are treated to be of **internal use only**.  

### Use **Loader** to get a PDF document

For loading a PDF `PDDocument.load` has been replaced with the `Loader` methods. The same is true for loading a FDF document.

When saving a PDF this will now be done in compressed mode per default. To override that use `PDDocument.save` with `CompressParameters.NO_COMPRESSION`.

PDFBox now loads a PDF Document incrementally reducing the initial memory footprint. This will also reduce the memory needed to
consume a PDF if only certain parts of the PDF are accessed. Note that, due to the nature of PDF, uses such as iterationg over all pages,
accessing annotations, signing a PDF etc. might still load all parts of the PDF overtime leading to a similar memory consumption as with PDFBox 2.0.   

## Changes in Common Functions 

### Interactive Forms

When accessing `AcroForms` using `PDDocumentCatalog.getAcroForm()` a number of fix ups are applied aligning PDFBox with most of the default behaviour
of Adobe Reader. If you'd like to bypass this use `PDDocumentCatalog.getAcroForm(null)`.