 class ACRepairService {
    constructor() {
      this.areas = [
      { name: "Chandni Chowk Delhi", link: "ac-repair-service-in-chandni-chowk-delhi.html" },
      { name: "Daryaganj Delhi", link: "ac-repair-service-in-daryaganj-delhi.html" },
      { name: "Jama Masjid Delhi", link: "ac-repair-service-in-jama-masjid-delhi.html" },
      { name: "Chawri Bazar Delhi", link: "ac-repair-service-in-chawri-bazar-delhi.html" },
      { name: "Kashmere Gate Delhi", link: "ac-repair-service-in-kashmere-gate-delhi.html" },
      { name: "Sadar Bazar Delhi", link: "ac-repair-service-in-sadar-bazar-delhi.html" },
      { name: "Pahar Ganj Delhi", link: "ac-repair-service-in-pahar-ganj-delhi.html" },
      { name: "Karol Bagh Delhi", link: "ac-repair-service-in-karol-bagh-delhi.html" },
      { name: "Rajinder Nagar Delhi", link: "ac-repair-service-in-rajinder-nagar-delhi.html" },
      { name: "Patel Nagar Delhi", link: "ac-repair-service-in-patel-nagar-delhi.html" },
      { name: "Connaught Place Delhi", link: "ac-repair-service-in-connaught-place-delhi.html" },
      { name: "Bengali Market Delhi", link: "ac-repair-service-in-bengali-market-delhi.html" },
      { name: "ITO Delhi", link: "ac-repair-service-in-ito-delhi.html" },
      { name: "Civil Lines Delhi", link: "ac-repair-service-in-civil-lines-delhi.html" },
      { name: "DDU Marg Delhi", link: "ac-repair-service-in-ddu-marg-delhi.html" },
      { name: "Model Town Delhi", link: "ac-repair-service-in-model-town-delhi.html" },
      { name: "Kamla Nagar Delhi", link: "ac-repair-service-in-kamla-nagar-delhi.html" },
      { name: "Azadpur Delhi", link: "ac-repair-service-in-azadpur-delhi.html" },
      { name: "GTB Nagar Delhi", link: "ac-repair-service-in-gtb-nagar-delhi.html" },
      { name: "Kingsway Camp Delhi", link: "ac-repair-service-in-kingsway-camp-delhi.html" },
      { name: "Mukherjee Nagar Delhi", link: "ac-repair-service-in-mukherjee-nagar-delhi.html" },
      { name: "Wazirabad Delhi", link: "ac-repair-service-in-wazirabad-delhi.html" },
      { name: "Timarpur Delhi", link: "ac-repair-service-in-timarpur-delhi.html" },
      { name: "Burari Delhi", link: "ac-repair-service-in-burari-delhi.html" },
      { name: "Nirankari Colony Delhi", link: "ac-repair-service-in-nirankari-colony-delhi.html" },
      { name: "Derawal Nagar Delhi", link: "ac-repair-service-in-derawal-nagar-delhi.html" },
      { name: "Shalimar Bagh Delhi", link: "ac-repair-service-in-shalimar-bagh-delhi.html" },
      { name: "Ashok Vihar Delhi", link: "ac-repair-service-in-ashok-vihar-delhi.html" },
      { name: "Keshav Puram Delhi", link: "ac-repair-service-in-keshav-puram-delhi.html" },
      { name: "Jahangirpuri Delhi", link: "ac-repair-service-in-jahangirpuri-delhi.html" },
      { name: "Lajpat Nagar Delhi", link: "ac-repair-service-in-lajpat-nagar-delhi.html" },
      { name: "South Extension Delhi", link: "ac-repair-service-in-south-extension-delhi.html" },
      { name: "Defence Colony Delhi", link: "ac-repair-service-in-defence-colony-delhi.html" },
      { name: "Greater Kailash 1 Delhi", link: "ac-repair-service-in-greater-kailash-1-delhi.html" },
      { name: "Greater Kailash 2 Delhi", link: "ac-repair-service-in-greater-kailash-2-delhi.html" },
      { name: "Kalkaji Delhi", link: "ac-repair-service-in-kalkaji-delhi.html" },
      { name: "Govindpuri Delhi", link: "ac-repair-service-in-govindpuri-delhi.html" },
      { name: "Malviya Nagar Delhi", link: "ac-repair-service-in-malviya-nagar-delhi.html" },
      { name: "Saket Delhi", link: "ac-repair-service-in-saket-delhi.html" },
      { name: "Mehrauli Delhi", link: "ac-repair-service-in-mehrauli-delhi.html" },
      { name: "Chattarpur Delhi", link: "ac-repair-service-in-chattarpur-delhi.html" },
      { name: "Vasant Kunj Delhi", link: "ac-repair-service-in-vasant-kunj-delhi.html" },
      { name: "Vasant Vihar Delhi", link: "ac-repair-service-in-vasant-vihar-delhi.html" },
      { name: "Green Park Delhi", link: "ac-repair-service-in-green-park-delhi.html" },
      { name: "Hauz Khas Delhi", link: "ac-repair-service-in-hauz-khas-delhi.html" },
      { name: "Munirka Delhi", link: "ac-repair-service-in-munirka-delhi.html" },
      { name: "R.K. Puram Delhi", link: "ac-repair-service-in-r.k.-puram-delhi.html" },
      { name: "Nehru Place Delhi", link: "ac-repair-service-in-nehru-place-delhi.html" },
      { name: "CR Park Delhi", link: "ac-repair-service-in-cr-park-delhi.html" },
      { name: "Pushp Vihar Delhi", link: "ac-repair-service-in-pushp-vihar-delhi.html" },
      { name: "Preet Vihar Delhi", link: "ac-repair-service-in-preet-vihar-delhi.html" },
      { name: "Laxmi Nagar Delhi", link: "ac-repair-service-in-laxmi-nagar-delhi.html" },
      { name: "Mayur Vihar Phase 1 Delhi", link: "ac-repair-service-in-mayur-vihar-phase-1-delhi.html" },
      { name: "Mayur Vihar Phase 2 Delhi", link: "ac-repair-service-in-mayur-vihar-phase-2-delhi.html" },
      { name: "Mayur Vihar Phase 3 Delhi", link: "ac-repair-service-in-mayur-vihar-phase-3-delhi.html" },
      { name: "Patparganj Delhi", link: "ac-repair-service-in-patparganj-delhi.html" },
      { name: "Anand Vihar Delhi", link: "ac-repair-service-in-anand-vihar-delhi.html" },
      { name: "Karkardooma Delhi", link: "ac-repair-service-in-karkardooma-delhi.html" },
      { name: "Nirman Vihar Delhi", link: "ac-repair-service-in-nirman-vihar-delhi.html" },
      { name: "Geeta Colony Delhi", link: "ac-repair-service-in-geeta-colony-delhi.html" },
      { name: "Shahdara Delhi", link: "ac-repair-service-in-shahdara-delhi.html" },
      { name: "Gandhi Nagar Delhi", link: "ac-repair-service-in-gandhi-nagar-delhi.html" },
      { name: "Krishna Nagar Delhi", link: "ac-repair-service-in-krishna-nagar-delhi.html" },
      { name: "Jagatpuri Delhi", link: "ac-repair-service-in-jagatpuri-delhi.html" },
      { name: "Mandawali Delhi", link: "ac-repair-service-in-mandawali-delhi.html" },
      { name: "IP Extension Delhi", link: "ac-repair-service-in-ip-extension-delhi.html" },
      { name: "Janakpuri Delhi", link: "ac-repair-service-in-janakpuri-delhi.html" },
      { name: "Uttam Nagar Delhi", link: "ac-repair-service-in-uttam-nagar-delhi.html" },
      { name: "Tilak Nagar Delhi", link: "ac-repair-service-in-tilak-nagar-delhi.html" },
      { name: "Rajouri Garden Delhi", link: "ac-repair-service-in-rajouri-garden-delhi.html" },
      { name: "Subhash Nagar Delhi", link: "ac-repair-service-in-subhash-nagar-delhi.html" },
      { name: "Hari Nagar Delhi", link: "ac-repair-service-in-hari-nagar-delhi.html" },
      { name: "Kirti Nagar Delhi", link: "ac-repair-service-in-kirti-nagar-delhi.html" },
      { name: "Punjabi Bagh Delhi", link: "ac-repair-service-in-punjabi-bagh-delhi.html" },
      { name: "Paschim Vihar Delhi", link: "ac-repair-service-in-paschim-vihar-delhi.html" },
      { name: "Nangloi Delhi", link: "ac-repair-service-in-nangloi-delhi.html" },
      { name: "Ramesh Nagar Delhi", link: "ac-repair-service-in-ramesh-nagar-delhi.html" },
      { name: "Moti Nagar Delhi", link: "ac-repair-service-in-moti-nagar-delhi.html" },
      { name: "Tagore Garden Delhi", link: "ac-repair-service-in-tagore-garden-delhi.html" },
      { name: "Vikaspuri Delhi", link: "ac-repair-service-in-vikaspuri-delhi.html" },
      { name: "Dwarka Sector 6 Delhi", link: "ac-repair-service-in-dwarka-sector-6-delhi.html" },
      { name: "Dwarka Sector 10 Delhi", link: "ac-repair-service-in-dwarka-sector-10-delhi.html" },
      { name: "Dwarka Sector 12 Delhi", link: "ac-repair-service-in-dwarka-sector-12-delhi.html" },
      { name: "Dwarka Sector 21 Delhi", link: "ac-repair-service-in-dwarka-sector-21-delhi.html" },
      { name: "Dwarka Mor Delhi", link: "ac-repair-service-in-dwarka-mor-delhi.html" },
      { name: "Dabri Delhi", link: "ac-repair-service-in-dabri-delhi.html" },
      { name: "Palam Delhi", link: "ac-repair-service-in-palam-delhi.html" },
      { name: "Mahavir Enclave Delhi", link: "ac-repair-service-in-mahavir-enclave-delhi.html" },
      { name: "Rohini Sector 3 Delhi", link: "ac-repair-service-in-rohini-sector-3-delhi.html" },
      { name: "Rohini Sector 7 Delhi", link: "ac-repair-service-in-rohini-sector-7-delhi.html" },
      { name: "Rohini Sector 9 Delhi", link: "ac-repair-service-in-rohini-sector-9-delhi.html" },
      { name: "Rohini Sector 11 Delhi", link: "ac-repair-service-in-rohini-sector-11-delhi.html" },
      { name: "Rohini Sector 13 Delhi", link: "ac-repair-service-in-rohini-sector-13-delhi.html" },
      { name: "Rohini Sector 24 Delhi", link: "ac-repair-service-in-rohini-sector-24-delhi.html" },
      { name: "Rithala Delhi", link: "ac-repair-service-in-rithala-delhi.html" },
      { name: "Pitampura Delhi", link: "ac-repair-service-in-pitampura-delhi.html" },
      { name: "Saraswati Vihar Delhi", link: "ac-repair-service-in-saraswati-vihar-delhi.html" },
      { name: "Mangolpuri Delhi", link: "ac-repair-service-in-mangolpuri-delhi.html" },
      { name: "Sultanpuri Delhi", link: "ac-repair-service-in-sultanpuri-delhi.html" },
      { name: "Budh Vihar Delhi", link: "ac-repair-service-in-budh-vihar-delhi.html" },
      { name: "Bawana Delhi", link: "ac-repair-service-in-bawana-delhi.html" },
      { name: "Najafgarh Delhi", link: "ac-repair-service-in-najafgarh-delhi.html" },
      { name: "Kapashera Delhi", link: "ac-repair-service-in-kapashera-delhi.html" },
      { name: "Dwarka Sector 23 Delhi", link: "ac-repair-service-in-dwarka-sector-23-delhi.html" },
      { name: "Bindapur Delhi", link: "ac-repair-service-in-bindapur-delhi.html" },
      { name: "Sagarpur Delhi", link: "ac-repair-service-in-sagarpur-delhi.html" },
      { name: "Palam Vihar Delhi", link: "ac-repair-service-in-palam-vihar-delhi.html" },
      { name: "Bijwasan Delhi", link: "ac-repair-service-in-bijwasan-delhi.html" },
      { name: "Delhi Cantt Delhi", link: "ac-repair-service-in-delhi-cantt-delhi.html" },
      { name: "Naraina Delhi", link: "ac-repair-service-in-naraina-delhi.html" },
      { name: "Sarojini Nagar Delhi", link: "ac-repair-service-in-sarojini-nagar-delhi.html" }
        // Add more as needed...
      ];

      this.searchInput = null;
      this.listContainer = null;
      this.readMoreBtn = null;
      this.showingAll = false;
      this.maxInitialDisplay = 50;
    }

    init(containerId = 'ac-repair-container') {
      this.container = document.getElementById(containerId);
      if (!this.container) return;
      this.createHTML();
      this.attachEventListeners();
      this.showInitialItems();
    }

    createHTML() {
      this.container.innerHTML = `
        <div class="container-ac">
          <h2>AC Repair Service Areas</h2>
          <div class="search-box-ac">
            <input type="text" id="searchInputAC" placeholder="Search area..." />
          </div>
          <ul class="ac-repair-list-ac" id="repairListAC">
            ${this.areas.map(area => `<li><a href="${area.link}">${area.name}</a></li>`).join('')}
          </ul>
          <div class="read-more-ac">
            <button id="readMoreBtnAC">Read More</button>
          </div>
        </div>
      `;

      this.addStyles();
      this.searchInput = document.getElementById('searchInputAC');
      this.listContainer = document.getElementById('repairListAC');
      this.readMoreBtn = document.getElementById('readMoreBtnAC');
    }

    addStyles() {
      if (document.getElementById('ac-repair-styles')) return;

      const style = document.createElement('style');
      style.id = 'ac-repair-styles';
      style.textContent = `
        .container-ac {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .container-ac h2 {
          text-align: center;
          color: #333;
          font-size: 28px;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .search-box-ac {
          text-align: center;
          margin-bottom: 30px;
        }

        .search-box-ac input {
          width: 100%;
          max-width: 400px;
          padding: 12px 20px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 25px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-box-ac input:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .ac-repair-list-ac {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ac-repair-list-ac li {
          display: flex;
          flex: 1 1 calc(12.5% - 10px);
          max-width: calc(12.5% - 10px);
          min-width: 120px;
        }

        .ac-repair-list-ac li a {
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

        .ac-repair-list-ac li a:hover {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
          border-color: #007bff;
        }

        .read-more-ac {
          text-align: center;
          margin-top: 30px;
        }

        .read-more-ac button {
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

        .read-more-ac button:hover {
          background: linear-gradient(135deg, #218838, #1e7e34);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }

        .read-more-ac button:active {
          transform: translateY(0);
        }

        @media (max-width: 991px) {
          .ac-repair-list-ac li {
            flex: 1 1 calc(25% - 10px);
            max-width: calc(25% - 10px);
          }
        }

        @media (max-width: 768px) {
          .ac-repair-list-ac li {
            flex: 1 1 calc(25% - 10px);
            max-width: calc(25% - 10px);
          }
        }

        @media (max-width: 480px) {
          .ac-repair-list-ac li {
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
    const container = document.getElementById('ac-repair-container');
    if (container) {
      window.acRepairService = new ACRepairService();
      window.acRepairService.init('ac-repair-container');
    }
  });

  // Export class for external use
  window.ACRepairService = ACRepairService;