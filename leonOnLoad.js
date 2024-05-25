function listenToLockdown() {
    firebase.database().ref('lockdown').on('value', function (snapshot) {
      var data = snapshot.val();
      const lockdownEnabled = data.lockdown === true; // Store lockdown status for readability
  
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
    console.log("Showing sensitive information as lockdown is lifted");
  }
  
  // Call the function to start listening for lockdown changes
  listenToLockdown();
  