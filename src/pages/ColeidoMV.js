import React from "react";
import {Box, IconButton} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import cover from "../assets/cover.jpg";
import Typography from "@material-ui/core/Typography";
import Flamingo from "../assets/KeroKeroBonito-Flamingo.mp3";
import {Pause, PlayArrow} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Routing from "../utils/Routing";
import {Link} from "react-router-dom";
import ColourAnimation from "../components/ColeidoMV/ColourAnimation";

const styles = {
    boxContainer: {
        width: window.innerWidth,
        height: window.innerHeight,
        display: 'flex',
        flexDirection: 'row',
    },
    Typography: {
        fontFamily: "Avenir Next"
    },
    leftSection: {
        width: '38.2%',
        height: '100%',
        backgroundColor: 'rgba(128,128,128,0.1)',
        fontFamily: "Avenir Next",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'Column',
        justifyContent: 'center'

    },
    rightSection: {
        width: '61.8%',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'Column',
        alignItems: 'center',
    },
    cover: {
        width: '200px',
        height: '200px',
    },
    song: {
        marginTop: '20px'
    },
    band: {
        marginTop: '10px'
    },
    playIcon: {
        marginTop: '20px',
        backgroundColor: 'rgba(128,128,128,0.1)',
        '&:hover': {
            backgroundColor: 'rgba(128,128,128,0.5)'
        }
    },
    audio: {
        marginTop: '20px'
    },
    returnHomeButton: {
        top:'10%'
    },
    intro: {
        width:'50%',
        height: '50%'
    }
};

class ColeidoMV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            displayIntro: true,
        }
        this.audioRef = React.createRef();
    }

    componentDidMount() {
        console.log("ColeidoMV mounted");
    }

    handleClick = () => {
        if (this.state.play === false){
            this.audioRef.current.play();
        } else {
            this.audioRef.current.pause();
        }
        this.setState({play: !this.state.play});
        if (this.state.displayIntro === true){
            this.setState({displayIntro: false});
        }
    }

    render() {
        const {classes} = this.props;
        const {displayIntro} = this.state;

        return (
            <Box className={classes.boxContainer}>
                <Box className={classes.leftSection}>
                    <img src={cover} className={classes.cover} alt="cover"/>
                    <Typography variant='body1' className={classes.song}><strong>Flamingo</strong></Typography>
                    <Typography variant='body1' className={classes.band}>Kero Kero Bonito</Typography>
                    <Tooltip title={this.state.play ? "Pause" : "Play"}>
                        <IconButton className={classes.playIcon} onClick={this.handleClick}>
                            {this.state.play ? <Pause/> : <PlayArrow size={'large'}/>}
                        </IconButton>
                    </Tooltip>
                    <audio className={classes.audio} ref={this.audioRef} src={Flamingo} loop={true}></audio>
                    <Button className={classes.returnHomeButton} variant="outlined" size={"small"} to={Routing.path()} component={Link}>Return home</Button>
                </Box>
                <Box className={classes.rightSection}>
                    {displayIntro && <Box className={classes.intro}>
                        <Typography variant='body1' className={classes.band}>Hi There,</Typography>
                        <Typography variant='body1' className={classes.band}>Welcome to the Coleido music video page.</Typography>
                        <Typography variant='body1' className={classes.band}>This is my first time to create web animation experience for songs. Flamingo is a bilingual piece of indie pop music featuring light tempo and lovely lyrics about colours. I thought they would be the perfect combo for this coding challenge.</Typography>
                        <Typography variant='body1' className={classes.band}>Without further ado, simply hit the play button and I hope you will enjoy the show!</Typography>
                        <br/>
                        <Typography variant='body1' className={classes.band}>Xiaoyun Hu</Typography>
                    </Box>}
                    {!displayIntro && <ColourAnimation play={this.state.play}/>}
                </Box>
            </Box>
        )
    }
}

ColeidoMV.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(ColeidoMV);