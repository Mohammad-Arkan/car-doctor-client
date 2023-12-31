import { useEffect, useState } from "react";
import ServiecCard from "./ServiecCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className="">
            <div className="text-center space-y-5">
                <h4 className="text-orange-500 font-bold">Service</h4>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which dont look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                    services.map(service => <ServiecCard
                    key={service._id}
                    service = {service}
                    ></ServiecCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;