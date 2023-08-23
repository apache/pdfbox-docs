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
title:   PDFBox 4.0 Migration Guide
eleventyNavigation:
  order: 0
  key: Migration
---

# PDFBox 4.0 Migration Guide

<p class="alert alert-warning">Work in progress! There isn't any release of the 4.0 version yet. Nevertheless we already provide
a migration guide. It will be improved over time. If you believe there is a missing topic, open an issue or help us with a
contribution to improve the guide.
</p>

This guide describes the updates in Apache PDFBox 4.0 version. Use the information provided to upgrade your PDFBox 3.x applications
to PDFBox 4.0. It provides information about the new, deprecated and unsupported features in this release.

## Java Versions
PDFBox 4.0 requires at least Java 11. Testing has been done up to Java 20.

## Dependency Updates

All libraries on which PDFBox depends are updated to their latest stable versions:

- Bouncy Castle 1.75
- Apache Commons Logging 1.2
- picocli 4.7.4

For test support the libraries are updated to

- JUnit 5.10.0
- JAI Image Core 1.4.0
- JAI JPEG2000 1.4.0
- Apache JBIG ImageIO Plugin 3.0.4
- Apache Commons IO 2.13
- Apache Log4j 2.20.0

## General Changes for PDFBox 4.0

This section explains the fundamental differences between PDFBox 4.0 and 3.x releases.

### Preflight was removed

The subproject Preflight was removed due to inactivity. There weren't any substantial changes or improvements in the past years. The parser
was still limited to PDF/A 1B.

People looking for an open source preflight solution might check [VeraPDF](https://verapdf.org/). The VeraPDF parser is based on a PDFBox fork and
was stream lined to fit their needs. But VeraPDF is still using the PDFBox parser as possible alternative.
