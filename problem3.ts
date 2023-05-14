function frog(jumps: number[]): number {
    const n = jumps.length;
  
    if (n === 1) return 0;
    if (n === 2) return Math.abs(jumps[1] - jumps[0]);
  
    const JumlahLompatan: number[] = [0, Math.abs(jumps[1] - jumps[0])];
    for (let i = 2; i < n; i++) {
      const cost1 = JumlahLompatan[i - 1] + Math.abs(jumps[i] - jumps[i - 1]); 
      const cost2 = JumlahLompatan[i - 2] + Math.abs(jumps[i] - jumps[i - 2]); 
      JumlahLompatan.push(Math.min(cost1, cost2)); 
    }
  
    return JumlahLompatan[n - 1]; 
  }
  

  console.log(frog([10, 30, 40, 20])); 
  console.log(frog([30, 10, 60, 10, 60, 50])); 