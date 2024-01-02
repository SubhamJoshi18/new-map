let map = new Map();
map.set("subham", "javascript");
map.set("rahul", "machine-learning");
map.set("sandeep", "html");
console.log(map.get("subham"));
console.log(map.has("sandeep"));

for (let [k, v] of map) {
  console.log(k, ":", v);
}
