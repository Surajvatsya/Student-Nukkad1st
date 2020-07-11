// bar ya cross ka marks ek sath na aaye 
// click hone k bad menu aaye
function showmenu(){
var b=document.getElementById('bar')  ;
var t=document.getElementById('times');
 var m=document.getElementById('mob-menu');

b.style.display='none'; //css ko access kya yha pe
t.style.display='block';
m.style.display='block';
}
function closemenu(){
  var b=document.getElementById('bar')  ;
  var t=document.getElementById('times');
  var m=document.getElementById('mob-menu');
  b.style.display='block';
  t.style.display='none'; 
  m.style.display='none';
}
