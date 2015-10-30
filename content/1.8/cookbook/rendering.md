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

title: Cookbook - Rendering
---

Document Rendering
==================

Convert a document to images
----------------------------

This small sample shows how to render (convert to images) a PDF document using PDFBox.

	:::java
        String filename = "YOURFILENAMEHERE.pdf";

        // open the document
        PDDocument doc = PDDocument.loadNonSeq(new File(filename), null);

        boolean b;
        List<PDPage> pages = doc.getDocumentCatalog().getAllPages();
        for (int p = 0; p < pages.size(); ++p)
        {
            // RGB image with 300 dpi
            BufferedImage bim = pages.get(p).convertToImage(BufferedImage.TYPE_INT_RGB, 300);
            
            // save as PNG with default metadata
            b = ImageIO.write(bim, "png", new File("rgbpage" + (p+1) + ".png"));
            if (!b)
            {
                // error handling
            }

            // B/W image with 300 dpi
            bim = pages.get(p).convertToImage(BufferedImage.TYPE_BYTE_BINARY, 300);
            
            // save as TIF with dpi in the metadata
            // PDFBox will choose the best compression for you - here: CCITT G4
            // you need to add jai_imageio.jar to your classpath for this to work
            b = ImageIOUtil.writeImage(bim, "bwpage-" + (p+1) + ".tif", 300);
            if (!b)
            {
                // error handling
            }
        }

        doc.close();
