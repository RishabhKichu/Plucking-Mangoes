class Mango {
  constructor(x, y, radius) {
    const options = {
      isStatic: true,
      restituion: 0.3,
      friction: 1,
      density: 1.3,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = radius * 2;
    this.image = loadImage("Plucking mangoes/mango.png");
    this.width = radius * 2;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    image(this.image, 0, 0, this.height, this.width);
    pop();
  }
}
