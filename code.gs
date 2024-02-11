function createSimpleSlide() {
  
  var presentation = SlidesApp.create('Simple Presentation');

  
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);

  
  slide.getBackground().setSolidFill('#FFFFFF');

  
  var textBox = slide.insertTextBox('Hello, World!', 100, 100, 400, 200);

 
  return presentation.getUrl();
}


var presentationUrl = createSimpleSlide();
Logger.log('Presentation created. URL: ' + presentationUrl);
