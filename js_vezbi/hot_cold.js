let temp = [12, 23, 42, 22, 10, 15, 37];
let hot = temp[0];
let cold = temp[0];
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > hot) {
    hot = temp[i];
  } else if (temp[i] < cold) {
    cold = temp[i];
  }
}
console.log(`Najgolemata temperatura e ${hot}`);
console.log(`Najmalata temperatura e ${cold}`);
