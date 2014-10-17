Title: Cookbook - Document Creation

## Document Creation

### Create a blank PDF

This small sample shows how to create a new PDF document using PDFBox.

	:::java
	// Create a new empty document
	PDDocument document = new PDDocument();
		
	// Create a new blank page and add it to the document
	PDPage blankPage = new PDPage();
	document.addPage( blankPage );
		
	// Save the newly created document
	document.save("BlankPage.pdf");
        
	// finally make sure that the document is properly
	// closed.
	document.close();

### Hello World using a PDF base font

This small sample shows how to create a new document and print the text "Hello World" using one of the PDF base fonts.

	:::java
	// Create a document and add a page to it
	PDDocument document = new PDDocument();
	PDPage page = new PDPage();
	document.addPage( page );
	
	// Create a new font object selecting one of the PDF base fonts
	PDFont font = PDType1Font.HELVETICA_BOLD;
	
	// Start a new content stream which will "hold" the to be created content
	PDPageContentStream contentStream = new PDPageContentStream(document, page);
	
	// Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
	contentStream.beginText();
	contentStream.setFont( font, 12 );
	contentStream.moveTextPositionByAmount( 100, 700 );
	contentStream.drawString( "Hello World" );
	contentStream.endText();
	
	// Make sure that the content stream is closed:
	contentStream.close();
	
	// Save the results and ensure that the document is properly closed:
	document.save( "Hello World.pdf");
	document.close();