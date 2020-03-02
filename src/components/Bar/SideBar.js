import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RouterMain from '../../routes/RouterMain';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor : 'red'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundImage: ' linear-gradient(180deg, #c31717 0%, #620c0c 100%);'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8) + 1,
        },
        backgroundImage: ' linear-gradient(180deg, #c31717 0%, #620c0c 100%);'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        color : 'white'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    colorText:{
        color : 'white',
        fontSize: '27px',
        fontWeight: 300
    },
    social : {
        color: 'white',
        fontSize: '15px',
        fontWeight: 150,
        marginRight: '20px'
    }, 
    divLogo : {
        display: 'flex', 
        flexDirection: 'column', 
        position: 'absolute', 
        bottom: '150px', 
        width: '100%', 
        alignItems: 'center'
    },
    divSocial: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        alignItems: 'center'
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const array = ['Dashboard', 'Açougues', 'Fornecedores', 'Produtos', 'Pedidos', 'Chat']
    const arrayRoutes = [`/`, `/acougues`, `/fornecedores`, `/produtos`, `/pedidos`, `/chat`]

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >                
                <div className={classes.toolbar}>
                    {open === true ? <IconButton onClick={handleDrawerClose} className={classes.colorText}>
                        <MenuIcon style={{ transform: 'rotate(90deg)' }}/>
                    </IconButton> : 
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={classes.colorText}
                        ><MenuIcon /></IconButton>
                    }
                </div>
                <Divider />
                < br/>
                {open === true ? <Typography className={classes.colorText}
                    style={{ marginLeft: '36px' }} >Olá, <br />Arthur Weiler! <br /> <br /></Typography>  : <div></div>}            
                <List>
                    {array.map((text, index) => {
                        let path = arrayRoutes[index]
                        return <ListItem component={Link} to={path} button key={text} style={{height : "12%"}}>
                            <ListItemIcon className={classes.colorText} >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText className={classes.colorText} primary={text} />
                        </ListItem>
                    })}
                    <Divider />
                    <ListItem button key="Sair" style={{ height: "12%" }}>
                        <ListItemIcon className={classes.colorText} ><MailIcon /></ListItemIcon>
                        <ListItemText className={classes.colorText} primary="Sair" />
                    </ListItem>
                </List>                
                {open === true ? <div className={classes.divLogo}>
                    <img src={require('../../images/logo_branca.png')} height="115" width="167" alt="iFrigo"
                                ></img> 
                </div>
                    : <p></p>}
                {open === true ? <div className={classes.divSocial}>
                    <div>
                        <InstagramIcon className={classes.social} />
                        <TwitterIcon className={classes.social} />
                        <FacebookIcon className={classes.social} />
                    </div>
                </div>
                    : <p></p>}
            </Drawer>
            <main className={classes.content}>
                <RouterMain />
            </main>
        </div>
    );
}