import React from 'react';
import ColourCalculator from "../../utils/RgbCalculator";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";
import ColourBox from "./ColourBox";
import * as params from '../../utils/AnimationParameters';
import prawn from "../../assets/prawn.svg";
import './Animations.css';

class ColourAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.colourCalculator = new ColourCalculator();
        this.state = {
            colourVectorsByCatergory: this.colourCalculator.categoriseColourVectors(16),
            colourVectorsOriginals: this.colourCalculator.rawColourTargets,
            startScene1: true,
            startScene2: false,
            startScene3: false,
            bgColourIndex : this.colourCalculator.generateRandomColourIndex(0, this.colourCalculator.rawColourTargets.length - 1),
            count: 0,
        }
    }

    componentDidMount() {
        if (this.props.play) {
            this.countID = setInterval(
                () => this.update(),
                700
            );
        }
        this.scene1Timeout = setTimeout(() => {
            this.setState(() => ({
                startScene1: !this.state.startScene1,
                startScene2: !this.state.startScene2
            }))
        }, params.SCENE1LENGTH * 400);
    }

    componentWillUnmount() {
        clearInterval(this.countID);
    }

    update = () => {
        this.setState({
            bgColourIndex : this.colourCalculator.generateRandomColourIndex(0, this.colourCalculator.rawColourTargets.length - 1),
        });
    }

    render() {
        const {startScene1, startScene2, bgColourIndex} = this.state;

        return (
            <>
                {this.props.play && <ColourBox width={'100%'} height={'100%'}
                                               bgcolor={this.colourCalculator.convertToColourVector(bgColourIndex)}></ColourBox>}

                {this.props.play && startScene1 && <Box className="prawnContainer">
                    <img src={prawn} className="prawnIconVarient1" alt="prawn1"/>
                    <img src={prawn} className="prawnIconVarient2" alt="prawn2"/>
                    <img src={prawn} className="prawnIconVarient3" alt="prawn3"/>
                    <img src={prawn} className="prawnIconVarient4" alt="prawn4"/>
                    <img src={prawn} className="prawnIconVarient5" alt="prawn5"/>
                </Box>}

                {this.props.play && startScene2 && <Box className="prawnGrid">
                    <img src={prawn} className="prawnIconVarient6" alt="prawn6"/>
                    <img src={prawn} className="prawnIconVarient7" alt="prawn7"/>
                    <img src={prawn} className="prawnIconVarient8" alt="prawn8"/>
                    <img src={prawn} className="prawnIconVarient9" alt="prawn9"/>
                    <img src={prawn} className="prawnIconVarient10" alt="prawn10"/>
                </Box>}
            </>
        )
    }
}

ColourAnimation.propTypes = {
    classes: PropTypes.object,
    play: PropTypes.bool.isRequired
}

export default ColourAnimation;