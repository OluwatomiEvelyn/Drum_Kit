let drum = document.querySelectorAll('.drum');

for (let i = 0; i < drum.length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        // alert('I got clicked');
        // let audio = new Audio('sounds/sfx1.mp3')
        // audio.play();

        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
    })
}


document.addEventListener('keypresss', function(e){
    makeSound(e.key)
});

let makeSound = (key) => {

    switch (key) {
        case 'w':
           let sfx1 = new Audio('sounds/sfx1.mp3')
            sfx1.play();
            break;
        case 'a':
            let sfx2 = new Audio('sounds/sfx2.mp3')
            sfx2.play();
            break;
        case 's':
            let sfx3 = new Audio('sounds/sfx3.mp3')
            sfx3.play();
            break;
        case 'd':
            let sfx4 = new Audio('sounds/sfx4.mp3')
            sfx4.play();
            break;
        case 'j':
            let sfx5 = new Audio('sounds/sfx5.mp3')
             sfx5.play();
            break;
        case 'k':
             let sfx6 = new Audio('sounds/sfx6.mp3')
             sfx6.play();
            break;
         case 'l':
            let sfx7 = new Audio('sounds/sfx7.mp3')
             sfx7.play();
            break;
                                                                                        
        default:
            break;
    }
}

//  buttonInnerHTML) {
//     case 'w':switch
//         let sfx1 = new Audio('sounds/sfx1.mp3')
//         sfx1.play();
//         break;
//         case 'w':
//             let sfx2 = new Audio('sounds/sfx2.mp3')
//             sfx1.play();
//             break;
//             case 'w':
//                 let sfx3 = new Audio('sounds/sfx3.mp3')
//                 sfx1.play();
//                 break;
//                 case 'w':
//                     let sfx4 = new Audio('sounds/sfx4.mp3')
//                     sfx1.play();
//                     break;
//                     case 'w':
//                         let sfx5 = new Audio('sounds/sfx5.mp3')
//                         sfx1.play();
//                         break;
//                         case 'w':
//                             let sfx6 = new Audio('sounds/sfx6.mp3')
//                             sfx1.play();
//                             break;
//                             case 'w':
//                                 let sfx7 = new Audio('sounds/sfx7.mp3')
//                                 sfx1.play();
//                                 break;
                                                                                    
//     default:
//         break;
// }
// (