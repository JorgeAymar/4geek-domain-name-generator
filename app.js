let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = ["com", "net", "us", "io"];

function getWord(arr) {
  let i = arr.length;
  x = Math.floor(Math.random() * i);
  return arr[x];
}

for (let i = 0; i < 8; i++) {
  console.log(
    getWord(pronoun) + getWord(adj) + getWord(noun) + "." + getWord(ext)
  );
}
