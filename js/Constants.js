
const wobbleSpeed = 8;
const wobbleDist = 0.07;

const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

const scale = 20;

const overlap = (actor1, actor2) => {
  return actor1.pos.x + actor1.size.x > actor2.pos.x &&
         actor1.pos.x < actor2.pos.x + actor2.size.x &&
         actor1.pos.y + actor1.size.y > actor2.pos.y &&
         actor1.pos.y < actor2.pos.y + actor2.size.y;
}

export {overlap, wobbleSpeed, wobbleDist, playerXSpeed, gravity, jumpSpeed, scale};