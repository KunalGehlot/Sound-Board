var circles = [];

var keyData = {
  a: {
    color: "#017c34",
    sound: new Howl({
      src: ["sounds/bubbles.mp3"],
    }),
  },
  b: {
    color: "#dee723",
    sound: new Howl({
      src: ["sounds/clay.mp3"],
    }),
  },
  c: {
    color: "#5a4596",
    sound: new Howl({
      src: ["sounds/confetti.mp3"],
    }),
  },
  d: {
    color: "#876d6d",
    sound: new Howl({
      src: ["sounds/corona.mp3"],
    }),
  },
  e: {
    color: "#0cfbeb",
    sound: new Howl({
      src: ["sounds/dotted-spiral.mp3"],
    }),
  },
  f: {
    color: "#48405f",
    sound: new Howl({
      src: ["sounds/flash-1.mp3"],
    }),
  },
  g: {
    color: "#918db1",
    sound: new Howl({
      src: ["sounds/flash-2.mp3"],
    }),
  },
  h: {
    color: "#ef20fa",
    sound: new Howl({
      src: ["sounds/flash-3.mp3"],
    }),
  },
  i: {
    color: "#799349",
    sound: new Howl({
      src: ["sounds/glimmer.mp3"],
    }),
  },
  j: {
    color: "#766149",
    sound: new Howl({
      src: ["sounds/moon.mp3"],
    }),
  },
  k: {
    color: "#0c5dd0",
    sound: new Howl({
      src: ["sounds/pinwheel.mp3"],
    }),
  },
  l: {
    color: "#f445b9",
    sound: new Howl({
      src: ["sounds/piston-1.mp3"],
    }),
  },
  m: {
    color: "#0fd228",
    sound: new Howl({
      src: ["sounds/piston-2.mp3"],
    }),
  },
  n: {
    color: "#cd645c",
    sound: new Howl({
      src: ["sounds/piston-3.mp3"],
    }),
  },
  o: {
    color: "#ef0e65",
    sound: new Howl({
      src: ["sounds/splits.mp3"],
    }),
  },
  p: {
    color: "#1d538e",
    sound: new Howl({
      src: ["sounds/squiggle.mp3"],
    }),
  },
  q: {
    color: "#59536f",
    sound: new Howl({
      src: ["sounds/strike.mp3"],
    }),
  },
  r: {
    color: "#b36e68",
    sound: new Howl({
      src: ["sounds/suspension.mp3"],
    }),
  },
  s: {
    color: "#51342d",
    sound: new Howl({
      src: ["sounds/timer.mp3"],
    }),
  },
  t: {
    color: "#002bd4",
    sound: new Howl({
      src: ["sounds/ufo.mp3"],
    }),
  },
  u: {
    color: "#a1ee5c",
    sound: new Howl({
      src: ["sounds/veil.mp3"],
    }),
  },
  v: {
    color: "#e86942",
    sound: new Howl({
      src: ["sounds/wipe.mp3"],
    }),
  },
  w: {
    color: "#f2dfa6",
    sound: new Howl({
      src: ["sounds/zig-zag.mp3"],
    }),
  },
  x: {
    color: "#0e3834",
    sound: new Howl({
      src: ["sounds/prism-1.mp3"],
    }),
  },
  y: {
    color: "#20ddee",
    sound: new Howl({
      src: ["sounds/prism-2.mp3"],
    }),
  },
  z: {
    color: "#36d98f",
    sound: new Howl({
      src: ["sounds/prism-3.mp3"],
    }),
  },
};

function onKeyDown(e) {
  if (keyData[e.key]) {
    target = new Path.Circle(view.size * Point.random(), 200);
    target.fillColor = keyData[e.key].color;
    keyData[e.key].sound.play();
    circles.push(target);
  }
}

function onFrame(e) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].scale(0.92);
    circles[i].fillColor.hue += 1;
    if (circles[i].area < 1) {
      circles[i].remove();
      circles.splice(i, 1);
    }
  }
}
