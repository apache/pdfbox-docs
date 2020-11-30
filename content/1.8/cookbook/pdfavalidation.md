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
title:   PDF/A Validation
---

# PDF/A Validation

The Apache Preflight library is a Java tool that implements a parser compliant with the ISO-19005 specification (aka PDF/A-1).
Check Compliance with PDF/A-1b

This small sample shows how to check the compliance of a file with the PDF/A-1b specification.

~~~java
ValidationResult result = null;

PreflightParser parser = new PreflightParser(args[0]);
try
{

    /* Parse the PDF file with PreflightParser that inherits from the NonSequentialParser.
     * Some additional controls are present to check a set of PDF/A requirements. 
     * (Stream length consistency, EOL after some Keyword...)
     */
    parser.parse();

    /* Once the syntax validation is done, 
     * the parser can provide a PreflightDocument 
     * (that inherits from PDDocument) 
     * This document process the end of PDF/A validation.
     */
    PreflightDocument document = parser.getPreflightDocument();
    document.validate();

    // Get validation result
    result = document.getResult();
    document.close();

}
catch (SyntaxValidationException e)
{
    /* the parse method can throw a SyntaxValidationException 
     * if the PDF file can't be parsed.
     * In this case, the exception contains an instance of ValidationResult  
     */
    result = e.getResult();
}

// display validation result
if (result.isValid())
{
    System.out.println("The file " + args[0] + " is a valid PDF/A-1b file");
}
else
{
    System.out.println("The file" + args[0] + " is not valid, error(s) :");
    for (ValidationError error : result.getErrorsList())
    {
        System.out.println(error.getErrorCode() + " : " + error.getDetails());
    }
}
~~~
      	
## Categories of Validation Error

If a validation fails, the ValidationResult object contains all causes of the failure.
In order to help in the failure understanding, all error codes have the following form X[.Y[.Z]] where :

 - 'X' is the category (ex : Font validation error...)
 - 'Y' represent a subsection of the category (ex : "Font with Glyph error")
 - 'Z' represent the cause of the error (ex : "Font with a missing Glyph")

Category ('Y') and cause ('Z') may be missing according to the difficulty to identify the error detail.

Here after, you can find all Categories (for detailed cause, see constants in the ``PreflightConstants`` interface) :

| Category | Description |
| -------- | ----------- | 
| 1[.y[.z]] | Syntax Error |
| 2[.y[.z]] | Graphic Error |
| 3[.y[.z]] | Font Error |
| 4[.y[.z]] | Transparency Error |
| 5[.y[.z]] | Annotation Error |
| 6[.y[.z]] | Action Error |
| 7[.y[.z]] | Metadata Error |
