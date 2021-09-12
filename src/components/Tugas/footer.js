import React from "react";

export default function Footer(props) {
    const {made, auth1, auth2 } = props;
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 shadow-md"
            style={{ height: "70px" }}
            >
            <h3 className="font-bold text-xl">{made}</h3>

            <p>-{auth1}</p>
            <p>-{auth2}</p>
            </div>
    );
}