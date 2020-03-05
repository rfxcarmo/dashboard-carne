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

export default function MiniDrawer({ set }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const array = ['Dashboard', 'Produtos', 'Açougues', 'Fornecedores',  'Pedidos', 'Chat']
    const arrayRoutes = [`/`, `/produtos`, `/acougues`, `/fornecedores`, `/pedidos`, `/chat`]
    const svgs = [
        <svg id="dashboard_icon" data-name="dashboard icon" xmlns="http://www.w3.org/2000/svg" width="34.196" height="34.196" viewBox="0 0 34.196 34.196">
            <path id="Caminho_1534" data-name="Caminho 1534" d="M27.531,3H6.066A3.075,3.075,0,0,0,3,6.066V27.531A3.075,3.075,0,0,0,6.066,30.6H27.531A3.075,3.075,0,0,0,30.6,27.531V6.066A3.075,3.075,0,0,0,27.531,3ZM12.2,24.465H9.133V13.732H12.2Zm6.133,0H15.266V9.133h3.066Zm6.133,0H21.4V18.332h3.066Z" transform="translate(0.299 0.299)" fill="#fff" />
            <path id="Caminho_1535" data-name="Caminho 1535" d="M0,0H34.2V34.2H0Z" fill="none" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="35.013" height="25.291" viewBox="0 0 35.013 25.291">
            <g id="Grupo_528" data-name="Grupo 528" transform="translate(-47.987 -214.715)">
                <path id="Caminho_1034" data-name="Caminho 1034" d="M80.132,219.245c-1.185-1.085-3.112-1.5-5.8-2.186-3.8-.971-15.6-1.826-19.775-1s-5.954,2.613-5.488,4.246,3.235,3.248,4.268,4c1.5,1.093,4.507,5.623,7.438,6.664,2.433.865,5.729,1.453,10.774.018h0a23.5,23.5,0,0,0,5.949-2.961c1.848-1.121,3.974-3.157,4.4-4.987S81.317,220.329,80.132,219.245Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
                <path id="Caminho_1035" data-name="Caminho 1035" d="M49,222v7.174c0,1.375,3.271,3.327,4.3,4.08,1.5,1.093,4.543,5.623,7.474,6.664,2.433.864,5.73,1.452,10.774.017h0a23.821,23.821,0,0,0,6-2.961c1.848-1.12,4.447-3.465,4.447-4.93V224.87" transform="translate(0 -1.773)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
                <ellipse id="Elipse_1" data-name="Elipse 1" cx="2.87" cy="1.793" rx="2.87" ry="1.793" transform="translate(56.891 219.509)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
            </g>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="36.011" height="25.996" viewBox="0 0 36.011 25.996">
            <g id="Grupo_19" data-name="Grupo 19" transform="translate(-368 -218.714)">
                <path id="Caminho_1051" data-name="Caminho 1051" d="M370.924,223.351c1.22-1.118,3.206-1.547,5.971-2.252,3.918-1,16.07-1.882,20.373-1.03s6.135,2.692,5.655,4.374-3.333,3.347-4.4,4.123c-1.546,1.126-4.644,5.793-7.663,6.866-2.506.891-5.9,1.5-11.1.018h0a24.208,24.208,0,0,1-6.129-3.051c-1.9-1.154-4.093-3.253-4.531-5.138S369.7,224.468,370.924,223.351Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
                <path id="Caminho_1052" data-name="Caminho 1052" d="M403,226v7.391c0,1.417-3.37,3.427-4.435,4.2-1.546,1.126-4.681,5.793-7.7,6.866-2.506.891-5.9,1.5-11.1.018h0a24.535,24.535,0,0,1-6.18-3.051c-1.9-1.154-4.582-3.57-4.582-5.079v-8.13" transform="translate(0 -1.637)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" />
                <path id="Caminho_1053" data-name="Caminho 1053" d="M376,229c1.34.832,3.585,1.985,6.082,3.326,1.633.878,4.169,1.979,5.681,2.639" transform="translate(-1.826 -2.42)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                <path id="Caminho_1054" data-name="Caminho 1054" d="M384.229,231.8c1.848-1.54,8.331-4.189,10.917-4.8" transform="translate(-3.973 -1.898)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            </g>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="29.333" viewBox="0 0 33 29.333">
            <path id="Icon_metro-shop" data-name="Icon metro-shop" d="M13.505,14.252l1.45-9.625H7.413l-3.151,8.25a2.892,2.892,0,0,0-.148.917c0,2.024,2.108,3.667,4.713,3.667,2.4,0,4.387-1.4,4.679-3.208Zm7.108,3.208c2.6,0,4.713-1.643,4.713-3.667,0-.075-.006-.15-.009-.222l-.933-8.945H16.842l-.935,8.937c0,.075-.007.15-.007.229,0,2.024,2.11,3.667,4.713,3.667Zm9.167,1.918v7.249H11.446V19.389a7.714,7.714,0,0,1-2.62.455,7.559,7.559,0,0,1-1.047-.09v11.64a2.572,2.572,0,0,0,2.563,2.567H30.88a2.575,2.575,0,0,0,2.567-2.567V19.756a7.877,7.877,0,0,1-1.047.09A7.619,7.619,0,0,1,29.78,19.378Zm7.187-6.5-3.155-8.25H26.271l1.448,9.61c.282,1.815,2.268,3.223,4.681,3.223,2.6,0,4.713-1.643,4.713-3.667a2.944,2.944,0,0,0-.147-.917Z" transform="translate(-4.113 -4.627)" fill="#fff" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30.13" viewBox="0 0 36 30.13">
            <g id="Icon_feather-users" data-name="Icon feather-users" transform="translate(0 -2.87)">
                <path id="Caminho_1906" data-name="Caminho 1906" d="M25.5,31.5v-3a6,6,0,0,0-6-6H7.5a6,6,0,0,0-6,6v3" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                <path id="Caminho_1907" data-name="Caminho 1907" d="M19.5,10.5a6,6,0,1,1-6-6A6,6,0,0,1,19.5,10.5Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                <path id="Caminho_1908" data-name="Caminho 1908" d="M34.5,31.5v-3A6,6,0,0,0,30,22.7" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                <path id="Caminho_1909" data-name="Caminho 1909" d="M24,4.7A6,6,0,0,1,24,16.32" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            </g>
        </svg>,
        <svg id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="36" height="34.5" viewBox="0 0 36 34.5">
            <path id="Caminho_1903" data-name="Caminho 1903" d="M15,31.5A1.5,1.5,0,1,1,13.5,30,1.5,1.5,0,0,1,15,31.5Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Caminho_1904" data-name="Caminho 1904" d="M31.5,31.5A1.5,1.5,0,1,1,30,30,1.5,1.5,0,0,1,31.5,31.5Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Caminho_1905" data-name="Caminho 1905" d="M1.5,1.5h6l4.02,20.085a3,3,0,0,0,3,2.415H29.1a3,3,0,0,0,3-2.415L34.5,9H9" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
        </svg>
    ]

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
                    style={{ marginLeft: '36px' }} >Olá, <br />Arthur Weiler! <br /></Typography>  : <div></div>}            
                <List>
                    {array.map((text, index) => {
                        let path = arrayRoutes[index]
                        return <ListItem component={Link} to={path} button key={text} style={{height : "13%"}}>
                            <ListItemIcon className={classes.colorText} >{svgs[index]}</ListItemIcon>
                            <ListItemText className={classes.colorText} primary={text} />
                        </ListItem>
                    })}
                    <Divider />
                    <ListItem button key="Sair" onClick={() => set(false)} style={{ height: "13%" }}>
                        <ListItemIcon className={classes.colorText} style={{marginLeft : '2px'}}>
                            <svg id="fechar" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                                <path id="Caminho_639" data-name="Caminho 639" d="M28,7.316,25.684,5,16.5,14.184,7.316,5,5,7.316,14.184,16.5,5,25.684,7.316,28,16.5,18.816,25.684,28,28,25.684,18.816,16.5Z" fill="#fff" />
                                <path id="Caminho_640" data-name="Caminho 640" d="M0,0H33V33H0Z" fill="none" />
                            </svg>
                        </ListItemIcon>
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