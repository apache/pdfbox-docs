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

<p class="alert alert-warning">Work in progress!  This is guide will be improved over time. If you believe there is
a missing topic, open an issue or help us with a contribution to improve the guide.
</p>

This guide describes the updates in Apache PDFBox 3.0 release. Use the information provided to upgrade your PDFBox 2.x applications
to PDFBox 3.0. It provides information about the new, deprecated and unsupported features in this release.

## Java Versions
PDFBox 3.0 requires at least Java 8. Testing has been done up to Java 11.

## Dependency Updates
All libraries on which PDFBox depends are updated to their latest stable versions:

- Bouncy Castle 1.69
- Apache Commons Logging 1.2
- picocli 4.6.1

For test support the libraries are updated to

- JUnit 5.8
- JAI Image Core 1.4.0
- JAI JPEG2000 1.4.0
- JBIG ImageIO Plugin 3.0.3
- Apache Commons IO 2.11

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
consume a PDF if only certain parts of the PDF are accessed. Note that, due to the nature of PDF, uses such as iterating over all pages,
accessing annotations, signing a PDF etc. might still load all parts of the PDF overtime leading to a similar memory consumption as with PDFBox 2.0.

The input file must not be used as output for saving operations. It will corrupt the file and throw an exception as parts of the file are read the first time when saving it.

### Static instances for Standard 14 fonts removed ###

The static instances of `PDType1Font` for the standard 14 fonts were removed as the underlying `COSDictionary` isn't supposed to be immutable which led to several issues.

A new constructor for `PDType1Font` was introduced to create a standard 14 font. The new Enum `Standard14Fonts.FontName` is the one and only parameter and defines the
name of the standard 14 font for which the instance of `PDType1Font` is created for. That instance isn't a singleton anymore and has to be recreated if necessary or cached
by the user if suitable.

## Changes in Common Functions 

### Interactive Forms

When accessing `AcroForms` using `PDDocumentCatalog.getAcroForm()` a number of fix ups are applied aligning PDFBox with most of the default behaviour
of Adobe Reader. If you'd like to bypass this use `PDDocumentCatalog.getAcroForm(null)`.

The fix ups include

- setting default font resources if they are not already part of the AcroForm
- create form fields from orphaned widget annotations under certain conditions
- create the normal appearance stream under certain conditions

You can lookup the details in the `org.apache.pdfbox.pdmodel.fixup` package of the source distribution and also create your own fix up(s).

## Changes in PDFBox App

The command line interface for the PDFBox App has been rewritten. As a result

- the individual commands have been changed 
- passing input and output files have been changed from using parameters to using options/flags to reduce the ambiguity
- all commands now return an exit code
- all commands now support passing `-h` or `--help` to display usage information
- all commands now support passing `-V` or `--version` to display the version information
