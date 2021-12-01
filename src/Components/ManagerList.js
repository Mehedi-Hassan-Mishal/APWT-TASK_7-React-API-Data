import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ManagerCard from './ManagerCard';

const ManagerList = () => {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/manager_list").then(response => {
            setManagers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);
   
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
            <h2 className="my-4 text-center">Manager's List</h2>
                <div className="row">
                    {
                        managers.map(manager => <ManagerCard manager={manager}></ManagerCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManagerList;
