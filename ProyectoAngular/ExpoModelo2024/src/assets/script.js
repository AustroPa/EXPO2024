console.log("aa");
function imageZoom(imgID, resultID){
    var img, lens, result, cx, cy;
    img = document.getElementById("DIV");
    lens.setAttribute("class", "img-zoom-lens");

    img.parentElement.insertBefore(lens, img);

    cx=result.offsetWidth / lens.offsetWidth;
    cy=result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage="url(`" + img.src + "`)";
    result.style.backgroundSize=(img.width * cx) + "px " + (img.height * cy) + "px";
    
    lens.addEventLidtener("mousemove", moveLens);
    img.addEventLidtener("mousemove", moveLens);

    lens.addEventLidtener("touchmove", moveLens);
    img.addEventLidtener("touchmove", moveLens);

    function moveLens(e){

        var pos, x, y;
        pos=getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        if(x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth}
        if(x < 0) { x = 0;}
        if(y > img.height - lens.offsetHeight) { x = img.height - lens.offsetHeight}
        if(y < 0) { x = 0;}
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e){
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX -a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x : x, y : y};
    }
}