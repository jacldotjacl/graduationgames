// Get DOM elements
const gameViewer = document.getElementById('gameViewer');
const gameFrame = document.getElementById('gameFrame');
const closeButton = document.getElementById('closeButton');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const randomGameButton = document.getElementById('randomGame');

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
    
    // Update game counter
    const counter = document.querySelector('.game-counter');
    counter.textContent = `${gamesToShow.length} games`;
    
    gamesToShow.forEach(game => {
        container.appendChild(createGameCard(game));
    });
}

// Event listeners for filtering
searchInput.addEventListener('input', filterGames);
categoryFilter.addEventListener('change', filterGames);

// Function to get a random game
function getRandomGame() {
    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchInput.value.toLowerCase());
        const matchesCategory = categoryFilter.value === 'all' || game.category === categoryFilter.value;
        return matchesSearch && matchesCategory;
    });
    
    if (filteredGames.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredGames.length);
        return filteredGames[randomIndex];
    }
    return null;
}

// Add event listener for random game button
randomGameButton.addEventListener('click', () => {
    const randomGame = getRandomGame();
    if (randomGame) {
        openGame(randomGame.url);
    }
});

// Initial display of games
displayGames();

// Hamburger Menu Functionality
const hamburgerButton = document.getElementById('hamburgerButton');
const flyoutPanel = document.getElementById('flyoutPanel');
const closeFlyout = document.getElementById('closeFlyout');
const linksContainer = document.getElementById('linksContainer');

// Toggle flyout panel
hamburgerButton.addEventListener('click', () => {
    flyoutPanel.classList.add('active');
});

closeFlyout.addEventListener('click', () => {
    flyoutPanel.classList.remove('active');
});

// Close flyout when clicking outside
document.addEventListener('click', (e) => {
    if (!flyoutPanel.contains(e.target) && !hamburgerButton.contains(e.target)) {
        flyoutPanel.classList.remove('active');
    }
});

// Display links in flyout panel
function displayLinks() {
    linksContainer.innerHTML = '';
    otherLinks.forEach(link => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.innerHTML = `
            <img src="${link.image}" alt="${link.title}">
            <h3>${link.title}</h3>
            <p>${link.description}</p>
        `;
        linkCard.addEventListener('click', () => {
            window.open(link.url, '_blank');
        });
        linksContainer.appendChild(linkCard);
    });
}

// Initialize links display
displayLinks();

// Recently Played Games Functionality
const recentlyPlayedButton = document.getElementById('recentlyPlayedButton');
const recentlyPlayedPanel = document.getElementById('recentlyPlayedPanel');
const closeRecent = document.getElementById('closeRecent');
const recentGamesContainer = document.getElementById('recentGamesContainer');

// Load recently played games from localStorage
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];

// Toggle recently played panel
recentlyPlayedButton.addEventListener('click', () => {
    recentlyPlayedPanel.classList.add('active');
});

closeRecent.addEventListener('click', () => {
    recentlyPlayedPanel.classList.remove('active');
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!recentlyPlayedPanel.contains(e.target) && !recentlyPlayedButton.contains(e.target)) {
        recentlyPlayedPanel.classList.remove('active');
    }
});

// Add game to recently played
function addToRecentlyPlayed(game) {
    // Remove game if it already exists
    recentlyPlayed = recentlyPlayed.filter(g => g.title !== game.title);
    
    // Add game to the beginning of the array
    recentlyPlayed.unshift(game);
    
    // Limit to 20 games
    if (recentlyPlayed.length > 20) {
        recentlyPlayed.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
    
    // Update display
    displayRecentlyPlayed();
}

// Display recently played games
function displayRecentlyPlayed() {
    recentGamesContainer.innerHTML = '';
    recentlyPlayed.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'recent-game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="recent-game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
        `;
        gameCard.addEventListener('click', () => {
            openGame(game.url);
            recentlyPlayedPanel.classList.remove('active');
        });
        recentGamesContainer.appendChild(gameCard);
    });
}

// Update the openGame function to include recently played
const originalOpenGame = openGame;
openGame = function(url) {
    originalOpenGame(url);
    const game = games.find(g => g.url === url);
    if (game) {
        addToRecentlyPlayed(game);
    }
};

// Initialize display
displayRecentlyPlayed(); 
