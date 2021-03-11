/*
PROJECT 1 TURCK LEARN SITE 
BY RONNIE SAINI
------------------------------------------------------------------------------------
The idea is to teach anyone the basic parts of a truck/car,
this allows for them to gain intrest in knowledge of the vechicals
you drive everyday.
*/

//creates an array for my images soon to be used and variable string to set 
//draw function states
var typeAssets = [];
var drawFunction;

//preloading all images ahead of program
function preload() {
  typeAssets[0] = loadImage('assets/TruckLearnSplash.png');
  typeAssets[1] = loadImage('assets/JeepF.png');
  typeAssets[2] = loadImage('assets/Body.png');
  typeAssets[3] = loadImage('assets/engine.png');
  typeAssets[4] = loadImage('assets/wheel.png');
  typeAssets[5] = loadImage('assets/Suspension.png');
  typeAssets[6] = loadImage('assets/exhaust.png');

}

//initializing the size of the page and first draw funciton.
function setup() {
  createCanvas(1280, 800);
  imageMode(CENTER);
  textAlign(CENTER);
  drawFunction = drawSplashScreen;
}
//nicknaming draw function draw
function draw() {
  drawFunction();
}
//setting picture size from asset to canvas size.
drawSplashScreen = function() {
  image(typeAssets[0], width/2, height/2, 1280, 800);
}

drawMainJEEP = function() {
   image(typeAssets[1],width/2, height/2, 1280, 800);
}

//DRAW BODY first screen
drawBody = function() {
  image(typeAssets[2],width/2, height/2, 1280, 800);
}

drawEngine = function() {
  image(typeAssets[3],width/2, height/2, 1280, 800);
}

drawWheel = function() {
  image(typeAssets[4],width/2, height/2, 1280, 800);
}

drawSuspension = function() {
  image(typeAssets[5],width/2, height/2, 1280, 800);
}

drawExhaust = function() {
  image(typeAssets[6],width/2, height/2, 1280, 800);
}


//Iff mouse is presse do to main screen form splash
function mousePressed() {
  if( drawFunction === drawSplashScreen ) {
    drawFunction = drawMainJEEP;
  }
}
// key check for user navigation, logic to only allow one way navigations.
function keyTyped() {
  if ( drawFunction === drawMainJEEP ) {
    if ( key ==='1') {
      drawFunction = drawBody;
    }
    else if ( key ==='2') {
      drawFunction = drawEngine;
    }
    else if ( key ==='3') {
      drawFunction = drawWheel;
    }
    else if ( key ==='4') {
      drawFunction = drawSuspension;
    }
    else if ( key ==='5') {
      drawFunction = drawExhaust;
    }
  }

  if ( drawFunction === drawBody ) {
    if ( key ==='0') {
      drawFunction = drawMainJEEP ;
    }
  }

  if ( drawFunction === drawEngine ) {
    if ( key ==='0') {
      drawFunction = drawMainJEEP ;
    }
  }
  if ( drawFunction === drawWheel ) {
    if ( key ==='0') {
      drawFunction = drawMainJEEP ;
    }
    else if ( key ==='3') {
      drawFunction = drawWheel;
    }
     }

    if ( drawFunction === drawSuspension ) {
      if ( key ==='0') {
        drawFunction = drawMainJEEP;
      }
      else if ( key ==='3') {
        drawFunction = drawWheel;
      }
    }
      if ( drawFunction === drawExhaust) {
        if ( key ==='0') {
          drawFunction = drawMainJEEP;
        }
        else if ( key ==='3') {
          drawFunction = drawWheel;
        }
      }
  }




