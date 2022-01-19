const input = process.argv.slice(2);

for (let e of input) {
     e = Number(e);
  if (isNaN(e) || e > 0) {
     setTimeout(() => process.stdout.write('\x07'), e * 1000);
    
  }

} 

