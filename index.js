<<<<<<< HEAD
const fetchBooks = () => (
 fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data))
)


const renderBooks = (books) => {
=======
const fetchBooks = () => {
fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json => renderBooks(json));
}


function renderBooks(books) {
>>>>>>> b155ca3a162255cf14485a7e24a64c5d59c60799
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
