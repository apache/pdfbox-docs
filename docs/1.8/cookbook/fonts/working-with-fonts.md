Title: Cookbook - Working with Fonts

## Working with Fonts

### Standard 14 Fonts

The PDF specification states that a standard set of 14 fonts will always be available when consuming PDF documents. In PDFBox these are defined as constants in the PDType1Font class.

| Standard Font | Description |
| ------------- | ----------- |
| PDType1Font.TIMES_ROMAN | Times regular |
| PDType1Font.TIMES_BOLD | Times bold |
| PDType1Font.TIMES_ITALIC | Times italic |
| PDType1Font.TIMES_BOLD_ITALIC | Times bold italic |
| PDType1Font.HELVETICA | Helvetica regular |
| PDType1Font.HELVETICA_BOLD | Helvetica bold |
| PDType1Font.HELVETICA_OBLIQUE | Helvetica italic |
| PDType1Font.HELVETICA_BOLD_OBLIQUE | Helvetica bold italic | 
| PDType1Font.COURIER | Courier |
| PDType1Font.COURIER_BOLD | Courier bold |
| PDType1Font.COURIER_OBLIQUE | Courier italic |
| PDType1Font.COURIER_BOLD_OBLIQUE | Courier bold italic |
| PDType1Font.SYMBOL | Symbol Set |
| PDType1Font.ZAPF_DINGBATS | Dingbat Typeface |

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

### Hello World using a TrueType font

This small sample shows how to create a new document and print the text "Hello World" using a TrueType font.

	:::java
	// Create a document and add a page to it
	PDDocument document = new PDDocument();
	PDPage page = new PDPage();
	document.addPage( page );
	
	// Create a new font object by loading a TrueType font into the document
	PDFont font = PDTrueTypeFont.loadTTF(document, "Arial.ttf");
	
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

While it is recommended to embed all fonts for greatest portability not all PDF producer 
applications will do this. When displaying a PDF it is necessary to find an external font to use. 
PDFBox will look for a mapping file to use when substituting fonts.

PDFBox will load Resources/PDFBox_External_Fonts.properties off of the classpath to map font
names to TTF font files. The UNKNOWN_FONT property in that file will tell PDFBox which font to 
use when no mapping exists. 


### Hello World using a Postscript Type1 font

This small sample shows how to create a new document and print the text "Hello World" using a Postscript Type1 font.

	:::java
	// Create a document and add a page to it
	PDDocument document = new PDDocument();
	PDPage page = new PDPage();
	document.addPage( page );
	
	// Create a new font object by loading a Postscript Type 1 font into the document
	PDFont font = new PDType1AfmPfbFont(doc,"cfm.afm");
	
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