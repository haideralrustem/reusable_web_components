
// Get the modal
  var modal = document.getElementById("myModal");

  var interval_arr = []
  $('.resizable-table').mousedown(function() {
    
    let clicked = this
    let header = this.id.slice(this.id.indexOf('resizeable-table-') + 
                'resizeable-table-'.length);

    interval_arr.forEach(function(e) {
    clearInterval(e);
    
    });

    let interval = setInterval(function(){ 
      // console.log(clicked);
      $('.resizable-table-vals-'+ header).css({ // affected element
            'width': ($('#resizeable-table-'+header).width() + 'px'),// desired width
            // 'height': ($('#data-preview-table tbody tr').height() + 'px')
            });
               
    }      
    , 1);       

    interval_arr.push(interval);

  });

  $('.resizable-table').mouseup(function() {
            
    setTimeout(function() {
      interval_arr.forEach(function(e) {
      clearInterval(e);
      
      });
    }, 100);

  });
  

  function file_preview_close(clicked) {
      interval_arr.forEach(function(e) {
      clearInterval(e);
      
      });

      modal.style.display = "none";
  }
  
</script>


<script>

window.onresize = function() {
let modal = document.getElementById("myModal");

if (modal.style.display ==="block"){
  let elmnt = document.querySelector(".modal-innercontent");
  let span_close = document.querySelector('span.close');
  span_close.style.left =  elmnt.offsetLeft +
  elmnt.offsetWidth-35+'px';
  span_close.style.top =  elmnt.offsetTop-60+'px';
  
}

}

// Get the button that opens the modal
var btn = document.getElementById("file-preview-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
let span_close = document.querySelector('span.close');
span_close.style.left =  document.querySelector(".modal-innercontent").offsetLeft +
document.querySelector(".modal-innercontent").offsetWidth-35+'px';
span_close.style.top =  document.querySelector(".modal-innercontent").offsetTop-60+'px';

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  // modal.style.display = "none";
}
}


dragElement(document.querySelector(".modal-innercontent"));
// dragElement(document.querySelectorAll(".movable-content"));


function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.querySelectorAll(".movable")) {
  // if present, the header is where you move the DIV from:
  console.log('if present, the header is where you move the DIV from:')
  let arr = document.querySelectorAll(".movable");
  arr.forEach(function(e) {
    e.onmousedown = dragMouseDown;
  });
  
  
} else {
  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // set the element's new position:
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  
  let span_close = document.querySelector('span.close');
  span_close.style.left =  elmnt.offsetLeft +
    document.querySelector(".modal-innercontent").offsetWidth-35+'px'
    ;
  span_close.style.top =  document.querySelector(".modal-innercontent").offsetTop-60+'px';
  
}

function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
}
}

