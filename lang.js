function setLang(lang){
  document.body.className='lang-'+lang;
  document.documentElement.lang=lang;
  var ja=document.getElementById('btnJa'), en=document.getElementById('btnEn');
  if(ja) ja.classList.toggle('active', lang==='ja');
  if(en) en.classList.toggle('active', lang==='en');
  try{ localStorage.setItem('airis_lang', lang); }catch(e){}
}
window.addEventListener('DOMContentLoaded', function(){
  var saved='ja';
  try{ saved=localStorage.getItem('airis_lang')||'ja'; }catch(e){}
  setLang(saved);
});
