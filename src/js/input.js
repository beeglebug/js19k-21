// SAVING use numeric codes
const KEY_W = "KeyW";
const KEY_A = "KeyA";
const KEY_S = "KeyS";
const KEY_D = "KeyD";
const KEY_Q = "KeyQ";
const KEY_Z = "KeyZ";
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";
const KEY_SPACE = "Space";

const downKeys = {};

function handleKeydown({ code }) {
  if (code === KEY_SPACE && !downKeys[KEY_SPACE]) {
    shoot();
  }
  downKeys[code] = true;
}

function handleKeyup({ code }) {
  downKeys[code] = false;
}

function keyDown(...keys) {
  return keys.some((key) => !!downKeys[key]);
}

/** @global */
function bindInput(target) {
  target.addEventListener("keydown", handleKeydown);
  target.addEventListener("keyup", handleKeyup);
}

/** @global */
function handleInput() {
  const v = { x: 0, y: 0 };
  const speed = 3;
  if (keyDown(KEY_W, KEY_Z, KEY_UP)) {
    // up
    v.y -= speed;
  }

  if (keyDown(KEY_S, KEY_DOWN)) {
    // down
    v.y += speed;
  }

  if (keyDown(KEY_A, KEY_Q, KEY_LEFT)) {
    // left
    v.x -= speed;
  }

  if (keyDown(KEY_D, KEY_RIGHT)) {
    // right
    v.x += speed;
  }

  normalize(v);

  player.x += v.x * speed;
  player.y += v.y * speed;
}
