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
title:   Working with Attachments
---

# Working with Attachments

## The PDF File Specification

See package:org.apache.pdfbox.pdmodel.common.filespecification  
See example:EmbeddedFiles  

A PDF can contain references to external files via the file system or a URL to a remote 
location. It is also possible to embed a binary file into a PDF document.

There are two classes that can be used when referencing a file. ``PDSimpleFileSpecification``
is a simple string reference to a file(e.g. "./movies/BigMovie.avi"). The simple file 
specification does not allow for any parameters to be set. 

The ``PDComplexFileSpecification`` is more feature rich and allows for advanced settings on 
the file reference.

It is also possible to embed a file directly into a PDF. Instead of setting the file 
attribute of the ``PDComplexFileSpecification``, the ``EmbeddedFile`` attribute can be used instead.

## Adding a File Attachment

PDF documents can contain file attachments that are accessed from the Document->File Attachments 
menu. PDFBox allows attachments to be added to and extracted from PDF documents. 
Attachments are part of the named tree that is attached to the document catalog.

~~~java
PDEmbeddedFilesNameTreeNode efTree = new PDEmbeddedFilesNameTreeNode();

//first create the file specification, which holds the embedded file
PDComplexFileSpecification fs = new PDComplexFileSpecification();
fs.setFile( "Test.txt" );
InputStream is = ...;
PDEmbeddedFile ef = new PDEmbeddedFile(doc, is );
//set some of the attributes of the embedded file
ef.setSubtype( "test/plain" );
ef.setSize( data.length );
ef.setCreationDate( new GregorianCalendar() );
fs.setEmbeddedFile( ef );

//now add the entry to the embedded file tree and set in the document.
Map efMap = new HashMap();
efMap.put( "My first attachment", fs );
efTree.setNames( efMap );
//attachments are stored as part of the "names" dictionary in the document catalog
PDDocumentNameDictionary names = new PDDocumentNameDictionary( doc.getDocumentCatalog() );
names.setEmbeddedFiles( efTree );
doc.getDocumentCatalog().setNames( names );
~~~