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


                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Ilkbahar />
                            </Grid.Column>
                            <Grid.Column>
                                <Yaz />
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <Sonbahar />
                            </Grid.Column>
                            <Grid.Column>
                                <Kis />
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Container>
                <Footer />

            </div>



        )


    }
}


export default Analizler;