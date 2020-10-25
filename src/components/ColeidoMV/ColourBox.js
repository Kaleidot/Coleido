import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

class ColourBox extends React.Component {

    render() {
        return (
            <Box color={this.props.color || 'white'} bgcolor={this.props.bgcolor || 'white'}
                 width={this.props.width} height={this.props.height}>
                {this.props.children}
            </Box>
        )
    }
}

ColourBox.propTypes = {
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default ColourBox;