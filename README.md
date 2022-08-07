This program is intended to convert notes written on standard white paper into workable text.

The main functionality of this project is based on the usage of Tesseract.js (Tested to be workable under ideal conditions)
https://github.com/naptha/tesseract.js#tesseractjs

Image processing to assist the OCR is done with Jimp (Tested to be inconsistent or worse in most situations)
https://github.com/oliver-moran/jimp/tree/master/packages/jimp

Note the image processing is left activated since it has a cool looking demonstrative effect, not for its practicality.

It 'could' be converted to use the Sharp node package to utilize it's image sharpening functionality that is currently missing from Jimp.
The limitation being that Sharp needs to run in Node.js and have access to fs. Which would greatly expand the scope of this small weekend project used to learn about image processing.
Test need to be run to see if sharpening and other features of the package would even improve the OCR's ability to read the image.
https://github.com/lovell/sharp