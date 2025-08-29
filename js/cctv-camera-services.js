// CCTV Camera services data
const cctvServices = [
  {
    icon: 'fas fa-video',
    title: 'CCTV Installation',
    description: 'Complete CCTV camera installation with HD quality monitoring for homes and offices.',
    price: 'Starting ₹3000',
    category: 'installation'
  },
  {
    icon: 'fas fa-tools',
    title: 'Camera Repair',
    description: 'Expert repair services for all types of CCTV cameras including analog and IP cameras.',
    price: 'Starting ₹800',
    category: 'repair'
  },
  {
    icon: 'fas fa-desktop',
    title: 'DVR/NVR Setup',
    description: 'Professional DVR and NVR configuration with remote monitoring capabilities.',
    price: 'Starting ₹1500',
    category: 'setup'
  },
  {
    icon: 'fas fa-wifi',
    title: 'Wireless CCTV',
    description: 'Wireless CCTV camera installation with Wi-Fi connectivity and mobile app access.',
    price: 'Starting ₹4000',
    category: 'installation'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile Monitoring',
    description: 'Setup mobile app for remote CCTV monitoring from anywhere, anytime.',
    price: 'Starting ₹500',
    category: 'setup'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security Consultation',
    description: 'Professional security assessment and CCTV system planning for optimal coverage.',
    price: 'Starting ₹1000',
    category: 'consultation'
  },
  {
    icon: 'fas fa-camera',
    title: 'IP Camera Setup',
    description: 'High-definition IP camera installation with network configuration and remote access.',
    price: 'Starting ₹2500',
    category: 'setup',
    hidden: true
  },
  {
    icon: 'fas fa-hard-drive',
    title: 'Storage Upgrade',
    description: 'HDD/SSD storage upgrade for CCTV systems to increase recording capacity.',
    price: 'Starting ₹1200',
    category: 'upgrade',
    hidden: true
  },
  {
    icon: 'fas fa-eye',
    title: 'Night Vision Setup',
    description: 'Install and configure infrared night vision cameras for 24/7 surveillance.',
    price: 'Starting ₹3500',
    category: 'installation',
    hidden: true
  },
  {
    icon: 'fas fa-wrench',
    title: 'System Maintenance',
    description: 'Regular CCTV system maintenance, cleaning, and performance optimization.',
    price: 'Starting ₹600',
    category: 'maintenance',
    hidden: true
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Storage',
    description: 'Setup cloud-based storage solutions for CCTV footage backup and remote access.',
    price: 'Starting ₹2000',
    category: 'setup',
    hidden: true
  },
  {
    icon: 'fas fa-cog',
    title: 'Motion Detection',
    description: 'Configure advanced motion detection alerts and automated recording features.',
    price: 'Starting ₹800',
    category: 'setup',
    hidden: true
  },
  {
    icon: 'fas fa-network-wired',
    title: 'IP Problem',
    description: 'Fix IP camera connectivity issues, network configuration and remote access problems.',
    price: 'Starting ₹600',
    category: 'repair',
    hidden: true
  },
  {
    icon: 'fas fa-key',
    title: 'Password Issue',
    description: 'Reset forgotten passwords for CCTV systems, DVR/NVR and mobile app access.',
    price: 'Starting ₹400',
    category: 'repair',
    hidden: true
  },
  {
    icon: 'fas fa-exclamation-triangle',
    title: 'Not Working Issue',
    description: 'Diagnose and fix CCTV cameras, DVR systems and recording problems quickly.',
    price: 'Starting ₹700',
    category: 'repair',
    hidden: true
  }
];

// Auto-type search suggestions
const autoTypeTexts = [
  'CCTV installation...',
  'CCTV not working...',
  'CCTV IP issue...',
  'Camera repair...',
  'DVR setup...',
  'Wireless CCTV...',
  'Night vision...',
  'Mobile monitoring...',
  'CCTV maintenance...',
  'Security consultation...'
];

