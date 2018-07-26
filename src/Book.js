import React, { Component } from 'react'

class Book extends Component {

	/*	Get shelf icon to display before book title and shelf title to display
	when icon is hovered. I had to create 2 functions as I didn't succeed
	in accessing the title and icon separately inside JSX
	when I returned them from the same function*/

	getShelfTitle(shelves, book) {
			const shelfIndex = shelves.findIndex(x => x.id === book.shelf)
			if (shelfIndex > -1) {
				const title = shelves[shelfIndex].title
				return title
			}
		}

	getShelfIcon(shelves, book) {
		const shelfIndex = shelves.findIndex(x => x.id === book.shelf)
		if (shelfIndex > -1) {
			const icon = shelves[shelfIndex].icon
			return icon
		}
	}

	render() {

		const {book, shelves, update} = this.props

		return (
			<div className="book">
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
					{/*
						Only show shelf icon if shelves is defined,
						which only happens in the search page - in the main page books are
						already organized by shelf, making icons redundant
					*/}
					{shelves ? <span title={this.getShelfTitle(shelves, book)}>{this.getShelfIcon(shelves, book)} </span> : ''}
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
