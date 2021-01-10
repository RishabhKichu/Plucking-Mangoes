class Rock {
  constructor(x, y, radius) {
    const options = {
      isStatic: false,
      restituion: 0,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = radius * 2;
    this.image = loadImage("Plucking mangoes/stone.png");
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
    // elipse(0, 0, this, radius);
    image(this.image, 0, 0, this.height, this.width);
    pop();
  }
}
