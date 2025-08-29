

// ================== GEN1SERVICE FLOATING CONTACT (AUTO-DETECTION + ADVANCED DARK DESIGN) ==================
// PREMIUM DARK THEME + GLASSMORPHISM + ADVANCED ANIMATIONS + AUTO URL DETECTION
// FIXED: WhatsApp India Country Code (+91) Issue

// ------------------ URL Auto-Detection Functions ------------------
function extractCityFromURL() {
  const url = window.location.href.toLowerCase();
  const cityMappings = {
    'delhi': 'DELHI',
    'noida': 'NOIDA',
    'greater-noida': 'GREATER-NOIDA',
    'faridabad': 'FARIDABAD',
    'gurgaon': 'GURGAON',
    'ghaziabad': 'GHAZIABAD',
    'meerut': 'MEERUT',
    'khatauli': 'KHATAULI',
    'muzaffarnagar': 'MUZAFFARNAGAR',
    'roorkee': 'ROORKEE-HARIDWAR',
    'haridwar': 'ROORKEE-HARIDWAR'
  };
  
  for (const [urlCity, mappedCity] of Object.entries(cityMappings)) {
    if (url.includes(urlCity)) {
      return mappedCity;
    }
  }
  return '';
}

function extractServiceFromURL() {
  const url = window.location.href.toLowerCase();
  const serviceMappings = {
    'ac-service': 'AC',
    'ac-repair': 'AC',
    'air-conditioner': 'AC',
    'fridge-repair': 'FRIDGE',
    'refrigerator': 'FRIDGE',
    'washing-machine': 'WASHING_MACHINE',
    'washer': 'WASHING_MACHINE',
    'led-tv-repair': 'LED_TV',
    'tv-repair': 'LED_TV',
    'television': 'LED_TV',
    'samsung-led-tv': 'LED_TV',
    'lg-led-tv': 'LED_TV',
    'microwave': 'MICROWAVE',
    'kitchen-chimney': 'KITCHEN_CHIMNEY',
    'chimney': 'KITCHEN_CHIMNEY',
    'kitchen-hob': 'KITCHEN_HOB',
    'gas-stove': 'KITCHEN_HOB',
    'cctv-camera': 'CCTV_CAMERA',
    'cctv': 'CCTV_CAMERA',
    'laptop-repair': 'LAPTOP_COMPUTER',
    'computer-repair': 'LAPTOP_COMPUTER',
    'pc-repair': 'LAPTOP_COMPUTER'
  };
  
  for (const [urlService, mappedService] of Object.entries(serviceMappings)) {
    if (url.includes(urlService)) {
      return mappedService;
    }
  }
  return '';
}

