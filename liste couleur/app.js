
    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, 
                    ${Math.floor(Math.random() * 256)}, 
                    ${Math.floor(Math.random() * 256)})`;
    }


document.querySelectorAll(".liItem").forEach(item=>{
    item.addEventListener('click',function(){
        item.style.color=getRandomColor();
    });
});