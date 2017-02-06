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
title:   Ideas
---

# Ideas

There are several ideas to enhance PDFBox. These are outlined below together with 
comments and the releases they are planned for as soon as there is agreement to do the
implementation.

## Enhance type safety

Enhance the type safety of PDFBox and add more generic collections and code cleanup.

## Remove all deprecated methods

This is an ongoing effort and most/all deprecated methods will be removed in PDFBox 2.0.0

## Handle large PDF files

In addition to the PDF parsing pdfbox does not always handle large PDF files well as some 
of the references are implemented as int instead of long

## <span class="complete">Switch to Java 1.6</span>

<span class="complete">PDFBox 2.0.0 has Java 6 as a minimum requirement.</span>

## <span class="complete">Break PDFBox into modules</span>

<span class="complete">In order to support different use cases and provide a minimal toolset PDFBox 2.0.0 should be 
separated into different modules. This goes inline with rearranging some of the code
e.g. remove AWT from PDDocument.
</span>

## <span class="complete">Enhance the font rendering</span>

<span class="complete">PDFBox 2.0.0 will render most of the fonts without using AWT.</span>
 
## Replace/enhance PDF parsing

<span class="complete">The old "classic" PDF parser in PDFBox is not in line with the PDF specification as it parses
a PDF from top to bottom instead of respecting the XRef information.</span> The NonSequentialParser
enhanced that situation but there is a need to have a cleaner foundation broken into several levels

- I/O
- Tokenization
- Parsing according to structure
- COS level document
- PD level document
- Add some self-healing mechanism to process corrupt files

In addition, handling documents which are not conforming shouldn't be part of the core parser
but of an extensible approach, e.g. by adding hooks to allow for handling parsing exceptions.

## <span class="complete">Add the ability to create PDFs using unicode encoded text</span>

<span class="complete">The recent PDFBox version is limited to WinANSI encoded text. 2.0.0 should have unicode support as well.</span>

## Rearchitect the COS level objects

The COS level objects need to be refactored to be in line with the new parser. In addition
method signatures, constructing ... should be made similar across the COS objects

## Parsing on demand

Instead of always parsing the complete document PDFs should be parsable on demand making
objects only available as they are needed to enhance performance and minimize memory footprint.

This might be achieved by providing a layered approach where a base (non caching) parser provides
the on demand parsing and a caching parser built on top caches objects for use cases where
this is beneficial e.g. rendering, debugging ...

- the lexer would be the low level component delivering tokens to the parser.
  A sample implementation exists as part of PDFBOX-1000. The benefit would be a clean low
  level handling of tokens. The current implementation needs to be (slightly ?) revised though
- the incremental (non caching) parser would allow for page by page processing moving forward 
  only to support text extraction, merging, splitting … - the benefit would be a lower memory 
  consumption as well as a potential faster processing
- the caching parser would support applications such a PDFDebugger or PDFReader 

## Handling of PDF versions

The current implementation is a mix of PDF 1.4 and some adhoc additions without a clear 
distinction what is and is not supported. We could ad some support for explicitly handling
versions in PDFBox e.g. my marking certain methods and properties to the PDF version support
level. This could in addition be a good basis for PDF/A and other compliance checks. 
