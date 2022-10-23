const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]
const avgStudentMark = averageStudentMark(10);
const avgGroupMark = averageGroupMark()





console.log(avgStudentMark);
console.log(avgGroupMark);

function averageStudentMark(id) {
    findStudent = students.find(arr => arr.id === id)
    lengthStudent = findStudent.marks.length
    return findStudent.marks.reduce((a, b) => a + b) / lengthStudent
}

function averageGroupMark() {
    const mark = []
    studentsLength = students.length
    for (i = 0; i < studentsLength; i++) {
        studentsMarks = students[i].marks
        lengthMarks = studentsMarks.length
        for (a = 0; a < lengthMarks; a++) {
            allMarks = studentsMarks[a]
            mark.push(allMarks)
        }
    }
    return mark.reduce((a, b) => a + b) / mark.length
}