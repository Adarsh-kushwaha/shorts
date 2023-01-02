import editly from "editly";

const argu = process.argv;

const title = argu[2];

const comments = argu.slice(3, argu.length);

console.log(title, comments);

async function shortVideoGenerator() {
  await editly({
    width: 480,
    height: 720,
    outPath: "./shorts.mp4",
    clips: [
      {
        duration: 5,
        layers: [
          { type: "video", path: "./inputVid.mp4" },
          {
            type: "subtitle",
            text: "What makes it obvious that someone is from europe and lives in India",
            fontPath: "./impact.ttf",
            textColor: "#000000",
            position: "top",
          },
          { type: "subtitle", text: "random stuff to talk about" },
        ],
      },
    ],

    audioNorm: { enable: true, gaussSize: 3, maxGain: 100 },
    clipsAudioVolume: 50,
    outputVolume: 50,
    audioTracks: [
      {
        path: "./inputAud.mpeg",
        cutFrom: 0,
        cutTo: 10,
        mixVolume: 50,
        start: 0,
      },
      //   {
      //     path: "./assets/winxp.mp3",
      //     mixVolume: 10,
      //     cutFrom: 1,
      //     cutTo: 2,
      //     start: 2,
      //   },
      //   { path: "./assets/Julen_ribas.m4a", mixVolume: 50, cutTo: 7, start: 5 },
    ],
  }).catch(console.log("error"));
}

shortVideoGenerator();
