import React from 'react'
import { Divider, Grid, Header, Image, List, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Yaz from "./Yaz";
import HaftaIci from "./HaftaIci";
import HaftaSonu from "./HaftaSonu";
import Kis from "./Kis";
import Sonbahar from "./Sonbahar";
import Ilkbahar from "./Ilkbahar";
import Footer from "./Footer";
import HeaderDesign from "./Header";
import axios from 'axios'
class Analizler extends React.Component {
	state = {
		data: {}
	}
    async componentDidMount(){
		
	   let res = await axios.get('http://127.0.0.1:5000/analiz')
	   let val = JSON.parse(JSON.stringify(res.data))
	   console.log(val)
	   this.setState({data: val})
    }

    render() {
    
        return (
            <div>
                 <HeaderDesign/>
                <Container className="ortala">


                    <Grid >
                        <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={6}>
                                <Ilkbahar data={this.state.data.ilkbahar}/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Yaz data={this.state.data.yaz} />
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>

                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={6}>
                                <Sonbahar data={this.state.data.sonbahar} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Kis data={this.state.data.kis}/>
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>

                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={6}>
                                <HaftaIci data={this.state.data.haftaici} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <HaftaSonu data={this.state.data.haftasonu}/>
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