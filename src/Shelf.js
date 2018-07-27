import React from 'react'
import Book from './Book'

function Shelf (props) {

		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{props.title}</h2>
					<div className="bookshelf-books">
						{/* For each book, render a Book component */}
						<ul className="books-grid">
							{props.books.map(book => (
								<li key={book.id}>
									<Book
										book={book}
										update={props.update}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
}

export default Shelf
