// JavaScript for showing and hiding content
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll("main > div");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = event.target.getAttribute("href").substring(1);
            pages.forEach((page) => {
                if (page.id === target) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });
        });
    });
});
window.addEventListener("scroll", function() {
    var pageFooter = document.getElementById("page-footer");

    // Check if the user has scrolled to the end of the content
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Display the footer when the end is reached
        pageFooter.style.display = "block";
    } else {
        // Hide the footer if not at the end
        pageFooter.style.display = "none";
    }
});

// Your existing JavaScript code can go here or continue below this section.
    <script src="script.js"></script>
<script>
    // JavaScript to toggle the mobile menu
    const mobileMenu = document.getElementById('top-nav');
    const navList = mobileMenu.querySelector('ul');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    mobileMenu.appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show-menu');
    });
</script>
