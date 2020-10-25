import React from 'react';
import ColourCalculator from '../../utils/RgbCalculator';
import {withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import _ from 'lodash';
import PropTypes from "prop-types";

const styles = {
    colourPuzzleContainer: {
        width: window.innerWidth,
        height: window.innerHeight,
        position: 'absolute',
        display: 'grid',
        grid: 'repeat(4, 1fr) / repeat(4, 1fr)',
        // justifyContent: 'stretch',
        // gap: '0.1px',
    },
    button: {
        width: '100%',
        height: '100%'
    }
};

class ColourPuzzle extends React.Component {
    constructor(props) {
        super(props);
        this.colourCalculator = new ColourCalculator();
        this.state = {
            colourPuzzlePieces: _.range(16),
            colourVectors: this.colourCalculator.sliceColourVectorTargets(16)
        }
    }

    // Sample format: to left, rgb(8,8,8) 0%, rgb(8,8,8) 0.01%, rgb(256,0,0) 0.01%
    convertToBackgroundVector = (array, direction) => {
        let backgroundVector = [direction];
        let commonMultiple = 100 / array.length;
        array.forEach(element => {
            let elementIndex = array.indexOf(element);
            let elementVector = this.colourCalculator.convertToColourVector(element);
            let elementVectorStartValue = elementVector + ' ' + elementIndex * commonMultiple + '%';
            backgroundVector.push(elementVectorStartValue);
            let elementVectorEndValue = elementVector + ' ' + (elementIndex + 1) * commonMultiple + '%';
            backgroundVector.push(elementVectorEndValue);
        })
        return backgroundVector;
    }

    // Sample format: 'linear-gradient(to left, rgb(8,8,8) 0%, rgb(8,8,8) 0.01%, rgb(256,0,0) 0.01%)'
    getBackgroundValue = (array, direction) => {
        let backgroundValue = 'linear-gradient(' + this.convertToBackgroundVector(array, direction).toString() + ')';
        return backgroundValue;
    }

    render() {
        const {classes} = this.props;
        const {colourVectors} = this.state;

        return (
            <Box className={classes.colourPuzzleContainer}>
                {this.state.colourPuzzlePieces.map((piece) => {
                    let background;
                    if (piece % 4 === 0 || piece % 4 === 3) {
                        background = this.getBackgroundValue(colourVectors[piece], "-60deg");
                    } else {
                        background = this.getBackgroundValue(colourVectors[piece], "60deg");
                    }
                    return (
                        <div style={{background: background}} key={piece}/>
                    )
                })}
            </Box>
        )
    }
}

ColourPuzzle.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(ColourPuzzle);