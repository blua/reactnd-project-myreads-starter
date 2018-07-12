import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
		books: []
	}

	componentDidMount() {
	BooksAPI.getAll().then((books) => {
			this.setState({ books })
			console.log(this.state)
		})
	}
	render() {
    return (
      <div className="app">
				<Route exact path="/" render={() => (
					<ListBooks
						books={this.state.books}
					/>
				)}
				/>
				<Route path="/search" render={({ history }) => (
					<SearchPage
						books={this.state.books}
					/>
				)}
				/>


      </div>
    )
  }
}

export default BooksApp
