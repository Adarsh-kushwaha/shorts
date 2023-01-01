import editly from "editly";

async function shortVideoGenerator() {
  await editly({
    width: 1080,
    height: 1920,
    outPath: "./shorts.mp4",
    clips: [
      {
        duration: 30,
        layers: [
          { type: "video", path: "./output.mp4" },
          { type: "news-title", text: "Facts You Dont Know" },
          { type: "subtitle", text: "random stuff to talk about" },
        ],
      },
    ],
  }).catch(console.log("error"));
}

shortVideoGenerator();
