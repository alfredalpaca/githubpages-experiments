function newchangedisp(id) {
    var content = document.getElementById("contain"+id);
    var parent = document.getElementById("contentdiv")
    for(i = 0; i<parent.childElementCount; ++i){
        if(parent.children[i] === content){
            visibilty_toggle(parent.children[i], true);
        }
        else{
            visibilty_toggle(parent.children[i], false);
        }
    }
}
function visibilty_toggle(element, makevisible) {
    if(makevisible===true){
        element.classList.add("d-block");
        element.classList.remove("d-none");
    }
    else{
        element.classList.add("d-none");
        element.classList.remove("d-block")
    }
}