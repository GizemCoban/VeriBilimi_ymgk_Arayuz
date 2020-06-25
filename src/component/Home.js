import React from 'react'
import { Divider, Grid, Header, Image, List, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HkiTahmin from "./HkiTahmin";
import HkiTablo from "./HkiTablo";
import HavaKalitesi from "./HavaKalitesi";
import Footer from "./Footer";
import HeaderDesign from "./Header";
import moment from 'moment';
import axios from 'axios'

class Home extends React.Component {
    state = {
        m : moment().format("MM"),
        d : moment().format("DD"),
        data: {},
        date: moment().format("yyyy-MM-DD")
    }
    handleChange = (e) => {
        console.log(e.target.value)
        let m = moment(e.target.value).format("MM"); 
        let d = moment(e.target.value).format("DD"); 
        console.log(m,d)
        this.setState({
            m:m, d:d, date:e.target.value
        })
       this.getData(m,d)
    }
    async componentDidMount(){
        let res =await axios.get('http://127.0.0.1:5000/tahmin?d='+parseInt(this.state.d)+'&m='+parseInt(this.state.m))
        let val = JSON.parse(JSON.stringify(res.data))
        console.log(val)
        this.setState({data: val})
    }
    async getData(m,d){
        let res =await axios.get('http://127.0.0.1:5000/tahmin?d='+parseInt(d)+'&m='+parseInt(m))
        let val = JSON.parse(JSON.stringify(res.data))
        console.log(val)
        this.setState({data: val})
    }
  
    render() {
        return (
            <div>
                <HeaderDesign/>
                <HkiTablo />
                <HkiTahmin  data={this.state.data.data} handleChange={this.handleChange} date={this.state.date}/>
                <Footer />

            </div>
            
                

           

        )


    }
}


export default Home;