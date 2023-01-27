function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

   
}
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");

   
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");

   
}


  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
       
      }
    }
    if (!event.target.matches('.dropbtn1')) {
              var dropdowns1 = document.getElementsByClassName("dropdown1-content");
              var i;
              for (i = 0; i < dropdowns1.length; i++) {
                var openDropdown1 = dropdowns1[i];
                if (openDropdown1.classList.contains('show1')) {
                  openDropdown1.classList.remove('show1');
                }
              }
            }
    if (!event.target.matches('.dropbtn2')) {
                      var dropdowns2 = document.getElementsByClassName("dropdown2-content");
                      var i;
                      for (i = 0; i < dropdowns2.length; i++) {
                        var openDropdown2 = dropdowns2[i];
                        if (openDropdown2.classList.contains('show2')) {
                          openDropdown2.classList.remove('show2');
                        }
                      }
                    }
}


//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn1')) {
//       var dropdowns1 = document.getElementsByClassName("dropdown1-content");
//       var i;
//       for (i = 0; i < dropdowns1.length; i++) {
//         var openDropdown1 = dropdowns1[i];
//         if (openDropdown1.classList.contains('show1')) {
//           openDropdown1.classList.remove('show1');
//         }
//       }
//     }
//   }
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn2')) {
//       var dropdowns2 = document.getElementsByClassName("dropdown2-content");
//       var i;
//       for (i = 0; i < dropdowns2.length; i++) {
//         var openDropdown2 = dropdowns2[i];
//         if (openDropdown2.classList.contains('show2')) {
//           openDropdown2.classList.remove('show2');
//         }
//       }
//     }
//   }
function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }

  function move1() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }
  function move2() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }

  function move3() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 82) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }
  function move4() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }
  function move5() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 72) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }
  function move6() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width  + '%';
      }
    }
  }

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
