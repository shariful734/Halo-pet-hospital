
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';



const ServiceDetails = () => {

    const { serviceId } = useParams();

    const { services } = useAuth();

    const detail = services.find((service) => service.id === Number(serviceId));

    // console.log(detail);

    return (
        <div className="container text-center">
            <h1 className="text-warning">Here is the detail of our service {serviceId}</h1>

            <div className="d-flex my-5 justify-content-center align-item-center">

                <Card className="w-50">
                    <Card.Img className="service-img" variant="top" src={detail?.serviceImg} />
                    <Card.Body>
                        <Card.Title>{detail?.serviceName}</Card.Title>
                        <Card.Text>
                            {detail?.description?.slice(0, 100)}
                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>



        </div>
    );
};

export default ServiceDetails;