class SearchBoxView extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchBox = this.refs.searchBox;
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + searchBox.value,
      method: 'GET'
    })
    .done(function(response) {
      searchBox.value = '';

      this.props.onSubmitSearch(response);
    }.bind(this));
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input id="search" ref="searchBox" type="text" name="query" placeholder="Search for a Movie by Title" />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}
