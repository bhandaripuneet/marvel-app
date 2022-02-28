import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import Divider from "material-ui/Divider";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

import "./index.css";

const CharacterDetailComponent = props => {
  const {
    id,
    name,
    description,
    events,
    series,
    stories,
    thumbnail
  } = props.data;

  const renderChildData = (data, noDataMsg) => {
    if (data.items.length === 0) return noDataMsg;

    return data.items.map((item, index) => {
      const { name, resourceURI } = item;
      return (
        <>
          <li>{name}</li>
          <br />
        </>
      );
    });
  };

  return (
    // <div/>
    <div>
      <Header nameOfUser="Puneet" />
      <Card className="viewCard">
        <div className="row">
          <Link to="/user" className="backButton">
            {"< "}Back
          </Link>
        </div>
        <div className="row">
          <CardTitle title={name} />
          <Divider />
        </div>
        <div className="container belowSection">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="row charImg">
                <img
                  //   width="750"
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={name}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="row charImg">
                <span
                  dangerouslySetInnerHTML={{
                    __html: description
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 sectionDetails">
            <b>Series:</b> <br />
            <ul>
              {renderChildData(series, "No Series exist")} {/*render series*/}
            </ul>
            <Divider />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 sectionDetails">
            <b>Stories:</b> <br />
            <ul>
              {renderChildData(stories, "No Stories exist")}{" "}
              {/*render stories*/}
            </ul>
            <Divider />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 sectionDetails">
            <b>Events:</b> <br />
            <ul>
              {renderChildData(events, "No Events exist")} {/*render events*/}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CharacterDetailComponent;
