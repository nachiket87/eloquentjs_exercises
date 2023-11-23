import { exports, storageFor } from "./crow_tech.js";

const { bigOak } = exports;

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});
