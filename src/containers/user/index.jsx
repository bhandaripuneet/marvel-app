import React from "react";
import { connect } from "react-redux";
import { marvelObj } from "../../config.jsx";
import Header from "../../components/header/header";
import CharacterCard from "../../components/characterCard";
import { setCharacters } from "../../actions/characters";
import data from "./../../data.json";
import "./user.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount = () => {
    this.fetchCharacters();
  };

  fetchCharacters() {
    // marvelObj.get('characters', '&limit=100')
    // .then(response => response.data)
    // .then(data => {
    //   this.setState({characters: data.data.results})
    //   this.props.setCharacters(data.data.results)
    // })

    this.setState({ characters: data.data.results });
    this.props.setCharacters(data.data.results);
  }

  render() {
    return (
      <div>
        <Header nameOfUser={this.props.activeUser} />
        <div className="displayCard">
          <div className="row">
            <CharacterCard data={this.state.characters} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser
  };
}

const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch(setCharacters(characters))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
