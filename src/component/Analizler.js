import React from 'react'
import { Divider, Grid, Header, Image, List, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Yaz from "./Yaz";
import Kis from "./Kis";
import Sonbahar from "./Sonbahar";
import Ilkbahar from "./Ilkbahar";
import Footer from "./Footer";
import HeaderDesign from "./Header";

class Analizler extends React.Component {
    render() {
        return (
            <div>
                 <HeaderDesign/>
                <Container className="ortala">


                    <Grid >
                        <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={6}>
                                <Ilkbahar />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Yaz />
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>

                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={6}>
                                <Sonbahar />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Kis />
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Container>
                <Footer />

            </div>



        )


    }
}


export default Analizler;