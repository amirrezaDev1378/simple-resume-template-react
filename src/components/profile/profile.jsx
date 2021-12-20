import {Button, Container, Grid} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import useStyles from "./profile.style";
import {ResumePicture} from "../../ResumeData/ResumeData";
import {BackspaceOutlined} from "@mui/icons-material";


function Profile() {
    const styles = useStyles();
    const profileBox = React.createRef();
    const profileText = React.createRef();
    const profileSVG = React.createRef();
    const [test, updateTest] = useState(0);

    useEffect(() => {

        profileText.current.setAttribute('style', 'width: ' + profileBox.current.clientWidth + 'px;');
        window.onresize = function () {
            if (profileText.current !== null) {

                profileText.current.setAttribute('style', 'width: ' + profileBox.current.clientWidth + 'px;');
            }


        }


    }, [window.innerWidth])

    const SVGwidth = window.innerWidth <500 ? "130%" : "100%";
    return (

        <Grid className={styles.profileGrid} container >

            <Grid className={styles.profile} item xs={10} sm={10} md={4} ref={profileBox}>
                <div className={styles.profilePicture}>

                    <img className={styles.profilePic + ' img-grid'} src={ResumePicture} alt='dsd'/>
                </div>

                <div className={styles.profileText} ref={profileText}>


                    <h3>Hi, I'm Jhon Smith</h3>
                    <h1 className="text-red">
                        Creative Designer
                    </h1>
                    <p className="text">Web, Mobile App UI/UX </p>
                    <br/>
                    <br/>
                    <div className={'f-row ' + styles.profileButtons}>
                        <Button>Download CV</Button>
                        <Button>Hire Me !</Button>

                    </div>

                </div>
                <div className={styles.profileSVG}>

                    <svg ref={profileSVG} xmlns="http://www.w3.org/2000/svg" width={SVGwidth} viewBox="0 0 570 511.125">
                        <path id="Path_85" data-name="Path 85"
                              d="M0-70.147s78.986,53.585,171.761,0,81.577-62.383,155.957-115.968C466.88-261.295,570-210.109,570-210.109V284H0Z"
                              transform="translate(0 227.125)" fill="#222b45"
                        />
                    </svg>

                </div>


            </Grid>


        </Grid>
    );
}

export default Profile;
