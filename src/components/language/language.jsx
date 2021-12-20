import React from 'react';
import {Grid} from "@mui/material";
import useStyles from "./language.style";
import {Star} from "@mui/icons-material";

function return_stars(number) {
    let star_array = []
    for (let i = 0; i < number; i++) {
        star_array.push(<Star style={{color: '#FFE00D'}} key={i + 1}/>)
    }
    return star_array;
}

function Language(data) {
    const styles = useStyles();
    return (
        <Grid className={'flex-column '} container spacing={2}>
            <h4>{data.name} :</h4>
            <br/>
            <br/>
            <div className={"shadow d-flex flex-row flex-wrap  " + styles.LanguageContainer}>

                <div className="flex-row d-flex col-12 col-md-6 justify-content-center">
                    <p>Listening :</p>
                    {return_stars(data.Listening)}
                </div>
                <br/>
                <div className="flex-row d-flex col-12 col-md-6 justify-content-center">
                    <p>Reading :</p>
                    {return_stars(data.Reading)}
                </div>
                <br/>
                <div className="flex-row d-flex col-12 col-md-6 justify-content-center">
                    <p>Speaking :</p>
                    {return_stars(data.Speaking)}
                </div>
                <br/>
                <div className="flex-row d-flex col-12 col-md-6 justify-content-center">
                    <p>Writing :</p>
                    {return_stars(data.Writing)}
                </div>
            </div>

        </Grid>
    );
}

export default Language;