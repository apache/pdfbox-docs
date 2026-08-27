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

Processing untrusted PDFs is supported, but only to a defined extent. See
our [Security Scan Guidance](https://github.com/apache/pdfbox/security/policy)
for the full threat model, aimed at automated scanners and vulnerability
researchers.

### In scope

Please report security issues privately if processing an untrusted PDF can
result in:

* remote code execution;
* privilege escalation or escape from the application's or execution
  environment's intended security boundary; or
* unauthorized access to data that the application or PDFBox would not
  otherwise be permitted to access.

These issues are considered security vulnerabilities when the security
impact is a direct result of processing the untrusted PDF.

### Not vulnerabilities under this policy

Malformed or specially crafted PDFs may cause unchecked exceptions such as
`NullPointerException` or `StackOverflowError`, infinite loops, or resource
consumption that is disproportionate to the size or complexity of the input.

These behaviors may be bugs or robustness limitations, but they are not
considered security vulnerabilities under this policy. In particular,
denial-of-service conditions that are limited to excessive CPU, memory,
recursion, or processing time are outside the security scope described here.

Applications that process untrusted documents at scale should apply
appropriate timeouts, memory limits, resource controls, and sandboxing.

### Document validation

PDFBox is a low-level library. It does not automatically validate
signatures, permissions, PDF/A or other standards conformance, or similar
document-level properties unless the application explicitly invokes the
relevant PDFBox verification API.

The absence of such validation is not itself a vulnerability. However, an
incorrect security-relevant result from an explicitly invoked PDFBox
verification API is within scope.

### Encryption and signatures

PDF encryption and signatures rely on the Java Cryptography Architecture
(JCA) and Bouncy Castle. Vulnerabilities in those underlying cryptographic
libraries should be reported to their respective upstream projects.

Incorrect use of those libraries within PDFBox remains in scope. Examples
include a flawed key derivation implementation or a permission bypass caused
by PDFBox's handling of encryption or signatures.

## Reporting security issues

The Apache Software Foundation takes a very active stance in eliminating and disclosing security problems against its products.

We strongly encourage folks to report such problems to our private security mailing list first, before disclosing them in a public forum.

Please note that the security mailing list should only be used for reporting undisclosed security vulnerabilities and managing the process of fixing such vulnerabilities. We cannot accept regular bug reports or other queries at this address. All mail sent to this address that does not relate to an undisclosed security problem in our source code will be ignored.

If you need to report a bug that isn't an undisclosed security vulnerability, please contact one of our [mailing lists](https://pdfbox.apache.org/mailinglists.html).

The private security mailing address is: [security@apache.org](mailto:security@apache.org). Please send one plain-text email for each vulnerability you are reporting.

An overview of the vulnerability handling process is:

* The reporter reports the vulnerability privately to [security@apache.org](security@apache.org).
* The PDFBox security team works privately with the reporter to resolve the vulnerability.
* The PDFBox project creates a new release of the package the vulnerability affects to deliver its fix.
* The PDFBox project publicly announces the vulnerability and describes how to apply the fix.

Committers should read [a more detailed description of the process](https://www.apache.org/security/committers.html). Reporters of security vulnerabilities may also find it useful

## Known vulnerabilities

| CVE | Summary | Affected versions | Fixed in |
|-----|---------|-------------------|----------|
| CVE-2026-33929 | Path traversal in ExtractEmbeddedFiles example (incomplete fix for CVE-2026-23907) ¹ | 2.0.24–2.0.36, 3.0.0–3.0.7 | 2.0.37 / 3.0.8 |
| CVE-2026-23907 | Path traversal in ExtractEmbeddedFiles example ¹ | 2.0.24–2.0.35, 3.0.0–3.0.6 | 2.0.36 / 3.0.7 |
| CVE-2021-31811 | OutOfMemory loading a crafted PDF | ≤ 2.0.23 | 2.0.24 |
| CVE-2021-31812 | Infinite loop loading a crafted PDF | ≤ 2.0.23 | 2.0.24 |
| CVE-2021-27807 | Infinite loop loading a crafted PDF | ≤ 2.0.22 | 2.0.23 |
| CVE-2021-27906 | OutOfMemory loading a crafted PDF | ≤ 2.0.22 | 2.0.23 |
| CVE-2019-0228  | XML External Entity vulnerability | 2.0.14 only | 2.0.15 |
| CVE-2018-11797 | DoS in parser | 1.8.0–1.8.15, 2.0.0RC1–2.0.11 | 1.8.16 / 2.0.12 |
| CVE-2018-8036  | DoS (OOM) in AFMParser | 1.8.0–1.8.14, 2.0.0RC1–2.0.10 | 1.8.15 / 2.0.11 |
| CVE-2016-2175  | XML External Entity vulnerability | 1.8.0–1.8.11, 2.0.0 | 1.8.12 / 2.0.1 |

¹ Affects the `examples` module only, not the core library. Users who copied
`ExtractEmbeddedFiles` into production code should apply the fix from
[GitHub PR 427](https://github.com/apache/pdfbox/pull/427/changes).
