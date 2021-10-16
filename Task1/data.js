const fs = require("fs");


const addStudent = (id,name,subject,grade,comment) =>{
    const student = loadStudent()

    const duplicateID = student.filter((obj)=>{

        return obj.id === id

    })

    // console.log(duplicateTitles)
    // console.log(duplicateTitles.length)

    if(duplicateID.length === 0){
        student.push({
            id,name,subject,grade,comment
        })

        saveStudent(student)
        console.log('Saved Successfully')
    }
    else{
        console.log('Error duplicate id')
    }

}
/////////////////////////////////////////

const removeStudent = (id) =>{
    const student = loadStudent()

    const KeepData = student.filter((s)=>{

        return s.id !== id
    })

    saveStudent(KeepData)
    console.log('Removed')
}

//////////////////////////////////////////////////

const readStudent = (id) =>{
    const student = loadStudent()
    const students = student.find((s)=>{

        return s.id === id
    })

    if (students){
        console.log(students)
        console.log(students.name)
    }
    else {
        console.log('No Student is found')
    }
}

//////////////////////////////////////////////////////////
const listStudents = () =>{
    const student = loadStudent()
    student.forEach((s)=>{
        console.log(s.name+' : '+ s.grade)
    })
}
/////////////////////////////////////////////////////////////////

const loadStudent = () => {

  try {
    const dataBuffer = fs.readFileSync("student.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveStudent = (s) => {
  const saveData = JSON.stringify(s); 
  fs.writeFileSync("student.json", saveData);
};
/////////////////////////////////////////////////////

module.exports = {
    addStudent,removeStudent,
    readStudent,listStudents
};