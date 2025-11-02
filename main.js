// ===== Header Toggle =====
function updateHeaderState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    document.getElementById("logged-out-header").style.display = isLoggedIn ? "none" : "flex";
    document.getElementById("logged-in-header").style.display = isLoggedIn ? "flex" : "none";
}
updateHeaderState();

// ===== Nearby Places (FIXED) =====
function findNearby(type) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            let search_query = ""; 

            switch (type) {
                case "hotels":
                    search_query = "Hotels near me";
                    break;
                case "restaurants":
                    search_query = "Restaurants near me";
                    break;
                case "shopping":
                    search_query = "Shopping Malls near me";
                    break;
                case "travels":
                    search_query = "Tourist Attractions near me";
                    break;
                case "cinema":
                    search_query = "Cinemas near me"; 
                    break;
                default:
                    alert("Unknown category");
                    return;
            }

            const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(search_query)}&ll=${lat},${lon}&z=15&output=embed`;
            document.getElementById('map-frame').src = embedUrl;

        }, (error) => {
            alert(`Error getting location. Please enable location services. (${error.message})`);
        });
    } else {
        alert("Geolocation not supported by your browser.");
    }
}

// ===== Open Specific City (FIXED) =====
function openMap(place) {
    const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(place)}&z=10&output=embed`;
    document.getElementById('map-frame').src = embedUrl;
}

// ===== Sidebar =====
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle) {
    menuToggle.onclick = function () {
        document.getElementById("sidebar-menu").classList.toggle("open");
    };
}

// ===== Logout =====
const logoutLink = document.getElementById("logout-link");
if (logoutLink) {
    logoutLink.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "false");
        location.reload();
    };
}
