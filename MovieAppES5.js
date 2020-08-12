// Book Constructor
function Movie(title, director, releaseDate){
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
}


// UI Constructor
function UI(){}

// Add Data to Table
UI.prototype.addMovieToList = function(movie){
    const list = document.getElementById('movie-list');
    // Create tr Element
    const row = document.createElement('tr');
    // Insert calls
    row.innerHTML = `
    <td>${movie.title}</td>
    <td>${movie.director}</td>
    <td>${movie.releaseDate}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
    console.log(list);
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('director').value = ''; 
    document.getElementById('release-date').value = ''; 
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create Div
    const div = document.createElement('div');
    // Add className
    div.className = `alert ${className}`;
    // Add TextNode
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#movie-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Timeout After 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)

}

// Event Listeners
document.getElementById('movie-form').addEventListener('submit', 
function(e){
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseDate = document.getElementById('release-date').value;

    const movie = new Movie(title, director, releaseDate);

    // Instantiate UI
    const ui = new UI();

    // Validate Fields
    if(movie.title === '' || movie.director === '' || movie.releaseDate === '' ){
        ui.showAlert('Please fill in all fields', 'error' );
    } else {
        ui.addMovieToList(movie);
        // Show success
        ui.showAlert('Book Added', 'success')
        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});
