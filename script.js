function showRules() {
    document.getElementById('main-game').style.display = 'none';
    document.getElementById('rules-page').style.display = 'block';
}

function showMainGame() {
    document.getElementById('rules-page').style.display = 'none';
    document.getElementById('main-game').style.display = 'block';
}

function chooseColor(color) {
    // Hide color selection buttons
    document.getElementById('color-selection').style.display = 'none';
    
    // Initialize game setup here...
}

function drawCard() {
    const drawButton = document.getElementById('draw-card');
    drawButton.style.animation = 'drawAnimation 0.5s ease';
    
    // Simulate drawing a card
    setTimeout(() => {
        drawButton.style.animation = '';
        // Logic for drawing a card
    }, 500);
}

function movePiece(squareId) {
    const square = document.getElementById(squareId);
    square.classList.add('active');
    
    // Animate piece movement
    square.style.animation = 'moveAnimation 0.5s ease';
    
    setTimeout(() => {
        square.classList.remove('active');
        square.style.animation = '';
        // Logic for moving the piece
    }, 500);
}

function shuffleDeck() {
    const deck = document.getElementById('deck');
    
    // Animate shuffle
    deck.style.animation = 'drawAnimation 1s ease';
    
    setTimeout(() => {
        deck.style.animation = '';
        // Logic for shuffling the deck
    }, 1000);
}

// Function to add a new card to the discard pile
function discardCard(cardText) {
    const discardedCards = document.getElementById('discarded-cards');
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = cardText;
    discardedCards.appendChild(card);
}

// Function to place a piece on the board
function placePiece(squareId, pieceColor) {
    const square = document.getElementById(squareId);
    let piece = document.createElement('div');
    piece.className = 'piece plus';
    piece.textContent = '+';
    piece.style.color = pieceColor;
    square.appendChild(piece);

    // Animate the addition of the piece
    piece.style.animation = 'cardAnimation 0.5s ease';
    
    setTimeout(() => {
        piece.style.animation = '';
    }, 500);
}
