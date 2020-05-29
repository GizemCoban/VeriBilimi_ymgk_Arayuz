import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon, Popup, Header,Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src1 from "./resimler/no2.png"

class NO2 extends React.Component {

    render() {
        return (
            <div>
                <HeaderDesign />
                <Container text>
                    <Segment style={{ height: "400px", margin: "30px" }}>
                        <Header as='h2'>NO2: Azot Dioksit</Header>
                        <Image src={src1} size='medium' floated='left' />
                        <p style={{ margin: "30px" }}>
                            Azot dioksit (NO2) Kısa süreli olarak 200 μg/m3 „ı geçen konsantrasyonlar, nefes yolunun önemli bir şekilde yanmasına neden olabilecektir. Bu gaz son derece zehirlidir ve solunum yolu ile solunması durumunda insanlar üzerinde baş ağrısı ve baş dönmesi gibi belirtiler ortaya çıkmaktadır. Ayrıca su ile tepkimeye girerek Asit Yağmurlarına sebep açmaktadır.
</p>

                    </Segment>


                </Container>
                <Footer />
            </div>

        )
    }
}
export default withRouter(NO2);