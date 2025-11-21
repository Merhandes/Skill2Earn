document.querySelector('.gate-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('score-popup').style.display = 'flex';
});
function closeScorePopup() {
    document.getElementById('score-popup').style.display = 'none';
}
