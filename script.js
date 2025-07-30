const bgImage = new Image();
bgImage.src = 'assets/background.png';

bgImage.onload = () => {
    document.body.style.visibility = 'visible';

    document.querySelectorAll('.card, #home img, #services, #scammers').forEach(el => {
        el.style.animationPlayState = 'running';
    });
};

const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

function switchTab(index) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    tabs[index].classList.add('active');
    document.querySelector(tabs[index].dataset.tabTarget).classList.add('active');
}

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

let startX = 0;
let endX = 0;

// Convert NodeList to array for indexing
const tabsArray = Array.from(tabs);

// Touch start
document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
}, { passive: true });

// Touch end
document.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    const activeIndex = tabsArray.findIndex(tab => tab.classList.contains('active'));

    // Swipe left: move to next tab
    if (startX - endX > threshold && activeIndex < tabsArray.length - 1) {
        switchToTabByIndex(activeIndex + 1);
    }

    // Swipe right: move to previous tab
    else if (endX - startX > threshold && activeIndex > 0) {
        switchToTabByIndex(activeIndex - 1);
    }
}

// This reuses your existing tab click logic for consistency
function switchToTabByIndex(index) {
    const tab = tabsArray[index];
    const target = document.querySelector(tab.dataset.tabTarget);

    tabs.forEach(t => t.classList.remove('active'));
    tabsContent.forEach(content => content.classList.remove('active'));

    tab.classList.add('active');
    target.classList.add('active');
}

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