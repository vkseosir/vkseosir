  // Create popup HTML
  const popupHTML = `
    <div id="popup" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                          background: rgba(0,0,0,0.6); display: flex; justify-content: center;
                          align-items: center; z-index: 9999;">
      <div id="popup-content" style="background: white; padding: 30px; border-radius: 10px; text-align: center; max-width: 400px; width: 90%;">
        <h2>Need a Repair Service?</h2>
        <p>Click below to book your service now!</p>
        <a href="contact.html"><button style="margin: 10px; padding: 10px 20px;">Book Now</button></a>
        <button class="close" style="margin: 10px; padding: 10px 20px;" onclick="document.getElementById('popup').remove()">Close</button>
      </div>
    </div>
  `;

  // Inject into body after 3 seconds (optional delay)
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.body.insertAdjacentHTML('beforeend', popupHTML);
    }, 3000); // 3000ms = 3 seconds
  });
