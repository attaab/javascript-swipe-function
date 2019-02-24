/*
Hey there!,

    I am Ezekiel Saturday
        Director of the Wickend Initiatives,
        Software developer, swim coach and Teacher.


    the Wickend Initiatives is a non-profit NGO dedicated to doing the hardwork of creating more opportunity
     and possibilities for the world.


    While I was creating a webprogram with the need to detect a swipe movement on an element,
     I had created this function which seems to work just fine to suite that functionality.
    and now I am sharing it here with you for your own personal benefits.


    
    querySelectors are used by including tagName or full class names like the querySelectorAll method

The querySelectorAll method, which is defined both on the document object and on element nodes, takes a selector string and returns an arraylike object containing all the elements that it matches.

        <p > And if you go chasing
            < span class =" animal " > rabbits </ span > 
        </p >

        <p > 
            And you know you ' re going to fall 
        </ p >

        <p > 
                Tell ' em a < span class =" character " > hookah smoking
                 < span class =" animal " > caterpillar </ span > </ span >
         </p >

        <p > 
            Has given you the call
         </ p >

        < script >
                function count ( selector ) {
                    return document . querySelectorAll ( selector ) . length ;
                }

                console . log ( count (" p ") ) ; // All <p > elements
                // → 4

                console . log ( count (". animal ") ) ; // Class animal
                // → 2

                console . log ( count (" p . animal ") ) ; // Animal inside of <p >
                // → 2

                console . log ( count (" p > . animal ") ) ; // Direct child of <p >
                // → 1
        </ script >
*/

var container = document.querySelector("TAGNAME, CLASS OR ID FOR WHERE YOU WANT TO DETECT SWIPE");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      console.log("swiped left");
    } else {
      // swiped right
      console.log("swiped right");
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }  
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
};
  