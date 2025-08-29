const testimonials = [
  {
    text: "Gen1service fixed my washer’s drain issue the same day. No mess, no hassle. Great service at a fair price. Very satisfied!",
    image: "https://res.cloudinary.com/gen1service/image/upload/v1715419048/Gen1service/Sumit-Kumar_wmjn6i.webp",
    name: "Nitin Kumar",
    service: "Washer Drain Repairing"
  },
  {
    text: "Gen1service set up our CCTV system with precision. Crystal-clear footage and great service. Felt secure from day one!",
    image: "https://res.cloudinary.com/gen1service/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715093846/Gen1service/Nitin_Kumar_mpft1h.webp",
    name: "Sumit Kumar",
    service: "CCTV Camera Installation"
  },
  {
    text: "Excellent AC maintenance by Gen1service! My unit now cools better and runs quieter. Quick response and friendly technician.",
    image: "https://solarpanelfacility.in/img/manish-kumar.jpg",
    name: "Manish Kumar",
    service: "AC Maintenance"
  },
  {
    text: "Gen1service installed my split AC flawlessly. Fast, professional, and clean work. Cooling is perfect. Highly recommended!",
    image: "https://solarpanelfacility.in/img/testimonial-3.webp",
    name: "Dr Ajeet Kumar",
    service: "AC Installation"
  }
];

const testimonialContainer = document.getElementById("testimonial-section");

testimonialContainer.innerHTML = `
  <div class="container">
    <div class="text-center">
      <h6 class="text-secondary text-uppercase">Testimonial</h6>
      <h2 class="mb-5">Our Clients Say!</h2>
    </div>
    <div class="owl-carousel testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
      ${testimonials.map(testimonial => `
        <div class="testimonial-item text-center">
          <div class="testimonial-text bg-light text-center p-4 mb-4">
            <p class="mb-0">${testimonial.text}</p>
          </div>
          <img class="bg-light rounded-circle p-2 mx-auto mb-2" loading="lazy" src="${testimonial.image}" style="width: 80px; height: 80px;" />
          <div class="mb-2">
            ${'<small class="fa fa-star text-primary"></small>'.repeat(5)}
          </div>
          <h5 class="mb-1">${testimonial.name}</h5>
          <p class="m-0">${testimonial.service}</p>
        </div>
      `).join("")}
    </div>
  </div>
`;
