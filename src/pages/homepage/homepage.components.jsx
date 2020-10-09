import React from "react";
import "./homepage.styles.scss";

import { connect } from "react-redux";
import {
  selectBreeds,
  selectCurrentBreed,
} from "../../redux/breed/breed.selectors";
import { createStructuredSelector } from "reselect";
import {
  setCurrentBreed,
  fetchBreedsStart,
} from "../../redux/breed/breed.actions";
import {
  clearCats,
  fetchCatsStart,
  loadMoreCatsStart,
} from "../../redux/cat/cat.actions";
import _ from "lodash";

import { Button, Form, Col, Row, Container } from "react-bootstrap";
import {
  selectCats,
  selectCurrentPage,
  selectIsCatsFetching,
  selectHideLoadMore,
} from "../../redux/cat/cat.selectors";
import CatCard from "../../components/cat-card/cat-card.components";

class HomePage extends React.Component {
  componentDidMount() {
    const {
      fetchBreedsStart,
      fetchCatsStart,
      currentBreed,
      breeds,
    } = this.props;

    if (_.isEmpty(breeds)) {
      fetchBreedsStart();
    }

    if (currentBreed) {
      fetchCatsStart(currentBreed, 1);
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { setCurrentBreed, fetchCatsStart, clearCats } = this.props;
    setCurrentBreed(value);

    if (value) {
      fetchCatsStart(value, 1);
    } else {
      clearCats();
    }
  };

  render() {
    const {
      breeds,
      currentBreed,
      cats,
      currentPage,
      loadMoreCatsStart,
      isCatsFetching,
      hideLoadMore,
    } = this.props;

    return (
      <div className="homepage">
        <Container>
          <h1>Cat Browser</h1>
          <Row>
            <Col className="col-md-3 col-sm-6 col-12">
              {" "}
              <Form.Group>
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  disabled={_.isEmpty(breeds)}
                  as="select"
                  placeholder="Select breed"
                  defaultValue={currentBreed}
                  onChange={this.handleChange}
                >
                  <option value="">Select Breed</option>
                  {breeds.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {_.isEmpty(cats) ? (
              <Col>
                <p>No cats available</p>
              </Col>
            ) : (
              cats.map(({ id, ...otherItemProps }) => (
                <CatCard key={id} id={id} {...otherItemProps} />
              ))
            )}
          </Row>
          <Row>
            <Col className="col-md-3 col-sm-6 col-12">
              <Button
                variant="success"
                disabled={isCatsFetching || !currentBreed}
                hidden={hideLoadMore}
                onClick={() =>
                  loadMoreCatsStart(currentBreed, currentPage + 1, 10)
                }
              >
                {isCatsFetching ? `Loading cats...` : `Load more`}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cats: selectCats,
  breeds: selectBreeds,
  currentBreed: selectCurrentBreed,
  currentPage: selectCurrentPage,
  isCatsFetching: selectIsCatsFetching,
  hideLoadMore: selectHideLoadMore,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentBreed: (breed) => dispatch(setCurrentBreed(breed)),
  fetchBreedsStart: () => dispatch(fetchBreedsStart()),
  fetchCatsStart: (breedId, page) =>
    dispatch(fetchCatsStart({ breedId, page })),
  loadMoreCatsStart: (breedId, page) =>
    dispatch(loadMoreCatsStart({ breedId, page })),
  clearCats: () => dispatch(clearCats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
