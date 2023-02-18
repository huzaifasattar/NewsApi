import { Card ,Button} from "react-bootstrap";

const NewsCard = ({ news, i }) => {
  return (
    <div>
      
      <Card className="card-style text-center mt-4"  >
        <Card.Img variant="top" src={news.urlToImage} className="img-style" />
        <Card.Title className="card-title">{news.title}</Card.Title>
        <Card.Body>
          <Card.Text>
          {news.description}
          </Card.Text>
          <Button href={news.url } target="blanked">Read More..</Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default NewsCard;
