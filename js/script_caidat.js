// Lấy tất cả các mục trong sidebar
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Thêm sự kiện click cho từng mục
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Xóa lớp 'active' của tất cả các mục
        sidebarLinks.forEach(link => link.classList.remove('active'));
        // Thêm lớp 'active' cho mục được bấm vào
        this.classList.add('active');
    });
});
// Lấy tất cả các mục toggle
const toggleLinks = document.querySelectorAll('.toggle');

toggleLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Lấy ID của submenu từ thuộc tính data-target
        const targetId = this.getAttribute('data-target');
        const submenu = document.getElementById(targetId);

        // Ẩn/hiện submenu tương ứng
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
});

// Thanh tìm kiếm
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.querySelector(".nav-center input");
const dropdown = document.getElementById("searchDropdown");

// Function to toggle dropdown
function toggleDropdown() {
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Show dropdown on search button or input click
searchBtn.addEventListener("click", toggleDropdown);
searchInput.addEventListener("click", toggleDropdown);

// Close dropdown if clicking outside of search area
window.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target) && event.target !== searchBtn && event.target !== searchInput) {
        dropdown.style.display = "none";
    }
});