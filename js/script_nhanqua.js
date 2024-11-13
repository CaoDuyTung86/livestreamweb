document.getElementById("inventoryTab").addEventListener("click", function() {
    // Hiển thị Inventory và ẩn All Campaigns
    document.getElementById("inventoryContent").style.display = "block";
    document.getElementById("campaignsContent").style.display = "none";
    
    // Thêm class active cho Inventory và loại bỏ cho All Campaigns
    document.getElementById("inventoryTab").classList.add("active");
    document.getElementById("campaignsTab").classList.remove("active");
});

document.getElementById("campaignsTab").addEventListener("click", function() {
    // Hiển thị All Campaigns và ẩn Inventory
    document.getElementById("inventoryContent").style.display = "none";
    document.getElementById("campaignsContent").style.display = "block";
    
    // Thêm class active cho All Campaigns và loại bỏ cho Inventory
    document.getElementById("campaignsTab").classList.add("active");
    document.getElementById("inventoryTab").classList.remove("active");
});

// Lưu trữ trạng thái khi thay đổi tab
localStorage.setItem("currentTab", "inventory"); // Lưu tab hiện tại

// Đọc lại trạng thái khi tải trang
const currentTab = localStorage.getItem("currentTab");
if (currentTab === "inventory") {
    document.getElementById("inventoryContent").style.display = "block";
    document.getElementById("campaignsContent").style.display = "none";
} else {
    document.getElementById("inventoryContent").style.display = "none";
    document.getElementById("campaignsContent").style.display = "block";
}

// Search
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