import React from 'react';
import { useHistory } from 'react-router';

const ManagerCard = (props) => {
    const {  name, email, mobile } = props.manager;
    const history = useHistory();
    const handelClick = (email) => {
        const url = `/managerDetails/${email}`;
        history.push(url);
    }

    return (
        <div className="col-3 my-3" style={{ minHeight: " " }}>
            <div className="card-group">
                <div className="card">
                   
                    <div class="card-body">
                        <div class=" ">
                            <h5 class="card-title text-primary">{name}</h5>
                            <p class="card-text ms-auto"><small class="text-danger fw-bold">Email:
                                {email}</small></p>
                                
                        </div>
                        <span></span>
                        <div class="d-flex">
                        </div>
                        <div className=" ">
                            <div className=" ">
                                <button className="btn btn-sm btn-primary mt-4" onClick={() => handelClick(email)}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerCard;