import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    JobsContainer: {
        display: 'flex',
        justifyContent: "center",
        paddingLeft: "10px",
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        width:"100% !important",
        marginLeft : "0 !important"
    },
    JobsGradiantBorder: {
        borderWidth: '0 0 0 15px',
        borderStyle: 'solid',
        borderImage: 'linear-gradient(#fd8590 , #fc364a)',
        borderImageSlice: 1,

    },
    ProjectsGradiantBorder: {
        borderImage: 'linear-gradient(#b281fd , #844cfa)',
        borderWidth: '0 0 0 15px',
        borderStyle: 'solid',
        borderImageSlice: 1,

    },
    JobTitle: {
        fontWeight: 'bold',

    }
});
export default useStyles;