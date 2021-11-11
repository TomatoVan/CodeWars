function diamond(n){
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  const repeater = ch => n => ch.repeat(n);
  const spacer = repeater(' ');
  const asterixer = repeater('*');

    let diam = '';
  for (let row = 1; row <= n; row++) {
    const spaces = Math.abs(n - ((2*row) - 1));
    const stars = n - spaces;
    diam += `${spacer(spaces / 2)}${asterixer(stars)}\n`;
  }

    return diam;
}