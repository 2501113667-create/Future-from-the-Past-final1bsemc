function searchFunction() {
    const input = document.getElementById('searchInput').value;
    if(input) {
        alert("You searched for: " + input);
    } else {
        alert("Please enter a keyword to search.");
    }
}