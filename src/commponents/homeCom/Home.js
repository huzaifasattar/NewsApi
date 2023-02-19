import React, { useState, useEffect } from "react";
import { Form, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Api } from "../apiData/apiData";
import NewsCard from "../newsCard/NewsCard";
import PaginationCom from "../pagination/PaginationCom";
const Home = () => {

  const [item, setItem] = useState([]);

  const getData = async (get) => {
    try {
      let res = await Api(get);
      let obj = await res.json();
      setItem(obj);
    } catch (error) {
      console.log(error);
    }
  };

  const [activeTab, setActiveTab] = useState(1);

  const [data, setData] = useState({
    q: "apple",
    from: "2023-02-18",
    to: "2023-02-20",
    sortBy: "popularity",
    page: activeTab,
    pageSize: 5,
  });

  useEffect(() => {
    setData((get) => {
      const item = {
        ...get,
        page: activeTab,
      };
      getData(item);
      return item;
    });
  }, [activeTab]);

  const handleChange = (e) => {
    setData((get) => {
      const listCLone = { ...get };
      listCLone.page = 1;
      listCLone[e.target.name] = e.target.value;
      return listCLone;
    });
  };

  const resultFind = () => {
    getData(data);
    console.log(item.articles);
  };

  return (
    <Container>
      <Form style={{ marginTop: "8%" }}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Search</Form.Label>
            <Form.Control
              placeholder="search"
              name="q"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>From</Form.Label>
            <Form.Control
              placeholder="Page Size"
              type="date"
              name="from"
              defaultValue={data.from}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>To</Form.Label>
            <Form.Control
              placeholder="Page Size"
              type="date"
              name="to"
              defaultValue={data.to}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              name="sortBy"
              defaultValue={data.sortBy}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="">Popularity</option>
              <option value="">relevancy</option>
              <option value="">published</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Page Size</Form.Label>
            <Form.Control
              placeholder="Page Size"
              type="number"
              name="pageSize"
              defaultValue={data.pageSize}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
        </Row>
        {item.status === "ok" ? (
          <Button
            className="mt-2"
            onClick={resultFind}
            
            disabled={data.q ? false : true}
          >
            Search
          </Button>
        ) : (
          <Button className="mt-2" disabled>
            <Spinner animation="border" role="status" size="sm" />
            <span>Loading...</span>
          </Button>
        )}
      </Form>
      {item.articles
        ? item.articles.map((news, i) => <NewsCard news={news} key={i} />)
        : console.log("Api is Not Calling ")}
      {item.articles ? (
        <PaginationCom
          activeTab={activeTab}
          pageSize={data.pageSize}
          newItem={item.totalResults}
          setActiveTab={setActiveTab}
        />
      ) : (
        console.log("Pagination is not loadOut")
      )}
    </Container>
  );
};

export default Home;
