//2.เขียนโปรแกรม
// let i = 0;
// for (i = 0; i < 10; i++){
//     console.log(i);
// } //คำตอบ 0-9

//4.อ่านค่าใน list
// let color = ['red','blue','green','yellow','orange','purple']
// for (let i = 0; i < color.length; i++){
//     console.log(color[i])
// } //คำตอบ red,blue,green,yellow,orange,purple

//5.เขียนโปรแกรม โดยสร้าง list ของชื่อคน จำนวน 5 คน
let names = ['Gojo Shatoru','Yuji','Nobara Kugisaki','Megumi','Panda']
for(let i = 0; i < names.length; i++){
    if (names[i].length > 6){
        console.log("สวัสดีคุณ " + names[i])
    } else{

        console.log("Hello " + names[i])
    }
} // คำตอบ สวัสดีคุณ Gojo Shatoru
          //Hello Yuji
          //สวัสดีคุณ Nobara Kugisaki
          //Hello Megumi
          //Hello Panda
