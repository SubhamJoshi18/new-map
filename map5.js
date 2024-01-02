function map5(map) {
  if (map.has("ice cream")) {
    map.set("yogurt", map.get("ice cream"));
  } else if (map.has("spinach")) {
    map.set("spinach", "nuts");
  }
  return map;
}

let map1 = new Map([["ice cream", "cherry"]]);

let map2 = new Map([
  ["spinach", "dirt"],
  ["ice cream", "cherry"],
]);

let map3 = new Map([["yogurt", "salt"]]);

let newmap1 = map5(map1);
let newmap2 = map5(map2);
let newmap3 = map5(map3);
console.log(newmap1);
console.log(newmap2);
console.log(newmap3);
