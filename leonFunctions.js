// FUNCTION BELOW WORKS ---- GEMINI
function startLockdown() {
    var lockdown = {
      lockdown: true
    };
  
    firebase.database().ref('lockdown').update(lockdown)
      .then(() => {
        console.log("Lockdown started successfully!");
      })
      .catch((error) => {
        console.error("Error starting lockdown:", error);
      });
  }

  async function LeonUnlockLeon() {
    const password = "leonunlock";
    const passwordInput = prompt("Enter your password to unlock Leon:");
  
    if (!passwordInput) {
      alert("Please enter your password.");
      return;
    }
  
    try {
      if (passwordInput === password) {
            // Create lockdown object
            var lockdown = {
                lockdown: false
            };
        firebase.database().ref('lockdown').update(lockdown)
        .then(() => {
          console.log("Lockdown unlocked successfully!");
        })
        .catch((error) => {
          console.error("Error starting lockdown:", error);
  
        });        
      } else {
        alert("Wrong password. Please try again.");
      }
    } catch (error) {
      const errorMessage = error.message || "An error occurred. Please try again.";
      alert(errorMessage);
    }
  }

  function toggleWifiQRCode() {
    let buttonText;
  
    // Get the current state from Firebase
    firebase.database().ref('showWifiQRCode/showwifiqrcode').once('value')
      .then(snapshot => {
        const currentState = snapshot.val();
        const newState = !currentState;
        buttonText = newState ? "D I S A B L E _ W I F I" : "E N A B L E _ W I F I";
        return firebase.database().ref('showWifiQRCode').update({ showwifiqrcode: newState });
      })
      .then(() => {
        // Update the button text
        document.getElementById("enableWIFIButton").innerText = buttonText;
        console.log("WiFi QR Code state toggled successfully!");
      })
      .catch((error) => {
        console.error("Error toggling WiFi QR Code state:", error);
      });
  }
  