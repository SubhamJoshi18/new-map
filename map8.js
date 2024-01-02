function map8(map) {
  if (map.has("a") || map.has("b")) {
    map.set("b", map.get("a"));
  }
  return map;
}

let map1 = new Map([
  ["a", "aaa"],

  ["c", "cake"],
]);

let newarray = map8(map1);
console.log(newarray);
