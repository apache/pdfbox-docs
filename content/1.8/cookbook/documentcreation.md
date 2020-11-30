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
title:   Document Creation
---

# Document Creation

## Create a Blank PDF XX

This small sample shows how to create a new PDF document using PDFBox.

~~~java
// Create a new empty document
PDDocument document = new PDDocument();

// Create a new blank page and add it to the document
PDPage blankPage = new PDPage();
document.addPage( blankPage );

// Save the newly created document
document.save("BlankPage.pdf");

// finally make sure that the document is properly
// closed.
document.close();
~~~

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