// variable declerations
var video_item = document.querySelectorAll(".video-item");
var modal = document.querySelector(".modal");

// event handeller 
video_item.forEach(function(val){
    val.addEventListener("click",function(){
        if(modal.querySelector("div") == null)
            modal.appendChild(document.createElement("div"));
        var node = modal.querySelector("div");
        node.innerHTML = val.querySelector("span").innerHTML;
        node.classList.add("modal-video");
        modal.classList.remove("hide-me");
    });
});


// event handeller for close modal
document.querySelector(".close").addEventListener("click", function(){
    modal.classList.add("hide-me");
    modal.querySelector("div").innerHTML = "";
});











