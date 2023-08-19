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
title:   Building PDFBox
---

# Building from Source

Building PDFBox from source is only necessary if you're wanting to contribute code to the PDFBox project. Most users should use the [binary releases](http://pdfbox.apache.org/download.cgi) instead.

## Obtaining the Source

You can obtain the latest source of PDFBox from our [SVN repo](http://svn.apache.org/repos/asf/pdfbox/). The current trunk is 4.0.0-SNAPSHOT. There is a separate branch for the 3.0.x and the 2.0.x series. You can fetch the latest trunk version using Subversion:

    svn checkout http://svn.apache.org/repos/asf/pdfbox/trunk/
    cd trunk

You can also browse the Subversion repository using [ViewVC](https://svn.apache.org/viewvc/pdfbox/).

We also have a read-only [Git mirror](https://git.apache.org/) which is further mirrored to GitHub as [apache/pdfbox](https://github.com/apache/pdfbox).

The sources for the **Java ImageIO plugin for the JBIG2 image format** are available in the  [Apache Git Repository](https://gitbox.apache.org/repos/asf/pdfbox-jbig2.git) or can be loaded from [GitHub](https://github.com/apache/pdfbox-jbig2):

    git clone https://gitbox.apache.org/repos/asf/pdfbox-jbig2.git
    cd pdfbox-jbig2

## Build dependencies

### PDFBox 4.0.0-SNAPSHOT

- JDK 11
- [Maven 3](http://maven.apache.org/)

### PDFBox 3.0.x

- JDK 8
- [Maven 3](http://maven.apache.org/)

### PDFBox 2.0.x

- JDK 7
- [Java Cryptography Extension (JCE)](#java-cryptography-extension-jce)
- [Maven 3](http://maven.apache.org/)

### Java ImageIO plugin for JBIG2 3.0.x

- JDK 6
- [Maven 3](http://maven.apache.org/)

### Java Cryptography Extension (JCE)

Building PDFBox 2.0 requires a JDK with "unlimited strength" cryptography, which requires extra files to be installed. For JDK 7, see [Java Cryptography Extension (JCE)](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html). If these files are not installed, building PDFBox will fail the following test:

    TestPublicKeyEncryption.setUp:70 JCE unlimited strength jurisdiction policy files are not installed
    
## Building with Maven

In the root directory of PDFBox:

    mvn clean install
