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
title:   A Java PDF Library
---
# Apache PDFBox<sup>&reg;</sup> - A Java PDF Library

<p class="lead">The Apache PDFBox<sup>&reg;</sup> library is an open source Java tool for working with
    PDF documents. This project allows creation of new PDF documents, manipulation of existing
    documents and the ability to extract content from documents. Apache PDFBox also includes several
    command-line utilities. Apache PDFBox is published under the Apache License v2.0.</p>

{% if collections.posts.length > 0 %}
{% assign items = collections.posts  | reverse %}
{% for post in items limit:1%}
<h2>{{ post.data.title }}<br><small>{{ post.data.page.date | date: "%Y-%m-%d"}}</small></h2>
{{ post.templateContent }}
{% endfor %}
{% endif %}

## Getting Help ##

To get help on using PDFBox, please [Subscribe to the Users Mailing List](mailto:users-subscribe@pdfbox.apache.org) and post your
questions there. We're happy to help.

The project is a volunteer effort and we're always looking for interested people to help
us improve PDFBox. There are a multitude of ways that you can help us depending on your
skills. Subscribe to the [Mailing Lists](/mailinglists.html) and find out how you can help.

<h2 id="features">Features</h2>

<div class="row">
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Extract Text</h4></header>
        <p>Extract Unicode text from PDF files.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Split &amp; Merge</h4></header>
        <p>Split a single PDF into many files or merge multiple PDF files.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Fill Forms</h4></header>
        <p>Extract data from PDF forms or fill a PDF form.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Preflight</h4></header>
        <p>Validate PDF files against the PDF/A-1b standard.</p>
    </div>
</div>

<div class="row">
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Print</h4></header>
        <p>Print a PDF file using the standard Java printing API.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Save as Image</h4></header>
        <p>Save PDFs as image files, such as PNG or JPEG.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Create PDFs</h4></header>
        <p>Create a PDF from scratch, with embedded fonts and images.</p>
    </div>
    <div class="col-md-3">
        <header><h4><svg aria-hidden="true" class="open-iconic open-iconic-box" width="8" height="8" viewBox="0 0 8 8" role="img" version="1.1" alt="box image" ><path d="M0 0v1h8v-1h-8zm0 2v5.91c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.91h-2.97v1.03h-2.03v-1.03h-3z" /></svg>Signing</h4></header>
        <p>Digitally sign PDF files.</p>
    </div>
</div>

## News

{% if collections.posts.length > 0 %}
{% assign items = collections.posts.reverse %}
{% for post in items offset:1 limit:5 %}
<h2>{{ post.data.title }}<br><small>{{ post.data.page.date | date: "%Y-%m-%d"}}</small></h2>
{{ post.templateContent }}
{% endfor %}
{% endif %}