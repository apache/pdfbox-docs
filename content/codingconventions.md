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
title:   Coding Conventions
---

# Coding Conventions

Over the years the PDFBox project has come to adopt a number of coding conventions. These are not always followed in old code but new code should follow these rules where possible.

### Formatting

- Braces go on their own line.

- Always use braces with control flow statements.

- No lines longer than 100 characters, including JavaDoc.

- Wrapped lines should use either an indent of 4 or 8 characters or align with the expression at the same level on the previous line.

- Wrapped lines should be broken after operators, not before.

- Prefer aligned wrapped lines.

- Prefer aligned wrapped parameter lists.

### Whitespace

- Four spaces for indents, no tabs.

- Do not use spaces around parenthesis.

- Use spaces after control flow keywords.

- Prefer using blank lines to separate logical blocks of code, but do not be excessive.

- Prefer not following casts with a blank space.

### Structure

- Do not use package imports (e.g. `import java.util.*`)

- Static fields and methods must appear at the top of a class, before any other code.

- Within a class, definitions should be ordered as follows:

    Class (static) variables  
    Instance variables  
    Constructors  
    Methods  

### JavaDoc

- Public and protected methods and fields must have JavaDoc.

- Don't use `@version` tags.

- Don't use `@since` tags.

- Don't include your e-mail address in `@author` tags.

- You may omit `@return` tags for getters as long as you include a summary which begins with the word "Returns".

- Private methods do not require JavaDoc but may have partial JavaDoc if it adds valuable information.

### Comments

- Only use line comments within code, never block comments.

- Prefer comments on their own line, rather than trailing, unless the latter is more readable.

- Prefix line comments by a space `// like this`.

### Variables

- Prefer initializing variables when they are declared, rather than C-style declaration before use.

- Always use final fields when possible.

### Control Flow

- Prefer multiple return statements over additional control flow logic.

- Prefer switch statements over multi-clause if-then statements.

### API Design

- Give variables and methods meaningful names. Keep these short but don't use abbreviations. Prefer using the same terminology as the PDF spec.

- Prefer final classes and final protected methods for non-final public classes, this reduces the surface area of the public API.

- Avoid non-final protected variables in public classes. Prefer protected getters over protected variables when protected fields are necessery in public classes.

- Minimize the API. Don't make everything public just because you can.

- Don't expose implementation details unless there is a clear need: allowing subclassing means that the behaviour of protected methods becomes part of the contract of the public AP.

- Avoid unnecesary abstraction. While you're encouraged to avoid brittle designs, it's unlikey that an API designed for "future use" will have the correct API without any code which actually uses it.

### Example

Here's an example of PDFBox's formatting style:

```java
public class Foo extends Bar
{
    public static void main(String args[])
    {
        try
        {
            for (int i = 0; i < args.length; i++)
            {
                System.out.println(Integer.parseInt(args[i]));
            }
        }
        catch (NumberFormatException e)
        {
            e.printStackTrace();
        }
    }
}
```

## Eclipse Formatter

**Eclipse** users may download this preferences file: `pdfbox-eclipse-formatter.xml` and import this into Eclipse.
(*Window->Preferences*, go to *Java->Code Style->Formatter* and click "*Import...*").
Once you have done this you can reformat your code by using *Source->Format* (`Ctrl+Shift+F`).

Also note that Eclipse will automatically format your import statements appropriately when
you invoke *Source -> Organize Imports* (`Ctrl+Shift+O`).

**IntelliJ IDEA** users may leverage the same format preferences by importing them into [Adapter for Eclipse Code Formatter](https://plugins.jetbrains.com/plugin/6546-adapter-for-eclipse-code-formatter) plugin. To make the code conform to the format rules, run *Code -> Reformat Code* command (`Ctrl+Alt+L`) and/or make sure to set the same named flag in *Commit* dialog.
