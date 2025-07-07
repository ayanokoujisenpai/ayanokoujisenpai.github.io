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
    { name: "H. Y. T.", number: "09947314166", source: "Saji"},
    { name: "RA***L C.", number: "09656711099", source: "Saji"},
    { name: "Unknown", number: "09105877324", source: "Saji"},
    { name: "B. A.", number: "09349115610", source: "Saji"},
    { name: "S. T.", number: "09701731966", source: "Saji"},
    { name: "S. O.", number: "09940987265", source: "Saji"}
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#scammerTable tbody");
    const searchInput = document.getElementById("search");

    function displayData(data) {
        tableBody.innerHTML = "";
        data.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${entry.name}</td><td>${entry.number}</td><td>${entry.source}</td>`;
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