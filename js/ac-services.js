const servicesData = [
  {
    title: "Installation",
    description: "Split & Window AC installation by expert fitters in Dwarika.",
    price: "₹999 - ₹1,999",
    icon: "fa-tools",
    buttonClass: "btn-danger",
    isHidden: false
  },
  {
    title: "Repair Service",
    description: "Quick fixes for AC issues—cooling, noise, gas leakage, and more.",
    price: "₹499 - ₹1,499",
    icon: "fa-wrench",
    buttonClass: "btn-primary",
    isHidden: false
  },
  {
    title: "Jet Cleaning",
    description: "Thorough cleaning of AC units for improved cooling performance.",
    price: "₹599 - ₹899",
    icon: "fa-broom",
    buttonClass: "btn-success",
    isHidden: false
  },
  {
    title: "Gas Recharge",
    description: "AC gas refill in Dwarika using high-quality refrigerants.",
    price: "₹1,499 - ₹2,999",
    icon: "fa-gas-pump",
    buttonClass: "btn-warning",
    isHidden: false
  },
  {
    title: "Complete Service",
    description: "Seasonal AC servicing with filter cleaning and safety checkup.",
    price: "₹799 - ₹1,299",
    icon: "fa-laptop",
    buttonClass: "btn-info",
    isHidden: false
  },
  {
    title: "AC Power Issue",
    description: "Expert solutions for AC power failures and electrical faults.",
    price: "₹499 - ₹1,299",
    icon: "fa-plug",
    buttonClass: "btn-info",
    isHidden: false
  },
  {
    title: "Part Replacement",
    description: "Genuine AC parts replaced including fan motors, compressors, PCBs & more.",
    price: "₹999 - ₹4,999",
    icon: "fa-cogs",
    buttonClass: "btn-secondary",
    isHidden: true
  },
  {
    title: "Thermostat Repair",
    description: "Fix irregular temperatures or faulty thermostats with expert diagnosis.",
    price: "₹699 - ₹1,499",
    icon: "fa-thermometer-half",
    buttonClass: "btn-warning",
    isHidden: true
  },
  {
    title: "No Cooling Issue",
    description: "Fast troubleshooting for ACs not cooling by trained local experts.",
    price: "₹499 - ₹1,999",
    icon: "fa-snowflake",
    buttonClass: "btn-danger",
    isHidden: true
  },
  {
    title: "AC Uninstallation",
    description: "Safe removal of AC units with post-service cleanup.",
    price: "₹799 - ₹1,499",
    icon: "fa-plug",
    buttonClass: "btn-primary",
    isHidden: true
  },
  {
    title: "Anti-Rust Treatment",
    description: "Protect AC components from rust for longer lifespan.",
    price: "₹699 - ₹1,199",
    icon: "fa-shield-alt",
    buttonClass: "btn-success",
    isHidden: true
  },
  {
    title: "Duct Cleaning",
    description: "Deep cleaning of AC ducts for clean air and efficient cooling.",
    price: "₹999 - ₹1,999",
    icon: "fa-wind",
    buttonClass: "btn-info",
    isHidden: true
  },
  {
    title: "AMC Service",
    description: "Annual maintenance contract with regular servicing and priority support.",
    price: "₹2,999 - ₹5,999",
    icon: "fa-calendar-check",
    buttonClass: "btn-secondary",
    isHidden: true
  },
  {
    title: "Motor Repair",
    description: "Expert repair of AC fan and compressor motors for optimal performance.",
    price: "₹1,299 - ₹3,499",
    icon: "fa-cog",
    buttonClass: "btn-danger",
    isHidden: true
  },
  {
    title: "Fan Blade Replacement",
    description: "Replace damaged or unbalanced fan blades for smooth operation.",
    price: "₹799 - ₹1,799",
    icon: "fa-fan",
    buttonClass: "btn-primary",
    isHidden: true
  },
  {
    title: "Leak Detection & Repair",
    description: "Identify and fix water or refrigerant leaks to prevent AC damage.",
    price: "₹699 - ₹1,999",
    icon: "fa-tint",
    buttonClass: "btn-success",
    isHidden: true
  }
];

