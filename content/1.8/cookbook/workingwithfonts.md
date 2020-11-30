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
title:   Working with Fonts
---

# Working with Fonts

## Standard 14 Fonts

The PDF specification states that a standard set of 14 fonts will always be available when consuming PDF documents. In PDFBox these are defined as constants in the PDType1Font class.

| Standard Font | Description |
| ------------- | ----------- |
| PDType1Font.TIMES_ROMAN | Times regular |
| PDType1Font.TIMES_BOLD | Times bold |
| PDType1Font.TIMES_ITALIC | Times italic |
| PDType1Font.TIMES_BOLD_ITALIC | Times bold italic |
| PDType1Font.HELVETICA | Helvetica regular |
| PDType1Font.HELVETICA_BOLD | Helvetica bold |
| PDType1Font.HELVETICA_OBLIQUE | Helvetica italic |
| PDType1Font.HELVETICA_BOLD_OBLIQUE | Helvetica bold italic | 
| PDType1Font.COURIER | Courier |
| PDType1Font.COURIER_BOLD | Courier bold |
| PDType1Font.COURIER_OBLIQUE | Courier italic |
| PDType1Font.COURIER_BOLD_OBLIQUE | Courier bold italic |
| PDType1Font.SYMBOL | Symbol Set |
| PDType1Font.ZAPF_DINGBATS | Dingbat Typeface |

## Hello World Using a PDF Base Font

This small sample shows how to create a new document and print the text "Hello World" using one of the PDF base fonts.

~~~java
// Create a document and add a page to it
PDDocument document = new PDDocument();
PDPage page = new PDPage();
document.addPage( page );

// Create a new font object selecting one of the PDF base fonts
PDFont font = PDType1Font.HELVETICA_BOLD;

// Start a new content stream which will "hold" the to be created content
PDPageContentStream contentStream = new PDPageContentStream(document, page);

// Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
contentStream.beginText();
contentStream.setFont( font, 12 );
contentStream.moveTextPositionByAmount( 100, 700 );
contentStream.drawString( "Hello World" );
contentStream.endText();

// Make sure that the content stream is closed:
contentStream.close();

// Save the results and ensure that the document is properly closed:
document.save( "Hello World.pdf");
document.close();
~~~

## Hello World Using a TrueType Font

This small sample shows how to create a new document and print the text "Hello World" using a TrueType font.

~~~java
// Create a document and add a page to it
PDDocument document = new PDDocument();
PDPage page = new PDPage();
document.addPage( page );

// Create a new font object by loading a TrueType font into the document
PDFont font = PDTrueTypeFont.loadTTF(document, "Arial.ttf");

// Start a new content stream which will "hold" the to be created content
PDPageContentStream contentStream = new PDPageContentStream(document, page);

// Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
contentStream.beginText();
contentStream.setFont( font, 12 );
contentStream.moveTextPositionByAmount( 100, 700 );
contentStream.drawString( "Hello World" );
contentStream.endText();

// Make sure that the content stream is closed:
contentStream.close();

// Save the results and ensure that the document is properly closed:
document.save( "Hello World.pdf");
document.close();
~~~

While it is recommended to embed all fonts for greatest portability not all PDF producer 
applications will do this. When displaying a PDF it is necessary to find an external font to use. 
PDFBox will look for a mapping file to use when substituting fonts.

PDFBox will load Resources/PDFBox_External_Fonts.properties off of the classpath to map font
names to TTF font files. The UNKNOWN_FONT property in that file will tell PDFBox which font to 
use when no mapping exists. 


## Hello World Using a PostScript Type1 Font

This small sample shows how to create a new document and print the text "Hello World" using a PostScript Type1 font.

~~~java
// Create a document and add a page to it
PDDocument document = new PDDocument();
PDPage page = new PDPage();
document.addPage( page );

// Create a new font object by loading a PostScript Type 1 font into the document
PDFont font = new PDType1AfmPfbFont(doc,"cfm.afm");

// Start a new content stream which will "hold" the to be created content
PDPageContentStream contentStream = new PDPageContentStream(document, page);

// Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
contentStream.beginText();
contentStream.setFont( font, 12 );
contentStream.moveTextPositionByAmount( 100, 700 );
contentStream.drawString( "Hello World" );
contentStream.endText();

// Make sure that the content stream is closed:
contentStream.close();

// Save the results and ensure that the document is properly closed:
document.save( "Hello World.pdf");
document.close();
~~~