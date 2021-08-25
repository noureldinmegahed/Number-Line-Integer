var num1 = 1;
var num2 = 1;
var num3 = 1;
var girlY;
var girlX;
var fishY;
var fishX;
var birdY;
var birdX;
var dragItem1 = document.querySelector("#item1");
var container = document.querySelector("#container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var moved = false;
container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(a) {
  if ((moved = false)) {
    if (a.clientY >= "385") {
      document.getElementById("item1").src = "assets/images/swimmingGirl.png";
      document.getElementById("yOfGirl").innerText = a.clientY;
    } else if (a.clientX <= "790") {
      document.getElementById("item1").src = "assets/images/flightGirl.png";
    } else if (a.clientY <= "450") {
      document.getElementById("item1").src = "assets/images/girl.png";
    }
  }
  if (a.type === "touchstart") {
    initialX = a.touches[0].clientX - xOffset;
    initialY = a.touches[0].clientY - yOffset;
  } else {
    initialX = a.clientX - xOffset;
    initialY = a.clientY - yOffset;
  }

  if (a.target === dragItem1) {
    active = true;
  }
}

function drag(a) {
  if (active) {
    a.preventDefault();

    if (a.type === "touchmove") {
      currentX = a.touches[0].clientX - initialX;
      currentY = a.touches[0].clientY - initialY;
    } else {
      currentX = a.clientX - initialX;
      currentY = a.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem1);

    if (a.clientY >= "385") {
      if (a.clientY >= "605" || a.clientX >= "1150" || a.clientX <= "410") {
        location.reload();
      }
      document.getElementById("item1").src = "assets/images/swimmingGirl.png";
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (a.clientX / 3.7795275591).toFixed(0);
      var y = (a.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag = document.getElementById("mark2");
      drag.clientX = a.clientX / 3.7795275591;
      drag.style.position = "absolute";
      drag.style.top = a.clientY / 1.05 + "px";
      document.getElementById("shape2").innerText = "Y of Girl: " + parseFloat(a.clientY / 3.7795275591).toFixed(0);
      document.getElementById("yOfGirl").innerText = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var valued = document.getElementById("yOfGirl");
      valued.innerText = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      valued.style.position = "absolute";
      valued.style.top = a.clientY / 1.05 + "px";
      var girlYloc = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var girlXloc = parseFloat(a.clientX / 3.7795275591).toFixed(0);
      girlY = girlYloc;
      girlX = girlXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
    } else if (a.clientX <= "790") {
      if (a.clientY >= "605" || a.clientX >= "1150" || a.clientX <= "410") {
        location.reload();
      }
      document.getElementById("yOfGirl").innerText = parseFloat(
        a.clientY / 3.7795275591
      ).toFixed(0);
      document.getElementById("item1").src = "assets/images/flightGirl.png";
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (a.clientX / 3.7795275591).toFixed(0);
      var y = (a.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag = document.getElementById("mark2");
      drag.clientX = a.clientX / 3.7795275591;
      drag.style.position = "absolute";
      drag.style.top = a.clientY / 1.05 + "px";
      document.getElementById("shape2").innerText =
        "Y of Girl: " + parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var valued = document.getElementById("yOfGirl");
      valued.innerText = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      valued.style.position = "absolute";
      valued.style.top = a.clientY / 1.05 + "px";
      var girlYloc = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var girlXloc = parseFloat(a.clientX / 3.7795275591).toFixed(0);
      girlY = girlYloc;
      girlX = girlXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
    } else if (a.clientY <= "450") {
      if (a.clientY >= "605" || a.clientX >= "1150" || a.clientX <= "410") {
        location.reload();
      }
      var valued = document.getElementById("yOfGirl");
      valued.innerText = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      valued.style.position = "absolute";
      valued.style.top = a.clientY / 1.05 + "px";
      document.getElementById("item1").src = "assets/images/girl.png";
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (a.clientX / 3.7795275591).toFixed(0);
      var y = (a.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag = document.getElementById("mark2");
      drag.clientX = a.clientX / 3.7795275591;
      drag.style.position = "absolute";
      drag.style.top = a.clientY / 1.05 + "px";
      document.getElementById("shape2").innerText =
        "Y of Girl: " + parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var girlYloc = parseFloat(a.clientY / 3.7795275591).toFixed(0);
      var girlXloc = parseFloat(a.clientX / 3.7795275591).toFixed(0);
      girlY = girlYloc;
      girlX = girlXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
    }
  }
  var gg = Number(girlY);
  var ff = Number(fishY);
  var bb = Number(birdY);
  const objects = [gg, bb, ff];

  function myFunction() {
    var num = objects;
    var n = num.toString();
    objects.sort(function(a, b){return b - a});
    console.log(objects)
    var number1 = objects[0];
    var number2 = objects[1];
    var number3 = objects[2];
    var arra = number1 + "<" + number2 + "<" + number3;
    document.getElementById("txt1").innerHTML = number1;
    document.getElementById("txt3").innerHTML = number2;
    document.getElementById("txt5").innerHTML = number3;
    if(girlY ==	undefined){
      girlY=86;
    }
    if(birdY ==	undefined){
      birdY=49;
    }
    if(fishY ==	undefined){
      fishY=141;
    }
  }
  myFunction();
  
}

function dragEnd(a) {
  if ((moved = false)) {
    if (a.clientY >= "385") {
      document.getElementById("item1").src = "assets/images/swimmingGirl.png";
      document.getElementById("yOfGirl").innerText = a.clientY;
    } else if (a.clientX <= "790") {
      document.getElementById("item1").src = "assets/images/flightGirl.png";
      document.getElementById("yOfGirl").innerText = a.clientY;
    } else if (a.clientY <= "450") {
      document.getElementById("item1").src = "assets/images/girl.png";
      document.getElementById("yOfGirl").innerText = a.clientY;
    }
  }
  initialX = currentX;
  initialY = currentY;
  active = false;
  moved = false;
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

var dragItem2 = document.querySelector("#item2");
var container = document.querySelector("#container");

var active2 = false;
var currentX2;
var currentY2;
var initialX2;
var initialY2;
var xOffset2 = 0;
var yOffset2 = 0;
var moved2 = false;
container.addEventListener("mousedown", dragStart2, false);
container.addEventListener("mouseup", dragEnd2, false);
container.addEventListener("mousemove", drag2, false);

function dragStart2(e) {
  if ((moved2 = false)) {
    if (e.clientY >= "385") {
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
      document.getElementById("item2").src = "assets/images/swimmingbird.png";
      document.getElementById("yOfbird").innerText = e.clientY;
    } else if (e.clientX <= "790") {
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
      document.getElementById("item2").src = "assets/images/bird.png";
    } else if (e.clientY <= "450") {
      document.getElementById("item2").src = "assets/images/bird.png";

      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
    }
  }
  if (e.type === "touchstart") {
    initialX2 = e.touches[0].clientX - xOffset2;
    initialY2 = e.touches[0].clientY - yOffset2;
  } else {
    initialX2 = e.clientX - xOffset2;
    initialY2 = e.clientY - yOffset2;
  }

  if (e.target === dragItem2) {
    active2 = true;
  }
}

function drag2(e) {
  if (active2) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX2 = e.touches[0].clientX - initialX2;
      currentY2 = e.touches[0].clientY - initialY2;
    } else {
      currentX2 = e.clientX - initialX2;
      currentY2 = e.clientY - initialY2;
    }

    xOffset2 = currentX2;
    yOffset2 = currentY2;

    setTranslate(currentX2, currentY2, dragItem2);
    if (e.clientY >= "385") {
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (e.clientY >= "605" || e.clientX >= "1150" || e.clientX <= "410") {
        location.reload();
      }
      document.getElementById("item2").src = "assets/images/swimmingbird.png";
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (e.clientX / 3.7795275591).toFixed(0);
      var y = (e.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag2 = document.getElementById("mark3");
      drag2.clientX = e.clientX / 3.7795275591;
      drag2.style.position = "absolute";
      drag2.style.top = e.clientY / 1.05 + "px";
      document.getElementById("shape2").innerText =
        "Y of Bird: " + parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
    } else if (e.clientX <= "790") {
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (e.clientY >= "605" || e.clientX >= "1150" || e.clientX <= "410") {
        location.reload();
      }
      document.getElementById("item2").src = "assets/images/bird.png";
      document.getElementById("shape2").innerText =
        "Y of Bird: " + parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (e.clientX / 3.7795275591).toFixed(0);
      var y = (e.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag2 = document.getElementById("mark3");
      drag2.clientX = e.clientX / 3.7795275591;
      drag2.style.position = "absolute";
      drag2.style.top = e.clientY / 1.05 + "px";
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
    } else if (e.clientY <= "450") {
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (e.clientY >= "605" || e.clientX >= "1150" || e.clientX <= "410") {
        location.reload();
      }
      document.getElementById("item2").src = "assets/images/bird.png";
      document.getElementById("shape2").innerText =
        "Y of Bird: " + parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";

      var drag2 = document.getElementById("mark3");
      drag2.clientX = e.clientX / 3.7795275591;
      drag2.style.position = "absolute";
      drag2.style.top = e.clientY / 1.05 + "px";
      var birdYloc = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      var birdXloc = parseFloat(e.clientX / 3.7795275591).toFixed(0);
      birdY = birdYloc;
      birdX = birdXloc;
    }
  }
}

function dragEnd2(e) {
  if ((moved2 = false)) {
    if (e.clientY >= "385") {
      document.getElementById("item2").src = "assets/images/swimmingbird.png";
      document.getElementById("yOfbird").innerText = e.clientY;
      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
    } else if (e.clientX <= "790") {
      document.getElementById("item2").src = "assets/images/bird.png";

      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
    } else if (e.clientY <= "450") {
      document.getElementById("item2").src = "assets/images/bird.png";

      var valued2 = document.getElementById("yOfBird");
      valued2.innerText = parseFloat(e.clientY / 3.7795275591).toFixed(0);
      valued2.style.position = "absolute";
      valued2.style.top = e.clientY / 1.05 + "px";
    }
  }
  initialX2 = currentX2;
  initialY2 = currentY2;
  active2 = false;
  moved2 = false;
}

function setTranslate2(xPos2, yPos2, el2) {
  el2.style.transform = "translate3d(" + xPos2 + "px, " + yPos2 + "px, 0)";
}

var dragItem3 = document.querySelector("#item3");
var container = document.querySelector("#container");

var active3 = false;
var currentX3;
var currentY3;
var initialX3;
var initialY3;
var xOffset3 = 0;
var yOffset3 = 0;
var moved3 = false;
container.addEventListener("mousedown", dragStart3, false);
container.addEventListener("mouseup", dragEnd3, false);
container.addEventListener("mousemove", drag3, false);

function dragStart3(b) {
  if ((moved3 = false)) {
    if (b.clientY >= "385") {
      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/fish.png";
      document.getElementById("yOffish").innerText = b.clientY;
    } else if (b.clientX <= "790") {
      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/flightfish.png";
    } else if (b.clientY <= "450") {
      var drag3 = document.getElementById("mark1");
      drag3.clientX = b.clientX / 3.7795275591;
      drag3.style.position = "absolute";
      drag3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/flightfish.png";

      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
    }
  }
  if (b.type === "touchstart") {
    initialX3 = b.touches[0].clientX - xOffset3;
    initialY3 = b.touches[0].clientY - yOffset3;
  } else {
    initialX3 = b.clientX - xOffset3;
    initialY3 = b.clientY - yOffset3;
  }

  if (b.target === dragItem3) {
    active3 = true;
  }
}

function drag3(b) {
  if (active3) {
    b.preventDefault();

    if (b.type === "touchmove") {
      currentX3 = b.touches[0].clientX - initialX3;
      currentY3 = b.touches[0].clientY - initialY3;
    } else {
      currentX3 = b.clientX - initialX3;
      currentY3 = b.clientY - initialY3;
    }

    xOffset3 = currentX3;
    yOffset3 = currentY3;

    setTranslate(currentX3, currentY3, dragItem3);
    if (b.clientY >= "385") {
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (b.clientY >= "605" || b.clientX >= "1150" || b.clientX <= "410") {
        location.reload();
      }
      var drag3 = document.getElementById("mark1");
      drag3.clientX = b.clientX / 3.7795275591;
      drag3.style.position = "absolute";
      drag3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/fish.png";
      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (b.clientX / 3.7795275591).toFixed(0);
      var y = (b.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      document.getElementById("shape2").innerText =
        "Y of Fish: " + parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
    } else if (b.clientX <= "790") {
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (b.clientY >= "605" || b.clientX >= "1150" || b.clientX <= "410") {
        location.reload();
      }
      document.getElementById("item3").src = "assets/images/flightfish.png";

      var coor = "X coords: " + x + ", Y coords: " + y;
      var x = (b.clientX / 3.7795275591).toFixed(0);
      var y = (b.clientY / 3.7795275591).toFixed(0);
      var coor = "X coords: " + x + ", Y coords: " + y;
      var drag3 = document.getElementById("mark1");
      drag3.clientX = b.clientX / 3.7795275591;
      drag3.style.position = "absolute";
      drag3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("shape2").innerText =
        "Y of Fish: " + parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
    } else if (b.clientY <= "450") {
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
      document.getElementById("weg").innerText = girlY;
      document.getElementById("wef").innerText = fishY;
      document.getElementById("web").innerText = birdY;
      if (b.clientY >= "605" || b.clientX >= "1150" || b.clientX <= "410") {
        location.reload();
      }
      document.getElementById("shape2").innerText =
        "Y of Fish: " + parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var drag3 = document.getElementById("mark1");
      drag3.clientX = b.clientX / 3.7795275591;
      drag3.style.position = "absolute";
      drag3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/flightfish.png";

      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
      var fishYloc = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      var fishXloc = parseFloat(b.clientX / 3.7795275591).toFixed(0);
      fishY = fishYloc;
      fishX = fishXloc;
    }
  }
}

function dragEnd3(b) {
  if ((moved3 = false)) {
    if (b.clientY >= "385") {
      document.getElementById("item3").src = "assets/images/fish.png";
      document.getElementById("yOffish").innerText = b.clientY;
      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
    } else if (b.clientX <= "790") {
      document.getElementById("item3").src = "assets/images/flightfish.png";
      document.getElementById("yOffish").innerText = b.clientY;

      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
    } else if (b.clientY <= "450") {
      var drag3 = document.getElementById("mark1");
      drag3.clientX = b.clientX / 3.7795275591;
      drag3.style.position = "absolute";
      drag3.style.top = b.clientY / 1.03 + "px";
      document.getElementById("item3").src = "assets/images/flightfish.png";

      var valued3 = document.getElementById("yOffish");
      valued3.innerText = parseFloat(b.clientY / 3.7795275591).toFixed(0);
      valued3.style.position = "absolute";
      valued3.style.top = b.clientY / 1.03 + "px";
    }
  }
  initialX3 = currentX3;
  initialY3 = currentY3;
  active3 = false;
  moved3 = false;
}

function setTranslate3(xPos3, yPos3, el3) {
  el3.style.transform = "translate3d(" + xPos3 + "px, " + yPos3 + "px, 0)";
}

function hidenuml1() {
  num1 = num1 + 1;
  var numli1 = document.getElementById("numline1");
  if (num1 % 2 == 0) {
    document.getElementById("part1").style.visibility = "hidden";
    numli1.src = "assets/images/notselected.png";
  } else {
    document.getElementById("part1").style.visibility = "visible";
    numli1.src = "assets/images/Selected.png";
  }
}
function hidenuml2() {
  num2 = num2 + 1;
  var numli2 = document.getElementById("numline2");
  if (num2 % 2 == 0) {
    document.getElementById("yOfBird").style.visibility = "hidden";
    document.getElementById("yOffish").style.visibility = "hidden";
    document.getElementById("yOfGirl").style.visibility = "hidden";
    numli2.src = "assets/images/notselected.png";
  } else {
    document.getElementById("yOfBird").style.visibility = "visible";
    document.getElementById("yOffish").style.visibility = "visible";
    document.getElementById("yOfGirl").style.visibility = "visible";
    numli2.src = "assets/images/Selected.png";
  }
}
function hidenuml3() {
  num3 = num3 + 1;
  var numli3 = document.getElementById("numline3");
  if (num3 % 2 == 0) {
    document.getElementById("nomo").style.visibility = "hidden";
    numli3.src = "assets/images/notselected.png";
  } else {
    document.getElementById("nomo").style.visibility = "visible";
    numli3.src = "assets/images/Selected.png";
  }
}