// ------------------ Advanced CSS (Dark Theme) ------------------
const style = document.createElement('style');
style.textContent = `
  :root {
    --mail: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --whatsapp: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    --call: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
    --dark-bg: rgba(15, 15, 25, 0.95);
    --dark-surface: rgba(25, 25, 35, 0.8);
    --dark-border: rgba(255, 255, 255, 0.1);
    --text-primary: #ffffff;
    --text-secondary: #b8bcc8;
    --accent: #4f46e5;
  }

  .floating-contact-bar {
    position: fixed;
    top: 35%;
    right: 15px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .contact-btn {
    width: 60px;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    font-size: 22px;
    cursor: pointer;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .contact-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  .contact-btn:hover::before {
    left: 100%;
  }

  .contact-btn:hover {
    transform: translateX(-8px) scale(1.1);
    box-shadow: 
      0 8px 30px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  .contact-btn:active {
    transform: translateX(-8px) scale(1.05);
  }

  .contact-mail { 
    background: var(--mail);
  }
  .contact-whatsapp { 
    background: var(--whatsapp);
  }
  .contact-call { 
    background: var(--call);
  }

  .tap-animate { 
    animation: tapScale 2s ease-in-out infinite; 
  }
  @keyframes tapScale {
    0%, 100% { transform: scale(1); }
    25% { transform: translateX(-8px) scale(1.15); }
    50% { transform: translateX(-5px) scale(1.05); }
    75% { transform: translateX(-8px) scale(1.1); }
  }

  .contact-modal {
    position: fixed; 
    inset: 0; 
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    display: flex; 
    justify-content: center; 
    align-items: center;
    z-index: 10000; 
    opacity: 0; 
    pointer-events: none; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .contact-modal.active { 
    opacity: 1; 
    pointer-events: auto; 
    background: rgba(0, 0, 0, 0.85);
  }

  .modal-box {
    width: 92%; 
    max-width: 400px; 
    background: var(--dark-bg);
    backdrop-filter: blur(20px);
    border-radius: 24px; 
    padding: 28px; 
    border: 1px solid var(--dark-border);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    animation: modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
    position: relative;
  }

  .modal-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  @keyframes modalSlideIn { 
    from { 
      transform: scale(0.8) translateY(50px); 
      opacity: 0; 
    } 
    to { 
      transform: scale(1) translateY(0); 
      opacity: 1; 
    } 
  }

  .modal-head { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--dark-border);
  }

  .modal-title { 
    font-size: 20px; 
    font-weight: 700; 
    color: var(--text-primary);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .modal-close { 
    cursor: pointer; 
    font-size: 24px; 
    line-height: 1; 
    color: var(--text-secondary);
    width: 36px; 
    height: 36px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    border-radius: 12px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .modal-close:hover {
    background: rgba(255, 67, 67, 0.2);
    color: #ff4343;
    transform: scale(1.1);
    border-color: rgba(255, 67, 67, 0.3);
  }

  .modal-label { 
    font-size: 14px; 
    color: var(--text-secondary); 
    margin: 16px 0 8px; 
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .modal-box select {
    width: 100%; 
    padding: 14px 16px; 
    border-radius: 14px; 
    border: 1px solid var(--dark-border); 
    font-size: 15px;
    outline: none;
    background: var(--dark-surface);
    color: var(--text-primary);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .modal-box select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
    transform: translateY(-2px);
  }

  .modal-box select option {
    background: var(--dark-surface);
    color: var(--text-primary);
    padding: 10px;
  }

  .auto-detected {
    border-color: #10b981 !important;
    background: rgba(16, 185, 129, 0.1) !important;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2) !important;
  }

  .detection-badge {
    font-size: 12px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
    margin-left: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .modal-actions { 
    display: grid; 
    gap: 12px; 
    margin-top: 24px; 
  }

  .action-btn {
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    gap: 12px;
    width: 100%; 
    padding: 16px; 
    border-radius: 16px; 
    border: 0; 
    cursor: pointer; 
    font-weight: 700;
    font-size: 16px; 
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .action-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  .action-btn:hover::before {
    left: 100%;
  }

  .action-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .action-btn:active {
    transform: translateY(-1px);
  }

  .action-call { 
    background: var(--call);
    box-shadow: 0 6px 20px rgba(0, 210, 255, 0.3);
  }
  .action-wa { 
    background: var(--whatsapp);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
  }

  .helper { 
    font-size: 13px; 
    color: var(--text-secondary); 
    margin-top: 16px; 
    text-align: center;
    padding: 12px;
    background: rgba(255, 193, 7, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(255, 193, 7, 0.2);
  }

  .auto-info {
    font-size: 12px;
    color: #10b981;
    margin-top: 12px;
    padding: 8px 12px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(16, 185, 129, 0.2);
    text-align: center;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .floating-contact-bar {
      top: auto; 
      bottom: 20px; 
      right: 20px; 
      left: 20px;
      flex-direction: row; 
      justify-content: center;
      gap: 12px;
      padding: 12px;
    }
    .contact-btn { 
      width: 65px; 
      height: 65px; 
      font-size: 24px; 
    }
    
    .modal-box {
      width: 95%;
      padding: 24px;
      max-width: none;
    }
  }

  /* Glassmorphism effect for modern browsers */
  @supports (backdrop-filter: blur()) {
    .floating-contact-bar {
      background: rgba(0, 0, 0, 0.2);
    }
    .modal-box {
      background: rgba(15, 15, 25, 0.9);
    }
    .contact-btn {
      background-blend-mode: overlay;
    }
  }

  /* Custom scrollbar for select */
  .modal-box select::-webkit-scrollbar {
    width: 8px;
  }
  .modal-box select::-webkit-scrollbar-track {
    background: var(--dark-surface);
    border-radius: 4px;
  }
  .modal-box select::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }
`;
document.head.appendChild(style);

