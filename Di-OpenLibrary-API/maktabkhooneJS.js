










  
  // creat element 
  const li = document.createElement("li")
  //add a class
  li.className = "list-group-item d-flex align-titleId-center";
  console.log(li);
  
  
  // add attribute
  li.setAttribute("title", "New Item"); 
  
  
  // add I to  li 
  li.appendChild(i);
  
  
  // replace elemenet
  titleId.replaceChild(newHead, oldHeading);
  
  
  
  // remove elements
  const lis = document.querySelectorAll("li");
  lis[0].remove();
  // or
  const list = document.querySelector("ul");
  list.removeChild(lis[2]);
  
  
  //mouse Enter on a field 
  fieldname.addEventListener("mouseenter", runEvent);
  //mouse leave the field
  dieldname.addEventListener("mouseleave", runEvent);
  //mousedown or mouseup   ###press mouse button and when pick up the button it willbe clicked
  // keydown is the same or keyup but  it working with keyboard. 
  
  
  //mousemove position and color code
  fieldname.addEventListener("mousemove", runEvent);
  function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    // position of mouse that we want show  cordinates
    heading.textContent= `MouseX: ${e.offsetx} MouseY: ${e.offsety}`;
    //color code when we move  vertical and horizontal
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  }
  
  // keydown write text in input box and  result in out of  the field  in another  field 
  const inputBox = document.getElementById("input-box");
  inputBox.addEventListener("keydown", runEvent);
  function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value); //now it show  what we type in fieldbox but result show in chorome in console 
    // if we want show result in field dann write the field like head of the fied 
    heading.innerText = e.target.value;
  }
  
  
  
  
  //focus on border that we click input textbox 
  inputBox.addEventListener("focus", runEvent);
  // click out of the input box to remvoe focus color field 
  inputBox.addEventListener("blur", runEvent);
  
  //cut a part of input textbox 
  inputBox.addEventListener("cut", runEvent);
  //past a part of text that we did cut or copied
  inputBox.addEventListener("past", runEvent);
  
  // input can cut-past - remove or all what we need for an input textbox
  inputBox.addEventListener("input", runEvent);
  
  
  
  // set a local storage  in details chrome 
  localStorage.setItem("name", "value");
  
  
  