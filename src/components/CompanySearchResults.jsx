import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsFetch, storeJobs } from "../redux/actions";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector(state => state.companyResults.content);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getJobsFetch(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       dispatch(storeJobs(data));
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
