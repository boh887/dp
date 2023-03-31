// Define the redirect URLs for desktop and mobile devices
var desktopUrl = "./desktop/index.html";
var mobileUrl = "./mobile/index.html";

// Check the user's device type and redirect to the appropriate URL
function checkDevice() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Redirect to mobile site
    window.location.replace(mobileUrl);
  } else {
    // Redirect to desktop site
    window.location.replace(desktopUrl);
  }
}

// Call checkDevice on page load
checkDevice();

// Call checkDevice on window resize
window.addEventListener('resize', checkDevice);
