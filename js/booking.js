document.addEventListener("DOMContentLoaded", function () {
    // Add Bootstrap CSS
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);
  
    // Add main titles
    const h2 = document.createElement("h2");
    h2.className = "text-white mb-4";
    h2.textContent = "Emergency Repairing Service";
    document.body.appendChild(h2);
  
    const h3 = document.createElement("h3");
    h3.className = "text-white mb-0";
    h3.textContent = "24 Hours 7 Days a Week";
    document.body.appendChild(h3);
  
    // Main container with margin-top -6rem
    const container = document.createElement("div");
    container.className = "container position-relative";
    container.style.marginTop = "-6rem";
    container.setAttribute("data-wow-delay", "0.1s");
  
    const row = document.createElement("div");
    row.className = "row justify-content-center";
  
    const col = document.createElement("div");
    col.className = "col-lg-8";
  
    const card = document.createElement("div");
    card.className = "bg-light text-center p-5";
  
    const formTitle = document.createElement("h2");
    formTitle.className = "mb-4";
    formTitle.textContent = "Book For A Service";
  
    // Create form
    const form = document.createElement("form");
    form.action = "https://api.web3forms.com/submit";
    form.method = "POST";
    form.id = "form";
  
    const accessKey = document.createElement("input");
    accessKey.type = "hidden";
    accessKey.name = "access_key";
    accessKey.value = "dd9b45a7-e4dc-462d-8cf5-4651ed955122";
  
    const formRow = document.createElement("div");
    formRow.className = "row g-3";
  
    // Name input
    const nameCol = document.createElement("div");
    nameCol.className = "col-12 col-sm-6";
    const nameInput = document.createElement("input");
    nameInput.className = "form-control border-0";
    nameInput.name = "name";
    nameInput.placeholder = "Enter Your Name";
    nameInput.required = true;
    nameInput.style.height = "55px";
    nameCol.appendChild(nameInput);
  
    // Phone input
    const phoneCol = document.createElement("div");
    phoneCol.className = "col-12 col-sm-6";
    const phoneInput = document.createElement("input");
    phoneInput.className = "form-control border-0";
    phoneInput.name = "Phone";
    phoneInput.placeholder = "Your Phone No.";
    phoneInput.type = "phone";
    phoneInput.style.height = "55px";
    phoneCol.appendChild(phoneInput);
  
    // Service select
    const serviceCol = document.createElement("div");
    serviceCol.className = "col-12 col-sm-6";
    const serviceSelect = document.createElement("select");
    serviceSelect.className = "form-select border-0";
    serviceSelect.name = "Service";
    serviceSelect.style.height = "55px";
  
    const services = [
      "Select A Service",
      "AC",
      "Refrigerator",
      "Washing Machine",
      "LED LCD TV",
      "CCTV Cameras",
      "Microwave Oven",
      "Laptop & Computer",
      "Kitchen Chimney",
      "Kitchen HoB"
    ];
    services.forEach((s, i) => {
      const option = document.createElement("option");
      option.textContent = s;
      if (i === 0) option.selected = true;
      else option.value = i;
      serviceSelect.appendChild(option);
    });
    serviceCol.appendChild(serviceSelect);
  
    // Date input
    const dateCol = document.createElement("div");
    dateCol.className = "col-12 col-sm-6";
    const dateDiv = document.createElement("div");
    dateDiv.className = "date";
    dateDiv.id = "date1";
    dateDiv.setAttribute("data-target-input", "nearest");
    const dateInput = document.createElement("input");
    dateInput.type = "text";
    dateInput.className = "form-control border-0 datetimepicker-input";
    dateInput.setAttribute("data-toggle", "datetimepicker");
    dateInput.setAttribute("data-target", "#date1");
    dateInput.placeholder = "Service Date";
    dateInput.style.height = "55px";
    dateDiv.appendChild(dateInput);
    dateCol.appendChild(dateDiv);
  
    // Address
    const addressCol = document.createElement("div");
    addressCol.className = "col-12";
    const addressTextarea = document.createElement("textarea");
    addressTextarea.className = "form-control border-0";
    addressTextarea.name = "Address";
    addressTextarea.placeholder = "Your Address";
    addressCol.appendChild(addressTextarea);
  
    // Submit button
    const buttonCol = document.createElement("div");
    buttonCol.className = "col-12";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary w-100 py-3";
    submitButton.textContent = "Book Now";
    buttonCol.appendChild(submitButton);
  
    // Assemble all inputs into form
    formRow.appendChild(nameCol);
    formRow.appendChild(phoneCol);
    formRow.appendChild(serviceCol);
    formRow.appendChild(dateCol);
    formRow.appendChild(addressCol);
    formRow.appendChild(buttonCol);
  
    form.appendChild(accessKey);
    form.appendChild(formRow);
  
    card.appendChild(formTitle);
    card.appendChild(form);
  
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);
    document.body.appendChild(container);
  });
  