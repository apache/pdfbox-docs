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
  order: 5
---

# Command-Line Tools

PDFBox comes with a series of command-line utilities. They are available as standard Java applications.

See the [Dependencies](/3.0/dependencies.html) page for instructions on how to set your classpath in order to run
PDFBox tools as Java applications.

## Decrypt ##

This application will decrypt a PDF document.

NOTE: You must have the owner password to decrypt the document!

Usage: ``java -jar pdfbox-app-3.y.z.jar decrypt [OPTIONS] -i=<infile>``

| Command-Line Parameter 	| Description |
| ------------------------- | ----------- |
| -alias=<alias> | The alias to the certificate in the keystore. |
| -h, --help | Show help message and exit. |
| -i, --input=\<infile> | The PDF file to decrypt. |
| -keyStore=\<keyStore> | Path to keystore that holds certificate to decrypt the document. This is only required if the document is encrypted with a certificate, otherwise only the password is required. |
| -o, --output=\<outfile> | The file to save the decrypted document to. If left blank then it will be the same as the input file. |
| -password=[\<password>] | Password to the PDF or certificate in keystore. |
| -V, --version | Print version information and exit. |

## Encrypt ##

This application will encrypt a PDF document.

Usage: ``java -jar pdfbox-app-3.y.z.jar encrypt [OPTIONS] -i=<infile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -canAssemble | true | Set the assemble permission. |
| -canExtractContent | true | Set the extraction permission. |
| -canExtractForAccessibility | true | Set the extraction permission. |
| -canFillInForm | true | Set the fill in form permission. |
| -canModify | true | Set the modify permission. |
| -canModifyAnnotations | true | Set the modify annots permission. |
| -canPrint | true | Set the print permission. |
| -canPrintFaithful | true | Set the print faithful permission. |
| -certFile=\<certFile> | | Path to X.509 cert file. |
| -h, --help | | Show help message and exit. |
| -i, --input=\<infile> | | The PDF file to encrypt. |
| -keyLength | 256 | Key length in bits (valid values: 40, 128 or 256)|
| -o, --output=\<outfile> | | the encrypted PDF file. If omitted the original file is overwritten. |
| -O=[\<ownerPassword>] | | set the owner password (ignored if certFile is set) |
| -U=[\<userPassword>] | | set the user password (ignored if certFile is set) |
| -V, --version | | Print version information and exit. |

## ExtractImages

This application will extract all images from the given PDF document.

Usage: ``java -jar pdfbox-app-3.y.z.jar export:images [OPTIONS] -i=<infile>``

| Command-Line Parameter | Description |
| --- | --- |
| -h, --help | Show help message and exit. |
| -i, --input=\<infile> | The PDF file to decrypt. |
| -noColorConvert | Images are extracted with their original colorspace if possible. |
| -password=[\<password>] | Password for the PDF or certificate in keystore. |
| -prefix=\<prefix> | the image prefix (default to pdf name). |
| -useDirectJPEG | Forces the direct extraction of JPEG/JPX images regardless of colorspace or masking. |
| -V, --version | Print version information and exit. |

## ExtractText ##

This application will extract all text from the given PDF document.

Usage: ``java -jar pdfbox-app-3.y.z.jar export:text [OPTIONS] -i=<infile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -alwaysNext | false | Process next page (if applicable) despite IOException (ignored when -html) |
| -console | false | Send text to console instead of file. |
| -debug | false | Enables debug output about the time consumption of every stage. |
| -encoding=\<encoding> | UTF-8 | The encoding type of the text file, e.g. UTF-8 or ISO-8859-1, UTF-16BE, UTF-16LE, etc. |
| -endPage=\<endPage> | Integer.MAX_INT | The last page to extract (1 based, inclusive) |
| -h, --help | | Show help message and exit. |
| -html | false | Output in HTML format instead of raw text. |
| -md   | false | Output in Markdown format instead of raw text. (since 3.0.4) |
| -i, --input=\<infile> | | The PDF file to encrypt. |
| -ignoreBeads | false | Disables the separation by beads. |
| -o, --output=\<outfile> | | the exported text file. |
| -password=[\<password>] | | Password for the PDF or certificate in keystore. |
| -rotationMagic | false | Analyze each page for rotated/skewed text, rotate to 0° and extract separately (slower, and ignored when -html) |
| -sort | false | Sort the text before writing. |
| -startPage=\<startPage> | 1 | The first page to start extraction (1 based, inclusive) |
| -V, --version | | Print version information and exit. |

