
  function openModal(serviceName) {
    if (serviceName === 'AC') {
      document.getElementById("modalHeading").innerText = "Type & Find Your " + serviceName;
      document.getElementById("serviceModal").style.display = "block";
    } else if (serviceName === 'Fridge') {
      document.getElementById("refrigeratorModalHeading").innerText = "Type & Find Your Refrigerator";
      document.getElementById("refrigeratorModal").style.display = "block";
    } else if (serviceName === 'Washer') {
      document.getElementById("washerModalHeading").innerText = "Type & Find Your Washing Machine";
      document.getElementById("washerModal").style.display = "block";
    } else if (serviceName === 'TV') {
      document.getElementById("tvModalHeading").innerText = "Type & Find Your TV";
      document.getElementById("tvModal").style.display = "block";
    } else if (serviceName === 'Chimney') {
      document.getElementById("chimneyModalHeading").innerText = "Type & Find Your Chimney";
      document.getElementById("chimneyModal").style.display = "block";
    } else if (serviceName === 'hob') {
      document.getElementById("hobModalHeading").innerText = "Type & Find Your Kitchen Hob";
      document.getElementById("hobModal").style.display = "block";
    }  else if (serviceName === 'microwave') {
      document.getElementById("microwaveModal").style.display = "block";
    } else if (serviceName === 'laptop') {
      document.getElementById("laptopModal").style.display = "block";
    } else if (serviceName === 'camera') {
      document.getElementById("cameraModal").style.display = "block";
    }
  }
  function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
  }
  function closeRefrigeratorModal() {
    document.getElementById("refrigeratorModal").style.display = "none";
  }
  function closeWasherModal() {
    document.getElementById("washerModal").style.display = "none";
  }
  function closeTvModal() {
    document.getElementById("tvModal").style.display = "none";
  }
  function closeChimneyModal() {
    document.getElementById("chimneyModal").style.display = "none";
  }

  function closeHobModal() {
    document.getElementById("hobModal").style.display = "none";
  }

  function closeMicrowaveModal() {
    document.getElementById("microwaveModal").style.display = "none";
  }

  function closeLaptopModal() {
    document.getElementById("laptopModal").style.display = "none";
  }

  function closeCameraModal() {
    document.getElementById("cameraModal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modals = [
      document.getElementById("serviceModal"),
      document.getElementById("refrigeratorModal"),
      document.getElementById("washerModal"),
      document.getElementById("tvModal"),
      document.getElementById("hobModal"),
      document.getElementById("chimneyModal"),
      document.getElementById("microwaveModal"),
      document.getElementById("laptopModal"),
      document.getElementById("cameraModal")


    ];
    modals.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  function searchBrands() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementById('brandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchRefrigeratorBrands() {
    let input = document.getElementById('refrigeratorSearchInput').value.toLowerCase();
    let cards = document.getElementById('refrigeratorBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchWasherBrands() {
    let input = document.getElementById('washerSearchInput').value.toLowerCase();
    let cards = document.getElementById('washerBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchTvBrands() {
    let input = document.getElementById('tvSearchInput').value.toLowerCase();
    let cards = document.getElementById('tvBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }
  function searchChimneyBrands() {
    let input = document.getElementById('chimneySearchInput').value.toLowerCase();
    let cards = document.getElementById('chimneyBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchHobBrands() {
    let input = document.getElementById('hobSearchInput').value.toLowerCase();
    let cards = document.getElementById('hobBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }
  
  function searchMicrowaveBrands() {
    let input = document.getElementById('microwaveSearchInput').value.toLowerCase();
    let cards = document.getElementById('microwaveBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchLaptopBrands() {
    let input = document.getElementById('laptopSearchInput').value.toLowerCase();
    let cards = document.getElementById('laptopBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }

  function searchCameraBrands() {
    let input = document.getElementById('cameraSearchInput').value.toLowerCase();
    let cards = document.getElementById('cameraBrandGrid').getElementsByClassName('brand-card');
    for (let i = 0; i < cards.length; i++) {
      let brandName = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      cards[i].style.display = brandName.includes(input) ? "" : "none";
    }
  }  
