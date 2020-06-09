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
title:   Blog
---

# Blog

{% comment %}
As we transition from Jekyll to Eleventy because of the new maven/node.js based build
there are two loops with different collection objects to be able to render with Jekyll
as well as with Eleventy. will be cleaned up after the transisiton has been completed.
{% endcomment %}
{% comment %}this block will be handled by Eleventy{% endcomment %}
{% for post in collections.posts reversed %}
<h2>{{ post.data.title }}<br><small>{{ post.data.page.date | date: "%Y-%m-%d"}}</small></h2>
{{ post.templateContent }}
{% endfor %}

{% comment %}this block will be handled by Jekyll{% endcomment %}
{% for post in site.posts %}
<h2>{{ post.title }}<br><small>{{ post.date  | date: "%Y-%m-%d"}}</small></h2>
{{ post.content }}
{% endfor %}
