



//writing letter1
//letters are arrays so that I can pass them to the typewriter function
/*var letter1 = new Array(
    "There are only 10 types of people in the world:", 
    "Those who understand binary, and those who don't"
    );*/


//Creating a typewriting function. Credit to https://css-tricks.com/snippets/css/typewriter-effect/
// set up text to print, each item in array is new line
// set up text to print, each item in array is new line
var aText = new Array(
    "There are only 10 types of people in the world:", 
    "Those who understand binary, and those who don't"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("letter1");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();




/*
function typewriter(letter, destinationId)
    {
        var destination = document.getElementById(destinationId);
        var iIndex = 0;
        var iTextPos = 0;
        var sContents = "";

        function type() {
            if (iIndex >= letter.length) return;

            sContents = letter
            .slice(0, iIndex)
            .join("<br />");

            destination.innerHTML =
            sContents +
            (iIndex > 0 ? "<br />" : "") +
            letter[iIndex].substring(0, iTextPos) +
            "_";

            if (iTextPos < letter[iIndex].length) {
                iTextPos++;
                setTimeout(type, iSpeed);
            } else {
                iIndex++;
                iTextPos = 0;
    
                if (iIndex < letter.length) {
                    setTimeout(type, 500);
                } else {
                    destination.innerHTML = letter.join("<br />");
                }
            }
        }
        type();
    }     

    
    
    typewriter(letter1, "letter 1");
*/

/*
    var aText = new Array(
        "There are only 10 types of people in the world:", 
        "Those who understand binary, and those who don't"
        );

        
         
        function typewriter(letter)
        {
         var aText = letter;
         
         var iArrLength = aText[0].length; // the length of the text array*
         var iIndex = 0; // start printing array at this posision
         var iTextPos = 0; // initialise text position* might want to change
         var sContents = ''; // initialise contents variable
         var iRow; // initialise current row 
    
         sContents =  ' ';
         iRow = Math.max(0, iIndex-iScrollAt);
         var destination = document.getElementById("letter1");
         
    
         
         while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br />';
         }
         destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
         if ( iTextPos++ == iArrLength ) {
          iTextPos = 0;
          iIndex++;
          if ( iIndex != aText.length ) {
           iArrLength = aText[iIndex].length;
           setTimeout("typewriter()", 500);
          }
         } else {
          setTimeout("typewriter()", iSpeed);
         }
        }

*/

const sky = document.querySelector('.sky');
const starCount = 450;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Random size between 1px and 3px
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  
  // Random positioning
  star.style.left = `${Math.random() * 100}vw`;
  //adjusted vh 
  star.style.top = `${Math.random() * 300}vh`;
  
  // Custom CSS variables for individual animation timing
  star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
  star.style.setProperty('--delay', `${Math.random() * 5}s`);
  
  sky.appendChild(star);
}