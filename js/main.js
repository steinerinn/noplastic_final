 document.getElementById("close").style.display ="none";

 function clear2() {

    var x = document.getElementsByClassName("close");


    
    if (x[0].style.display === "none" && x[0].style.border === 'none' && x[1].style.display === "none" && x[1].style.border && x[2].style.display === "none" && x[2].style.border && x[3].style.display === "none" && x[3].style.border) {
        x[0].style.display = "flex";
        x[1].style.display = "block";
        x[1].style.border = "1px solid black";
        x[2].style.display = "inline-block";
         x[3].style.display = "inline-block";
         document.getElementById("close").style.display ="inline-block";
          document.getElementById("open").style.display ="none";

       
    } else {
        x[0].style.display = "none";
        x[0].style.border='none';
         x[1].style.display = "none";
        x[1].style.border='none';
         x[2].style.display = "none";
        x[2].style.border='none';
        x[3].style.display = "none";
        x[3].style.border='none'
        document.getElementById("open").style.display ="inline-block";
        document.getElementById("close").style.display ="none";
      

    }
  }