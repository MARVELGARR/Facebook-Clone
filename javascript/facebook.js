let holder = document.querySelectorAll(".s-icon");

let removeUnselected = () =>{
    holder.forEach(child =>{
        child.classList.remove("active-side-item");
    })
}

holder.forEach(icon =>{

    icon.addEventListener("click", ()=>{
        removeUnselected();
        icon.classList.add("active-side-item");
    });
});
