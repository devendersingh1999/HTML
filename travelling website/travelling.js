function search() {
    const input = document.getElementById("searchInput").value.toLowerCase(); // Get the input value and convert to lowercase
    const pictures = document.querySelectorAll('.pictures figure'); // Select all picture elements
    
    pictures.forEach(picture => {
        const figcaption = picture.querySelector('figcaption'); // Select the figcaption element within each picture
        const textValue = figcaption.textContent.toLowerCase(); // Get the text content of the figcaption and convert to lowercase
        
        // Check if the input value matches any part of the text content
        if (textValue.includes(input)) {
            picture.style.display = "inline-block"; // Show the picture if there's a match
        } else {
            picture.style.display = "none"; // Hide the picture if there's no match
        }
    });
}
