// Get DOM elements
const gameViewer = document.getElementById('gameViewer');
const gameFrame = document.getElementById('gameFrame');
const closeButton = document.getElementById('closeButton');
const categoryFilter = document.getElementById('categoryFilter');

// Get unique categories from games
const categories = [...new Set(games.map(game => game.category))];

// Populate category dropdown
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
});

// Function to create game cards
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <span class="game-category">${game.category}</span>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openGame(game.url);
    });
    
    return card;
}

// Function to open game in viewer
function openGame(url) {
    const gameViewer = document.getElementById('gameViewer');
    const gameFrame = document.getElementById('gameFrame');
    const loadingIndicator = document.querySelector('.loading-indicator');
    
    // Show loading indicator
    gameViewer.classList.add('active');
    loadingIndicator.style.display = 'flex';
    
    // Set the source and add load event listener
    gameFrame.src = url;
    gameFrame.onload = function() {
        loadingIndicator.style.display = 'none';
    };
}

// Function to close game viewer
function closeGameViewer() {
    const gameViewer = document.getElementById('gameViewer');
    const gameFrame = document.getElementById('gameFrame');
    
    // Add closing class for reverse animation
    gameViewer.classList.add('closing');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        gameViewer.classList.remove('active', 'closing');
        gameFrame.src = '';
    }, 300); // Match this with the transition duration in CSS
}

// Event listeners
closeButton.addEventListener('click', closeGameViewer);

// Close viewer when clicking outside the iframe
gameViewer.addEventListener('click', (e) => {
    if (e.target === gameViewer) {
        closeGameViewer();
    }
});

// Function to filter games
function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                            game.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    displayGames(filteredGames);
}

// Function to display games
function displayGames(gamesToShow = games) {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    gamesToShow.forEach(game => {
        container.appendChild(createGameCard(game));
    });
}

// Event listeners for filtering
searchInput.addEventListener('input', filterGames);
categoryFilter.addEventListener('change', filterGames);

// Initial display of games
displayGames(); 
