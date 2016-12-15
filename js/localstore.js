(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let realName = document.getElementById("real-name");
  let dateOfBirth = document.getElementById("dob");
  let resetStorage = document.getElementById("reset-storage");
  let nameStored = localStorage.uname;
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if (userName.value === "" || 
        realName.value === "" || 
        dateOfBirth.value === "") {
        
      alert("Please enter a name");
      userName.focus();
    }
      
    // Store uname
    var unameStored = userName.value;
    myName.innerHTML = unameStored;
    localStorage.uname = unameStored;
      
    // Store rname
    var rnameStored = realName.value;
    localStorage.rname = rnameStored;
      
    // Store dob
    var dobStored = dateOfBirth.value;
    localStorage.dob = dobStored;
      
    console.log(`New name stored: ${unameStored}, ${rnameStored}, ${dobStored}`);
    return false;
  }
  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
}());

// Add a button that clears local storage
function clearStorage () {
    localStorage.clear();
    console.log("storage cleared");
} 
