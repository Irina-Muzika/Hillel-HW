let studentId = 12;

let student_marks = students.find(function(name){
    if(name.id === studentId)
        return name.id
})

avarage()

function avarage(){
    let sum = 0, total_marks = 0
    for(let j = 0; j < students.length; j++){
        for (let i = 0; i < students[j].marks.length; i++){
            sum = sum + students[j].marks[i]
            total_marks++
        }
    }
    let avarage = sum / total_marks
    return avarage;
}