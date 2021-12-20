import React from 'react';
import {Grid} from "@mui/material";
import useStyles, {RandomGradiant} from "./skills.style";

function Skills(data) {

    const styles = useStyles();
    return (
        <Grid className={'flex-column ' + styles.SkillsContainer} container spacing={2}>
            <h3 style={{padding :'15px 0'}}>
                {data.SkillName}
            </h3>
            <br/>
            <div className={styles.percentage}>
                <div
                    className={styles.randomGradiant}
                    style={{width: (data.AbilityRate + ' % '),backgroundImage : data.gradiant}}
                >

                </div>
            </div>
        </Grid>
    );
}

export default Skills;