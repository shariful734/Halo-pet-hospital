import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleServiceDetail = ({ detail }) => {
    const { serviceName, serviceImg, description, price, id } = detail;

    const { serviceId } = useParams();

    const matchedId = detail.find(matchedDetail => matchedDetail.id.includes(serviceId));

    let detailOfservice;

    if (serviceId === id) {
        detailOfservice = <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">{price}</Button>
                </Card.Body>
            </Card>

        </div>
    }


    return (
        <div>



        </div>
    );
};

export default SingleServiceDetail;