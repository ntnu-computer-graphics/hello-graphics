export function generateImage(canvas) {
  const ctx = canvas.getContext("2d");

  let imgWidth = 512
  let imgHeight = 512

  // You shoud push your rgba values to this imageDataArray
  let imageDataArray = []

  let imageData = ctx.createImageData(imgWidth, imgHeight)

  // Your code goes here:
  for (let i = 0; i < imgHeight; ++i) {
    for (let j = 0; j < imgWidth; ++j) {

      let r = Math.floor(255 * j / (imgWidth-1))
      let g = Math.floor(255 * i / (imgHeight-1))
      let b = Math.floor(255 * 0)
      imageDataArray.push(r, g, b, 255)    
    }
  }


  for (let i = 0; i < imageData.data.length; i +=4) {
          // Modify pixel data
          imageData.data[i + 0] = imageDataArray[i + 0]; // R value
          imageData.data[i + 1] = imageDataArray[i + 1]; // G value
          imageData.data[i + 2] = imageDataArray[i + 2]; // B value
          imageData.data[i + 3] = imageDataArray[i + 3]; // A value
  }

  ctx.putImageData(imageData, 0, 0);
}
