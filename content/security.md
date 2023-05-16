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
title:   Security
---

# Security

## Security Model

Processing untrusted PDFs is only supported to a point: malformed PDFs
will not cause remote code execution or other privilege escalation
problems. However, processing them they may cause unchecked exceptions
such as `StackOverflowException` or `NullPointerException`, or even use
unexpected amounts of memory.

## Reporting security issues

The Apache Software Foundation takes a very active stance in eliminating and disclosing security problems against its products.

We strongly encourage folks to report such problems to our private security mailing list first, before disclosing them in a public forum.

Please note that the security mailing list should only be used for reporting undisclosed security vulnerabilities and managing the process of fixing such vulnerabilities. We cannot accept regular bug reports or other queries at this address. All mail sent to this address that does not relate to an undisclosed security problem in our source code will be ignored.

If you need to report a bug that isn't an undisclosed security vulnerability, please use the [bug reporting page](https://issues.apache.org/jira/projects/PDFBOX).

The private security mailing address is: [security@apache.org](mailto:security@apache.org). Please send one plain-text email for each vulnerability you are reporting.

An overview of the vulnerability handling process is:

* The reporter reports the vulnerability privately to [security@apache.org](security@apache.org).
* The PDFBox security team works privately with the reporter to resolve the vulnerability.
* The PDFBox project creates a new release of the package the vulnerabilty affects to deliver its fix.
* The PDFBox project publicly announces the vulnerability and describes how to apply the fix.

Committers should read [a more detailed description of the process](https://www.apache.org/security/committers.html). Reporters of security vulnerabilities may also find it useful
