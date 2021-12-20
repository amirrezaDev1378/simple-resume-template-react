import React, {useEffect, useRef, useState} from 'react';
import {Close} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

function Alert(props) {
    const styles = useStyles();

    const [Show, setShow] = useState(true);
    const [TimeOut, setTimeOut] = useState(false);
    const [Hovered, setHovered] = useState(false);



    if (Show) {
        return (
            <div
                className={styles.AlertContainer}
                onMouseEnter={() => setHovered(true)}
            >
                <div className="icon">
                    <Close
                        style={{color: "#fc4141", cursor: "pointer"}}
                        onClick={() => setShow(false)}
                    />
                </div>
                <div className={"text-white " + styles.TextsContainer}>
                    <h3>
                        {props.title}
                    </h3>
                    <br/>
                    <p>{props.text}</p>
                </div>

            </div>
        )
    } else {
        return null;
    }
}

const useStyles = makeStyles({
    AlertContainer: {
        transition: 'all 0.5s ease-in-out',
        position: "fixed",
        top: 15,
        left: 15,
        backgroundColor: "#ffc674",
        padding: 5,
        opacity: 0.9,
        borderRadius: 20
    },
    TextsContainer: {
        padding: 25
    },
    fading:{
        opacity:0.1
    }
});


export default Alert;