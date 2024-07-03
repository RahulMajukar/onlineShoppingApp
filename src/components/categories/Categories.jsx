import React from 'react';
import './Categories.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Categories() {
    const category = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    return (
        <Container>
            <h2 className="text-center my-4">Categories</h2>
            <Row className="g-4">
                {category.map((item, index) => (
                    <Col key={index} xs={12} sm={3} md={4} lg={3}>
                        <Card className="category-card h-100">
                            <Card.Img variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Category image" />
                            <Card.Body className="text-center">
                                <Card.Title>{item}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Categories;
