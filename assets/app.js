// Спільна логіка сайту robota-smila.com.ua

function fmtSalary(s){
  return s[0].toLocaleString('uk-UA')+' – '+s[1].toLocaleString('uk-UA')+' грн';
}
function fmtDate(d){
  const days=Math.floor((new Date('2026-07-03')-new Date(d))/86400000);
  if(days<=0)return'сьогодні';
  if(days===1)return'вчора';
  return days+' дн. тому';
}
function vacCard(v){
  return `<article class="vac">
    <h3><a href="vakansiya.html?id=${v.id}">${v.title}</a></h3>
    <div class="company">${v.company}</div>
    <div class="salary">${fmtSalary(v.salary)}</div>
    <div class="tags">
      <span class="tag">${v.typeName}</span>
      <span class="tag gray">${v.schedule}</span>
      ${v.exp?'':'<span class="tag">Без досвіду</span>'}
      <span class="tag gray">📍 Сміла, ${v.district}</span>
    </div>
    <p style="color:var(--muted);margin:8px 0 0">${v.short}</p>
    <div class="foot">
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
