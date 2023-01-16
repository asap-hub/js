const arr = [
  "Western North",
  "Western Region",
  "Ashanti region",
  "Greater Accra",
  203,
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
var result = arr.forEach((s) => {
  console.log(s);
});

for (let ar of arr) {
  if (typeof ar !== "string") continue;

  console.log(ar);
}

let x = 0;

do {
  console.log(arr);
  x++;
} while (x < arr.length);

while (x < arr.length) {
  console.log(arr[x]);
  x++;
}