// ------------------ Floating Bar ------------------
const bar = document.createElement('div');
bar.className = 'floating-contact-bar';

const mailBtn = document.createElement('a');
mailBtn.href = 'https://www.gen1service.com/contact.html';
mailBtn.target = '_blank';
mailBtn.className = 'contact-btn contact-mail';
mailBtn.id = 'btn-mail';
mailBtn.innerHTML = '<i class="fas fa-envelope"></i>';

const whatsappBtn = document.createElement('button');
whatsappBtn.type = 'button';
whatsappBtn.className = 'contact-btn contact-whatsapp';
whatsappBtn.id = 'btn-whatsapp';
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';

const callBtn = document.createElement('button');
callBtn.type = 'button';
callBtn.className = 'contact-btn contact-call';
callBtn.id = 'btn-call';
callBtn.innerHTML = '<i class="fas fa-phone"></i>';

bar.appendChild(mailBtn);
bar.appendChild(whatsappBtn);
bar.appendChild(callBtn);
document.body.appendChild(bar);

// ------------------ Enhanced Modal with Auto-Detection ------------------
const detectedCity = extractCityFromURL();
const detectedService = extractServiceFromURL();

const modal = document.createElement('div');
modal.className = 'contact-modal';
modal.innerHTML = `
  <div class="modal-box">
    <div class="modal-head">
      <div class="modal-title">ðŸ” Select City & Service</div>
      <div class="modal-close" id="g1_close">Ã—</div>
    </div>

    <label class="modal-label" for="g1_city">
      Select Your City
      ${detectedCity ? '<span class="detection-badge">Auto-Detected</span>' : ''}
    </label>
    <select id="g1_city" ${detectedCity ? 'class="auto-detected"' : ''}>
      <option value="">-- Choose Your City --</option>
      <option value="DELHI" ${detectedCity === 'DELHI' ? 'selected' : ''}>ðŸ™ï¸ DELHI</option>
      <option value="NOIDA" ${detectedCity === 'NOIDA' ? 'selected' : ''}>ðŸŒ† NOIDA</option>
      <option value="GREATER-NOIDA" ${detectedCity === 'GREATER-NOIDA' ? 'selected' : ''}>ðŸ¢ GREATER NOIDA</option>
      <option value="FARIDABAD" ${detectedCity === 'FARIDABAD' ? 'selected' : ''}>ðŸ˜ï¸ FARIDABAD</option>
      <option value="GURGAON" ${detectedCity === 'GURGAON' ? 'selected' : ''}>ðŸ——ï¸ GURGAON</option>
      <option value="GHAZIABAD" ${detectedCity === 'GHAZIABAD' ? 'selected' : ''}>ðŸ« GHAZIABAD</option>
      <option value="MEERUT" ${detectedCity === 'MEERUT' ? 'selected' : ''}>ðŸŽ¯ MEERUT</option>
      <option value="KHATAULI" ${detectedCity === 'KHATAULI' ? 'selected' : ''}>ðŸ¡ KHATAULI</option>
      <option value="MUZAFFARNAGAR" ${detectedCity === 'MUZAFFARNAGAR' ? 'selected' : ''}>ðŸ­ MUZAFFARNAGAR</option>
      <option value="ROORKEE-HARIDWAR" ${detectedCity === 'ROORKEE-HARIDWAR' ? 'selected' : ''}>ðŸ”ï¸ ROORKEE-HARIDWAR</option>
    </select>

    <label class="modal-label" for="g1_service">
      Select Service Type
      ${detectedService ? '<span class="detection-badge">Auto-Detected</span>' : ''}
    </label>
    <select id="g1_service" ${detectedService ? 'class="auto-detected"' : ''}>
      <option value="">-- Choose Service --</option>
      <option value="AC" ${detectedService === 'AC' ? 'selected' : ''}>â„ï¸ Air Conditioner (AC)</option>
      <option value="FRIDGE" ${detectedService === 'FRIDGE' ? 'selected' : ''}>ðŸ§Š Refrigerator</option>
      <option value="WASHING_MACHINE" ${detectedService === 'WASHING_MACHINE' ? 'selected' : ''}>ðŸ§º Washing Machine</option>
      <option value="LED_TV" ${detectedService === 'LED_TV' ? 'selected' : ''}>ðŸ“º LED TV</option>
      <option value="MICROWAVE" ${detectedService === 'MICROWAVE' ? 'selected' : ''}>ðŸ”¥ Microwave</option>
      <option value="KITCHEN_CHIMNEY" ${detectedService === 'KITCHEN_CHIMNEY' ? 'selected' : ''}>ðŸŒªï¸ Kitchen Chimney</option>
      <option value="KITCHEN_HOB" ${detectedService === 'KITCHEN_HOB' ? 'selected' : ''}>ðŸ³ Kitchen Hob</option>
      <option value="CCTV_CAMERA" ${detectedService === 'CCTV_CAMERA' ? 'selected' : ''}>ðŸ“¹ CCTV Camera</option>
      <option value="LAPTOP_COMPUTER" ${detectedService === 'LAPTOP_COMPUTER' ? 'selected' : ''}>ðŸ’» Laptop & Computer</option>
    </select>

    ${(detectedCity || detectedService) ? `
      <div class="auto-info">
        âœ… Auto-detected from URL: ${detectedCity ? `City: ${detectedCity.replace('-', ' ')}` : ''}${detectedCity && detectedService ? ', ' : ''}${detectedService ? `Service: ${detectedService.replace('_', ' ')}` : ''}
      </div>
    ` : ''}

    <div class="modal-actions">
      <button class="action-btn action-call" id="g1_call">
        <i class="fas fa-phone"></i> 
        <span>Call Now</span>
      </button>
      <button class="action-btn action-wa" id="g1_wa">
        <i class="fab fa-whatsapp"></i> 
        <span>WhatsApp Chat</span>
      </button>
    </div>

    <div class="helper">
      âš ï¸ We service only Out of Warranty products
    </div>
  </div>
`;
document.body.appendChild(modal);

