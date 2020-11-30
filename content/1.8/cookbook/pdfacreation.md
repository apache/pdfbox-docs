---
license:   Licensed to the Apache Software Foundation (ASF) under one
           or more contributor license agreements.  See the NOTICE file
           distributed with this work for additional information
           regarding copyright ownership.  The ASF licenses this file
           to you under the Apache License, Version 2.0 (the
           "License"); you may not use this file except in compliance
           with the License.  You may obtain a copy of the License at
           .
             http://www.apache.org/licenses/LICENSE-2.0
           .
           Unless required by applicable law or agreed to in writing,
           software distributed under the License is distributed on an
           "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
           KIND, either express or implied.  See the License for the
           specific language governing permissions and limitations
           under the License.

layout:    default
title:     PDF/A Creation
---

# PDF/A Creation

The Apache PDFBox API can be used to create a PDF/A file. PDF/A is a PDF file with some constraints to ensure its 
long time conservation. These constraints are described in ISO 19005.

This small sample shows what should be added during creation of a PDF file to transform it in a valid PDF/A 
document. The current example creates a valid PDF/A-1b document.

## Load All Fonts Used in the Document

The PDF/A specification enforces that the fonts used in the document are present in the PDF File. You
have to load them. As an example:

~~~java
InputStream fontStream = CreatePDFA.class.getResourceAsStream("/org/apache/pdfbox/resources/ttf/ArialMT.ttf");
PDFont font = PDTrueTypeFont.loadTTF(doc, fontStream);
~~~

## Include XMP Metadata Block

It is required to have XMP metadata defined in the PDF. At least, the PDFA Schema (giving details on the version
of PDF/A specification reached by the document) must be present. These lines create the XMP metadata for a
PDF/A-1b document:

~~~java
XMPMetadata xmp = new XMPMetadata();
XMPSchemaPDFAId pdfaid = new XMPSchemaPDFAId(xmp);
xmp.addSchema(pdfaid);
pdfaid.setConformance("B");
pdfaid.setPart(1);
pdfaid.setAbout("");
metadata.importXMPMetadata(xmp);
~~~

## Include Color Profile

It is mandatory to include the color profile used by the document. Different profiles can be used. This 
example takes one present in pdfbox:

~~~java
// Create output intent
InputStream colorProfile = CreatePDFA.class.getResourceAsStream("/org/apache/pdfbox/resources/pdfa/sRGB Color Space Profile.icm");
PDOutputIntent oi = new PDOutputIntent(doc, colorProfile); 
oi.setInfo("sRGB IEC61966-2.1"); 
oi.setOutputCondition("sRGB IEC61966-2.1"); 
oi.setOutputConditionIdentifier("sRGB IEC61966-2.1"); 
oi.setRegistryName("http://www.color.org"); 
cat.addOutputIntent(oi);
~~~~

## Complete example

The complete example can be found in pdfbox-example. The source file is

	src/main/java/org/apache/pdfbox/examples/pdfa/CreatePDFA.java

