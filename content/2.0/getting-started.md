---
layout: default
title:  Getting Started
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