// ------------------ Numbers Mapping (Same as original) ------------------
const NUMBERS = {
  "DELHI": {
    "AC": "8512800935",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "8512800935",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7011109026",
    "KITCHEN_HOB": "7011109026",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "eroor"
  },
  "NOIDA": {
    "AC": "NOIDA_XXXXXXXAC",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "8512800935",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7011109026",
    "KITCHEN_HOB": "7011109026",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "NOIDA_XXXXXXXPC"
  },
  "GREATER-NOIDA": {
    "AC": "GNOIDA_XXXXXXXAC",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "8512800935",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7011109026",
    "KITCHEN_HOB": "7011109026",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "GNOIDA_XXXXXXXPC"
  },
  "FARIDABAD": {
    "AC": "FBD_XXXXXXXAC",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "FBD_XXXXXXXLED",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7011109026",
    "KITCHEN_HOB": "7011109026",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "FBD_XXXXXXXPC"
  },
  "GURGAON": {
    "AC": "8512800935",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "8512800935",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7310672167",
    "KITCHEN_HOB": "7310672167",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "GGN_XXXXXXXPC"
  },
  "GHAZIABAD": {
    "AC": "GZB_XXXXXXXAC",
    "FRIDGE": "9818116809",
    "WASHING_MACHINE": "9818116809",
    "LED_TV": "8512800935",
    "MICROWAVE": "9818116809",
    "KITCHEN_CHIMNEY": "7011109026",
    "KITCHEN_HOB": "7011109026",
    "CCTV_CAMERA": "8384859801",
    "LAPTOP_COMPUTER": "GZB_XXXXXXXPC"
  },
  "MEERUT": {
    "AC": "9411001216",
    "FRIDGE": "9411001216",
    "WASHING_MACHINE": "9411001216",
    "LED_TV": "9411001216",
    "MICROWAVE": "9411001216",
    "KITCHEN_CHIMNEY": "9411001216",
    "KITCHEN_HOB": "9411001216",
    "CCTV_CAMERA": "9411001216",
    "LAPTOP_COMPUTER": "9411001216"
  },
  "KHATAULI": {
    "AC": "9411001216",
    "FRIDGE": "9411001216",
    "WASHING_MACHINE": "9411001216",
    "LED_TV": "9411001216",
    "MICROWAVE": "9411001216",
    "KITCHEN_CHIMNEY": "9411001216",
    "KITCHEN_HOB": "9411001216",
    "CCTV_CAMERA": "9411001216",
    "LAPTOP_COMPUTER": "9411001216"
  },
  "MUZAFFARNAGAR": {
    "AC": "9411001216",
    "FRIDGE": "9411001216",
    "WASHING_MACHINE": "9411001216",
    "LED_TV": "9411001216",
    "MICROWAVE": "9411001216",
    "KITCHEN_CHIMNEY": "9411001216",
    "KITCHEN_HOB": "9411001216",
    "CCTV_CAMERA": "9411001216",
    "LAPTOP_COMPUTER": "9411001216"
  },
  "ROORKEE-HARIDWAR": {
    "AC": "ROORKEE_XXXXXXXAC",
    "FRIDGE": "ROORKEE_XXXXXXXFRIDGE",
    "WASHING_MACHINE": "ROORKEE_XXXXXXXWM",
    "LED_TV": "ROORKEE_XXXXXXXLED",
    "MICROWAVE": "ROORKEE_XXXXXXXMW",
    "KITCHEN_CHIMNEY": "ROORKEE_XXXXXXXKC",
    "KITCHEN_HOB": "ROORKEE_XXXXXXXKH",
    "CCTV_CAMERA": "ROORKEE_XXXXXXXCCTV",
    "LAPTOP_COMPUTER": "ROORKEE_XXXXXXXPC"
  }
};

