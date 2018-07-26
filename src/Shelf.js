import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

	render() {

		const {title, books, update} = this.props

		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						{/* For each book, render a Book component */}
						<ul className="books-grid">
							{books.map(book => (
								<li key={book.id}>
									<Book
										book={book}
										update={update}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}

}

export default Shelf
