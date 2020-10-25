import {Box} from "@material-ui/core";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import cd from "../../assets/cd.svg";
import colourPalette from "../../assets/color-palette.svg";
import './Spin.css';
import Routing from "../../utils/Routing";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const styles = {
    boxContainer: {
        width: window.innerWidth,
        height: window.innerHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    boxSection: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    rightSectionBgColour: {
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    leftSectionBgColour: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
};

class ScreenSegmentation extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Box className={classes.boxContainer}>
                <Button className={[classes.boxSection, classes.leftSectionBgColour].join(' ')} to={Routing.COLEIDOMV} component={Link}>
                    <img src={cd} className="leftIcon" alt="cd"/>
                </Button>
                <Button className={[classes.boxSection, classes.rightSectionBgColour].join(' ')} disabled={true}>
                    <img src={colourPalette} className="rightIcon" alt="colourPalette"/>
                </Button>
            </Box>
        )
    }
}

ScreenSegmentation.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(ScreenSegmentation)
