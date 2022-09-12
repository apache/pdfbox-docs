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

You can obtain the latest source of PDFBox from our [SVN repo](http://svn.apache.org/repos/asf/pdfbox/). The current trunk is 3.0.0-SNAPSHOT. There is a separate branch for the 1.8.x and the 2.0.x series. You can fetch the latest trunk version using Subversion:

    svn checkout http://svn.apache.org/repos/asf/pdfbox/trunk/
    cd trunk

You can also browse the Subversion repository using [ViewVC](https://svn.apache.org/viewvc/pdfbox/).

We also have a read-only [Git mirror](https://git.apache.org/) which is further mirrored to GitHub as [apache/pdfbox](https://github.com/apache/pdfbox).

The sources for the **Java ImageIO plugin for the JBIG2 image format** are available in the  [Apache Git Repository](https://gitbox.apache.org/repos/asf/pdfbox-jbig2.git) or can be loaded from [GitHub](https://github.com/apache/pdfbox-jbig2):

    git clone https://gitbox.apache.org/repos/asf/pdfbox-jbig2.git
    cd pdfbox-jbig2

## Build dependencies

### PDFBox 1.8

- JDK 8 (build only)
- [Maven 3](http://maven.apache.org/)

### PDFBox 2.0

- JDK 7
- [Java Cryptography Extension (JCE)](#java-cryptography-extension-jce)
- [Maven 3](http://maven.apache.org/)

### Java ImageIO plugin for JBIG2

- JDK 6
- [Maven 3](http://maven.apache.org/)

### Java Cryptography Extension (JCE)

Building PDFBox 2.0 requires a JDK with "unlimited strength" cryptography, which requires extra files to be installed. For JDK 7, see [Java Cryptography Extension (JCE)](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html). If these files are not installed, building PDFBox will fail the following test:

    TestPublicKeyEncryption.setUp:70 JCE unlimited strength jurisdiction policy files are not installed
    
## Building with Maven

In the root directory of PDFBox:

    mvn clean install

---

## Building with Ant (Deprecated, removed in 2.0.0)

The old Ant build is still available, and can be used especially for
building .NET binaries with IKVM:

1.  Install [ANT](http://ant.apache.org/). PDFBox currently uses 1.6.2
    but other versions probably work as well.
2.  (optional) Setup IKVM, if you want to build the .NET DLL version of
    PDFBox.
    1.  [IKVM](http://www.ikvm.net/) binaries
    2.  In the build.properties, set the ikvm.dir property:\
         `ikvm.dir=C:\\javalib\\ikvm-12-07-2004\\ikvm`

3.  Run "`ant`" from the root PDFBox directory. This will create the
    .zip package distribution. See the build file for other ant targets.

NOTE: If you want to run PDFBox from an IDE them you will need to add
the 'Resources' directory to the project classpath in your IDE.

### Dependencies for Ant Builds

The above instructions expect that you're using [Maven](http://maven.apache.org/) or another build tool like [Ivy](http://ant.apache.org/ivy/) that supports Maven dependencies.
If you instead use tools like [Ant](http://ant.apache.org/) where you need to explicitly include all the required library jars in your application, you'll need to do
something different.

The easiest approach is to run ``mvn dependency:copy-dependencies`` inside the pdfbox directory of the latest PDFBox source release. This will copy all the required and optional
libraries discussed above into the pdfbox/target/dependencies directory. You can then simply copy all the libraries you need from this directory to your application.
