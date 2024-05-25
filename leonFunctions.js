// FUNCTION BELOW WORKS ---- GEMINI
function startLockdown() {
    // Create lockdown object
    var lockdown = {
      lockdown: true
    };
  
    firebase.database().ref('lockdown').update(lockdown)
      .then(() => {
        console.log("Lockdown started successfully!");
      })
      .catch((error) => {
        console.error("Error starting lockdown:", error);
        //display in a console log window bottom right side of the screen aka. div

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

  