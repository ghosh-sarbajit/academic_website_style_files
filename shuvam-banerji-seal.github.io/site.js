// Behaviour for style.css (from shuvam-banerji-seal.github.io).
// Put the first block in <head> (before the stylesheet) so the page
// never flashes the wrong theme; load this file at the end of <body>.
//
//   <script>
//     (function(){var s=null;try{s=localStorage.getItem('theme')}catch(e){}
//     var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
//     document.documentElement.setAttribute('data-theme',t);})();
//   </script>
(function(){
  const root = document.documentElement;

  // theme toggle: <button class="theme-toggle" data-theme-toggle>
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const next = root.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
      root.setAttribute('data-theme',next);
      root.style.colorScheme = next;
      try{ localStorage.setItem('theme',next); }catch(e){}
    });
  });

  // orbital picker: buttons with data-orbital="1s|2pz|3dz2|3dxy|4fxyz"
  // set the page accent (hero underline, primary button, pressed button)
  const buttons = [...document.querySelectorAll('.orbital-picker [data-orbital]')];
  function pick(btn){
    buttons.forEach(b=>b.setAttribute('aria-pressed', String(b===btn)));
    root.setAttribute('data-accent', btn.dataset.orbital);
    const name = document.querySelector('[data-orbital-name]');
    if(name) name.innerHTML = btn.innerHTML;
  }
  buttons.forEach(b=>b.addEventListener('click',()=>pick(b)));
  const start = buttons.find(b=>b.getAttribute('aria-pressed')==='true') || buttons[0];
  if(start) pick(start);
})();
