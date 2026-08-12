const menuButton=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -5%'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
