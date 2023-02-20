function addProfile() {
    // Get input values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
  
    // Create profile card
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");
  
    // Create profile card content
    const nameElement = document.createElement("h2");
    nameElement.textContent = name;
  
    const ageElement = document.createElement("p");
    ageElement.textContent = `Age: ${age}`;
  
    const locationElement = document.createElement("p");
    locationElement.textContent = `Location: ${location}`;
  
    // Add content to profile card
    profileCard.appendChild(nameElement);
    profileCard.appendChild(ageElement);
    profileCard.appendChild(locationElement);
  
    // Add profile card to grid
    const profileGrid = document.getElementById("profile-grid");
    profileGrid.appendChild(profileCard);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("location").value = "";
  }
  