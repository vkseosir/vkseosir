// faq.js
function generateAccordionItem(id, question, answer, isOpen = false) {
    return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${id}">
          <button class="accordion-button ${isOpen ? '' : 'collapsed'}" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapse${id}"
            aria-expanded="${isOpen}" aria-controls="collapse${id}">
            Q: ${question}
          </button>
        </h2>
        <div id="collapse${id}" class="accordion-collapse collapse ${isOpen ? 'show active' : ''}"
          aria-labelledby="heading${id}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: ${answer}
          </div>
        </div>
      </div>
    `;
  }
  
  function renderFAQSection() {
    const faqContainer = document.getElementById('faq-section');
  
    if (!faqContainer) {
      console.error('Element with id="faq-section" not found.');
      return;
    }
  
    faqContainer.innerHTML = `
      <div class="container-fluid faq-section bg-light py-5">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
              <h4 class="text-primary">Some Important FAQ's</h4>
              <h2 class="display-4 mb-4">Common Frequently Asked Questions?</h2>
              <p class="mb-4">
                Find answers to common questions about our home appliance repair services, service areas, booking process, warranty, and more - everything you need to know about Gen1Service.
              </p>
              <a class="btn btn-primary py-3 px-5" href="#">Have Any Questions</a>
            </div>
            <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div class="h-100">
                <div class="accordion" id="accordionExample">
                  ${generateAccordionItem(
                    'One',
                    'Which appliances does Gen1Service repair?',
                    'We specialize in repairing Split ACs, Window ACs, Cassette ACs, LED/LCD TVs, Refrigerators, Washing Machines, Microwaves, Kitchen Chimneys, Kitchen Hobs, Laptops/Computers, and CCTV cameras.',
                    true
                  )}
                  ${generateAccordionItem(
                    'Two',
                    'Which cities does Gen1Service operate in?',
                    'We currently serve Delhi, Noida, Ghaziabad, Greater Noida, Faridabad, Gurgaon, Meerut, Muzaffarnagar, Khatauli, Haridwar, and Roorkee.'
                  )}
                  ${generateAccordionItem(
                    'Three',
                    'Do you repair all major appliance brands?',
                    'Yes, we repair appliances from all leading brands including LG, Samsung, Whirlpool, IFB, Bosch, Daikin, Voltas, Panasonic, Hitachi, Elica, Kaff, Kutchina, Prestige, Gilma, and more.'
                  )}
                  ${generateAccordionItem(
                    'Four',
                    'How can I book a service with Gen1Service?',
                    'You can book a service by visiting our website <a href="https://www.gen1service.com/contact.html">Booking</a> or by calling us directly at <a href="tel:919411001216">9411001216</a>.'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Run the function once the page content is fully loaded
  document.addEventListener('DOMContentLoaded', renderFAQSection);
  