

function generateGrid(){ 
    
    var nr = document.getElementById("GridSize").value;
    
    //var body = document.body; // whatever you want to append the rows to: 
    var body = document.querySelector('#grid')
    if (body.hasChildNodes(row)) {body.replaceChildren()};

    for(var i = 0; i < nr; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= nr; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          //cell.innerText = (i * nr) + x;
          row.appendChild(cell); 
      } 
      body.appendChild(row); 
    } 
    //document.getElementById("code").innerText = body.innerHTML;
  }

function clearBGC(){
    var cellNodeList = document.querySelectorAll('.gridsquare');
    var i;
    for (i = 0; i < cellNodeList.length; i++) {
        cellNodeList[i].style.backgroundColor = "WHITE";
    }
}

addEventListener("mouseover", function (e) {
    console.log(e);
    if(e.target.className == "gridsquare") {
        e.target.style.backgroundColor = "RED";
    }
});