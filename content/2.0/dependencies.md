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
title:   Dependencies
---

# Dependencies

PDFBox has the following basic dependencies:

- Java 6
- [commons-logging](http://commons.apache.org/logging/)

Commons Logging is a generic wrapper around different logging frameworks, so you'll either need to also use a logging library like [log4j](http://logging.apache.org/log4j/)
or let commons-logging fall back to the standard [java.util.logging API](http://java.sun.com/j2se/1.4.2/docs/guide/util/logging/overview.html)
included in the Java platform.

For **PDFBox Preflight tests only** [commons-io 2.4](https://commons.apache.org/proper/commons-io/) is needed.

## Optional components

PDFBox does not ship with all features enabled. Third party components are necessary to get full support for certain functionality.

### JAI Image I/O

PDF supports embedded image files, however support for some formats require third party libraries which are distributed under terms incompatible with the Apache 2.0 license:

- Reading **JBIG2** images: [JBIG2 ImageIO](https://github.com/levigo/jbig2-imageio) or [JBIG2-Image-Decoder
](https://github.com/Borisvl/JBIG2-Image-Decoder)
- Reading **JPEG 2000 (JPX)** images: [JAI Image I/O Tools Core](https://java.net/projects/jai-imageio-core)
- Writing **TIFF** images requires *JAI Image I/O Tools Core* also.

These libraries are optional and will be loaded if present on the classpath, otherwise support for these image formats will be disabled and a warning will be logged when an unsupported image is encountered.

Maven dependencies for these components can be found in [parent/pom.xml](https://svn.apache.org/viewvc/pdfbox/trunk/parent/pom.xml?view=markup). Please make sure that any third party licenses are suitable for your project.

### Encryption and Signing

Encrypting and sigining PDFs requires the *bcprov*, *bcmail* and *bcpkix* libraries from the [Legion of the Bouncy Castle](http://www.bouncycastle.org/). These can be included in your Maven project using the following dependencies:

    <dependency>
        <groupId>org.bouncycastle</groupId>
        <artifactId>bcprov-jdk15on</artifactId>
        <version>1.54</version>
    </dependency>
    
    <dependency>
        <groupId>org.bouncycastle</groupId>
        <artifactId>bcmail-jdk15on</artifactId>
        <version>1.54</version>
    </dependency>

    <dependency>
        <groupId>org.bouncycastle</groupId>
        <artifactId>bcpkix-jdk15on</artifactId>
        <version>1.54</version>
    </dependency>

### Java Cryptography Extension (JCE)

256-bit AES encryption requires a JDK with "unlimited strength" cryptography, which requires extra files to be installed. For JDK 7, see [Java Cryptography Extension (JCE)](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html). If these files are not installed, building PDFBox will throw an exception with the following message:

    JCE unlimited strength jurisdiction policy files are not installed
