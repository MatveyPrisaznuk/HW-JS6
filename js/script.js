let number = 0;
while (number < 10) {
    console.log(number);
    number += 1
}

console.log("----------------------------");


for (let i = 0; i < 20; i += 1) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i);
}

console.log("----------------------------");

for (let i = 0; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
}

console.log("----------------------------");

let count = +prompt("Введіть число:")
for (let i = 0; i <= count; i += 1) {
    console.log(i);
    if (i >= count) {
        break
    }
}

console.log("----------------------------");

let counter = 0;
while (counter < 20) {
  counter += 1;
  if (counter % 3 === 0) {
    continue;
  }
  console.log(counter);
}
