import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon,Popup,Header,Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src1 from "./resimler/o3.png"

class O3 extends React.Component {

    render(){
        return(
            <div>
            <HeaderDesign />
            <Container text>
                <Segment style={{ height: "400px", margin: "30px" }}>
                    <Header as='h2'>O3: Ozon</Header>
                    <Image src={src1} size='medium' floated='left' />
                    <p style={{ margin: "30px" }}>
                    O3 oda sıcaklığında renksiz, karakteristik kokusu olan bir gazdır.  Ozon solunduğunda akciğere zarar verir. Düşük miktarda göğüs ağrısı, öksürük, nefes darlığı ve boğazda tahrişe neden olur. Astım gibi kronik solunum yolu hastalıkları daha da kötüye gidebilir ve solunum yolu enfeksiyonları ile mücadelede vücudun yeteneğini azalır. 
</p>

                </Segment>


            </Container>
            <Footer />
        </div>




        )
    }
}
export default withRouter (O3);