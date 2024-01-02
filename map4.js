function map4(map) {
  if (map.has("ice cream")) {
    map.set("ice cream", "Cherry");
    map.set("bread", "butter");
  } else if (map.has({})) {
    map.set("bread", "butter");
  }
  return map;
}

let map = new Map([["ice cream", "Peanuts"]]);

let modifiedMap = map4(map);
console.log(modifiedMap);
