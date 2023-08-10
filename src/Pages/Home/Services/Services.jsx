import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('services.json')
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
            <div>
                <p>Services {services.length}</p>
            </div>
            
        </div>
    );
};

export default Services;