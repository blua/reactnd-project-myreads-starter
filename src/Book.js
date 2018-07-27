import React, { Component } from 'react'

class Book extends Component {

	render() {

		const {book, shelves, update} = this.props

		/* Only show shelf icon if shelves is defined,
			which only happens in the search page - in the main page books are
			already organized by shelf, making icons redundant */

		if (shelves && book.shelf) {
			const found = shelves.find(({ id }) => id === book.shelf);
			book.icon = found.icon;
			book.shelfTitle = found.title;
		}

		return (
			<div className="book" title={book.shelfTitle}>
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
						}}>
					</div>
					<div className="book-shelf-changer">
						<select
							defaultValue={book.shelf ? book.shelf : "none"}
							onChange={event => update(book, event.target.value)}
						>
							<option value="disabled" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want To Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
		</div>
				</div>
				<div className="book-title">
					<span>{book.icon} </span>
					{book.title}
				</div>
				<div className="book-authors">
					{book.authors ? book.authors.join(', '): ''}
				</div>
	</div>
		)
	}
}

export default Book
