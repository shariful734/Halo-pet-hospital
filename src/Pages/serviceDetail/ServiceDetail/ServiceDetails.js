
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { serviceId } = useParams();



    return (
        <div className="container text-center">
            <h1 className="text-warning">Here is the detail of our sevice</h1>

            <h3>{serviceId}</h3>


        </div>
    );
};

export default ServiceDetails;