// Auto-type animation function
function startAutoType() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isTyping = false;
  
  function typeText() {
    if (searchInput.value !== '' || searchInput === document.activeElement) {
      // Don't animate if user is typing or input has focus
      setTimeout(typeText, 1000);
      return;
    }
    
    const currentText = autoTypeTexts[textIndex];
    
    if (!isDeleting) {
      // Typing animation
      searchInput.placeholder = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000); // Wait 2 seconds before deleting
        return;
      }
    } else {
      // Deleting animation
      searchInput.placeholder = currentText.substring(0, charIndex);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % autoTypeTexts.length;
        setTimeout(typeText, 500); // Wait 0.5 seconds before next text
        return;
      }
    }
    
    // Adjust typing speed
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeText, typingSpeed);
  }
  
  // Start animation after a short delay
  setTimeout(typeText, 1000);
}

// Function to create service card HTML
function createServiceCard(service) {
  return `
    <div class="col ${service.hidden ? 'hidden-service' : ''}">
      <div class="card service-card h-100 p-3">
        <div class="text-center mb-3">
          <div class="icon mb-3">
            <i class="${service.icon} animated-icon text-primary" style="font-size: 2.5rem;"></i>
          </div>
          <h5 class="card-title fw-bold text-dark">${service.title}</h5>
        </div>
        <div class="card-body flex-grow-1 p-0">
          <p class="card-text text-muted mb-3">${service.description}</p>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge bg-light text-dark px-3 py-2 rounded-pill fw-semibold" style="font-size: 0.85rem;">${service.category}</span>
            <span class="fw-bold text-success fs-5">${service.price}</span>
          </div>
        </div>
        <div class="mt-auto">
          <a href="https://www.gen1service.com/contact.html" class="btn book-btn w-100 text-decoration-none">Contact Us</a>
        </div>
      </div>
    </div>
  `;
}

// Function to render services
function renderServices() {
  const container = document.getElementById('service-cards');
  container.innerHTML = cctvServices.map(createServiceCard).join('');
}

// Function to filter services based on search
function filterServices(searchTerm) {
  const cards = document.querySelectorAll('.service-card').forEach((card, index) => {
    const service = cctvServices[index];
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const cardCol = card.closest('.col');
    if (matchesSearch) {
      cardCol.style.display = 'block';
    } else {
      cardCol.style.display = 'none';
    }
  });
}

