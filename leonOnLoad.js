function listenToLockdown() {
    firebase.database().ref('lockdown').on('value', function (snapshot) {
      var data = snapshot.val();
      const lockdownEnabled = data.lockdown === true; // Store lockdown status for readability
      document.getElementById("wifi_connection_qr_code").style.display = "none"
      // Hide or show sensitive information based on lockdownEnabled
      if (lockdownEnabled) {
        hideSensitiveInformation();
      } else {
        showSensitiveInformation();
      }
    });
  }
  
  function hideSensitiveInformation() {
    //showing lockdown message
    document.getElementById("LeonLockdownMessage").style.display = "block"
    console.log("Hiding sensitive information due to lockdown");
  }
  
  function showSensitiveInformation() {
    //hide lockdown message
    document.getElementById("LeonLockdownMessage").style.display = "none"
    document.getElementById("wifi_connection_qr_code").style.display = "block"
    console.log("Showing sensitive information as lockdown is lifted");
  }
  
  // Call the function to start listening for lockdown changes
  listenToLockdown();
  

// Check WiFi QR Code state on page load
window.onload = function() {
  firebase.database().ref('showWifiQRCode/showwifiqrcode').once('value')
    .then(snapshot => {
      const currentState = snapshot.val();
      const qrCodeSection = document.getElementById("wifi_connection_qr_code");

      if (currentState) {
        qrCodeSection.style.display = "block";
      } else {
        qrCodeSection.style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error fetching WiFi QR Code state:", error);
    });
};

