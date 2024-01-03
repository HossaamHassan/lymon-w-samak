// Start Pricing
// Initial activation of Tab 1
document.getElementById("tab1").classList.add("active");

function openTab(tabId) {
  // Hide all content sections
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  // Deactivate all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the selected content and activate the corresponding tab
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// End Pricing
