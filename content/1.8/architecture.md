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
title:   Architecture

eleventyNavigation:
  order: 0

---

# Architecture

In order to get the most out of PDFBox it is neccessary to understand how a PDF document
is organized as PDFBox was architected around the concepts layed out in the 
ISO-32000 (PDF) Specification

- [ISO Site](http://www.iso.org/iso/catalogue_detail.htm?csnumber=51502)
- [Adobe Version](https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf)

## Quick Introduction to the PDF format

A PDF file is made up of a sequence of bytes. These bytes, grouped into tokens, 
make up the basic objects upon which higher level objects and structures are built [see ISO-32000 7.3].

<p class="alert alert-info">PDFBox makes these basic objects available in the 
*org.apache.pdfbox.cos* package (The COS Model).
</p>

The organization of these objects, how to they are read and how to write them is defined in the file structure of the 
PDF [see ISO-32000 7.5]. In addition a file can be encrpyted to protect the document's content [see ISO-32000 7.5].

<p class="alert alert-info">PDFBox handles the reading in the *org.apache.pdfbox.pdfparser* package. 
Writing of PDF files is handled in the *org.apache.pdfbox.pdfwriter* package.
</p>

Within the file structure basic objects are used to create a document structure building higher level objects such 
as pages, bookmarks, annotations [see ISO-32000 7.7].

<p class="alert alert-info">PDFBox makes these higher level objects available through the 
*org.apache.pdfbox.pdfmodel* package (The PD Model).
</p> 

In addition there is a COS representation available for the PD model if there is a need to 
inspect the underlying structure or to handle special cases where the higher level PD model
doesn't provide the functionality needed.

<p class="alert alert-info">It's always the COS model which is represented in the PDF file.</p>

## The COS Model

As outlined above the basic PDF objects are represented in PDFBox in the org.apache.pdfbox.cos package.

| PDF Type | Description | Example | PDFBox class | ISO 32000 |
| --- | --- | --- | --- | --- |
| Boolean | Standard True/False values | true | org.apache.pdfbox.cos.COSBoolean | 7.3.2 |
| Number | Integer and floating point numbers | 1 2.3 | org.apache.pdfbox.cos.COSInteger<br>org.apache.pdfbox.cos.COSFloat | 7.3.3 |
| String | A sequence of characters | (This is a string) | org.apache.pdfbox.cos.COSString | 7.3.4 |
| Name | A predefined value in a PDF document, typically used as a key in a dictionary | /Type | org.apache.pdfbox.cos.COSName | 7.3.5 |
| Array | Arrays are one-dimensional lists of objects accessed by a numeric index. Within an array each basic object is permitted as an entry. | [549 3.14 false (Ralph) /SomeName] | org.apache.pdfbox.cos.COSArray | 7.3.6 |
| Dictionary | A map of name value pairs | <<<br>/Type /XObject<br>/Name (Name)<br>/Size 1<br>>> | org.apache.pdfbox.cos.COSDictionary | 7.3.7 |
| Stream | A stream of data, typically compressed. This is used for page contents, images and embedded font streams. | 12 0 obj << /Type /XObject >> stream 030004040404040404 endstream | org.apache.pdfbox.cos.COSStream | 7.3.8 |
| Object | A wrapper to any of the other objects, this can be used to reference an object multiple times. An object is referenced by using two numbers, an object number and a generation number. Initially the generation number will be zero unless the object got replaced later in the stream. | 12 0 obj << /Type /XObject >> endobj | org.apache.pdfbox.cos.COSObject | |

A page in a PDF document is represented with a COSDictionary. The entries that are available for a page can be seen in the PDF Reference and an example of a page looks like this:

```text
<<
    /Type /Page
    /MediaBox [0 0 612 915]
    /Contents 56 0 R
>>
```

The information within the dictionary can be accessed using the COS model

```java
COSDictionary page = ...;
COSArray mediaBox = (COSArray)page.getDictionaryObject( "MediaBox" );
System.out.println( "Width:" + mediaBox.get( 3 ) );
```

As can be seen from that little example the COS model provides a low level API to access 
information within the PDF. In order to use the COS model successfully a good knowledge of
the PDF specification is needed.

## The PD Model

The COS Model allows access to all aspects of a PDF document. This type of programming is
tedious and error prone though because the user must know all of the names of the
parameters and no helper methods are available. The PD Model was created to help
alleviate this problem. Each type of object(page, font, image) has a set of defined
attributes that can be available in the dictionary. 
A PD Model class is available for each of these so that strongly typed methods are
available to access the attributes. 

The same code from above to get the page width can be rewritten to use PD Model classes.

```java
PDPage page = ...;
PDRectangle mediaBox = page.getMediaBox();
System.out.println( "Width:" + mediaBox.getWidth() );
```

PD Model objects sit on top of COS model. Typically, the classes in the PD Model will only
store a COS object and all setter/getter methods will modify data that is stored in the
COS object. For example, when you call PDPage.getLastModified() the method will do a
lookup in the COSDictionary with the key "LastModified", if it is found the value is then
converter to a java.util.Calendar. When PDPage.setLastModified( Calendar ) is called then
the Calendar is converted to a string in the COSDictionary.
