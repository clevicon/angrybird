let pupil = document.querySelectorAll(".pupil");
let body = document.querySelector(".body");
let bdcont = document.querySelector(".bdcont");

let brows = document.querySelector(".brows");
// let yy = e.clientY;

bdcont.onmousemove = function(event){
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    // alert(y);
    // console.log(e);
// clientx to get the horizontal coordinate of 
    // window.innerWidth gets the browser 
    
    for(var i=0;i<2;i++){
        pupil[i].style.left = x;
        pupil[i].style.top = y;
    }

   

    // console.log(y);

   
    if(y <= "36%"){
        $(brows).css({"top":"-15px"});

    }

    else if(y >= "74%"){
        $(brows).css({"top":"10px"});

    }

    else{
        $(brows).css({"top":"0px"});

    }



 }



// document.querySelector("body").addEventListener("mousemove",moveEye);

// function moveEye(){

//     let pupil = document.querySelectorAll(".pupil");
//     pupil.forEach(function(pupil,event){

//         let x = (pupil.getBoundingClientRect().left) + (pupil.
//             clientWidth / 2);

            
//         let y = (pupil.getBoundingClientRect().top) + (pupil.
//             clientHeight / 2);

//             let radian = Math.atan2(event.pagex - x, event.pageY - y);
//             let rotation = (radian * (180 / Math.PI) * -1) + 270;
//             pupil.style.transform = "rotate("+rotation+"deg)"
//     });

// }