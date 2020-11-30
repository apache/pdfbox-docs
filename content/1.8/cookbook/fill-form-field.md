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
title:   Fill a Form Field
---

Fill a Form Field
==================

Form fields within a PDF are defined as part of the AcroForm entry within the PDF's document catalog.
Form there individual fields can be accessed. Fields might be organized in a tree structure so it might
be neccessary to walk through the tree to get an individual field.

Load the PDF document.

	:::java
    // load the document
    PDDocument pdfDocument = PDDocument.loadNonSeq(new File(... ), null);

Get the docoument catalog and the AcroForm which might be contained within.

	:::java
    // get the document catalog
	PDDocumentCatalog docCatalog = pdfDocument.getDocumentCatalog();
    PDAcroForm acroForm = docCatalog.getAcroForm();

Retrieve an individual field and set its value.

	:::java
    // as there might not be an AcroForm entry a null check is necessary
    if (acroForm != null)
    {
        PDField field = (PDField) acroForm.getField( "fieldName" );
        field.setValue("new field value");
    }

If a field is nested within the form tree a fully qualified name might be provided
to access the field.

	:::java
    // as there might not be an AcroForm entry a null check is neccessary
    if (acroForm != null)
    {
        PDField field = (PDField) acroForm.getField( "fieldsParentName.fieldName" );
        field.setValue("new field value");
    }
    
Save and close the filled out form.

	:::java
    doc.save(filledForm);
    doc.close();

