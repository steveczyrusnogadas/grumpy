import React from "react";
import "./catpage.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentCat,
  selectIsCatsFetching,
} from "../../redux/cat/cat.selectors";
import { fetchCatStart } from "../../redux/cat/cat.actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";

class CatPage extends React.Component {
  componentWillMount() {
    const {
      match: {
        params: { catId },
      },
      fetchCatStart,
    } = this.props;
    fetchCatStart(catId);
  }

  render() {
    const {
      cat: {
        url,
        breeds: [{ name, temperament, origin, description }],
      },
      history,
      isCatFetching,
    } = this.props;
    return isCatFetching ? (
      <div>Loading...</div>
    ) : (
      <Card>
        <Card.Header>
          <Button variant="primary" onClick={history.goBack}>
            Back
          </Button>
        </Card.Header>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <h4>{name}</h4>
          <h5>Origin: {origin}</h5>
          <h6>{temperament}</h6>
          <p>{description}</p>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cat: selectCurrentCat,
  isCatFetching: selectIsCatsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatStart: (catId) => dispatch(fetchCatStart(catId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CatPage)
);
