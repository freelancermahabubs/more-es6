const student = {
  name: 'Mahabub',
  age: 15,
  class: 'Ten',
  marks: {
    math: 78,
    physics: 89,
    chemistry: 65
  },
};

const marks = student.marks
// console.log(marks);
const math = student.marks.math;
// console.log(math);

const chemistry = student['marks']['chemistry'];

const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
// console.log(marks2)
const subjects = 'physics';
const marks3 = student.marks[subjects];
console.log(marks3)