import { makeStyles } from "@mui/styles";
import bgi from '../../assets/images/bg.png'
const useStyles = makeStyles({
    profileGrid:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    profile: {
        backgroundImage: 'linear-gradient(#FFE00D , #FEA127)',
        height: '700px',
        display: 'flex',
        flexDirection: 'column !important',
        boxShadow: '0px 0px 70px rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        justifyContent:"center",
        overflow:'hidden',
        padding:'0px !important',
        marginTop:'70px !important'
    },
    profileSVG: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        height: '100%',
        // backgroundImage : `url(${bgi})`,
        // backgroundRepeat : 'no-repeat',
        // backgroundSize : 'cover'
    },
    profilePic: {
        position: 'absolute'
    },
    profilePicture: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '66px',
        zIndex: 3
    },
    profileText: {
        zIndex: 99,
        textAlign: 'center',
        marginTop: 390,
        position: 'absolute',
        '&>:nth-child(1)':{
            color:'white !important'
        },
        '&>:nth-child(3)':{
            color:'white !important'
        }
    },
    profileTextParent: {
        width: '100%'
    },
    profileButtons: {
        "& > *": {
            marginRight: '20px !important',
            textAlign: 'center',
        },
        "&>:nth-child(1)": {
            color: 'white',
            background: 'linear-gradient(#fd8590 0%, #fc364a 100%) !important',
            filter: 'drop-shadow(0px 16px 24px rgba(252, 59, 78, 0.24)) !important',
            borderRadius:198,
            padding:10

        },
        "&>:nth-child(2)": {
            color: 'white',
            borderRadius: '25px',
            background: 'linear-gradient(#b281fd 0%, #844cfa 100%) !important',
            boxShadow:'0px 16px 24px rgba(134, 78, 250, 0.24) !important',

            padding:10

        }

    }
});
export default useStyles;