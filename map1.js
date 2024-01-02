function mapBully(map) {
  if (map.has("a")) {
    map.set("b", map.get("a"));
    map.set("a", "");
  }
  return map;
}
mapBully({ a: "candy", b: "dirt" });
