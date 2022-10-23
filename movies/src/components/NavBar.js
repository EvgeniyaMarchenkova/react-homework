import React from 'react';

const GENRES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedGenre: '' };
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);

    this.listItems = GENRES.map((genre) =>
      <li
        id={genre}
        key={genre}
        onClick={this.updateSelectedGenre}
        style={{ padding: '10px'}}>{genre}</li>
    );
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', listStyleType: 'none'}}>{this.listItems}</div>
      </div>
    );
  }

  updateSelectedGenre(event) {
    const selectedValue = event.target.innerText;
    this.setState({selectedGenre: selectedValue});
    this.listItems.forEach((genre, i) => {
      const genreTab = document.getElementById(GENRES[i]);
      console.log(genreTab);
      if (genreTab.innerText === selectedValue) {
        genreTab.className =  'selected';
      } else {
        genreTab.className =  '';
      }
    })
  }
}

export default NavBar;