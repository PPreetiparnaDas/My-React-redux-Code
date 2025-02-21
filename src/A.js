"use client"
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const A = () => {
    const nameRef = useRef();
    const dispatch = useDispatch();

    const fnSubmit = () => {
        const name = nameRef.current.value;
        dispatch(updateName(name)); // Dispatch action to update Redux state
    };

    return (
        <div className="container mt-3 p-3 border rounded shadow">
            <h1 className="text-primary">A</h1>
            <p>
                <b>Name :</b>
                <input ref={nameRef} className="form-control mt-2" />
            </p>
            <p>
                <button onClick={fnSubmit} className="btn btn-primary">Submit</button>
            </p>
        </div>
    );
};

export default A;
