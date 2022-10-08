document.getElementById('stopbutton').onclick=illuminatedred;
document.getElementById('slowbutton').onclick=illuminatedyellow;
document.getElementById('gobutton').onclick=illuminatedgreen;

function illuminatedred(){
    clearlights();
    document.getElementById('stoplight').style.backgroundColor='red';
}
function illuminatedyellow() {
    clearlights();
    document.getElementById('slowlight').style.backgroundColor = "yellow";
  }
 function illuminatedgreen() {
    clearlights();
    document.getElementById('golight').style.backgroundColor = "Green";
  }
  function clearlights() {
    document.getElementById('stoplight').style.backgroundColor = "black";
    document.getElementById('slowlight').style.backgroundColor = "black";
    document.getElementById('golight').style.backgroundColor = "black";
  }
