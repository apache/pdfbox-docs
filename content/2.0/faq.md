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
title:   Frequently Asked Questions (FAQ)
eleventyNavigation:
  order: 6
  key: FAQ
---

# Frequently Asked Questions

## General Questions

<a name="log4j"></a>

### I am getting the below Log4J warning message, how do I remove it? ###

```
log4j:WARN No appenders could be found for logger (org.apache.pdfbox.util.ResourceLoader).
log4j:WARN Please initialize the log4j system properly.
```

This message means that you need to configure the log4j logging system.
See the [log4j documentation](http://logging.apache.org/log4j/1.2/manual.html) for more information.

PDFBox comes with a sample log4j configuration file.  To use it you set a system property like this

```
java -Dlog4j.configuration=log4j.xml org.apache.pdfbox.ExtractText <PDF-file> <output-text-file>
```

If this is not working for you then you may have to specify the log4j config file using a URL path, like this:

```
log4j.configuration=file:///<path to config file>
```

<a name="threadsafe"></a>

### Is PDFBox thread safe? ###

No! Only one thread may access a single document at a time. You can have multiple threads each accessing their own
PDDocument object.

<a name="notclosed"></a>

### Why do I get a "Warning: You did not close the PDF Document"? ###

You need to call close() on the PDDocument inside the finally block, if you
don't then the document will not be closed properly.  Also, you must close all
PDDocument objects that get created.  The following code creates **two**
PDDocument objects; one from the "new PDDocument()" and the second by the load method.

```java
PDDocument doc = new PDDocument();
try
{
   doc = PDDocument.load( "my.pdf" );
}
finally
{
   if( doc != null )
   {
      doc.close();
   }
}
```

## Font Handling

<a name="fontencoding"></a>

### I'm getting java.lang.IllegalArgumentException: ... is not available in this font's encoding: WinAnsiEncoding

Check whether the character is available in WinAnsiEncoding by looking at the [PDF Specification](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf) Appendix D.
If not, but if it is available in this font (in windows, have a look with charmap.exe), then load the font with
PDType0Font.load(), see also in the EmbeddedFonts.java example in the source code download.

## PDF Creation

<a name="layout"></a>

### Can I use PDFBox to create complex layouts?
I'd like to use PDFBox to create a complex layout containing several paragraphs, tables, images etc. Is PDFBox fit for that purpose?

PDFBox being a low level PDF library provides the APIs to create page content such as text, images etc. But at this point in time it doesn't provide a higher level API to do page layout, paragraph handling, automatic line wrapping or create tables and such.

But PDFBox is the foundation of some projects which might help in that case. This includes projects such as
- [Boxable](http://dhorions.github.io/boxable/)
- [BoxTable](https://github.com/errt/BoxTable)
- [easytable](https://github.com/vandeseer/easytable)
- [pdfbox-layout](https://github.com/ralfstuckert/pdfbox-layout)
- [PdfLayoutManager](https://github.com/GlenKPeterson/PdfLayoutManager)
- [ph-pdf-layout](https://github.com/phax/ph-pdf-layout)

You may also want to consider using [Apache FOP](https://xmlgraphics.apache.org/fop/) which allows to create complex documents from XML data and templates-

<a name="emptypage"></a>

### I'm creating a PDF but my page is empty. Why?

Make sure that you closed your content stream before saving.

## Text Extraction

<a name="textorder"></a>


### Why does the extracted text appear in the wrong sequence?

By default, text extraction is done in the same sequence as the text in the PDF page content stream.
PDF is a graphic format, not a text format, and unlike HTML, it has no requirements that text one on page
be rendered in a certain order. The order is the one that was determined by the software that created the PDF.
To get text sorted from left to right and top to botton, use `setSortByPosition(true)`.

<a name="notext"></a>

### How come I am not getting any text from the PDF document? ###

Text extraction from a pdf document is a complicated task and there are many factors
involved that effect the possibility and accuracy of text extraction.  It would be helpful
to the PDFBox team if you could try a couple things.

 - Open the PDF in Acrobat and try to extract text from there.  If Acrobat can extract text then PDFBox
should be able to as well and it is a bug if it cannot.  If Acrobat cannot extract text then PDFBox 'probably' cannot either.
 - It might really be an image instead of text.  Some PDF documents are just images that have been scanned in.
You can tell by using the selection tool in Acrobat, if you can't select any text then it is probably an image.

<a name="gibberish"></a>

### How come I am getting gibberish(G38G43G36G51G5) when extracting text? ###

This is because the characters in a PDF document can use a custom encoding
instead of unicode or ASCII.  When you see gibberish text then it
probably means that a meaningless internal encoding is being used.  The
only way to access the text is to use OCR.  This may be a future
enhancement.

<a name="fontwidth"></a>

### What does "java.io.IOException: Can't handle font width" mean? ###

This probably means that the "Resources" directory is not in your classpath. The
Resources directory is included in the PDFBox jar so this is only a problem if you
are building PDFBox yourself and not using the binary.

<a name="permission"></a>

### Why do I get "You do not have permission to extract text" on some documents? ###

PDF documents have certain security permissions that can be applied to them and two
passwords associated with them, an user password and an owner password. If the "cannot extract text"
permission bit is set then you need to decrypt the document with the owner password in order
to extract the text.

<a name="partially"></a>

### Can't we just extract the text without parsing the whole document or extract text as it is parsed? ###

Not really, for a couple reasons.

 - If the document is encrypted then you need to parse at least until the encryption dictionary before
you can decrypt.
 - Sometimes the PDFont contains vital information needed for text extraction.
 - Text on a page does not have to be drawn in reading order. For example: if the page said "Hello World",
the pdf could have been written such that "World" gets drawn and then the cursor moves to the left and
the word "Hello" is drawn.

## PDF rendering

<a name="outofmemoryerror"></a>

### I'm getting an OutOfMemoryError. What can I do?

The memory footprint depends on the PDF itself and on the resolution you use for rendering. Some possible options:

- increase the `-Xmx` value when starting java
- use a scratch file by loading files with this code `PDDocument.load(file, MemoryUsageSetting.setupTempFileOnly())`
- be careful not to hold your images after rendering them, e.g. avoid putting all images of a PDF into a `List`
- don't forgot to close your `PDDocument` objects
- decrease the scale when calling `PDFRenderer.renderImage()`, or the dpi value when calling `PDFRenderer.renderImageWithDPI()`
- disable the cache for `PDImageXObject` objects by calling `PDDocument.setResourceCache()` with a cache object that is derived from `DefaultResourceCache` and whose call `public void put(COSObject indirect, PDXObject xobject)` does nothing. Be aware that this will slow down rendering for PDF files that have an identical image in several pages (e.g. a company logo or a background). More about this can be read in [PDFBOX-3700](https://issues.apache.org/jira/browse/PDFBOX-3700).

<a name="dropshadow"></a>

### A drop shadow is missing or at the wrong position when rendering a page

Please attach your file in the [PDFBOX-3000](https://issues.apache.org/jira/browse/PDFBOX-3000) issue.

<a name="textantialias"></a>

### Why are some texts in poor quality and not antialiased?

This is because in some PDFs (e.g. the one in PDFBOX-2814 <https://issues.apache.org/jira/browse/PDFBOX-2814>), text is not
rendered directly, but as a shaped clipping from a background. Java graphics does not support "soft clipping"
<https://bugs.openjdk.java.net/browse/JDK-4212743>, and because of that, the edges are not looking smooth.
Soft clipping could be achieved with some extra steps <https://community.oracle.com/blogs/campbell/2006/07/19/java-2d-trickery-soft-clipping>,
but these would cost additional time and memory space. You can have a higher quality by rendering at a higher dpi and then downscale the image.
