function map6(map) {
  if (map.has("potato")) {
    map.set("fries", map.get("potato"));
  } else if (map.has("salad")) {
    map.set("spinach", map.get("salad"));
    map.set("fries", map.get("potato"));
  }
  return map;
}

let map1 = new Map([["potato", "ketchup"]]);

let map2 = new Map([["potato", "butter"]]);

let map3 = new Map([
  ["spinach", "oil"],
  ["potato", "ketchup"],
]);

let newmap1 = map6(map1);
let newmap2 = map6(map2);
let newmap3 = map6(map3);

console.log(newmap1);
console.log(newmap2);
console.log(newmap3);
