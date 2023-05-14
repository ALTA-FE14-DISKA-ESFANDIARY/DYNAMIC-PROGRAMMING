function convertToRoman(num: number): string {
    const romanNumerals: [string, number][] = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1],
    ];
  
    let result = '';
  
    for (const [symbol, value] of romanNumerals) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
  
    return result;
  }
  
  console.log(convertToRoman(6)); 
  console.log(convertToRoman(1967));
  console.log(convertToRoman(28973));
  console.log(convertToRoman(1000000));