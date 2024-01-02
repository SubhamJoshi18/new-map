function map9(map) {
  if(map.has('a') && map.has('b'))
  {
    const lenA = map.has('a').length;
    const lenB = map.has('b').length;

    if(lenA !== lenB)
    {
      map.has('c') =  lenA > lenB ?  map.has('a') : map.has('b'); 
    }
    else
    {
      map.set('a', '');
      map.set('b', '');
    }
  }
  return map;
}

let map1 = new Map([
  ["a", "aaa"],
  ["b", "bb"],
  ["c", "cake"],
]);

let newarray = map9(map1);
console.log(newarray);
