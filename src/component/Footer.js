import React from 'react'
import {Divider, Grid,Header,Image, List, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class FixedMenuLayout extends React.Component{
    render(){
        return(
            <Segment inverted vertical style={{padding: '0.5em 0em',width:"100%"}}>
            
                <List horizontal inverted divided link size='small'>
                 
                 
                </List>
                <p>Gizem ÇOBAN tarafından Yazılım Mühendisliğinde Güncel Konular Dersi İçin Yapılmıştır © Copyright 2020 Her Hakkı Saklıdır.</p>
              
                      <a href="https://www.facebook.com/gizem.coban.900"><i className="facebook square icon big"></i></a> 
                       <a href="https://twitter.com/Gizemm_Cobann"><i className="twitter square icon big"></i></a>
                      <a href="https://www.linkedin.com/in/gizemmcobann/"><i className="linkedin square icon big"></i></a>
                      
                      
              
            </Segment>)
    }
}


export default FixedMenuLayout;