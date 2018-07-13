import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class SearchPage extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query: ''})
	}

	render() {
		const {books} = this.props
		const {query} = this.state

		let showingBooks = books
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingBooks = books.filter((book) => match.test(book.title))
			console.log(showingBooks)
		}

		return (

			<div className="search-books">
				<div className="search-books-bar">
					<Link
						to='/'
						className='close-search'
					></Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input
							type="text"
							placeholder="SearchPage by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>

				<div className='list-books-top'>

				</div>

				<ol className='book-list'>
					{showingBooks.map((book) => (
						<li key={book.id} className='book-list-item'>

						<div className="book-avatar" style={{ backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>

						 <div className='book-details'>
							<p>{book.title}</p>
						 </div>
						</li>
					))}
				</ol>
			</div>
		)
	}
}

export default SearchPage
