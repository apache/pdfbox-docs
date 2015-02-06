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
         
title: Cookbook - Encrypting a file
---

Encrypting a file
=================

PDF encryption requires two passwords: the "user password" to open and view the file with restricted permissions, the "owner password" to access the file with all permission.


Load and save encrypted
-----------------------

This small sample shows how to encrypt a file so that it can be viewed, but not printed..

	:::java
        PDDocument doc = PDDocument.load("filename.pdf");

        int keyLength = 128; // 40 or 128; 256 will be available in version 2.0
        AccessPermission ap = new AccessPermission();
        
        // disable printing, everything else is allowed
        ap.setCanPrint(false);
        
        // owner password (to open the file with all permissions) is "12345"
        // user password (to open the file but with restricted permissions, is empty here) 
        StandardProtectionPolicy spp = new StandardProtectionPolicy("12345", "", ap);
        spp.setEncryptionKeyLength(keyLength);
        spp.setPermissions(ap);
        doc.protect(spp);
        
        doc.save("filename-encrypted.pdf");
        doc.close();
