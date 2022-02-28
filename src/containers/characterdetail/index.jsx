import React from "react";
import { connect } from "react-redux";
import CharacterDetailComponent from "./../../components/characterdetail";
import { withRouter } from "react-router-dom";


class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedData: {},
    };
  }

  componentDidMount() {
    const {
      allCharacters,
      match: { params }
    } = this.props;
    const characterData = allCharacters.filter(
      char => char.id === Number(params.id)
    );

    if (characterData.length > 0) {
      this.setState({ detailedData: characterData[0] });
    } else {
      this.setState({open: true})
      this.props.history.push(`/user`)
    }
  }

  render() {
    const { open } = this.state
    
    return Object.keys(this.state.detailedData).length > 0 ? (
      <>
        <CharacterDetailComponent data={this.state.detailedData} />
      </>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    allCharacters: state.characters
  };
};

export default withRouter(connect(mapStateToProps)(CharacterDetail));
