let webcam;

let scale = 20;
let jitter;


function setup() {
  canvasWidth = windowWidth 
  canvasHeight = windowHeight 
  createCanvas(canvasWidth, canvasHeight)
  frameRate(8);

  pixelDensity(1);
  
  webcam = createCapture(VIDEO, { flipped:true });
  webcam.size(canvasWidth, canvasHeight);
  webcam.hide();
  // frameCount(4);

  // slider
  slider = createSlider(10, 100);
  slider.position(canvasWidth*0.1, canvasHeight - 50);
  slider.size(canvasWidth - canvasWidth*0.2);
}

function draw() {
  background(220);
  image(webcam, 0, 0);
  filter(BLUR, 9);
  scale = slider.value();
  fliterTest();
  filter(POSTERIZE, 9);


  jitter = random(0, 5);
}


function fliterTest() {
  webcam.loadPixels();
  if (webcam.pixels) {  
    for (x = 0; x < webcam.width; x+= scale) {
      for (y = 0; y < webcam.height; y+= scale) {

        const index = (x + y * webcam.width) * 4
            
        const r = webcam.pixels[index]
        const g = webcam.pixels[index + 1]
        const b = webcam.pixels[index + 2]
        const a = webcam.pixels[index + 3]


        stroke(color(r, g, b));
        strokeWeight(2);

        fill(r, g, b);
        // scale = random(20, 20); 
        rectMode(CENTER);
        // rect(x, y, scale, scale);
        

        rect(x + jitter, y + jitter, scale, scale);
        // fill(r, g, b, random(0, 255));
        // circle(x, y, random(0, 30));
        updatePixels();

      }
    }
  }
}
