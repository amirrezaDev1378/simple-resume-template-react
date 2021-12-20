import React, {useState} from 'react'
import Profile from '../profile/profile';
import Jobs from "../jobs/jobs";
import {Box, Collapse, Grid, IconButton} from "@mui/material";
import Skills from "../skills/skills";
import Language from "../language/language";
import Portfolio from "../Portfolio/Portfolio";
import {ResumeJobsData, ResumeAbilitiesData, ResumeProjectsData} from "../../ResumeData/ResumeData";
import {RandomGradiant} from "../skills/skills.style";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import {Close} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

function ReturnJobs() {
    const Data = ResumeJobsData;
    let JobsJsxArray = [];
    Object.keys(Data).forEach((val, i) => {
        // console.log(Data[val]['JobTitle'])
        JobsJsxArray.push(<Jobs
            key={i}
            JobTitle={Data[val]['JobTitle']}
            JobDuration={Data[val]['JobDuration']}
            JobDepartment={Data[val]['JobDepartment']}
            JobDescription={Data[val]['JobDescription']}
            type={'job'}
        />)
    });
    return JobsJsxArray;
}

function ReturnProjects() {
    const Data = ResumeProjectsData;
    let JobsJsxArray = [];
    Object.keys(Data).forEach((val, i) => {
        // console.log(Data[val]['JobTitle'])
        JobsJsxArray.push(<Jobs
            key={i}
            JobTitle={Data[val]['JobTitle']}
            JobDuration={Data[val]['JobDuration']}
            JobDepartment={Data[val]['JobDepartment']}
            JobDescription={Data[val]['JobDescription']}
            type={'project'}
        />)
    });
    return JobsJsxArray;
}

function ReturnAbilities() {
    const Data = ResumeAbilitiesData;
    let SkillsJsxArray = [];
    Object.keys(Data).forEach((val, i) => {
        SkillsJsxArray.push(<Skills
            key={i}
            SkillName={Data[val]['skillName']}
            AbilityRate={Data[val]['AbilityRate']}
            gradiant={RandomGradiant()}
        />)
    });
    return SkillsJsxArray;
}

const ContainerPadding = window.innerWidth < 420 ?
    "30px 0px" :
    window.innerWidth < 900 ?
        "40px 15px" :
        "40px 80px";
const AbilitiesMargin = window.innerWidth < 900 ? "70px" : "0px";
const AbilitiesMarginLeft = window.innerWidth > 900 ? "50px" : "0px";

function Layout() {
    const styles = useStyles();
    return (
        <div>
            <Profile/>
            <br/>
            <h2 style={{textAlign: "center", width: "100%", color: "white"}}>
                RESUME
            </h2>
            <Grid container style={{padding: ContainerPadding, color: 'white', justifyContent: 'center'}}>

                <Grid item xs={11} sm={10} md={5}>
                    {ReturnJobs()}

                </Grid>
                <Grid style={{marginTop: AbilitiesMargin , marginLeft:AbilitiesMarginLeft}} item xs={10} sm={10} md={5}>
                    {ReturnAbilities()}
                </Grid>
                <Grid style={{marginTop: AbilitiesMargin}} item xs={10} sm={10} md={5}>
                    <h3 style={{textAlign: 'center' , marginTop:40}}>
                        Language Skills
                    </h3>
                    <br/>
                    <br/>
                    <br/>
                    <Language
                        name={'English'}
                        Speaking={4}
                        Listening={5}
                        Writing={3}
                        Reading={4}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <Language
                        name={'Spanish'}
                        Speaking={3}
                        Listening={3}
                        Writing={2}
                        Reading={4}
                    />
                </Grid>
            </Grid>
            <Grid container style={{padding: ContainerPadding, color: 'white', justifyContent: 'center'}}>


                <Grid item xs={11} sm={10} md={5}>
                    {ReturnProjects()}

                </Grid>

            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid
                container
                className={styles.PortfolioContainer}
            >
                <h3 style={{paddingBottom: '40px'}}>Portfolio </h3>

                <Portfolio/>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles({

    PortfolioContainer: {
        padding: ContainerPadding,
        color: 'white',
        justifyContent: 'center'
    }
});


export default Layout;
