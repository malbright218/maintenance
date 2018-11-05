import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API"

class MovieInfo extends Component {
	state = {
		movie: {
			Ratings: [
				{ Value: "" },
				{ Value: "" },
				{ Value: "" }
			]
		}
	}

	componentDidMount() {
		const movieId = window.location.href.split("/").pop();
		window.scrollTo(0, 0);
		API.searchOne(movieId).then(res => {
			this.setState({
				movie: res.data
			}, () => {
				API.getTrailer(this.state.movie.Title, this.state.movie.Year).then(response => {
					this.setState({
						trailerUrl: response.data
					});
				});
			});
		});
	}
	goBack(event) {
		event.preventDefault()
		console.log("clicked")
		window.location.replace(`http://localhost:3000/movielist/${sessionStorage.getItem("username").slice(1, -1)}`)
	}
	render() {
		return (
			<Wrapper>
				<table className="animated fadeInDownBig">
					<tbody>
						<tr>
							<td className="td-poster"><button className="btn waves-effect waves-light back-button red" onClick={this.goBack} type="submit" name="action">Go Back
    <i className="material-icons left">keyboard_backspace</i>
							</button><img src={this.state.movie.Poster === "N/A" || !this.state.movie.Poster ? "/nopicture.png" : this.state.movie.Poster} alt="Movie Poster" className="movie-poster-detailed"></img></td>
							<td>{this.state.movie.Response === "True" ? (
								<div>
									<h5 className="movie-title"><span className="movie-title-blue">{this.state.movie.Title}</span> ({this.state.movie.Year})</h5>
									<p className="movie-plot">{this.state.movie.Plot}</p>
									<div>
										<p className="movie-information"><b>Genres: </b>{this.state.movie.Genre}</p>
										<p className="movie-information"><b>Rated: </b>{this.state.movie.Rated}</p>
										<p className="movie-information"><b>Director: </b>{this.state.movie.Director}</p>
										<p className="movie-information"><b>Actors: </b>{this.state.movie.Actors}</p>
										<p className="movie-information"><b>Writer: </b>{this.state.movie.Writer}</p>
										{this.state.movie.Ratings[0] ?
											<p className="movie-information"><b>IMDB Score: </b>{this.state.movie.Ratings[0].Value}</p>
											: ""}
										{this.state.movie.Ratings[1] ?
											<p className="movie-information"><b>Rotten Tomatoes Score: </b>{this.state.movie.Ratings[1].Value}</p>
											: ""}
										{this.state.movie.Ratings[2] ?
											<p className="movie-information"><b>Metacritic Score: </b>{this.state.movie.Ratings[2].Value}</p>
											: ""}
										<p className="movie-information"><b>Country of Origin: </b>{this.state.movie.Country}</p>
										<p className="movie-information"><b>Original Language: </b>{this.state.movie.Language}</p>
										<p className="movie-information"><b>US Release: </b>{this.state.movie.Released}</p>
										<p className="movie-information"><b>Runtime: </b>{this.state.movie.Runtime}</p>
										<p className="movie-information"><b>Box Office Revenue: </b>{this.state.movie.BoxOffice}</p>
										<p className="movie-information"><b>Producer: </b>{this.state.movie.Production}</p>
										<p className="movie-information"><b>Awards: </b>{this.state.movie.Awards}</p>
									</div>
									<iframe className="iframe-trailer" width="720" height="350" title="movie-trailer" src={this.state.trailerUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
								</div>
							) : <h2>Movie not found</h2>}</td>
						</tr>
					</tbody>
				</table>
			</Wrapper>
		);
	}
}

export default MovieInfo;