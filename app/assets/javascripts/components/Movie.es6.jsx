class Movie extends React.Component {
  render() {
    let { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Awards, Poster, Metascore, imdbRating, imdbVotes, imdbID} = this.props.data
    return (
      <div className="col-md-8">
        <img className="col-md-4 img-thumbnail" src={Poster}/>

          <div className="col-md-8">
          <strong>Title</strong>: {Title}<br/>
          <strong>Year</strong>: {Year}<br/>
          <strong>Rated</strong>: {Rated}<br/>
          <strong>Released</strong>: {Released}<br/>
          <strong>Runtime</strong>: {Runtime}<br/>
          <strong>Genre</strong>: {Genre}<br/>
          <strong>Director</strong>: {Director}<br/>
          <strong>Writer</strong>: {Writer}<br/>
          <strong>Actors</strong>: {Actors}<br/>
          <strong>Plot</strong>: {Plot}<br/>
          <strong>Awards</strong>: {Awards}<br/>
          <strong>Metascore</strong>: {Metascore}<br/>
          <strong>imdbRating</strong>: {imdbRating}<br/>
          <strong>imdbVotes</strong>: {imdbVotes}<br/>
          <strong>imdbID</strong>: {imdbID}<br/>
        </div>
      </div>
    );
  }
}
