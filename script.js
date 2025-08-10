// 年份
document.getElementById('year').textContent = new Date().getFullYear();

// 菜单（移动端）
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
  });
});

// 进场动效
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
