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
title:   Getting Started
eleventyNavigation:
  order: 1
---

# Getting Started

## Maven

To use the latest release you'll need to add the following dependency:

```xml
<dependency>
  <groupId>org.apache.pdfbox</groupId>
  <artifactId>pdfbox</artifactId>
  <version>2.0.27</version>
</dependency>
```

## PDFBox and Java 8 ##

<p class="alert alert-warning">Important notice when using PDFBox with Java 8 before 1.8.0_191 or Java 9 before 9.0.4</p>

Due to the change of the java color management module towards "LittleCMS", users can experience slow performance in color operations.
A solution is to disable LittleCMS in favor of the old KCMS (Kodak Color Management System) by:

 - Starting with ``-Dsun.java2d.cmm=sun.java2d.cmm.kcms.KcmsServiceProvider`` or
 - Calling ``System.setProperty("sun.java2d.cmm", "sun.java2d.cmm.kcms.KcmsServiceProvider")``

Sources:
https://bugs.openjdk.java.net/browse/JDK-8041125

## Rendering Performance ##

<p class="alert alert-info">Since PDFBox 2.0.4</p>

PDFBox 2.0.4 introduced a new command line setting

 ```
 -Dorg.apache.pdfbox.rendering.UsePureJavaCMYKConversion=true
 ```

which may improve the performance of rendering PDFs on some systems especially if there are a lot of images on a page.
