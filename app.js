let text= document.querySelector(".testtext")
let color=document.querySelector("#color")
let size=document.querySelector('#size')
let fontselect=document.querySelector("#fontselect");


function getstyle(property, value){
    text.style[property]=value;
}

color.addEventListener('input',function(){
    getstyle("color",color.value);
})
size.addEventListener('input',function(){
    getstyle("fontSize",`${size.value}px`)
})
 fontselect.addEventListener('change',function(){
    getstyle("fontFamily",fontselect.value)
})