// ------------------ FIXED WhatsApp Helper Functions ------------------
function sanitizeForWa(num) { 
  // Remove all non-digit characters
  return String(num).replace(/[^\d]/g, ''); 
}

function formatIndianWhatsAppNumber(num) {
  const cleaned = sanitizeForWa(num);
  
  // If number already starts with 91, return as is
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned;
  }
  
  // If it's a 10-digit Indian number, add 91 prefix
  if (cleaned.length === 10) {
    return '91' + cleaned;
  }
  
  // Return as is for any other format
  return cleaned;
}

function getSelection() { 
  return { 
    city: document.getElementById('g1_city').value, 
    service: document.getElementById('g1_service').value 
  }; 
}

function getNumber(city, service) { 
  return (NUMBERS[city] && NUMBERS[city][service]) ? NUMBERS[city][service] : ''; 
}

// ------------------ Modal Logic ------------------
const modalEl = modal;
const closeEl = document.getElementById('g1_close');
const openModal = () => modalEl.classList.add('active');
const closeModal = () => modalEl.classList.remove('active');

whatsappBtn.addEventListener('click', openModal);
callBtn.addEventListener('click', openModal);
modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });
closeEl.addEventListener('click', closeModal);

// ------------------ Enhanced Action Buttons with Fixed WhatsApp ------------------
document.getElementById('g1_call').addEventListener('click', () => {
  const { city, service } = getSelection();
  if (!city || !service) return alert('âš ï¸ Please select both City & Service.');
  const num = getNumber(city, service);
  if (!num) return alert('Number not configured for this City/Service.');

  // Enhanced Matomo Event Tracking with Auto-detection info
  if (typeof _paq !== 'undefined') {
    const trackingLabel = `${city} - ${service}${detectedCity || detectedService ? ' (Auto-Detected)' : ''}`;
    _paq.push(['trackEvent', 'Call', trackingLabel, num]);
  }

  window.location.href = `tel:${sanitizeForWa(num)}`;
  closeModal();
});

