import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from './Cards'

const useStyles = makeStyles(theme => ({
    root: {
        display : 'flex',
        flexDirection : 'column',
        height: '90vh',
        padding: '20px'
    }, 
    divUp : {
        display : 'flex',
        flex : '1'
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
    }
}));

export default function Dashboard(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.divUp}>
                <div className={classes.divUpInside}><Card  carne="Alcatra" /></div>
                <div className={classes.divUpInside}><Card  carne="Acem" /></div>
                <div className={classes.divUpInside}><Card  carne="Patinho" /></div>
                
            </div>
            <div className={classes.divDown}>
                <Card />
            </div>            
        </div>
    )
}