import React from "react";
import "./cat-card.styles.scss";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const CatCard = ({ id, url, history, match }) => (
  <div className="col-md-3 col-sm- col-12 cat-card">
    <Card>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Button
          variant="primary"
          className="btn-block"
          onClick={() => history.push(`${match.url}${id}`)}
        >
          View details
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default withRouter(CatCard);