document.getElementById('g1_wa').addEventListener('click', () => {
  const { city, service } = getSelection();
  if (!city || !service) return alert('âš ï¸ Please select both City & Service.');
  const num = getNumber(city, service);
  if (!num) return alert('Number not configured for this City/Service.');

  // FIXED: Proper Indian WhatsApp number formatting
  const formattedNumber = formatIndianWhatsAppNumber(num);
  const serviceName = service.replace('_', ' ');
  const cityName = city.replace('-', ' ');
  const message = `Hello, I need help for ${serviceName} repair service in ${cityName}. Please assist me.`;
  const encodedMsg = encodeURIComponent(message);

  // Enhanced Matomo Event Tracking with Auto-detection info
  if (typeof _paq !== 'undefined') {
    const trackingLabel = `${city} - ${service}${detectedCity || detectedService ? ' (Auto-Detected)' : ''}`;
    _paq.push(['trackEvent', 'WhatsApp', trackingLabel, formattedNumber]);
  }

  // FIXED: Using properly formatted Indian number with +91
  window.open(`https://wa.me/${formattedNumber}?text=${encodedMsg}`, '_blank');
  closeModal();
});

// ------------------ Direct Call/WhatsApp for Auto-Detected Cases ------------------
// If both city and service are auto-detected, add quick action functionality
if (detectedCity && detectedService) {
  // Add quick call functionality to call button
  callBtn.addEventListener('dblclick', () => {
    const num = getNumber(detectedCity, detectedService);
    if (num && confirm('âš ï¸ à¤¹à¤® *Out of Warranty* à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¥‹à¤¡à¤•à¥à¤Ÿ à¤•à¥€ à¤¹à¥€ à¤°à¤¿à¤ªà¥‡à¤¯à¤°à¤¿à¤‚à¤— à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ Direct call à¤•à¤°à¥‡à¤‚?')) {
      if (typeof _paq !== 'undefined') {
        _paq.push(['trackEvent', 'Quick-Call', `${detectedCity} - ${detectedService} (Auto-Direct)`, num]);
      }
      window.location.href = `tel:${sanitizeForWa(num)}`;
    }
  });

  // Add quick WhatsApp functionality to WhatsApp button
  whatsappBtn.addEventListener('dblclick', () => {
    const num = getNumber(detectedCity, detectedService);
    if (num) {
      // FIXED: Proper Indian WhatsApp number formatting for quick action
      const formattedNumber = formatIndianWhatsAppNumber(num);
      const serviceName = detectedService.replace('_', ' ');
      const cityName = detectedCity.replace('-', ' ');
      const message = `Hello, I need help for ${serviceName} repair service in ${cityName}. Please assist me.`;
      const encodedMsg = encodeURIComponent(message);
      
      if (typeof _paq !== 'undefined') {
        _paq.push(['trackEvent', 'Quick-WhatsApp', `${detectedCity} - ${detectedService} (Auto-Direct)`, formattedNumber]);
      }
      
      // FIXED: Using properly formatted Indian number
      window.open(`https://wa.me/${formattedNumber}?text=${encodedMsg}`, '_blank');
    }
  });

  // Add tooltip for double-click functionality
  const tooltipStyle = document.createElement('style');
  tooltipStyle.textContent = `
    .quick-tip {
      position: absolute;
      bottom: -30px;
      right: 0;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 10px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 10001;
    }
    
    .floating-contact-bar:hover .quick-tip {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      .quick-tip {
        display: none;
      }
    }
  `;
  document.head.appendChild(tooltipStyle);

  const tooltip = document.createElement('div');
  tooltip.className = 'quick-tip';
  tooltip.textContent = 'Double-click for instant contact';
  bar.appendChild(tooltip);
}

