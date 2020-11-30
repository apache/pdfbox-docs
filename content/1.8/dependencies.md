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
title:   Dependencies

eleventyNavigation:
  order: 1
---

# Dependencies

PDFBox consists of three related components and depends on a few external libraries. This page describes what these libraries are and how to include them in your application.

## Core Components

<p class="alert alert-info">These components are needed during runtime, development and testing dependent on the details below.</p>

The three PDFBox components are named ```pdfbox```, ```fontbox``` and ```jempbox```. The Maven groupId of all PDFBox components is org.apache.pdfbox.

### Minimum Requirements

- Java 1.5
- [commons-logging](http://commons.apache.org/logging/)

The main PDFBox component, pdfbox, has a hard dependency on the [commons-logging](http://commons.apache.org/logging/) library.
Commons Logging is a generic wrapper around different logging frameworks, so you'll either need to also use a logging library like [log4j](http://logging.apache.org/log4j/)
or let commons-logging fall back to the standard [java.util.logging API](http://java.sun.com/j2se/1.4.2/docs/guide/util/logging/overview.html)
included in the Java platform.

For **PDFBox Preflight only** [commons-io 1.4](https://commons.apache.org/proper/commons-io/) is needed.

### Font Handling
For font handling the fontbox component is needed.

### XMP Metadata 
To support XMP metadata the jembox component is needed.

To add the pdfbox, fontbox, jempbox and commons-logging jars to your application, the easiest thing is to declare the Maven dependency shown below. This gives you the main
pdfbox library directly and the other required jars as transitive dependencies.

```xml
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>pdfbox</artifactId>
  <version>...</version>
</dependency>
```

Set the version field to the latest stable PDFBox version.

## Optional Dependencies

Some features in PDFBox depend on optional external libraries. You can enable these features simply by including the required libraries in the classpath of your application.

### Extented Image Format Support

To support JBIG2 and writing TIFF images additional libraries are needed. 

<p class="alert alert-warning">The image plugins described below are not part of the PDFBox distribution because of incompatible licensing terms. Please make sure to check if the licensing terms are compatible to your usage.</p>

For **JBIG2** support a Java ImageIO Plugin such as the [Levigo Plugin](https://github.com/levigo/jbig2-imageio) or [JBIG2-Image-Decoder
](https://github.com/Borisvl/JBIG2-Image-Decoder) will be needed. 

To write **TIFF** images a JAI ImageIO Core library will be needed. 

#### PDF Encryption and Signing
The most notable such optional feature is support for PDF encryption. Instead of implementing its own encryption algorithms, PDFBox uses libraries from the 
[Legion of the Bouncy Castle](http://www.bouncycastle.org/). Both the bcprov and bcmail libraries are needed and can be included using the Maven dependencies shown below.

```xml
<dependency>
  <groupId>org.bouncycastle</groupId>
  <artifactId>bcprov-jdk15</artifactId>
  <version>1.44</version>
</dependency>
<dependency>
  <groupId>org.bouncycastle</groupId>
  <artifactId>bcmail-jdk15</artifactId>
  <version>1.44</version>
</dependency>
```

#### Support for Bidirectional Languages
Another important optional feature is support for bidirectional languages like Arabic. PDFBox uses the ICU4J library from the 
[International Components for Unicode](http://site.icu-project.org/) (ICU) project to support such languages in PDF documents. To add the ICU4J jar to your project, 
use the following Maven dependency.

```xml
<dependency>
  <groupId>com.ibm.icu</groupId>
  <artifactId>icu4j</artifactId>
  <version>3.8</version>
</dependency>
```

PDFBox also contains extra support for use with the [Lucene](http://lucene.apache.org/) and [Ant](http://ant.apache.org/) projects. Since in these cases PDFBox is just an
add-on feature to these projects, you should first set up your application to use Lucene or Ant and then add PDFBox support as described on this page.

## Dependencies for Ant Builds

The above instructions expect that you're using [Maven](http://maven.apache.org/) or another build tool like [Ivy](http://ant.apache.org/ivy/) that supports Maven dependencies.
If you instead use tools like [Ant](http://ant.apache.org/) where you need to explicitly include all the required library jars in your application, you'll need to do
something different.

The easiest approach is to run ``mvn dependency:copy-dependencies`` inside the pdfbox directory of the latest PDFBox source release. This will copy all the required and optional
libraries discussed above into the pdfbox/target/dependencies directory. You can then simply copy all the libraries you need from this directory to your application.
