document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = Array.from(document.getElementsByClassName('cell'));
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let currentPlayer = 'X';
    let gameActive = true;
    let boardState = ['', '', '', '', '', '', '', '', ''];

    const handleCellClick = (e) => {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (boardState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        boardState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        if (checkWin()) {
            alert(`${currentPlayer} has won!`);
            gameActive = false;
            return;
        }

        if (!boardState.includes('')) {
            alert('It\'s a draw!');
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    const checkWin = () => {
        return winningCombinations.some(combination => {
            return combination.every(index => boardState[index] === currentPlayer);
        });
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
});
