var studentInfo = { name: "세현", hobby: "computer" };
studentInfo = { ...studentInfo, age: 25 };

console.log(studentInfo); // { name: '세현', hobby: 'computer', age: 25 }

studentInfo = { ...studentInfo, name: "성수", age: 24 }; // { name: '성수', hobby: 'computer', age: 24 }
console.log(studentInfo);
