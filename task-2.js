const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

const obj = JSON.parse(jsonString);

console.log(jsonString === JSON.stringify(obj));

console.log(jsonString);
console.log(JSON.stringify(obj));
