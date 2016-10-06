class Results extends React.Component {
  render() {
    let { movies } = this.props;
    return (
      <div className="container">
          {movies.map((movie, i) =>
            <Movie key={i} data={movie} />)}
      </div>
    );
  }
}