// Function to get search suggestions
function getSearchSuggestions(query) {
  if (!query) return [];
  
  const suggestions = new Set();
  const queryLower = query.toLowerCase();
  
  cctvServices.forEach(service => {
    // Add matching titles
    if (service.title.toLowerCase().includes(queryLower)) {
      suggestions.add(service.title);
    }
    
    // Add matching categories
    if (service.category.toLowerCase().includes(queryLower)) {
      suggestions.add(service.category);
    }
    
    // Add matching keywords from description
    const keywords = service.description.toLowerCase().split(' ');
    keywords.forEach(keyword => {
      if (keyword.includes(queryLower) && keyword.length > 2) {
        suggestions.add(keyword);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
}

// Function to create suggestions dropdown
function createSuggestionsDropdown(suggestions) {
  const existingDropdown = document.getElementById('search-suggestions');
  if (existingDropdown) {
    existingDropdown.remove();
  }
  
  if (suggestions.length === 0) return;
  
  const dropdown = document.createElement('div');
  dropdown.id = 'search-suggestions';
  dropdown.className = 'position-absolute bg-white border rounded-3 shadow-sm w-100 mt-1';
  dropdown.style.cssText = 'z-index: 1000; max-height: 200px; overflow-y: auto;';
  
  suggestions.forEach((suggestion, index) => {
    const item = document.createElement('div');
    item.className = 'px-3 py-2 suggestion-item';
    item.style.cssText = 'cursor: pointer; transition: background-color 0.2s;';
    item.textContent = suggestion;
    
    // Hover effect
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#f8f9fa';
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = '';
    });
    
    // Click to select suggestion
    item.addEventListener('click', () => {
      const searchInput = document.getElementById('search-input');
      searchInput.value = suggestion;
      filterServices(suggestion);
      dropdown.remove();
    });
    
    dropdown.appendChild(item);
  });
  
  return dropdown;
}

// Function to toggle hidden services
function toggleServices() {
  const hiddenCards = document.querySelectorAll('.col:has(.service-card)');
  const toggleBtn = document.getElementById('toggle-services');
  
  // Check current state by looking at button text
  const isShowingAll = toggleBtn.innerHTML.includes('Show Less Services');
  
  hiddenCards.forEach((card, index) => {
    // Show first 6 cards always, hide rest when toggling to "less"
    if (index >= 6) {
      if (isShowingAll) {
        // Hide cards 7 onwards
        card.style.display = 'none';
        card.classList.add('hidden-service');
      } else {
        // Show all cards
        card.style.display = 'block';
        card.classList.remove('hidden-service');
      }
    }
  });
  
  // Update button text and icon
  if (isShowingAll) {
    toggleBtn.innerHTML = 'Discover More CCTV Camera Services <i class="fas fa-arrow-down ms-2"></i>';
  } else {
    toggleBtn.innerHTML = 'Show Less Services <i class="fas fa-arrow-up ms-2"></i>';
  }
  
  toggleBtn.classList.toggle('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderServices();
  
  // Start auto-typing animation
  startAutoType();
  
  // Search functionality with auto-suggestions
  const searchInput = document.getElementById('search-input');
  const searchContainer = searchInput.closest('.search-box');
  
  // Stop auto-typing when user focuses on input
  searchInput.addEventListener('focus', function() {
    this.placeholder = 'Search CCTV camera services...';
  });
  
  // Resume auto-typing when user leaves empty input
  searchInput.addEventListener('blur', function() {
    if (this.value === '') {
      setTimeout(() => {
        startAutoType();
      }, 1000);
    }
  });
  
  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    filterServices(query);
    
    // Show suggestions
    if (query.length > 0) {
      const suggestions = getSearchSuggestions(query);
      const dropdown = createSuggestionsDropdown(suggestions);
      if (dropdown) {
        // Remove existing dropdown
        const existingDropdown = document.getElementById('search-suggestions');
        if (existingDropdown) {
          existingDropdown.remove();
        }
        searchContainer.appendChild(dropdown);
      }
    } else {
      // Remove dropdown if input is empty
      const existingDropdown = document.getElementById('search-suggestions');
      if (existingDropdown) {
        existingDropdown.remove();
      }
    }
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target)) {
      const dropdown = document.getElementById('search-suggestions');
      if (dropdown) {
        dropdown.remove();
      }
    }
  });
  
  // Handle keyboard navigation in suggestions
  searchInput.addEventListener('keydown', function(e) {
    const dropdown = document.getElementById('search-suggestions');
    if (!dropdown) return;
    
    const suggestions = dropdown.querySelectorAll('.suggestion-item');
    let currentIndex = Array.from(suggestions).findIndex(item => 
      item.style.backgroundColor === 'rgb(248, 249, 250)' || item.classList.contains('selected')
    );
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentIndex = currentIndex < suggestions.length - 1 ? currentIndex + 1 : 0;
      updateSuggestionSelection(suggestions, currentIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentIndex = currentIndex > 0 ? currentIndex - 1 : suggestions.length - 1;
      updateSuggestionSelection(suggestions, currentIndex);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentIndex >= 0 && suggestions[currentIndex]) {
        suggestions[currentIndex].click();
      }
    } else if (e.key === 'Escape') {
      dropdown.remove();
    }
  });
  
  // Toggle services button
  const toggleBtn = document.getElementById('toggle-services');
  toggleBtn.addEventListener('click', toggleServices);
  
  // Note: Book service buttons now use anchor links, so no click handler needed
});

// Helper function to update suggestion selection
function updateSuggestionSelection(suggestions, selectedIndex) {
  suggestions.forEach((item, index) => {
    if (index === selectedIndex) {
      item.style.backgroundColor = '#e9ecef';
      item.classList.add('selected');
    } else {
      item.style.backgroundColor = '';
      item.classList.remove('selected');
    }
  });
}