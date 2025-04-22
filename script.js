// Sample game data
const games = [
    {
        title: "2048",
        description: "A popular sliding tile puzzle game",
        image: "https://via.placeholder.com/300x150?text=2048",
        url: "https://play2048.co/"
    },
    {
        title: "Snake",
        description: "Classic snake game",
        image: "https://via.placeholder.com/300x150?text=Snake",
        url: "https://playsnake.org/"
    },
    {
        title: "Tetris",
        description: "The classic block-stacking game",
        image: "https://via.placeholder.com/300x150?text=Tetris",
        url: "https://tetris.com/play-tetris"
    },
    {
        title: "Pac-Man",
        description: "Classic arcade game",
        image: "https://via.placeholder.com/300x150?text=Pac-Man",
        url: "https://www.pacman.com/"
    },
    {
        title: "Minesweeper",
        description: "Classic puzzle game",
        image: "https://via.placeholder.com/300x150?text=Minesweeper",
        url: "https://minesweeper.online/"
    },
    {
        title: "Chess",
        description: "Play chess online",
        image: "https://via.placeholder.com/300x150?text=Chess",
        url: "https://www.chess.com/play/computer"
    }
];

// Function to create game cards
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.open(game.url, '_blank');
    });
    
    return card;
}

// Function to display games
function displayGames(gamesToShow = games) {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    gamesToShow.forEach(game => {
        container.appendChild(createGameCard(game));
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    displayGames(filteredGames);
});

// Initial display of games
displayGames(); 
