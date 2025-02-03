//1.เขียน Function Declaration
// function greet(name){
//     console.log('Hello ' + name);
// }
// greet('John'); //คำตอบ Hello John

//2.ให้ Function คืนค่าจากการคำนวน
// function greet(name){
//         return 'Hello ' + name;
//     }
//     greet('John'); //คำตอบ ไม่แสดงผลลัพธ์

//3.นำค่าที่ได้คืนมาจาก function มาแสดงผล โดยคำสั่ง console.log
// function greet(name){
//         return 'Hello ' + name;
//     }
// console.log (greet('John')); //คำตอบ Hello John

//4.สร้าง function ที่รับ list เป็นคะแนนของนักศึกษา (เช่น [10,20,30] จากนั้นคำนวนผลรวม
function StudentScores(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum;
  }
  
  let studentScores = [10, 20, 30];
  let totalScore = StudentScores(studentScores);
  console.log("ผลรวมคะแนนนักศึกษา:", totalScore); // คำตอบ ผลรวมคะแนนนักศึกษา: 60
