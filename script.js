// Newlife Prayer Center - ABOVE ONLY
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
function updateCountdown() {
  const now = new Date();
  let next = new Date(now);
  next.setHours(8, 0, 0, 0);
  if (now >= next) next.setDate(next.getDate() + 1);
  const diff = next - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cdH').textContent = String(h).padStart(2, '0');
  document.getElementById('cdM').textContent = String(m).padStart(2, '0');
  document.getElementById('cdS').textContent = String(s).padStart(2, '0');
  const isToday = next.getDate() === now.getDate();
  document.getElementById('cdLabel').textContent = isToday ? 'Counting down to 8:00 AM today' : 'Counting down to 8:00 AM tomorrow';
}
setInterval(updateCountdown, 1000);
updateCountdown();
document.getElementById('visitForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const day = document.getElementById('day').value;
  const msg = document.getElementById('formMsg');
  if (!name) { msg.textContent = 'Please enter your name.'; msg.style.color = 'red'; return; }
  msg.style.color = 'green';
  msg.textContent = 'Karibu, ' + name + '! We can\'t wait to welcome you for ' + day + '. You are ABOVE ONLY!';
  this.reset();
});