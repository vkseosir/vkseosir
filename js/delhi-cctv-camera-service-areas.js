class CCTVCameraService {
    constructor() {
      this.areas = [
      { name: "Chandni Chowk Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-chandni-chowk-delhi.html" },
      { name: "Daryaganj Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-daryaganj-delhi.html" },
      { name: "Jama Masjid Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-jama-masjid-delhi.html" },
      { name: "Chawri Bazar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-chawri-bazar-delhi.html" },
      { name: "Kashmere Gate Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kashmere-gate-delhi.html" },
      { name: "Sadar Bazar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-sadar-bazar-delhi.html" },
      { name: "Pahar Ganj Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-pahar-ganj-delhi.html" },
      { name: "Karol Bagh Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-karol-bagh-delhi.html" },
      { name: "Rajinder Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rajinder-nagar-delhi.html" },
      { name: "Patel Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-patel-nagar-delhi.html" },
      { name: "Connaught Place Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-connaught-place-delhi.html" },
      { name: "Bengali Market Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-bengali-market-delhi.html" },
      { name: "ITO Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-ito-delhi.html" },
      { name: "Civil Lines Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-civil-lines-delhi.html" },
      { name: "DDU Marg Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-ddu-marg-delhi.html" },
      { name: "Model Town Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-model-town-delhi.html" },
      { name: "Kamla Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kamla-nagar-delhi.html" },
      { name: "Azadpur Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-azadpur-delhi.html" },
      { name: "GTB Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-gtb-nagar-delhi.html" },
      { name: "Kingsway Camp Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kingsway-camp-delhi.html" },
      { name: "Mukherjee Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mukherjee-nagar-delhi.html" },
      { name: "Wazirabad Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-wazirabad-delhi.html" },
      { name: "Timarpur Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-timarpur-delhi.html" },
      { name: "Burari Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-burari-delhi.html" },
      { name: "Nirankari Colony Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-nirankari-colony-delhi.html" },
      { name: "Derawal Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-derawal-nagar-delhi.html" },
      { name: "Shalimar Bagh Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-shalimar-bagh-delhi.html" },
      { name: "Ashok Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-ashok-vihar-delhi.html" },
      { name: "Keshav Puram Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-keshav-puram-delhi.html" },
      { name: "Jahangirpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-jahangirpuri-delhi.html" },
      { name: "Lajpat Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-lajpat-nagar-delhi.html" },
      { name: "South Extension Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-south-extension-delhi.html" },
      { name: "Defence Colony Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-defence-colony-delhi.html" },
      { name: "Greater Kailash 1 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-greater-kailash-1-delhi.html" },
      { name: "Greater Kailash 2 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-greater-kailash-2-delhi.html" },
      { name: "Kalkaji Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kalkaji-delhi.html" },
      { name: "Govindpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-govindpuri-delhi.html" },
      { name: "Malviya Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-malviya-nagar-delhi.html" },
      { name: "Saket Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-saket-delhi.html" },
      { name: "Mehrauli Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mehrauli-delhi.html" },
      { name: "Chattarpur Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-chattarpur-delhi.html" },
      { name: "Vasant Kunj Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-vasant-kunj-delhi.html" },
      { name: "Vasant Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-vasant-vihar-delhi.html" },
      { name: "Green Park Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-green-park-delhi.html" },
      { name: "Hauz Khas Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-hauz-khas-delhi.html" },
      { name: "Munirka Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-munirka-delhi.html" },
      { name: "R.K. Puram Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-r.k.-puram-delhi.html" },
      { name: "Nehru Place Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-nehru-place-delhi.html" },
      { name: "CR Park Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-cr-park-delhi.html" },
      { name: "Pushp Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-pushp-vihar-delhi.html" },
      { name: "Preet Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-preet-vihar-delhi.html" },
      { name: "Laxmi Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-laxmi-nagar-delhi.html" },
      { name: "Mayur Vihar Phase 1 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mayur-vihar-phase-1-delhi.html" },
      { name: "Mayur Vihar Phase 2 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mayur-vihar-phase-2-delhi.html" },
      { name: "Mayur Vihar Phase 3 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mayur-vihar-phase-3-delhi.html" },
      { name: "Patparganj Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-patparganj-delhi.html" },
      { name: "Anand Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-anand-vihar-delhi.html" },
      { name: "Karkardooma Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-karkardooma-delhi.html" },
      { name: "Nirman Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-nirman-vihar-delhi.html" },
      { name: "Geeta Colony Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-geeta-colony-delhi.html" },
      { name: "Shahdara Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-shahdara-delhi.html" },
      { name: "Gandhi Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-gandhi-nagar-delhi.html" },
      { name: "Krishna Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-krishna-nagar-delhi.html" },
      { name: "Jagatpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-jagatpuri-delhi.html" },
      { name: "Mandawali Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mandawali-delhi.html" },
      { name: "IP Extension Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-ip-extension-delhi.html" },
      { name: "Janakpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-janakpuri-delhi.html" },
      { name: "Uttam Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-uttam-nagar-delhi.html" },
      { name: "Tilak Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-tilak-nagar-delhi.html" },
      { name: "Rajouri Garden Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rajouri-garden-delhi.html" },
      { name: "Subhash Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-subhash-nagar-delhi.html" },
      { name: "Hari Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-hari-nagar-delhi.html" },
      { name: "Kirti Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kirti-nagar-delhi.html" },
      { name: "Punjabi Bagh Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-punjabi-bagh-delhi.html" },
      { name: "Paschim Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-paschim-vihar-delhi.html" },
      { name: "Nangloi Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-nangloi-delhi.html" },
      { name: "Ramesh Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-ramesh-nagar-delhi.html" },
      { name: "Moti Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-moti-nagar-delhi.html" },
      { name: "Tagore Garden Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-tagore-garden-delhi.html" },
      { name: "Vikaspuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-vikaspuri-delhi.html" },
      { name: "Dwarka Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-delhi.html" },
      { name: "Dwarka Sector 6 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-sector-6-delhi.html" },
      { name: "Dwarka Sector 10 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-sector-10-delhi.html" },
      { name: "Dwarka Sector 12 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-sector-12-delhi.html" },
      { name: "Dwarka Sector 21 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-sector-21-delhi.html" },
      { name: "Dwarka Mor Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-mor-delhi.html" },
      { name: "Dabri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dabri-delhi.html" },
      { name: "Palam Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-palam-delhi.html" },
      { name: "Mahavir Enclave Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mahavir-enclave-delhi.html" },
      { name: "Rohini Sector 3 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-3-delhi.html" },
      { name: "Rohini Sector 7 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-7-delhi.html" },
      { name: "Rohini Sector 9 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-9-delhi.html" },
      { name: "Rohini Sector 11 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-11-delhi.html" },
      { name: "Rohini Sector 13 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-13-delhi.html" },
      { name: "Rohini Sector 24 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rohini-sector-24-delhi.html" },
      { name: "Rithala Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-rithala-delhi.html" },
      { name: "Pitampura Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-pitampura-delhi.html" },
      { name: "Saraswati Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-saraswati-vihar-delhi.html" },
      { name: "Mangolpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-mangolpuri-delhi.html" },
      { name: "Sultanpuri Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-sultanpuri-delhi.html" },
      { name: "Budh Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-budh-vihar-delhi.html" },
      { name: "Bawana Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-bawana-delhi.html" },
      { name: "Najafgarh Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-najafgarh-delhi.html" },
      { name: "Kapashera Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-kapashera-delhi.html" },
      { name: "Dwarka Sector 23 Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-dwarka-sector-23-delhi.html" },
      { name: "Bindapur Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-bindapur-delhi.html" },
      { name: "Sagarpur Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-sagarpur-delhi.html" },
      { name: "Palam Vihar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-palam-vihar-delhi.html" },
      { name: "Bijwasan Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-bijwasan-delhi.html" },
      { name: "Delhi Cantt Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-delhi-cantt-delhi.html" },
      { name: "Naraina Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-naraina-delhi.html" },
      { name: "Sarojini Nagar Delhi", link: "https://www.gen1service.com/delhi/cctv-camera-service-in-sarojini-nagar-delhi.html" }


        // Add more as needed...
      ];

      this.searchInput = null;
      this.listContainer = null;
      this.readMoreBtn = null;
      this.showingAll = false;
      this.maxInitialDisplay = 50;
    }

    init(containerId = 'cctv-camera-container') {
      this.container = document.getElementById(containerId);
      if (!this.container) return;
      this.createHTML();
      this.attachEventListeners();
      this.showInitialItems();
    }

    createHTML() {
      this.container.innerHTML = `
        <div class="container-cctv-camera">
          <h2>CCTV Camera Service Areas</h2>
          <div class="search-box-cctv-camera">
            <input type="text" id="searchInputCCTVCamera" placeholder="Search area..." />
          </div>
          <ul class="cctv-camera-list" id="serviceListCCTVCamera">
            ${this.areas.map(area => `<li><a href="${area.link}">${area.name}</a></li>`).join('')}
          </ul>
          <div class="read-more-cctv-camera">
            <button id="readMoreBtnCCTVCamera">Read More</button>
          </div>
        </div>
      `;

      this.addStyles();
      this.searchInput = document.getElementById('searchInputCCTVCamera');
      this.listContainer = document.getElementById('serviceListCCTVCamera');
      this.readMoreBtn = document.getElementById('readMoreBtnCCTVCamera');
    }

    addStyles() {
      if (document.getElementById('cctv-camera-styles')) return;

      const style = document.createElement('style');
      style.id = 'cctv-camera-styles';
      style.textContent = `
        .container-cctv-camera {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .container-cctv-camera h2 {
          text-align: center;
          color: #333;
          font-size: 28px;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .search-box-cctv-camera {
          text-align: center;
          margin-bottom: 30px;
        }

        .search-box-cctv-camera input {
          width: 100%;
          max-width: 400px;
          padding: 12px 20px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 25px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-box-cctv-camera input:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .cctv-camera-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cctv-camera-list li {
          display: flex;
          flex: 1 1 calc(12.5% - 10px);
          max-width: calc(12.5% - 10px);
          min-width: 120px;
        }

        .cctv-camera-list li a {
          display: block;
          width: 100%;
          padding: 12px 16px;
          text-decoration: none;
          color: #333;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border: 1px solid #ddd;
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cctv-camera-list li a:hover {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
          border-color: #007bff;
        }

        .read-more-cctv-camera {
          text-align: center;
          margin-top: 30px;
        }

        .read-more-cctv-camera button {
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #28a745, #20c997);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(40, 167, 69, 0.3);
        }

        .read-more-cctv-camera button:hover {
          background: linear-gradient(135deg, #218838, #1e7e34);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }

        .read-more-cctv-camera button:active {
          transform: translateY(0);
        }

        @media (max-width: 991px) {
          .cctv-camera-list li {
            flex: 1 1 calc(25% - 10px);
            max-width: calc(25% - 10px);
          }
        }

        @media (max-width: 768px) {
          .cctv-camera-list li {
            flex: 1 1 calc(25% - 10px);
            max-width: calc(25% - 10px);
          }
        }

        @media (max-width: 480px) {
          .cctv-camera-list li {
            flex: 1 1 calc(25% - 10px);
            max-width: calc(25% - 10px);
            min-width: 100px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    showInitialItems() {
      const listItems = this.listContainer.querySelectorAll('li');
      listItems.forEach((li, index) => {
        li.style.display = index < this.maxInitialDisplay ? 'flex' : 'none';
      });
    }

    attachEventListeners() {
      this.readMoreBtn.addEventListener('click', () => this.toggleShowMore());

      this.searchInput.addEventListener('input', (e) => {
        this.performSearch(e.target.value);
      });
    }

    toggleShowMore() {
      const listItems = this.listContainer.querySelectorAll('li');
      const isCurrentlyShowingAll = this.showingAll;

      listItems.forEach((li, index) => {
        if (index >= this.maxInitialDisplay) {
          li.style.display = isCurrentlyShowingAll ? 'none' : 'flex';
        }
      });

      this.showingAll = !isCurrentlyShowingAll;
      this.readMoreBtn.textContent = this.showingAll ? 'Show Less' : 'Read More';
    }

    performSearch(term) {
      const filter = term.toLowerCase().trim();
      const listItems = this.listContainer.querySelectorAll('li');

      listItems.forEach((li) => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(filter) ? 'flex' : 'none';
      });

      if (term.trim() !== '') {
        this.readMoreBtn.style.display = 'none';
      } else {
        this.readMoreBtn.style.display = 'block';
        this.showingAll = false;
        this.readMoreBtn.textContent = 'Read More';
        this.showInitialItems();
      }
    }
  }

  // Auto-initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('cctv-camera-container');
    if (container) {
      window.cctvCameraService = new CCTVCameraService();
      window.cctvCameraService.init('cctv-camera-container');
    }
  });

  // Export class for external use
  window.CCTVCameraService = CCTVCameraService;