function renderServices() {
  const serviceContainer = document.getElementById('service-cards');
  serviceContainer.innerHTML = '';

  servicesData.forEach(service => {
    const col = document.createElement('div');
    col.className = `col ${service.isHidden ? 'hidden-service' : ''}`;
    
    const card = document.createElement('div');
    card.className = 'service-card p-4 rounded h-100 text-center bg-white shadow-sm';
    
    card.innerHTML = `
      <div class="icon mb-3 text-${service.buttonClass.split('-')[1]}">
        <i class="fa ${service.icon} fa-2x animated-icon"></i>
      </div>
      <h5 class="fw-bold text-dark">${service.title}</h5>
      <p class="small text-muted">${service.description}</p>
      <p class="fw-bold text-dark mb-3">Price: ${service.price}</p>
      <a href="https://www.gen1service.com/contact.html" class="btn ${service.buttonClass} btn-sm w-100 book-btn">Book Now</a>
    `;
    
    col.appendChild(card);
    serviceContainer.appendChild(col);
  });
}

function setupEventListeners() {
  // Toggle services visibility
  const toggleButton = document.getElementById('toggle-services');
  toggleButton.addEventListener('click', () => {
    const hiddenServices = document.querySelectorAll('.hidden-service');
    const isHidden = hiddenServices[0].style.display === 'none' || hiddenServices[0].style.display === '';
    
    hiddenServices.forEach(service => {
      service.style.display = isHidden ? 'block' : 'none';
    });
    
    toggleButton.textContent = isHidden ? 'Show Less Services ' : 'Discover More Services ';
    toggleButton.classList.toggle('active');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-up');
  });

  // Auto-typing search suggestions
  const searchInput = document.getElementById('search-input');
  const suggestions = ['AC Service', 'AC Cleaning', 'Water Leaking', 'Not Working', 'Gas Recharge', 'Thermostat Repair'];
  let currentIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let typeSpeed = 100;
  let deleteSpeed = 50;
  let pauseTime = 1500;
  let isTyping = true;

  function type() {
    if (!isTyping) return;
    
    const currentSuggestion = suggestions[currentIndex];
    
    if (!isDeleting && currentText.length < currentSuggestion.length) {
      currentText = currentSuggestion.substring(0, currentText.length + 1);
      searchInput.placeholder = 'Search ' + currentText + '|';
      setTimeout(type, typeSpeed);
    } else if (isDeleting && currentText.length > 0) {
      currentText = currentSuggestion.substring(0, currentText.length - 1);
      searchInput.placeholder = 'Search ' + currentText + '|';
      setTimeout(type, deleteSpeed);
    } else if (!isDeleting && currentText.length === currentSuggestion.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else if (isDeleting && currentText.length === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % suggestions.length;
      setTimeout(type, typeSpeed);
    }
  }

  setTimeout(type, pauseTime);

  searchInput.addEventListener('focus', () => {
    isTyping = false;
    searchInput.placeholder = 'Search AC services...';
  });

  searchInput.addEventListener('blur', () => {
    if (!searchInput.value) {
      isTyping = true;
      currentText = '';
      isDeleting = false;
      setTimeout(type, pauseTime);
    }
  });

  // Search functionality
  searchInput.addEventListener('input', () => {
    isTyping = false;
    const searchTerm = searchInput.value.toLowerCase();
    const serviceCards = document.querySelectorAll('#service-cards .col');
    
    serviceCards.forEach(card => {
      const title = card.querySelector('h5').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      card.style.display = title.includes(searchTerm) || description.includes(searchTerm) ? 'block' : 'none';
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  setupEventListeners();
});