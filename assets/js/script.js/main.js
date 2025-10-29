// main.js - comportamiento mínimo y accesible
document.addEventListener('DOMContentLoaded', function () {
  // Año en footer
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // Menu móvil básico
  const menuBtn = document.getElementById('menuBtn')
  const nav = document.getElementById('nav')
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const shown = nav.style.display === 'flex'
      nav.style.display = shown ? 'none' : 'flex'
      nav.style.flexDirection = 'column'
      nav.style.background =
        'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02))'
      nav.style.padding = '0.8rem'
      menuBtn.setAttribute('aria-expanded', !shown)
    })
  }

  // Datos centralizados (¡EDITA AQUÍ TU NÚMERO REAL!)
  window.SITE_DATA = {
    phone: '+52 664-555-5240',
    phoneLink: 'tel:+526645555240',
    whatsapp: 'https://wa.me/5216645555240',
  }

  // Aplicar datos dinámicamente
  const phoneLink = document.getElementById('phoneLink')
  const waLink = document.getElementById('waLink')
  const emailLink = document.getElementById('emailLink')
  if (phoneLink) phoneLink.href = SITE_DATA.phoneLink
  if (waLink) waLink.href = SITE_DATA.whatsapp
  if (emailLink) emailLink.href = 'mailto:' + SITE_DATA.email
})
