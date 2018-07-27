import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
		books: [],
		shelves: [
			{
				id: 'currentlyReading',
				title: 'Currently Reading',
				icon: '📖'
			},
			{
				id: 'wantToRead',
				title: 'Want to Read',
				icon: '★'
			},
			{
				id: 'read',
				title: 'Read',
				icon: '✔'
			}
		]
	}

	/* When component is mounted, set state to an object
	that contains the books on my shelves */
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(state => state.books = { books })
		})
	}

	/* Same for when component is updated. This was the only way I managed to get
	the main page reflect changes made in the search page
	without having to refresh the browser
	componentDidUpdate() {
		BooksAPI.getAll().then((books) => {
			this.setState(state => state.books = { books })
		})
	}
	*/


	/* Method to add a book to a shelf or move it to a different shelf */
	update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => state.books.concat(book))
    })
	}

	render() {

    return (
      <div className="app">
				<Route exact path="/" render={() => (
					<ListBooks
						books={this.state.books}
						shelves={this.state.shelves}
						update={this.update}
					/>
				)}
				/>
				<Route path="/search" render={() => (
					<SearchPage
						books={this.state.books}
						shelves={this.state.shelves}
						update={this.update}
					/>
				)}
				/>
      </div>
    )
  }
}

export default BooksApp
