import React from 'react'
import { Divider, Grid, Header, Image, List, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HkiTahmin from "./HkiTahmin";
import HkiTablo from "./HkiTablo";
import HavaKalitesi from "./HavaKalitesi";
import Footer from "./Footer";
import HeaderDesign from "./Header";


class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderDesign/>
                <HkiTablo />
                <HkiTahmin />
                <Footer />

            </div>
            
                

           

        )


    }
}


export default Home;