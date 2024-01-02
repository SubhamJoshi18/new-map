function mapShare(map) {
  if (map.has("a")) {
    map.set("b", map.get("a"));
    delete map.delete("c");
  }
  return map;
}

let myMap = new Map([
  ["a", "aaa"],
  ["b", "bbb"],
  ["c", "ccc"],
]);

let modifiedMap = mapShare(myMap);
console.log(modifiedMap);
