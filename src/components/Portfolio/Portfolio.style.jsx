import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    imageContainer:{
        cursor:"pointer",
        '&> img':{
            transform:"scale(1)",
            transition: 'all 0.5s ease-in-out'
        }
    },
    ImagesMiddle:{
        marginTop:'-60px !important',
        display:"flex",
        alignItems:"center",
        flexDirection:"column !important"
    },
    ImageHovered:{
        transform:"scale(1.1) !important",

    }
});
export default useStyles;