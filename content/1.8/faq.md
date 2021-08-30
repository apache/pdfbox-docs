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
  order: 4
  key: FAQ
---

# Frequently Asked Questions

## General Questions

### I am getting the below Log4J warning message, how do I remove it

``` shell
log4j:WARN No appenders could be found for logger (org.apache.pdfbox.util.ResourceLoader).
log4j:WARN Please initialize the log4j system properly.
```

This message means that you need to configure the log4j logging system.
See the [log4j documentation](http://logging.apache.org/log4j/1.2/manual.html) for more information.

PDFBox comes with a sample log4j configuration file.  To use it you set a system property like this

``` shell
java -Dlog4j.configuration=log4j.xml org.apache.pdfbox.ExtractText <PDF-file> <output-text-file>
```

If this is not working for you then you may have to specify the log4j config file using a URL path, like this:

``` shell
log4j.configuration=file:///<path to config file>
```

### Is PDFBox thread safe

No! Only one thread may access a single document at a time. You can have multiple threads
each accessing their own PDDocument object.

### Why do I get a "Warning: You did not close the PDF Document"

You need to call close() on the PDDocument inside the finally block, if you
don't then the document will not be closed properly.  Also, you must close all
PDDocument objects that get created.  The following code creates **two**
PDDocument objects; one from the "new PDDocument()" and the second by the load method.

``` java
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

## Text Extraction

### How come I am not getting any text from the PDF document

Text extraction from a pdf document is a complicated task and there are many factors
involved that effect the possibility and accuracy of text extraction.  It would be helpful
to the PDFBox team if you could try a couple things.

- Open the PDF in Acrobat and try to extract text from there.  If Acrobat can extract text then PDFBox
should be able to as well and it is a bug if it cannot.  If Acrobat cannot extract text then PDFBox 'probably' cannot either.
- It might really be an image instead of text.  Some PDF documents are just images that have been scanned in.
You can tell by using the selection tool in Acrobat, if you can't select any text then it is probably an image.

### How come I am getting gibberish(G38G43G36G51G5) when extracting text

This is because the characters in a PDF document can use a custom encoding
instead of unicode or ASCII.  When you see gibberish text then it
probably means that a meaningless internal encoding is being used.  The
only way to access the text is to use OCR.  This may be a future
enhancement.

### What does "java.io.IOException: Can't handle font width" mean

This probably means that the "Resources" directory is not in your classpath. The
Resources directory is included in the PDFBox jar so this is only a problem if you
are building PDFBox yourself and not using the binary.

### Why do I get "You do not have permission to extract text" on some documents

PDF documents have certain security permissions that can be applied to them and two
passwords associated with them, an user password and an owner password. If the "cannot extract text"
permission bit is set then you need to decrypt the document with the owner password in order
to extract the text.

### Can't we just extract the text without parsing the whole document or extract text as it is parsed

Not really, for a couple reasons.

- If the document is encrypted then you need to parse at least until the encryption dictionary before
you can decrypt.
- Sometimes the PDFont contains vital information needed for text extraction.
- Text on a page does not have to be drawn in reading order. For example: if the page said "Hello World",
the pdf could have been written such that "World" gets drawn and then the cursor moves to the left and
the word "Hello" is drawn.
