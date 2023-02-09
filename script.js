let school = 17;
let university = 25;
let job = 60;
let answer = prompt ("How old are you?");
if (school >= +answer) {confirm("Do you study at school?");
} else if (school < +answer && +answer < university) {confirm ("Do you study at university?");
} else if (university <= +answer && +answer < job) {confirm ("Do you have a job?");
} else confirm ("What are you doing?");


let display = 'block'
let flex = 'flex'
let grid = 'grid'
let inline = 'inline'
let none = 'none'

// const answer = prompt('Enter property display')
// switch(answer){
//     case 'block':
//         alert('display:block');
//         break;
//     case 'flex':
//         alert('display:flex');
//         break;
//     case 'grid':
//         alert("display:grid" );
//         break;
//     case 'inline':
//         alert('display:inline' );
//         break;
//     case 'none':
//         alert('display:none');
//         break;
//     default:
//         alert("Set 'display:inline block;'");
//  }




// let answer = + prompt('Please enter the number');

// while (!answer || answer < 1){
//   answer =  prompt ('Your number is incorect, please enter corect nomber')
//   answer = +(answer);
// }

// let num = 12
// alert(`${+answer} by 12 equals ${+answer * num}`);

 

// for (let i = 0; i < 52; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//     continue;
//   }  
// }


