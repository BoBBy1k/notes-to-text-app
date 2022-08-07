import React, { useState, useEffect, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './App.css';
import Jimp from 'jimp'

function App() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [confidence, setConfidence] = useState("");
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    var currentImage = document.querySelector("#currentImage");
    var currentImageWidth=0
    var currentImageHeight=0
    currentImage.clientWidth === 0 ? currentImageWidth = 640 : currentImageWidth = currentImage.clientWidth;
    currentImage.clientHeight === 0 ? currentImageHeight = 800 : currentImageHeight = currentImage.clientHeight;
    setImgWidth(currentImageWidth)
    setImgHeight(currentImageHeight)
    console.log("Image Width: " + currentImageWidth + ", Image Height: " + currentImageHeight);
  }, [image]);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleClick = () => {
    if (text !== "Processing..."){
      setText("Processing...")
      setConfidence("")
      console.log("Image Width: " + imgWidth + ", Image Height: " + imgHeight);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imageRef.current, 0, 0, imgWidth, imgHeight);
      console.log(canvas)
      let dataUrl = canvas.toDataURL("image/jpeg");

      Jimp.read(dataUrl, function (err, image) {
        let imgSize=4
        setImgWidth(imgWidth*imgSize)
        setImgHeight(imgHeight*imgSize)
        let workingWidth=imgWidth*imgSize
        let workingHeight=imgHeight*imgSize
        // setImgWidth(imgWidth)
        // setImgHeight(imgHeight)
        // let workingWidth=imgWidth
        // let workingHeight=imgHeight

        image
        .resize(workingWidth, workingHeight)
          // .dither565()
          .greyscale()
          .invert()
          .brightness(-.2)
          .contrast(+.5)
          .normalize()
          // .gaussian(1)
          // .blur(1)
          .getBase64(Jimp.AUTO, function(err, data) {
            console.log(data);
            var image = new Image();
            image.onload = () => { ctx.drawImage(image, 0, 0, workingWidth, workingHeight) }
            image.src = data
            Tesseract.recognize(
              data,'eng',
              {
                logger: m => console.log(m)
              }
            )
            .catch (err => {
              console.error(err);
            })
            .then(result => {
              console.log(result)
              setConfidence(result.data.confidence + "%")
              setText(result.data.text);
            })
          });
      });
    }
    else{console.log("Processing in progress!")}
  }

  return (
    <div className="App">
      <input accept='image/*' id='icon-button-file' type='file' capture='environment' onChange={handleChange} style={ {marginTop: 50 }}/>
      <button onClick={handleClick} style={{height:30, borderRadius: 10}}>Do The Thing!</button>
        <h3>Confidence Level: {confidence}</h3>
        <h3>Extracted text (Editable)</h3>
        <div>
          <span className="editableBox" contenteditable="true" onChange={ (e)=>{setText(e.target.value)}}>{text}</span>
        </div>
        <h3>Uploaded Image</h3>
        <img
           src={image} className="App-logo" alt="Nothing Uploaded!" id="currentImage"
           ref={imageRef}
           />
        <h3>Modified Image</h3>
        <canvas ref={canvasRef} width={imgWidth} height={imgHeight}></canvas>
    </div>
  );
}

export default App