// variable declerations
var modal = document.querySelector(".modal");

// event handeller 
document.querySelectorAll(".video-item").forEach(function(val){
    val.addEventListener("click",function(){
        if(modal.querySelector("div") == null)
            modal.appendChild(document.createElement("div"));
        var node = modal.querySelector("div");
        node.innerHTML = val.querySelector("span").innerHTML;
        node.classList.add("modal-video");
        modal.classList.remove("hide-me");
        document.querySelector(".modal-video").addEventListener("click",function(e){ e.stopPropagation(); });
    });
});

// event handeller for close modal
modal.addEventListener("click", function(){
    modal.classList.add("hide-me");
    modal.querySelector("div").innerHTML = "";
});










