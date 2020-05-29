import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon,Popup,Header,Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src1 from "./resimler/so2.jpg"
class SO2 extends React.Component {

    render(){
        return(
            <div>
                 <HeaderDesign />
                 <Container text>
                <Segment style={{height:"400px",margin:"30px"}}>
                <Header as='h2'>SO2: Kükürt Dioksit</Header>
                <Image src={src1} size='medium' floated='left' />
    <p style={{margin:"30px"}}>
    Kükürtdioksit (SO2), bir kükürt iki oksijen atomuna sahip aralarında kovalent-polar bir bağ bulunan, renksiz ve keskin kokulu bir gazdır.  Aşırı kükürt alımı insan sağlığı açısından olumsuz etkiler oluşturmaktadır. Özellikle solunum yolu hastalıklarına neden olur. 
    </p>

                </Segment>
             
  
  </Container>
  <Footer />
            </div>
          
        )
    }
}
export default withRouter (SO2);