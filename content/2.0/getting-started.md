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
title:   Getting Started
---

<p class="alert alert-warning">This is an unreleased development preview and may change without notice.</p>

# Getting Started

This content is under construction.

## Maven

To use the latest 2.0 snapshot release from the SVN trunk, you'll need to add the following dependency:

    <dependency>
      <groupId>org.apache.pdfbox</groupId>
      <artifactId>pdfbox</artifactId>
      <version>2.0.0-SNAPSHOT</version>
    </dependency>

You'll also need to add the following repository:

    <repository>
      <id>ApacheSnapshot</id>
      <name>Apache Repository</name>
      <url>https://repository.apache.org/content/groups/snapshots/</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>

Please note that this will use the latest **unstable** development snapshot.
