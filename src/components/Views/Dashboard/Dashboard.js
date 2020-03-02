import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display : 'flex',
        flexDirection : 'column',
        height: '90vh',
        padding: '20px',
        marginLeft: '40px'
    }, 
    divUp : {
        display : 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px'
    },
    divUpInside : {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divDown : {
        display : 'flex',
        justifyContent : 'center',
        flex : '1'
    },
    divSizeFull : {
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        boxShadow: '0 3px 14px rgba(0, 0, 0, .16)',        
        overflow: 'hidden',
        width: '95%',
        height: '392px'
    },
    divSize : {
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        boxShadow: '0 3px 14px rgba(0, 0, 0, .16)',
        overflow: 'hidden',
        width: '30%',
        height: '300px',
    }
}));

export default function Dashboard(){
    const classes = useStyles();

    return(
        <div className={classes.root}>            
            <div className={classes.divDown}>
                <div className={classes.divSizeFull} ></div>
            </div>
            <div className={classes.divUp}>
                <div className={classes.divSize}></div>
                <div className={classes.divSize} style={{marginLeft : '2.5%' , marginRight : '2.5%'}}></div>
                <div className={classes.divSize}></div>
            </div>            
        </div>
    )
}