class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.handleSearchParam = this.handleSearchParam.bind(this);
  }
  handleSearchParam(movie) {

    this.setState((prevState) => {
      return {
        movies: [movie, ...prevState.movies]
      }
    });
  }
  render() {

    return (
      <div>
        <SearchBoxView onSubmitSearch={this.handleSearchParam} />
        <Results movies={this.state.movies}/>
      </div>
    );
  }
}
