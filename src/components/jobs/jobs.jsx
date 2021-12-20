import React from 'react';
import {Grid} from "@mui/material";
import useStyles from "./jobs.style";

function Jobs(data) {
    const is_project = data.type === 'project';
    const styles = useStyles();
    const GradiantBorder = is_project ? styles.ProjectsGradiantBorder : styles.JobsGradiantBorder;
    const H2FontSize = window.innerWidth < 480 ? "20px" : "";
    const PFontSize = window.innerWidth < 480 ? "13px" : "";
    const H4FontSize = window.innerWidth < 480 ? "16px" : "";
    return (
        <div style={{color: 'white', marginTop: 35}}>
            <Grid className={GradiantBorder + '  ' + styles.JobsContainer} container spacing={2}>
                <div className="col-12">
                    <div className="flex-row d-flex">
                        <div className="flex-column d-flex" style={{width: "100%"}}>
                            <h2 style={{fontSize: H2FontSize}} className={styles.JobTitle}>
                                {data.JobTitle}
                            </h2>
                            <p style={{fontWeight: "700", fontSize: PFontSize}}>
                                {data.JobDepartment}
                            </p>
                        </div>
                        <h4 style={{width: "100%", textAlign: "right", fontSize: H4FontSize}}>
                            {data.JobDuration}
                        </h4>
                    </div>

                    <p style={{fontSize: PFontSize}}>
                        {data.JobDescription}
                    </p>
                </div>
            </Grid>
        </div>
    );
}

export default Jobs;