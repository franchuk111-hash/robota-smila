// Спільна логіка сайту robota-smila.com.ua

function fmtSalary(s){
  return s[0].toLocaleString('uk-UA')+' – '+s[1].toLocaleString('uk-UA')+' ₴';
}
function fmtDate(d){
  const days=Math.floor((new Date('2026-07-03')-new Date(d))/86400000);
  if(days<=0)return'сьогодні';
  if(days===1)return'вчора';
  return days+' дн. тому';
}
function vacCard(v){
  const cond = [v.exp?'Досвід від 1 року':'Без досвіду', v.typeName].join('<span class="dot">·</span>');
  return `<article class="vac">
    <button class="fav" aria-label="У обране">&#9825;</button>
    <h3><a href="vakansiya.html?id=${v.id}">${v.title}</a></h3>
    <div class="salary">${fmtSalary(v.salary)}</div>
    <div class="company"><span class="co-ico"></span>${v.company}<span class="verified">&#10003;</span></div>
    <div class="locs">Сміла<span class="dot">·</span>${v.district}<span class="dot">·</span>${v.schedule}</div>
    <div class="locs dim">${cond}</div>
    <div class="apply">
      <span class="date">${fmtDate(v.date)}</span>
      <a class="btn" href="vakansiya.html?id=${v.id}">Відгукнутися</a>
    </div>
  </article>`;
}

// Бургер-меню
function initBurger(){
  const b=document.querySelector('.burger');
  if(b)b.addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
}

// Пошук у шапці
function initSearch(){
  const inp=document.querySelector('.nav .search input');
  if(inp)inp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      location.href='vakansii.html?q='+encodeURIComponent(inp.value.trim());
    }
  });
}

document.addEventListener('DOMContentLoaded',()=>{initBurger();initSearch();});
