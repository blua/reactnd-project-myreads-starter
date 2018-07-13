import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class ListBooks extends Component {

	render() {

		const {books} = this.props

		return (

			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.filter((b) => b.shelf === 'currentlyReading').map((b) => (
									<li key={b.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + b.imageLinks.thumbnail + ')' }}></div>
												<div className="book-shelf-changer">
													<select>
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading">Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>
												</div>
											</div>
											<div className="book-title">{b.title}</div>
											<div className="book-authors">{b.authors}</div>
										</div>
									</li>))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.filter((b) => b.shelf === 'wantToRead').map((b) => (
									<li key={b.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + b.imageLinks.thumbnail + ')' }}></div>
												<div className="book-shelf-changer">
													<select>
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading">Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>
												</div>
											</div>
											<div className="book-title">{b.title}</div>
											<div className="book-authors">{b.authors}</div>
										</div>
									</li>))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{books.filter((b) => b.shelf === 'read').map((b) => (
									<li key={b.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + b.imageLinks.thumbnail + ')' }}></div>
												<div className="book-shelf-changer">
													<select>
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading">Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>
												</div>
											</div>
											<div className="book-title">{b.title}</div>
											<div className="book-authors">{b.authors}</div>
										</div>
									</li>))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
					<Link
						to='/search'
						>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