// ------------------ Enhanced Button Animation ------------------
const cycleIds = ['btn-mail', 'btn-whatsapp', 'btn-call'];
let idx = 0;
setInterval(() => {
  cycleIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('tap-animate');
  });
  const target = document.getElementById(cycleIds[idx]);
  if (target) target.classList.add('tap-animate');
  idx = (idx + 1) % cycleIds.length;
}, 2500);

// ------------------ Console Log for Debug ------------------
console.log('ðŸš€ GEN1SERVICE Auto-Contact Widget Loaded (WhatsApp India Fixed)');
console.log(`ðŸ“ Auto-detected City: ${detectedCity || 'None'}`);
console.log(`ðŸ”§ Auto-detected Service: ${detectedService || 'None'}`);
console.log(`ðŸŒ Current URL: ${window.location.href}`);
console.log('âœ… WhatsApp India country code (+91) issue fixed!');











// ================== GEN1SERVICE FLOATING CONTACT (AUTO-DETECTION + ADVANCED DARK DESIGN) ==================
// ...(à¤†à¤ªà¤•à¤¾ existing code à¤¯à¤¹à¤¾à¤ à¤°à¤¹à¥‡à¤—à¤¾)

// ------------------ Console Log for Debug ------------------
console.log('ðŸš€ GEN1SERVICE Auto-Contact Widget Loaded (WhatsApp India Fixed)');
console.log(`ðŸ“ Auto-detected City: ${detectedCity || 'None'}`);
console.log(`ðŸ”§ Auto-detected Service: ${detectedService || 'None'}`);
console.log(`ðŸŒ Current URL: ${window.location.href}`);
console.log('âœ… WhatsApp India country code (+91) issue fixed!');

// ================== GOOGLE SHEET LOGGING START ==================
const LOG_URL = "https://script.google.com/macros/s/AKfycbyTNZ1mXy0UtMwJpY7wT8xmgfktAH5WbLFXn5u_AKm3YDsFZK_4dYz5EV9mJK1HbX5uAw/exec";

function logClickToSheet(actionType, city, service, number) {
  const payload = {
    action: actionType,
    city: city,
    service: service,
    number: number,
    page: window.location.href,
    time: new Date().toISOString()
  };
  try {
    navigator.sendBeacon(LOG_URL, new Blob([JSON.stringify(payload)], { type: "text/plain" }));
  } catch (e) {
    fetch(LOG_URL, { method: "POST", body: JSON.stringify(payload) });
  }
}
// ================== GOOGLE SHEET LOGGING END ==================

// ------------------ Enhanced Action Buttons with Fixed WhatsApp + Logging ------------------
document.getElementById('g1_call').addEventListener('click', () => {
  const { city, service } = getSelection();
  if (!city || !service) return alert('âš ï¸ Please select both City & Service.');
  const num = getNumber(city, service);
  if (!num) return alert('Number not configured for this City/Service.');

  // Google Sheet à¤ªà¤° log à¤­à¥‡à¤œà¤¨à¤¾
  logClickToSheet("Call", city, service, num);

  window.location.href = `tel:${sanitizeForWa(num)}`;
  closeModal();
});

document.getElementById('g1_wa').addEventListener('click', () => {
  const { city, service } = getSelection();
  if (!city || !service) return alert('âš ï¸ Please select both City & Service.');
  const num = getNumber(city, service);
  if (!num) return alert('Number not configured for this City/Service.');

  const formattedNumber = formatIndianWhatsAppNumber(num);
  const serviceName = service.replace('_', ' ');
  const cityName = city.replace('-', ' ');
  const message = `Hello, I need help for ${serviceName} repair service in ${cityName}. Please assist me.`;
  const encodedMsg = encodeURIComponent(message);

  // Google Sheet à¤ªà¤° log à¤­à¥‡à¤œà¤¨à¤¾
  logClickToSheet("WhatsApp", city, service, num);

  window.open(`https://wa.me/${formattedNumber}?text=${encodedMsg}`, '_blank');
  closeModal();
});

// ...(à¤¬à¤¾à¤•à¥€ existing code à¤°à¤¹à¥‡)