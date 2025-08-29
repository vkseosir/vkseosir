// Create and append the footer to the body
const footer = document.createElement("div");
footer.className = "container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn";
footer.setAttribute("data-wow-delay", "0.1s");

// Container inside footer
const container = document.createElement("div");
container.className = "container py-5";
footer.appendChild(container);

// Row
const row = document.createElement("div");
row.className = "row g-5";
container.appendChild(row);

// Utility function to create and append column
function createColumn(innerHTML) {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-6";
    col.innerHTML = innerHTML;
    row.appendChild(col);
}

// Column 1: Address
createColumn(`
    <h4 class="text-light mb-4">Address</h4>
    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>UP, Delhi NCR, India</p>
    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 9411001216</p>
    <p class="mb-2"><i class="fa fa-envelope me-3"></i>official@gen1service.com</p>
    <div class="d-flex pt-2">
        <a class="btn btn-outline-light btn-social" href="https://x.com/Gen1_Service"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/gen1service/"><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/gen1service/"><i class="fab fa-instagram"></i></a>
        <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/gen1-service-4a5619302/"><i class="fab fa-linkedin-in"></i></a>
    </div>
`);

// Column 2: Opening Hours
createColumn(`
    <h4 class="text-light mb-4">Opening Hours</h4>
    <h6 class="text-light">Monday - Friday:</h6>
    <p class="mb-4">07.00 AM - 10.00 PM</p>
    <h6 class="text-light">Saturday - Sunday:</h6>
    <p class="mb-0">07.00 AM - 8.00 PM</p>
`);

// Column 3: About Company
createColumn(`
    <h4 class="text-light mb-4">About Company</h4>
    <div class="dropdown-footer">
        <a class="btn btn-link dropdown-toggle-footer" href="javascript:void(0);">Our Cities</a>
        <div class="dropdown-menu-footer">
            ${["delhi", "noida", "greater-noida", "ghaziabad", "gurgaon", "faridabad", "meerut", "muzaffarnagar", "khatauli", "roorkee-haridwar"]
                .map(city => `<a class="btn btn-link" href="https://www.gen1service.com/${city}.html">${city.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</a>`).join("")}
        </div>
    </div>
    <div class="dropdown-footer">
        <a class="btn btn-link dropdown-toggle-footer" href="javascript:void(0);">Our Services</a>
        <div class="dropdown-menu-footer">
            ${[
                ["ac", "AC Repair"],
                ["tv", "LED LCD TV Repair"],
                ["kitchen-chimney", "Kitcehn Chimney Repair"],
                ["refrigerator", "Refrigerator Repair"],
                ["washing-machine", "Washing Machine Repair"],
                ["microwave", "Microwave Oven Repair"],
                ["kitchen-hob", "Kitcehn HoB Repair"],
                ["camera", "CCTV Camera Repair"],
                ["laptop", "Laptop/Computer Repair"]
            ].map(([href, text]) => `<a class="btn btn-link" href="https://www.gen1service.com/${href}.html">${text}</a>`).join("")}
        </div>
    </div>
    <a class="btn btn-link" href="https://www.gen1service.com/about.html">About Us</a>
    <a class="btn btn-link" href="https://www.gen1service.com/contact-us.html">Contact Us</a>
    <a class="btn btn-link" href="https://www.gen1service.com/privacy-policy.html">Privacy Policy</a>
`);

// Column 4: Newsletter
createColumn(`
    <h4 class="text-light mb-4">Newsletter</h4>
    <div class="position-relative mx-auto" style="max-width: 400px;">
        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" placeholder="Your email" type="text"/>
        <button class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" type="button">SignUp</button>
    </div>
`);

// Bottom copyright section
const copyright = document.createElement("div");
copyright.className = "container";
copyright.innerHTML = `
    <div class="copyright">
        <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a class="border-bottom" href="https://www.gen1service.com">Gen1service</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
                Designed By <a class="border-bottom" href="https://www.gen1service.com">Gen1service.com</a>
            </div>
        </div>
    </div>
`;
footer.appendChild(copyright);

// Append the footer to the document body
document.body.appendChild(footer);
