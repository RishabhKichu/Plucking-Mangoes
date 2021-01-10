class SlingShot {
  constructor(b1, p1) {
    var options = {
      bodyA: b1,
      pointB: p1,
      stiffness: 0.1,
      length: 30,
    };
    this.constaint = Constraint.create(options);
    World.add(world, this.constaint);
  }

  release() {
    this.constaint.bodyA = null;
  }

  display() {
    push();
    if (this.constaint.bodyA != null) {
      var body1 = this.constaint.bodyA.position;
      var body2 = this.constaint.pointB;
      strokeWeight(2);
      stroke("white");
      line(body1.x, body1.y, body2.x, body2.y);
      pop();
    }
  }
}
