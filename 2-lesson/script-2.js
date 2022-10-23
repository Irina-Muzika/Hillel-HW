
//     const action = prompt(`Enter action +, -, *, /`)

//         const A = prompt(`Enter operand A`)
  
//             const B = prompt(`Enter operand B`)
           
//                 function value() {
//                 if (action === `+`) {
//                     alert(`${Number(A)} ${action} ${Number(B)} = ${Number(A) + Number(B)}`)
//                 }
//                 else if (action === `-`) {
//                     alert(`${Number(A)} ${action} ${Number(B)} = ${Number(A) - Number(B)}`)
//                 }

//                 else if (action === `*`) {

//                     alert(`${Number(A)} ${action} ${Number(B)} = ${Number(A) * Number(B)}`)
//                 }

//                 else if (action === `/`) {
//                     alert(`${Number(A)} ${action} ${Number(B)} = ${Number(A) / Number(B)}`)
//                 }
//                 else {
//                     alert(`wrong value`)
//                 }

//             } 
       


// value()

const value = prompt(`Enter action +, -, *, /`); const A = prompt(`Enter operand A`); const B = prompt(`Enter operand B`);

  function calculator (){

    switch(value) {
        case `+`:
         alert(`${Number(A)} ${value} ${Number(B)} = ${Number(A) + Number(B)}`);
            break
            case `-`:
         alert(`${Number(A)} ${value} ${Number(B)} = ${Number(A) - Number(B)}`);
            break
            case `*`:
         alert(`${Number(A)} ${value} ${Number(B)} = ${Number(A) * Number(B)}`);
            break
            case `/`:
                alert(`${Number(A)} ${value} ${Number(B)} = ${Number(A) / Number(B)}`);
                   break
                   default:
                    alert (wrong )
                 
}

}

calculator()


