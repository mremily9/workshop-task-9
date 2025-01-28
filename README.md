# FA205_Workshop_9

Website link: https://mremily9.github.io/workshop-task-9/


# Overview
- Experiment with making a 'smart mirror'
- Learn how to use live capture with implementing a new interaction of the webcam and mic into our p5.js project
- Added manipulations to the live captures and played around with pixels again
- Played around with filters and visual experimentations 

  
# Notes

![image](https://github.com/user-attachments/assets/22b986fe-0804-473e-af9b-1a57d6eaade0)

Using the ball class - adding them on top of the camera

![image](https://github.com/user-attachments/assets/aea806ae-c48e-4eae-a5f3-0bb6e3f74333)

![image](https://github.com/user-attachments/assets/e460a7d1-a9c0-453f-87d7-cb5917f8be43)

Comments while following the workshop video. 

**Examples**
From the p5.js reference 

![image](https://github.com/user-attachments/assets/603a8f29-ccd9-45ea-b6fb-f4d141c4d902)

https://p5js.org/examples/imported-media-video-capture/

Another really cool example I found 

![image](https://github.com/user-attachments/assets/55d87525-8a0e-4579-91de-6935d69bb2d3)

https://codepen.io/ashleymarkfletcher/full/QrmpPw/


# Progress (Problem Solving/Code)
**Setting up**

I first set up the camera and capturing, making it fit to the whole screen rather than just a small canvas like before. 

```
let webcam;

function setup() {
  canvasWidth = windowWidth
  canvasHeight = windowHeight
  createCanvas(canvasWidth, canvasHeight)

  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(canvasWidth, canvasHeight);
  webcam.hide();
}

function draw() {
  background(220);
  image(webcam, 0, 0);
}

```

![image](https://github.com/user-attachments/assets/4f7e9504-c9f8-4c6d-9cce-be5e5699684e)

**Experiments**

I then started to experiment with filters - by creating a new function that looks into each pixel and creates an randomly scaled ellipse based on the placement and colour

![image](https://github.com/user-attachments/assets/e9cdaf4f-1747-4fd0-9c63-32cad70f62fe)

```
function fliterTest() {
  webcam.loadPixels();
  if (webcam.pixels) {  
    for (y = 0; y < webcam.height; y+= 6) {
      for (x = 0; x < webcam.width; x+= 6) {

        const index = (x + y * webcam.width) * 4
           
        const r = webcam.pixels[index]
        const g = webcam.pixels[index + 1]
        const b = webcam.pixels[index + 2]
        const a = webcam.pixels[index + 3]
 
        stroke(color(r, g, b));
        strokeWeight(2);

        fill(r, g, b, random(0, 255));
        ellipse(y, x, random(1, 9));
        updatePixels();
      }
    }
  }
}
```

Here, I was experimenting with scale. 

![image](https://github.com/user-attachments/assets/99aa46e4-4dbd-45f3-9d4d-b18926b59ee4)

I then looked back into the filter() function. 

![image](https://github.com/user-attachments/assets/a1cc63b3-3694-4037-ada4-ac580b639625)

Looking into the posterize setting

![image](https://github.com/user-attachments/assets/fa05de05-6c44-4d31-9ff1-c34ba85f2b29)

I then played around with shapes again - changing it into a square this time.

I liked this effect that it gave me - it was pixel-like effect and also a post-it note effect.

![image](https://github.com/user-attachments/assets/121bdc38-e1d0-4164-99d1-28ebf3c11b9b)

I then played with the size to make it larger - so that it was fully pixel-like 

![image](https://github.com/user-attachments/assets/3681eac4-a998-4a88-a847-4e9b386b756c)

I really liked the idea and the effect this gave me visually. 



**Slider interaction**

I wanted to add in more implementations then. Using a slider to affect the filter 

![image](https://github.com/user-attachments/assets/dd5b4900-31b9-4ce7-a801-fd49f12bd786)


![image](https://github.com/user-attachments/assets/1dd836f9-37a6-49b1-b688-5a3d159e7d7c)

```
webcam = createCapture(VIDEO, { flipped:true });
```

**Final coding comments**
- Found this live capture feature interesting and a new interaction to experiment with - espically in the future!
- I wanted to test using classes - and maybe simulations or particles to create even cooler effects. 



# Future development 
- Perhaps I would like to add more manipulations - as my current one is of pixels and it very static
- I wanted to test using classes - and maybe simulations or particles to create even cooler effects. 


# Reflection
- I found this workshop to be fun as I was able to experiment visually
- I found the smart mirror and capture video really fun to play around with but also to code on - implementing a new level of interaction 


