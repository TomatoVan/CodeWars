function likes(names) {
  if (names.length == 0) return result = "no one likes this";
  if (names. length == 1) return result = `${names[0]} likes this`;
  if (names. length == 2) return result = `${names[0]} and ${names[1]} like this`;
  if (names. length == 3) return result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else return result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}