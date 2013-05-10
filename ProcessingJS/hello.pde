float radius = 50.0;
int X, Y, nX, nY;
int delay = 16;

void setup() {
  size ( 200, 200 );
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = height / 2;
  nX = X;
  nY = Y;
}

void draw() {
  radius = radius + sin( frameCount / 4 );
  X += (nX-X)/delay;
  Y += (nY-Y)/delay;
  background( 100 );
  fill( 0, 121, 184 );
  stroke(255);
  ellipse( X, Y, radius, radius );
}

void mouseMoved() {
  nX = mouseX;
  nY = mouseY;
}
