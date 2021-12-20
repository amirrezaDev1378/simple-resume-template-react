import React from 'react';
import {Grid} from "@mui/material";
import useStyles from "./Portfolio.style";
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
} from "../../ResumeData/portfolio/images"


function ImageJsx(image) {
    const styles = useStyles();

    function ImageHoverHandler(e, MouseEv) {

        if (MouseEv === 'enter') {

            e.target.className = e.target.className + '  ' + styles.ImageHovered;
        } else {
            e.target.className = e.target.className.replace(styles.ImageHovered, '')

        }
    }

    return (
        <div className={styles.imageContainer}>

            <img
                onMouseEnter={(event) => ImageHoverHandler(event, 'enter')}
                onMouseLeave={(event) => ImageHoverHandler(event, 'leave')}
                onClick={() => alert('Sorry this is a test resume , the data are fake')}
                src={image}
                alt={'image'}
                width={"100%"}
            />

        </div>
    );
}

function Portfolio(data) {
    const styles = useStyles();
    return (
        <Grid className={'flex-row '} container>
            <Grid className={'flex-row d-flex flex-wrap justify-content-center' } item xs={12}>
                <Grid className={styles.ImagesMiddle} item xs={12} md={3}>

                    <div>
                        {ImageJsx(img1)}
                    </div>
                    <div>
                        {ImageJsx(img2)}
                    </div>

                </Grid>

                <Grid className={styles.ImagesMiddle} item xs={12} md={3}>
                    <div className="">
                        {ImageJsx(img3)}
                    </div>
                    <div className="">
                        {ImageJsx(img4)}
                    </div>
                </Grid>
                <Grid className={styles.ImagesMiddle} item xs={12} md={3}>
                    <div className="">
                        {ImageJsx(img5)}
                    </div>
                    <div className="">
                        {ImageJsx(img6)}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Portfolio;