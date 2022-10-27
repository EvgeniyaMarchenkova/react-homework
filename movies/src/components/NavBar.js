import React from 'react';

const GENRES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedGenre: '' };
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);

  
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', listStyleType: 'none'}}>
          {GENRES.map((genre) =>
            <li
              id={genre}
              key={genre}
              onClick={this.updateSelectedGenre(genre)}
              className={genre === this.state.selectedGenre ? 'selected' : undefined} 
              style={{ padding: '10px'}}>
                {genre}
            </li>  
          )}
        </div>
      </div>
    );
  }

  updateSelectedGenre(genre) {
    return () => this.setState({selectedGenre: genre});
  }
}

export default NavBar;