## OverlayPDF ##

This application will overlay one document with the content of another document

Usage: ``java -jar pdfbox-app-3.y.z.jar overlay [OPTIONS] -i=<infile> -o=<outfile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -default=\<defaultOverlay> | | the default overlay file. |
| -even=\<evenPageOverlay>| | overlay file used for even pages. |
| -first=\<firstPageOverlay| | overlay file used for the first page. |
| -h, --help | | Show help message and exit. |
| -i, --input=\<infile> | | the PDF file to be overlayed. |
| -last=\<lastPageOverlay> | | Overlay file used for the last pages. |
| -o, --output=\<outfile> | | the resulting PDF file. |
| -odd=\<oddPageOverlay> | | overlay file used for odd pages. |
| -page=\<Integer=specificPageOverlay> | | overlay file used for the given page number, may occur more than once. |
| -position=\<position> | BACKGROUND | Where to put the overlay, FOREGROUND or BACKGROUND. |
| -useAllPages=\<useAllPagesOverlay| | overlay file used for overlay, all pages are used by simply repeating them |
| -V, --version | | Print version information and exit. |

Examples:

- overlayPDF -i=input.pdf -default=overlay.pdf -o=output.pdf
- overlayPDF -i=input.pdf -default=defaultOverlay.pdf -page="10=overlayForPage10.pdf" -position=FOREGROUND -o=output.pdf
- overlayPDF -i=input.pdf -odd=oddOverlay.pdf -even=evenOverlay.pdf -o=output.pdf

## PDFDebugger ##

This application will take an existing PDF document and allows to analyze and inspect the internal structure.
It is used as replacement for the PDFReader which was removed in 2.0.0.

Usage: ``java -jar pdfbox-app-3.y.z.jar debug [inputfile]``

| Command-Line Parameter | Description |
| --- | --- |
| inputfile | the name of an optional PDF file to open. |
| -h, --help | Show help message and exit. |
| -password=[\<password>] | password to derypt the PDF. |
| -viewstructure | Activates the "view structure" view on startup. |

## PDFMerger ##

This application will take a list of pdf documents and merge them, saving the result in a new document.

Usage: ``java -jar pdfbox-app-3.y.z.jar merge [-hV] -o=outfile -i=<infile> [-i=<infile>]``

| Command-Line Parameter | Description |
| --- | --- |
| -h, --help | Show help message and exit. |
| -i, --input=\<infile> | the PDF files to merge |
| -o, --output=\<outfile> | the merged PDF file. |
| -V, --version | Print version information and exit. |


## PDFSplit ##

This application will take an existing PDF document and split it into a number of new documents.

Per default the resulting files will be named after the original filenmame with `-<nr>` appended before the suffix.
To override the filename use the `outputPrefix` option.

Usage: ``java -jar pdfbox-app-3.y.z.jar split [OPTIONS] -i=<infile>``

| Command-Line Parameter | Description |
| --- | --- |
| -endPage=\<endPage> | end page. |
| -h, --help | Show help message and exit. |
| -i, --input=\<infile> | the PDF file to split |
| --outputPrefix=\<outputPrefix> | the filename prefix for split files. |
| -password=[\<password>] | Password to the PDF. |
| -split=\<split> | split after this many pages (default 1, if startPage and endPage are unset). |
| -startPage=\<startPage> | start page. |
| -endPage | The page to stop at. |
| -V, --version | Print version information and exit. |

Examples:

 - PDFSplit -split=2 -i=sample_with_13_pages.pdf will split the pdf in pieces of 2 pages each except the last which will contain 1 page only.
 - PDFSplit -startPage=5 -i=sample_with_13_pages.pdf will provide a pdf containing all pages of the source pdf starting at page 5
 - PDFSplit -startPage=5 -endPage=10 -i=sample_with_13_pages.pdf will provide a pdf containing all pages from 5 to 10 of the source pdf
 - PDFSplit -split=2 -startPage=5 -endPage=10 -isample_with_13_pages.pdf will provide 3 pdfs containing all pages from 5 to 10 of the source pdf 2 pages each

## PDFToImage ##

