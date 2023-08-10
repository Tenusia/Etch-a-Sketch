var paintColor = "BLACK";

function generateGrid(){ 
    
    var nr = document.getElementById("GridSize").value;
    var body = document.querySelector('#grid')
    if (body.hasChildNodes(row)) {body.replaceChildren()};

    for(var i = 0; i < nr; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= nr; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.classList.add("Outset");
          row.appendChild(cell); 
      } 
      body.appendChild(row); 
    } 
  }

function clearBGC(){
    var cellNodeList = document.querySelectorAll('.gridsquare');
    var i;
    for (i = 0; i < cellNodeList.length; i++) {
        cellNodeList[i].style.backgroundColor = "rgb(222, 232, 228)";
    }
}

function changeColor(color) {
    console.log(color);
    paintColor = color;
}

function paintToggle() {

}

function gridToggle() {
    var cellNodeList = document.querySelectorAll('.gridsquare');
    var i;
    for (i = 0; i < cellNodeList.length; i++) {
        if(cellNodeList[i].classList.contains("Outset")) {
            cellNodeList[i].classList.add("Empty");
            cellNodeList[i].classList.remove("Outset");
        }
        else if(cellNodeList[i].classList.contains("Empty")) {
            cellNodeList[i].classList.add("Outset");
            cellNodeList[i].classList.remove("Empty");
        }
    }
}

addEventListener("mouseover", function (e) {
    console.log(e);
    if(e.target.classList.contains("gridsquare")) {
        e.target.style.backgroundColor = paintColor;
    }
});

