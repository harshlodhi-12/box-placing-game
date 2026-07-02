
// //FOR SPECIFIC BUTTON
// let fourr=document.querySelector("#four")

// fourr.addEventListener('click',(e)=>{
//     console.log(e.target)
// })


//FOR ALL BUTTON ---- EVENT DELEGATION
// let main= document.querySelector("main")

// main.addEventListener('click',(event)=>{
//     console.log(event.target)
// })

const main =document.querySelector('main')
// const box=document.querySelector('.box')
const btn=document.querySelector('button')
const timer=document.querySelector('#timer')
let overlay =document.querySelector(".overlay")
const scoree=document.querySelector('#score')

const box=document.createElement('div')
box.classList.add('box')

let boxClicked=false;//for tracking if box is clicked only 1 time or not
let interval;
let time=0;
let score=0;

const randomColor=()=>{
    let r=Math.floor(Math.random() * 256)
    let g=Math.floor(Math.random() * 256)
    let b=Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`;
}

const randomBox=()=>{
        boxClicked=false;///.new box allow only one click

      box.style.backgroundColor=randomColor()
    main.append(box)

     let mainH= main.clientHeight-box.offsetHeight;
     let mainW=main.clientWidth - box.offsetWidth;
      
    let rY=Math.random()*mainH;
    let rX=Math.random()*mainW;

    box.style.top=`${rY}px`
    box.style.left=`${rX}px`
        
}

btn.addEventListener('click',()=>{
    
    clearInterval(interval)
    

 interval = setInterval(()=>{
      randomBox()
       time+=1;
        timer.textContent=time;
    },1000)

setTimeout(()=>{
        clearInterval(interval)
        overlay.style.display="flex"
    },10000)

})
box.addEventListener('click',()=>{
    if(boxClicked) return;//already clicked once, so return

    boxClicked=true;//box clicked, so no more clicks allowed
    score+=1;
    scoree.textContent=score;
})