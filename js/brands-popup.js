/* brands-popup.js — Gen1 simple popup (pure JS) */
(function () {
  // === 1) DATA: yaha aapke links + logos + names ===
  const brands = [
    { name: 'AXIS', href: 'axis-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/axis-logo.png', alt: 'Axis CCTV Camera Installation Service in Noida' },
    { name: 'ACER', href: 'acer-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/acer-logo.png', alt: 'Acer CCTV Camera Installation Service in Noida' },
    { name: 'BOSCH', href: 'bosch-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/bosch-logo.png', alt: 'Bosch CCTV Camera Installation Service in Noida' },
    { name: 'CP-PLUS', href: 'cp-plus-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/cp-plus-logo.png', alt: 'CP-PLUS CCTV Camera Installation Service in Noida' },
    { name: 'D-LINK', href: 'd-link-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/d-link-logo.png', alt: 'D-Link CCTV Camera Installation Service in Noida' },
    { name: 'DAHUA', href: 'dahua-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/Dahua-logo.jpg', alt: 'Dahua CCTV Camera Installation Service in Noida' },
    { name: 'GODREJ', href: 'godrej-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/Godrej-logo.png', alt: 'Godrej CCTV Camera Installation Service in Noida' },
    { name: 'HIKVISION', href: 'hikvision-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/hikvision-logo.png', alt: 'Hikvision CCTV Camera Installation Service in Noida' },
    { name: 'HONEYWELL', href: 'honeywell-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/honeywell-logo.png', alt: 'Honeywell CCTV Camera Installation Service in Noida' },
    { name: 'LOREX', href: 'lorex-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/lorex-logo.png', alt: 'Lorex CCTV Camera Installation Service in Noida' },
    { name: 'MI', href: 'mi-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/mi-logo.png', alt: 'Mi CCTV Camera Installation Service in Noida' },
    { name: 'PANASONIC', href: 'panasonic-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/panasonic-logo.png', alt: 'Panasonic CCTV Camera Installation Service in Noida' },
    { name: 'SAMSUNG', href: 'samsung-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/samsung-logo.png', alt: 'Samsung CCTV Camera Installation Service in Noida' },
    { name: 'SONY', href: 'sony-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/sony-logo.png', alt: 'Sony CCTV Camera Installation Service in Noida' },
    { name: 'TP-LINK', href: 'tp-link-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/tp-link.png', alt: 'TP-Link CCTV Camera Installation Service in Noida' },
    { name: 'VIVO-TEK', href: 'vivotek-cctv-camera-installation-and-repair-service-in-noida.html', logo: 'https://www.gen1service.com/all-logo/camera logo/vivo-tech-logo.png', alt: 'Vivotek CCTV Camera Installation Service in Noida' }
  ];

  // === 2) CSS inject ===
  const css = `
  .g1-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.65);display:none;justify-content:center;align-items:center;z-index:9999;padding:16px}
  .g1-modal{background:#fff;border-radius:14px;max-width:1000px;width:100%;max-height:90vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25);position:relative}
  .g1-header{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #eee;position:sticky;top:0;background:#fff;z-index:2}
  .g1-title{font-size:18px;font-weight:700;margin:0}
  .g1-close{border:0;background:transparent;font-size:28px;line-height:1;cursor:pointer}
  .g1-body{padding:16px}
  .g1-search{max-width:520px;margin:0 auto 16px}
  .g1-input{width:100%;padding:12px 14px;border:1px solid #ccc;border-radius:28px;font-size:15px;outline:none}
  .g1-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}
  .g1-card{display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid #366e3a;border-radius:12px;padding:16px 10px;text-align:center;transition:.25s}
  .g1-card:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(0,0,0,.08);background:#f3f9ff}
  .g1-img{width:92px;height:44px;object-fit:contain;margin:0 auto 10px;display:block}
  .g1-name{margin:0;font-weight:700;font-size:13px;color:#333}
  @media (max-width:600px){.g1-modal{border-radius:12px}.g1-title{font-size:16px}.g1-img{width:76px;height:38px}.g1-name{font-size:12px}}
  .g1-hidden{display:none!important}
  `;

  // === 3) HTML inject ===
  const overlay = document.createElement('div');
  overlay.className = 'g1-overlay';
  overlay.setAttribute('id', 'g1-brands-overlay');
  overlay.innerHTML = `
    <div class="g1-modal" role="dialog" aria-modal="true" aria-labelledby="g1-title">
      <div class="g1-header">
        <h3 class="g1-title" id="g1-title">Select CCTV Brand</h3>
        <button class="g1-close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="g1-body">
        <div class="g1-search">
          <input type="text" class="g1-input" id="g1-search" placeholder="Search brand...">
        </div>
        <div class="g1-grid" id="g1-grid"></div>
      </div>
    </div>
  `;

  // Insert CSS + Overlay once DOM ready
  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // Fill grid with cards
    const grid = overlay.querySelector('#g1-grid');
    grid.innerHTML = brands.map(b => `
      <a class="g1-card" href="${b.href}" data-name="${b.name.toLowerCase()}">
        <img class="g1-img" src="${b.logo}" alt="${b.alt}">
        <p class="g1-name">${b.name}</p>
      </a>
    `).join('');

    // Open/Close helpers
    const closeBtn = overlay.querySelector('.g1-close');
    function openPopup(){
      overlay.style.display = 'flex';
      // prevent body scroll
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      // focus search
      setTimeout(() => overlay.querySelector('#g1-search').focus(), 50);
    }
    function closePopup(){
      overlay.style.display = 'none';
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    // Delegated open: any element with data-open="brands-popup"
    document.addEventListener('click', function(e){
      const trigger = e.target.closest('[data-open="brands-popup"]');
      if (trigger){
        e.preventDefault();
        openPopup();
      }
      // outside click to close
      if (e.target === overlay) closePopup();
    });

    // Close actions
    closeBtn.addEventListener('click', closePopup);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && overlay.style.display === 'flex') closePopup();
    });

    // Search filter
    const search = overlay.querySelector('#g1-search');
    const cards = Array.from(grid.querySelectorAll('.g1-card'));
    function norm(s){ return s.toLowerCase().replace(/[^a-z0-9]/g,''); }
    search.addEventListener('input', function(){
      const q = norm(search.value);
      cards.forEach(card => {
        const name = norm(card.getAttribute('data-name') || '');
        card.classList.toggle('g1-hidden', !name.includes(q));
      });
    });

    // Public API (optional)
    window.BrandsPopup = {
      open: openPopup,
      close: closePopup
    };
  });
})();