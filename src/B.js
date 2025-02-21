"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLoc } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const B = () => {
    const [loc, setLoc] = useState("");
    const dispatch = useDispatch();

    const fnChange = (eve) => {
        setLoc(eve.target.value);
    };

    const fnSubmit = () => {
        dispatch(updateLoc(loc)); // Dispatch action to update Redux state
    };

    return (
        <div className="container mt-3 p-3 border rounded shadow">
            <h1 className="text-primary">B</h1>
            <p>
                <b>Location :</b>
                <input onChange={fnChange} className="form-control mt-2" />
            </p>
            <p>
                <button onClick={fnSubmit} className="btn btn-primary">Submit</button>
            </p>
        </div>
    );
};

export default B;
