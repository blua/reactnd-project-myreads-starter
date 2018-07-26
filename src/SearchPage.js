import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

	state = {
    query: '',
    searchResult: [],
  }

  clearQuery() {
    this.setState({ query: '', searchResult: []})
  }

  search = query => {
    this.setState({ query: query})
    if (query) {
      BooksAPI.search(query).then(searchResult => {
        if (!searchResult.error) {
          searchResult.map(book => {
            const bookIndex = this.props.books.findIndex(x => x.id === book.id)
            if (bookIndex > -1) {
              book.shelf = this.props.books[bookIndex].shelf
            }
						return book
          })
        }
        this.setState({searchResult})
      })
    } else {
      this.clearQuery()
    }
}

	render() {

		const {shelves, update} = this.props
		const {query, searchResult} = this.state

		return (

			<div className="search-books">
				<div className="search-books-bar">
					<Link
						to= '/'
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
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.search(event.target.value)}
						/>
					</div>
				</div>

				{searchResult.length > 0 ? (
					<div className="search-books-results">

					<ul className='books-grid'>
						{searchResult.map((book) => (
							<li key={book.id}>
								<Book
									book={book}
									shelves={shelves}
									update={update}
								/>
							</li>
						))}
					</ul>
				</div>
			) : ''}
		</div>
		)
	}
}

export default SearchPage
