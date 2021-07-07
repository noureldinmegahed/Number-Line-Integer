//  const showCoords = (event) => {
    //  var x = event.clientX;
    //  var y = event.clientY;
    //  var coor = "X coords: " + x + ", Y coords: " + y;
    //  document.getElementById("demo").innerText=coor;
    //  alert(coor);
    //  }
  // const dragendfun = (event) => {
  //     var x = (event.clientX/37.7952755906).toFixed(0);
  //     var y = (event.clientY/37.7952755906).toFixed(0);
  // }

    var dragItem1 = document.querySelector("#item1");
    var container = document.querySelector("#container");

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
    var moved= false;
    // container.addEventListener("touchstart", dragStart, false);
    // container.addEventListener("touchend", dragEnd, false);
    // container.addEventListener("touchmove", drag, false);
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if(moved=false){
        if(e.clientY>= "380"){
          document.getElementById("item1").src="assets/images/swimmingGirl.png"
          document.getElementById("item1").style.width="150px"
          document.getElementById("item1").style.marginTop="50px"
          document.getElementById("yOfGirl").innerText=e.clientY;
        }else if( e.clientX <= "790"){
          document.getElementById("item1").src="assets/images/flightGirl.png"
          document.getElementById("item1").style.width="120px"
        }else if(e.clientY<= "450"){
          document.getElementById("item1").src="assets/images/girl.png"
          document.getElementById("item1").style.width="50px"
        }
      }
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem1) {
        active = true;
      }
      // console.log("initialX"+ initialX);
      // console.log("initialY"+ initialY);
    }
    
    function drag(e) {

      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem1);
        if(e.clientY>= "380"){
          document.getElementById("item1").src="assets/images/swimmingGirl.png"
          document.getElementById("item1").style.width="150px"
          document.getElementById("item1").style.marginTop="50px"
          var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (e.clientX/3.7795275591).toFixed(0);
      var y = (e.clientY/3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      document.getElementById("demo").innerText=coor;
      var drag = document.getElementById("mark2");
        drag.clientX = e.clientX/3.7795275591;
        drag.style.position = "absolute";
        drag.style.top = e.clientY/1.05 +'px';
        document.getElementById("shape2").innerText=parseFloat(e.clientY/3.7795275591).toFixed(0);
        }else if( e.clientX <= "790"){
  
          document.getElementById("item1").src="assets/images/flightGirl.png"
          document.getElementById("item1").style.width="120px"
          var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (e.clientX/3.7795275591).toFixed(0);
      var y = (e.clientY/3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      document.getElementById("demo").innerText=coor;
      var drag = document.getElementById("mark2");
        drag.clientX = e.clientX/3.7795275591;
        drag.style.position = "absolute";
        drag.style.top = e.clientY/1.05 +'px';
        document.getElementById("shape2").innerText=parseFloat(e.clientY/3.7795275591).toFixed(0);
        }else if(e.clientY<= "450"){
  
          document.getElementById("item1").src="assets/images/girl.png"
          document.getElementById("item1").style.width="50px"
          var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (e.clientX/3.7795275591).toFixed(0);
      var y = (e.clientY/3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      document.getElementById("demo").innerText=coor;
      var drag = document.getElementById("mark2");
        drag.clientX = e.clientX/3.7795275591;
        drag.style.position = "absolute";
        drag.style.top = e.clientY/1.05 +'px';
        document.getElementById("shape2").innerText=parseFloat(e.clientY/3.7795275591).toFixed(0);
        }
      }
    }
    
    function dragEnd(e) {
      if(moved = false){
        if(e.clientY>= "380"){
          document.getElementById("item1").src="assets/images/swimmingGirl.png"
          document.getElementById("item1").style.width="150px"
          document.getElementById("item1").style.marginTop="50px"
          document.getElementById("yOfGirl").innerText=e.clientY;
        }else if( e.clientX <= "790"){
          document.getElementById("item1").src="assets/images/flightGirl.png"
          document.getElementById("item1").style.width="120px"
        }else if(e.clientY<= "450"){
  
          document.getElementById("item1").src="assets/images/girl.png"
          document.getElementById("item1").style.width="50px"
        }
      }
      initialX = currentX;
      initialY = currentY;
      active = false;
      moved = false
    }

    

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      // console.log(xPos + "px " + yPos + " px")
    }


    // var dragItem2 = document.querySelector("#item2");
    // var container = document.querySelector("#container");

    // var active2 = false;
    // var currentX2;
    // var currentY2;
    // var initialX2;
    // var initialY2;
    // var xOffset2 = 0;
    // var yOffset2 = 0;

    // container.addEventListener("touchstart", dragStart2, false);
    // container.addEventListener("touchend", dragEnd2, false);
    // container.addEventListener("touchmove", drag2, false);

    // container.addEventListener("mousedown", dragStart2, false);
    // container.addEventListener("mouseup", dragEnd2, false);
    // container.addEventListener("mousemove", drag2, false);

    // function dragStart2(e) {
    //   if (e.type === "touchstart") {
    //     initialX2 = e.touches[0].clientX - xOffset2;
    //     initialY2 = e.touches[0].clientY - yOffset2;
    //   } else {
    //     initialX2 = e.clientX - xOffset2;
    //     initialY2 = e.clientY - yOffset2;
    //   }

    //   if (e.target === dragItem2) {
    //     active2 = true;
    //   }
    // }

    // function dragEnd2(e) {
    //   initialX2 = currentX2;
    //   initialY2 = currentY2;

    //   active2 = false;
    // }

    // function drag2(e) {
    //   if (active2) {
      
    //     e.preventDefault();
      
    //     if (e.type === "touchmove") {
    //       currentX2 = e.touches[0].clientX - initialX2;
    //       currentY2 = e.touches[0].clientY - initialY2;
    //     } else {
    //       currentX2 = e.clientX - initialX2;
    //       currentY2 = e.clientY - initialY2;
    //     }

    //     xOffset2 = currentX2;
    //     yOffset2 = currentY2;

    //     setTranslate(currentX2, currentY2, dragItem2);
    //   }
    // }

    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }







    // var dragItem3 = document.querySelector("#item3");
    // var container = document.querySelector("#container");

    // var active3 = false;
    // var currentX3;
    // var currentY3;
    // var initialX3;
    // var initialY3;
    // var xOffset3 = 0;
    // var yOffset3 = 0;

    // container.addEventListener("touchstart", dragStart3, false);
    // container.addEventListener("touchend", dragEnd3, false);
    // container.addEventListener("touchmove", drag3, false);

    // container.addEventListener("mousedown", dragStart3, false);
    // container.addEventListener("mouseup", dragEnd3, false);
    // container.addEventListener("mousemove", drag3, false);

    // function dragStart3(e) {
    //   if (e.type === "touchstart") {
    //     initialX3 = e.touches[0].clientX - xOffset3;
    //     initialY3 = e.touches[0].clientY - yOffset3;
    //   } else {
    //     initialX3 = e.clientX - xOffset3;
    //     initialY3 = e.clientY - yOffset3;
    //   }

    //   if (e.target === dragItem3) {
    //     active3 = true;
    //   }
    // }

    // function dragEnd3(e) {
    //   initialX3 = currentX3;
    //   initialY3 = currentY3;

    //   active3 = false;
    // }

    // function drag3(e) {
    //   if (active3) {
      
    //     e.preventDefault();
      
    //     if (e.type === "touchmove") {
    //       currentX3 = e.touches[0].clientX - initialX3;
    //       currentY3 = e.touches[0].clientY - initialY3;
    //     } else {
    //       currentX3 = e.clientX - initialX3;
    //       currentY3 = e.clientY - initialY3;
    //     }

    //     xOffset3 = currentX3;
    //     yOffset3 = currentY3;

    //     setTranslate(currentX3, currentY3, dragItem3);
    //   }
    // }

    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }