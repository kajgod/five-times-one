const { parse } = require("rss-to-json");
const fs = require("fs");

const prePath = "../frontend/data/";
const dataSources = [
  "https://5times1.blogspot.com/feeds/posts/default?alt=rss",
];
const fileNames = ["diary.json"];

const convertAndSaveOne = async (source, target) => {
  // check if target file exists
  const doesExist = await fs.promises
    .access(target, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  // if exists, rename
  if (doesExist)
    await fs.promises.rename(
      target,
      target + "_" + Math.round(new Date().getTime() / 1000)
    );
  // download & convert to JSON
  const rss = await parse(source);
  let load = JSON.stringify(rss, null, 3);
  // fix HTML brackets
  load = load
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;nbsp;/g, "&nbsp; ");
  // write new file
  await fs.promises.writeFile(target, load);
  console.log(`File ${target} saved.`);
};

dataSources.forEach((source, i) => {
  const target = prePath + fileNames[i];
  convertAndSaveOne(source, target);
});
