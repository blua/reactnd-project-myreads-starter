import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component {

	render() {

		const {books, shelves, update} = this.props

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				{/* For each shelf, render a Shelf component,
					filtering the books by shelf.id */}
				<div className="list-books-content">
						{shelves.map(shelf => (
							<Shelf
								key={shelf.id}
								title={shelf.title}
								books={books.filter(book => book.shelf === shelf.id)}
								update={update}
							/>
						))}
				</div>
				<div className="open-search">
					<Link
						to='/search'
						></Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
