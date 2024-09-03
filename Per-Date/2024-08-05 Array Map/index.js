let students = ["Akwila", "Jyoti", "Bagus", "Gusti", "Vicky"];
console.log(
  students.map((student) => {
    return student.toUpperCase();
  })
);

let value = 1;
console.log(value);

function myFunction(cb) {
  cb();
}

myFunction(() => {
  value = 10;
});

console.log(value);
