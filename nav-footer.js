// Shared nav toggle
function toggleMenu(btn){
  var m=document.getElementById('mob-menu');
  m.classList.toggle('open');
}
// Mark active nav link
(function(){
  var p=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(function(a){
    var h=a.getAttribute('href');
    if(h===p||(p===''&&h==='index.html')) a.classList.add('active');
  });
})();
// FAQ toggle
function faq(item){item.classList.toggle('open');}
// Contact form
function sendMsg(){
  var n=document.getElementById('cf-name').value.trim();
  var e=document.getElementById('cf-email').value.trim();
  var m=document.getElementById('cf-msg').value.trim();
  if(!n||!e||!m){alert('Naam, Email aur Message zaroori hai.');return;}
  document.getElementById('cf-ok').style.display='block';
  document.getElementById('cf-name').value='';
  document.getElementById('cf-email').value='';
  document.getElementById('cf-msg').value='';
}
