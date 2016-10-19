
    function show_pic() {
        //alert('hi');
        var c1_elem = document.getElementById("c1");
        var map_elem = document.getElementById("map");
        var c3_elem = document.getElementById("c3");
        var c4_elem = document.getElementById("c4");
        c1_elem.style.display = 'none';
        map_elem.style.display = 'block';
        c3_elem.style.display = 'none';
        c4_elem.style.display = 'none';
    }
    function show_text() {
        var c1_elem = document.getElementById("c1");
        var map_elem = document.getElementById("map");
        var c3_elem = document.getElementById("c3");
        var c4_elem = document.getElementById("c4");
        c1_elem.style.display = 'block';
        map_elem.style.display = 'none';
        c3_elem.style.display = 'none';
        c4_elem.style.display = 'none';
    }
    function show_res() {
        var c1_elem = document.getElementById("c1");
        var map_elem = document.getElementById("map");
        var c3_elem = document.getElementById("c3");
        var c4_elem = document.getElementById("c4");
        c1_elem.style.display = 'none';
        map_elem.style.display = 'none';
        c3_elem.style.display = 'block';
        c4_elem.style.display = 'none';
    }
    function show_quiz() {
        var c1_elem = document.getElementById("c1");
        var map_elem = document.getElementById("map");
        var c3_elem = document.getElementById("c3");
        var c4_elem = document.getElementById("c4");
        c1_elem.style.display = 'none';
        map_elem.style.display = 'none';
        c3_elem.style.display = 'none';
        c4_elem.style.display = 'block';
    }

    function check() {

        q1elem = document.getElementById("q1");
    if (q1elem.checked) {
        alert('yas');
    }
    else
    {
        alert('no');
}
var rarr=document.getElementsByName("q2");
  if(rarr[0].checked){
   alert('no');
  }
if (rarr[1].checked) {
    alert('horosho');
}
if (rarr[2].checked) {
    alert('no');
}
 q3e = document.getElementById("q3");
 answer = q3e.value;
 rese = document.getElementById("rese");
 rese.innerHTML = 'вы уверенны';
    }
