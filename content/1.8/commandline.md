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
title:   Command-Line Tools

eleventyNavigation:
  order: 3
---

# Command-Line Tools

PDFBox comes with a series of command-line utilities. They are available as standard Java applications.

See the [Dependencies](/1.8/dependencies.html) page for instructions on how to set your classpath in order to run
PDFBox tools as Java applications.

**Table of Contents**
 - [Decrypt](#decrypt)
 - [Encrypt](#encrypt)
 - [ExtractImages](#extractimages)
 - [ExtractText](#extracttext)
 - [OverlayPDF](#overlaypdf)
 - [PrintPDF](#printpdf)
 - [PDFDebugger](#pdfdebugger)
 - [PDFReader](#pdfreader)
 - [PDFMerger](#pdfmerger)
 - [PDFSplit](#pdfsplit)
 - [PDFToImage](#pdftoimage)
 - [TextToPDF](#texttopdf)
 - [WriteDecodedDoc](#writedecodeddoc)

## Decrypt ##

This application will decrypt a PDF document.

NOTE: You must have the owner password to decrypt the document!

Usage: ``java -jar pdfbox-app-x.y.z.jar Decrypt [OPTIONS] <inputfile> [outputfile]``

| Command-Line Parameter 	| Description |
| ------------------------- | ----------- |
| -password | Password to the PDF or certificate in keystore. |
| -keyStore | Path to keystore that holds certificate to decrypt the document. This is only required if the document is encrypted with a certificate, otherwise only the password is required. |
| -alias | The alias to the certificate in the keystore. |
| inputfile | The PDF file to decrypt. |
| outputfile | The file to save the decrypted document to. If left blank then it will be the same as the input file. |

## Encrypt ##

This application will encrypt a PDF document.

Usage: ``java -jar pdfbox-app-x.y.z.jar Encrypt [OPTIONS] <password> <inputfile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -O | | The owner password to the PDF, ignored if -certFile is specified. |
| -U | | The user password to the PDF, ignored if -certFile is specified. |
| -certFile | | Path to X.509 cert file. |
| -canAssemble | true | Set the assemble permission. |
| -canExtractContent | true | Set the extraction permission. |
| -canExtractForAccessibility | true | Set the extraction permission. |
| -canFillInForm | true | Set the fill in form permission. |
| -canModify | true | Set the modify permission. |
| -canModifyAnnotations | true | Set the modify annots permission. |
| -canPrint | true | Set the print permission. |
| -canPrintDegraded | true | Set the print degraded permission. |
| -keyLength | 40 or 128 | The number of bits for the encryption key. For 128 bits [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html) must be installed.|
| inputfile |  |The PDF file to encrypt. |
| outputfile |  |The file to save the encrypted document to. If left blank then it will be the same as the input file. |

## ExtractImages

This application will extract all images from the given PDF document.

Usage: ``java -jar pdfbox-app-x.y.z.jar ExtractImages [OPTIONS] <inputfile> ``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password |  | The password to the PDF document. |
| -prefix | PDF name | Image prefix to use. |
| -directJPEG | false | Forces the direct extraction of JPEG images regardless of colorspace. |

## ExtractText ##

This application will extract all text from the given PDF document.

Usage: ``java -jar pdfbox-app-x.y.z.jar ExtractText [OPTIONS] <inputfile> [Text file] ``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password |  | The password to the PDF document. |
| -encoding | default encoding | The encoding type of the text file, e.g. ISO-8859-1, UTF-8, UTF-16BE. |
| -console | false | Send text to console instead of file. |
| -html | false | Output in HTML format instead of raw text. |
| -sort | false | Sort the text before writing. |
| -ignoreBeads | false | Disables the separation by beads. |
| -force | false | Enables pdfbox to ignore corrupt objects. |
| -debug | false | Enables debug output about the time consumption of every stage. |
| -startPage | 1 | The first page to extract, one based. |
| -endPage | Integer.MAX_INT | The last page to extract, one based. |
| -nonSeq | false | Use the new non sequential parser. |

## OverlayPDF ##

This application will overlay one document with the content of another document

Usage: ``java -jar pdfbox-app-x.y.z.jar OverlayPDF <input.pdf> [OPTIONS] <output.pdf>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| inputfile | | The PDF file to be overlayed. |
| defaultOverlay.pdf  | | Default overlay file. |
| -odd oddPageOverlay.pdf| | Overlay file used for odd pages. |
| -even evenPageOverlay.pdf| | Overlay file used for even pages. |
| -first firstPageOverlay.pdf| | Overlay file used for the first page. |
| -last lastPageOverlay.pdf| | Overlay file used for the last pages. |
| -page pageNumber specificPageOverlay.pdf| | overlay file used for the given page number, may occur more than once. |
| -position | background | Where to put the overlay, foreground or background. |
| -nonSeq | false | Use the new non sequential parser. |
| outputfile | | The resulting pdf file. |

Examples:

- OverlayPDF input.pdf overlay.pdf -nonSeq output.pdf
- OverlayPDF input.pdf defaultOverlay.pdf -page 10 overlayForPage10.pdf -position foreground -nonSeq output.pdf
- OverlayPDF input.pdf -odd oddOverlay.pdf -even evenOverlay.pdf -nonSeq output.pdf

## PrintPDF ##

This application will send a pdf document to the printer.

<p class="alert alert-info">You must have the correct permissions to print the document!</p>

Usage: ``java -jar pdfbox-app-x.y.z.jar PrintPDF [OPTIONS] <inputfile>``

| Command-Line Parameter | Description |
| --- | --- |
| -password | The password to decrypt the PDF. |
| -silentPrint | Print the PDF without prompting for a printer. |
| inputfile | The PDF file to print. |

## PDFDebugger ##

This application will take an existing PDF document and allows to analyze and inspect the internal structure

Usage: ``java -jar pdfbox-app-x.y.z.jar PDFDebugger [inputfile] ``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password | | The password to the PDF document. |
| -nonSeq | false | Use the new non sequential parser.
| inputfile | | the name of an optional PDF file to open. |

## PDFReader ##

An application to read PDF documents. This will provide Acrobat Reader like functionality.

Usage: ``java -jar pdfbox-app-x.y.z.jar PDFReader [PDF file]``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password | | The password to the PDF document.|
| -nonSeq | false | Use the new non sequential parser.|
| PDF file 	| | the name of an optional PDF file to open |

## PDFMerger ##

This application will take a list of pdf documents and merge them, saving the result in a new document.

Usage: ``java -jar pdfbox-app-x.y.z.jar PDFMerger <Source PDF files (2 ..n)> <Target PDF file>``

## PDFSplit ##

This application will take an existing PDF document and split it into a number of new documents.

Per default the resulting files will be named after the original filenmame with `-<nr>` appended before the suffix.
To override the filename use the `outputPrefix` option.

Usage: ``java -jar pdfbox-app-x.y.z.jar PDFSplit [OPTIONS] <PDF file>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password | | The password to the PDF document. |
| -split | | Number of pages of every splitted part of the pdf.|
| -startPage | | The page to start at. |
| -endPage | | The page to stop at. |
| -outputPrefix | | The prefix for the generated file name. The resulting name will be in the format `<prefix>-<nr>.pdf` |
| -nonSeq | false | Use the new non sequential parser.|


Examples:

 - PDFSplit -split 2 sample_with_13_pages.pdf will split the pdf in pieces of 2 pages each except the last which will contain 1 page only.
 - PDFSplit -startPage 5 sample_with_13_pages.pdf will provide a pdf containing all pages of the source pdf starting at page 5
 - PDFSplit -startPage 5 -endPage 10 sample_with_13_pages.pdf will provide a pdf containing all pages from 5 to 10 of the source pdf
 - PDFSplit -split 2 -startPage 5 -endPage 10 sample_with_13_pages.pdf will provide 3 pdfs containing all pages from 5 to 10 of the source pdf 2 pages each

## PDFToImage ##

This application will create an image for every page in the PDF document.

Usage: ``java -jar pdfbox-app-x.y.z.jar PDFToImage [OPTIONS] <PDF file>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password | | The password to the PDF document.|
| -imageType | jpg | The image type to write to. Currently only jpg or png. |
| -outputPrefix | Name of PDF document | The prefix to the image file. |
| -startPage | 1 | The first page to convert, one based. |
| -endPage | Integer.MAX_INT | The last page to convert, one based. |
| -nonSeq | false | Use the new non sequential parser. |

## TextToPDF ##

This application will create a PDF document from a text file.

Usage: ``java -jar pdfbox-app-x.y.z.jar TextToPDF [OPTIONS] <outputfile> <textfile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -standardFont | Helvetica | The font to use for the text. Either this or -ttf should be specified but not both. |
| -ttf | | The TTF font to use for the text. Either this or -standardFont should be specified but not both. |
| -fontSize | 10 | The size of the font to use. |

The following font names can be used for the parameter ``standardFont``:

 - Courier
 - Courier-Bold
 - Courier-Oblique
 - Courier-BoldOblique
 - Helvetica
 - Helvetica-Bold
 - Helvetica-Oblique
 - Helvetica-BoldOblique
 - Symbol
 - Times-Bold
 - Times-Roman
 - Times-Italic
 - Times-BoldItalic
 - ZapfDingbats

## WriteDecodedDoc ##

An application to decompress PDF documents.

Usage: ``java -jar pdfbox-app-x.y.z.jar WriteDecodedDoc <input-file> <output-file>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -password |  | The password to the PDF document. |
| -nonSeq 	| false | Use the new non sequential parser. |
| input-file |  | The PDF file to decompress |
| output-file |  | The destination PDF file |
