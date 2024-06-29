function listenToLockdown() {
    firebase.database().ref('lockdown').on('value', function (snapshot) {
      var data = snapshot.val();
      const lockdownEnabled = data.lockdown === true; // Store lockdown status for readability
      document.getElementById("enableWIFIButton").style.display = "none"
      if (lockdownEnabled) {
        hideSensitiveInformation();
      } else {
        showSensitiveInformation();
      }
    });
  }
  
  function hideSensitiveInformation() {
    console.log("Hiding sensitive information due to lockdown");
  }
  
  function showSensitiveInformation() {
    document.getElementById("enableWIFIButton").style.display = "block"
    console.log("Showing sensitive information as lockdown is lifted");
  }
  
  // Call the function to start listening for lockdown changes
  listenToLockdown();
