function Movie(title, director, releaseDate){
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
}

function UI(){}

UI.prototype.addMovieToList = function(movie){
    const list = document.getElementById('movie-list');
	
    const row = document.createElement('tr');
	
    row.innerHTML = `
    <td>${movie.title}</td>
    <td>${movie.director}</td>
    <td>${movie.releaseDate}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
}


UI.prototype.deleteMovieFromList = function(movie){
    if(movie.className === 'delete'){
        movie.parentElement.parentElement.remove();
    }
}


UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('director').value = ''; 
    document.getElementById('release-date').value = ''; 
}


UI.prototype.showAlert = function(message, className) {

    const div = document.createElement('div');
    
    div.className = `alert ${className}`;
    
    div.appendChild(document.createTextNode(message));
    
    const container = document.querySelector('.container');
   
    const form = document.querySelector('#movie-form');
    
    container.insertBefore(div, form);
    
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)

}


document.getElementById('movie-form').addEventListener('submit', 
function(e){
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseDate = document.getElementById('release-date').value;

    const movie = new Movie(title, director, releaseDate);

    const ui = new UI();

    if(movie.title === '' || movie.director === '' || movie.releaseDate === '' ){
        ui.showAlert('Please fill in all fields', 'error' );
    } else {
        ui.addMovieToList(movie);
		
        ui.showAlert('Book Added', 'success')
		
        ui.clearFields();
    }

    e.preventDefault();
});


document.getElementById('movie-list').addEventListener('click',
function(e){
 
    const ui = new UI();

    ui.deleteMovieFromList(e.target);

    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
});

