var state = 0;
var r = 255;
var g = 0;
var b = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
  //  fill(0);
  //} else {

		if(state == 0) {
    g++;
    	if(g == 255)
        state = 1;
		}
		if(state == 1) {
    r--;
    	if(r == 0)
				state = 2;
		}
		if(state == 2) {
    b++;
    	if(b == 255)
    		state = 3;
		}
		if(state == 3) {
    g--;
    	if(g == 0)
    		state = 4;
		}
		if(state == 4) {
    r++;
    	if(r == 255)
    		state = 5;
		}
		if(state == 5) {
    b--;
    	if(b == 0)
        state = 0;
		}

		fill(r, g, b);

//  }
  ellipse(mouseX, mouseY, 80, 80);
	}
}
