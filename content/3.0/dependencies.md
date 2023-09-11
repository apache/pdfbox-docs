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
  order: 3
---

# Dependencies

## Core Components

<p class="alert alert-info">These components are needed during runtime, development and testing dependent on the details below.</p>

The three PDFBox components are named ```pdfbox```, ```fontbox``` and ```xmpbox```. The Maven groupId of all PDFBox components is org.apache.pdfbox.

### Minimum Requirements

PDFBox has the following basic dependencies:

- Java 8
- [commons-logging](http://commons.apache.org/logging/)

Commons Logging is a generic wrapper around different logging frameworks, so you'll either need to also use a logging library like [log4j](http://logging.apache.org/log4j/)
or let commons-logging fall back to the standard [java.util.logging API](http://java.sun.com/j2se/1.4.2/docs/guide/util/logging/overview.html)
included in the Java platform.

For **PDFBox Preflight tests only** [commons-io 2.4](https://commons.apache.org/proper/commons-io/) is needed.

### Font Handling
For font handling the fontbox component is needed.

### XMP Metadata
To support XMP metadata the xmpbox component is needed.

### Include Dependencies Using Maven
To add the pdfbox, fontbox, xmpbox and commons-logging jars to your application, the easiest thing is to declare the Maven dependency shown below. This gives you the main pdfbox library directly and the other required jars as transitive dependencies.

```xml
<dependency>
    <groupId>org.apache.pdfbox</groupId>
    <artifactId>pdfbox</artifactId>
    <version>...</version>
</dependency>
```

Set the version field to the latest stable PDFBox version.

## Optional Components

PDFBox does not ship with all features enabled. Third party components are necessary to get full support for certain functionality.

### JAI Image I/O

PDF supports embedded image files, however support for some formats require third party libraries which are distributed under terms incompatible with the Apache 2.0 license:

- Reading **JBIG2** images: [JBIG2 ImageIO](https://pdfbox.apache.org/download.cgi#JBIG2)
- Reading **JPEG 2000 (JPX)** images: [JAI Image I/O Tools Core](https://java.net/projects/jai-imageio-core)
- Writing **TIFF** images requires *JAI Image I/O Tools Core* also.

These libraries are optional and will be loaded if present on the classpath, otherwise support for these image formats will be disabled and a warning will be logged when an unsupported image is encountered.

Maven dependencies for these components can be found in [parent/pom.xml](https://svn.apache.org/viewvc/pdfbox/trunk/parent/pom.xml?view=markup). **Change the scope of the components if needed**. Please make sure that any third party licenses are suitable for your project.

To include the JBIG2 library the following part can be included in your project pom.xml:

```xml
<dependency>
    <groupId>org.apache.pdfbox</groupId>
    <artifactId>jbig2-imageio</artifactId>
    <version>...</version>
</dependency>
```

To include the JAI capabilities the following part can be included in your project pom.xml:

```xml
<dependency>
    <groupId>com.github.jai-imageio</groupId>
    <artifactId>jai-imageio-core</artifactId>
    <version>...</version>
</dependency>
<dependency>
    <groupId>com.github.jai-imageio</groupId>
    <artifactId>jai-imageio-jpeg2000</artifactId>
    <version>...</version>
</dependency>
```

For more reliable JPEG decoding the following part from the [TwelveMonkeys library](https://github.com/haraldk/TwelveMonkeys) can be included in your project pom.xml:

```xml
<dependency>
    <groupId>com.twelvemonkeys.imageio</groupId>
    <artifactId>imageio-jpeg</artifactId>
    <version>...</version>
</dependency>
```

### Encryption and Signing

Encrypting and sigining PDFs requires the *bcprov*, *bcmail* and *bcpkix* libraries from the [Legion of the Bouncy Castle](http://www.bouncycastle.org/). These can be included in your Maven project using the following dependencies:

```xml
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk15to18</artifactId>
    <version>1.75</version>
</dependency>

<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcmail-jdk15to18</artifactId>
    <version>1.75</version>
</dependency>

<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcpkix-jdk15to18</artifactId>
    <version>1.75</version>
</dependency>
```
<p class="alert alert-info">It is always a good idea to check for a newer version of Bouncy Castle. If you are using a more recent java version you might adapt the <b>artifactId</b> as well.</p>