import React from "react";

export const Hero = ({handleLogout}) => {
    return (
        <>
        <h1>Welcome</h1>
        <button onClick={handleLogout}>Logout</button>
        
        </>
    );
};