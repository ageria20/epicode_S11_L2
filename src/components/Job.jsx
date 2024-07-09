import { Row, Col, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heart from "../../public/heart.svg";
import heartFill from "../../public/heart-fill.svg";
// import { useState } from "react";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const isSelected = useSelector(state => state.isSelected.content);

  // const [isSelected, setIsSelected] = useState(false);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          variant="transparent"
          className="p-0 mx-5"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: "FAV_JOB", payload: data }, dispatch({ type: "SELECTED", payload: !isSelected }));
          }}
        >
          <Image src={isSelected ? heartFill : heart} style={{ width: "16px", height: "16px" }} />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
