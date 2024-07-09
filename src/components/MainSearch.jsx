import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QUERY, submitFetch } from "../redux/actions";

const MainSearch = () => {
  const company = useSelector(state => state.companyList.company);
  const isLoading = useSelector(state => state.companyList.isLoading);
  const query = useSelector(state => state.companyList.query);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: QUERY, payload: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(submitFetch(query));
    // dispatch({ type: JOBS_LOADING_ON });
    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //     dispatch({ type: JOBS_LOADING_OFF });
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      {isLoading ? (
        <Spinner aniumation="border"></Spinner>
      ) : (
        <Row>
          <Link to="/favourites">FAVOURITES</Link>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {company.map(companyData => (
              <Job key={companyData._id} data={companyData} />
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MainSearch;
