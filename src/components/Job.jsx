import { Row, Col, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import heart from "../../public/heart.svg";
import heartFill from "../../public/heart-fill.svg";
import { addFavouriteJob } from "../redux/actions";
// import { useState } from "react";

const Job = ({ data }) => {
  const dispatch = useDispatch();

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
            dispatch(addFavouriteJob(data));
          }}
        >
          <Image src={heartFill} style={{ width: "16px", height: "16px" }} />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
