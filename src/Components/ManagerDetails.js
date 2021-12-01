import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useParams } from 'react-router';
import axios from 'axios';

const ManagerDetails = () => {
    const { email } = useParams();
    const [managers, setManagers] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/manager_list").then(response => {
            setManagers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);
    const selectedManager = managers.find(pd => pd.email === email);
    return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>

                <div>
                    <h2>Manager Details</h2>
                    <h6>Manager Id: {selectedManager?.id}</h6>
                    <h6>Manager Name: {selectedManager?.name}</h6>
                    <h6>Manager Email: {selectedManager?.email}</h6>
                    <h6>Manager Mobile: {selectedManager?.mobile}</h6>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManagerDetails;