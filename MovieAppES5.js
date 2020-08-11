// Book Constructor
function Movie(title, director, releaseDate){
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
}


// UI Constructor
function UI(){}

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


// Event Listeners
document.getElementById('movie-form').addEventListener('submit', 
function(e){
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseDate = document.getElementById('release-date').value;

    const movie = new Movie(title, director, releaseDate);

    // Instantiate UI
    const ui = new UI();

    // Add Movie to list
    ui.addMovieToList(movie);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
});
