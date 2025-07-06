const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabsContent.forEach(tabContent => 
            tabContent.classList.remove('active')
        );
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    })
})

const scammerData = [
    { name: "HAYEZ YURI T.", number: "09947314166" },
    { name: "RA***L C.", number: "09656711099" },
    { name: "HY. T.", number: "09947314166" },
    { name: "Unknown", number: "09105877324" },
    { name: "B. A.", number: "09349115610" },
    { name: "S. T.", number: "09701731966" },
    { name: "S. O.", number: "09940987265" }
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#scammerTable tbody");
    const searchInput = document.getElementById("search");

    function displayData(data) {
        tableBody.innerHTML = "";
        data.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${entry.name}</td><td>${entry.number}</td>`;
            tableBody.appendChild(row);
        });
    }

    // Initial load
    displayData(scammerData);

    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filtered = scammerData.filter(entry =>
            entry.name.toLowerCase().includes(searchTerm) ||
            entry.number.includes(searchTerm)
        );
        displayData(filtered);
    });
});