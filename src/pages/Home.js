import React from "react";
import ColourPuzzle from "../components/Home/ColourPuzzle";
import Typography from "@material-ui/core/Typography";
import ScreenSegmentation from "../components/Home/ScreenSegmentation";
import Footer from "../components/Home/Footer";



class Home extends React.Component {

    render() {
        return (
            <>
                <ColourPuzzle />
                <ScreenSegmentation />
                <div style={{position:'absolute', textAlign:'center', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', fontFamily: "Avenir Next"}}>
                    <Typography variant='h1'>Coleido</Typography>
                    <Typography variant='body1'>Select the left panel to unlock the superise</Typography>
                </div>
                <Footer />
            </>
        )
    }
}

export default Home;