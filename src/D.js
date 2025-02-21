"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const D = () => {
    const name = useSelector((state) => state.app.name);
    const loc = useSelector((state) => state.app.loc);

    return (
        <div className="container mt-3 p-3 border rounded shadow bg-light">
            <h1 className="text-success">D</h1>
            <h3>Name: {name || "Not Provided"}</h3>
            <h3>Location: {loc || "Not Provided"}</h3>
        </div>
    );
};

export default D;
