import {makeStyles} from "@mui/styles";

export function RandomGradiant() {

    const color1 = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
    const opacity1 = Number(Number(Math.random()).toFixed(1));
    const color2 = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
    const opacity2 = Number(Number(Math.random()).toFixed(1));
    let gradiantText = "linear-gradient( 270deg , "
    color1.forEach((value, index) => {
        if (index == 0) {
            gradiantText += "rgb( " + value + " , ";
        } else if (index == 2) {
            gradiantText += " " + value + " , " + opacity1 + " ) ";

        } else {
            gradiantText += " " + value + " , ";

        }
    })
    gradiantText += " , ";
    color2.forEach((value, index) => {
        if (index == 0) {
            gradiantText += "rgb( " + value + " , ";
        } else if (index == 2) {
            gradiantText += " " + value + " , " + opacity2 + " ) ";

        } else {
            gradiantText += " " + value + " , ";

        }
    })
    gradiantText += " ) ";
    return gradiantText;
}

const useStyles = makeStyles({
    SkillsContainer: {
        display: 'flex',
        justifyContent: "center",
        padding: '15px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',

    },
    percentage: {
        backgroundColor: 'white',
        height: '25px'
    },
    randomGradiant: {
        height: '25px',
    }
});
export default useStyles;