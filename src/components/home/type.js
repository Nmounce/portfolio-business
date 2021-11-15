import React from "react";
import TypeWriter from "typewriter-effect";

function typeWriter() {
    return (
        <TypeWriter
            options={{
                strings: [
                    "full /",
                    "stack",
                    "web/",
                    "development",
                    "/and",
                    "design/",
                    "",
                    "/NMounce"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default typeWriter;