This application will create an image for every page in the PDF document.

Usage: ``java -jar pdfbox-app-3.y.z.jar render [OPTIONS] -i=<infile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -color=\<imageType> | rgb | The color depth (valid: BINARY, GRAY, RGB, ARGB, BGR) |
| -cropbox=\<int\> \<int\> \<int\> \<int\> | | The page area to export. |
| -dpi, -resolution=\<dpi> | detected from screen (or 96 if headless) | the DPI of the output image |
| -endPage=\<endPage> | Integer.MAX_INT | The last page to convert, (one based, inclusive). |
| -format=\<imageFormat> | jpg | The image file format. |
| -h, --help | | Show help message and exit. |
| -i, --input=\<infile> | | the PDF file to convert. |
| -page=\<page> | | The only page to extract (1-based). |
| -password=[\<password>] | | Password for the PDF.
| -prefix, -outputPrefix=\<outputPrefix> | Name of PDF document | the filename prefix for image files |
| -quality=\<quality> | 0 for PNG and 1 for other formats | the quality to be used when compressing the image (0 \<= quality \<= 1). |
| -startPage=\<startPage> | 1 | the first page to start extraction (one based) |
| -subSampling | | activate subsampling (for PDFs with huge images) |
| -time | | print timing information to stdout. |
| -V, --version | | print version information and exit. |

## PrintPDF ##

This application will send a pdf document to the printer.

<p class="alert alert-info">You must have the correct permissions to print the document!</p>

Usage: ``java -jar pdfbox-app-3.y.z.jar print [OPTIONS] -i=<infile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -border | | Print with border. |
| -dpi=\<dpi> | | render into intermediate image with specific dpi and then print.  Use -1 for automatic detection of printer resolution. |
| -duplex=\<duplex> | DOCUMENT | print using duplex (SIMPLEX, DUPLEX, TUMBLE, DOCUMENT). |
| -h, --help | | Show help message and exit. |
| -i, --input=\<infile> | | the PDF file to print. |
| -listPrinters | | list all printers with available settings |
| -mediaSize=\<mediaSize> | | print using media size name. |
| -noColorOpt | | disable color optimizations (useful when printing barcodes). |
| -orientation | AUTO | print using orientation (AUTO, LANDSCAPE, PORTRAIT). |
| -password=[\<password>] | | Password for the PDF.
| -printerName=\<printerName> | | print to specified printer. |
| -silentPrint | | print without printer dialog box. |
| -tray=\<tray> | | print using tray. |
| -V, --version | | print version information and exit. |

mediaSize and tray can only be combined when running on jdk 1.8.

## TextToPDF ##

This application will create a PDF document from a text file.

Usage: ``java -jar pdfbox-app-3.y.z.jar fromText [OPTIONS] -i=<infile> -o=<outfile>``

| Command-Line Parameter | Default | Description |
| --- | --- | --- |
| -charset=\<charset> | UTF-8 | The charset to use. |
| -fontSize=\<fontSize> | 10.0 | The size of the font to use. |
| -lineSpacing=\<factor> | 1.05 | The factor of the font size for the line height. |
| -margins \<left> \<right> \<top> \<bottom> | 40.0 40.0 40.0 40.0 | The page margins. |
| -h, --help | | Show help message and exit. |
| -i, --input=\<infile> | | The text file to convert. |
| -landscape | | Set orientation to landscape. |
| -o, --output=\<outfile> | | The generated PDF file. |
| -pageSize=\<pageSize> | LETTER | The page size to use (LETTER, LEGAL, A0, A1, A2, A3, A4, A5, A6). |
| -standardFont=\<standardFont> | Helvetica | The font to use for the text. Either this or -ttf should be specified but not both. |
| -ttf=\<ttfFile> | | The TrueType font to use for the text. Either this or -standardFont should be specified but not both. |
| -V, --version | | Print version information and exit. |

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

Usage: ``java -jar pdfbox-app-3.y.z.jar decode [OPTIONS] <input-file> <output-file>``

| Command-Line Parameter | Description |
| --- | --- |
| input-file | the PDF document to decompress |
| output-file | the PDF file top save to |
| -h, --help | Show help message and exit. |
| -password=[\<password>] | Password for the PDF.
| -skipImages | don't uncompress images |
| -V, --version | print version information and exit. |
