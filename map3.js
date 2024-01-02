function appendMap(map) {
  if (map.has("a") && map.has("b")) {
    map.set("a", map.get("a"));
    map.set("b", map.get("b"));
    map.set("ab", "HiThere");
  } else {
    map.set("a", map.get("a"));
    map.set("b", map.get("b"));
  }
  return map;
}

let map = new Map([
  ["a", "Hi"],
  ["b", "There"],
]);

let modifiedMap = appendMap(map);
console.log(modifiedMap);
