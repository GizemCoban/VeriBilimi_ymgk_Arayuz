import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Button, Header, Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src1 from "./resimler/pm10.png"

class PM10 extends React.Component {
    onClickTable = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <HeaderDesign />
                <Container text>
                    <Segment style={{ height: "400px", margin: "30px" }}>
                        <Header as='h2'>PM10: Partiküler Madde </Header>
                        <Image src={src1} size='medium' floated='left' />
                        <p style={{ margin: "30px", textAlign: "justify" }}>
                            Partiküler madde, insan sağlığına en kötü etkisi olan hava kirleticilerden birisidir.  PM10, astım ve astım atakları, damar içi pıhtılaşma, üst solunum yolu enfeksiyonları, zatürree, toplum tarafından da artık gayet iyi bilinen ve daha çok sigara ve tütün ile ortaya çıkan KOAH, daha ileride kalp krizleri ve inme gibi sebeplerden dolayı ölümle sonuçlanma olasılığı yüksek olan hastalıkları sebep olmaktadır.
</p>
                        <Button onClick={this.onClickTable} id="ButonColor" style={{ position: "absolute", bottom: "10px" }} content='Tabloya Geri Dön' />

                    </Segment>


                </Container>
                <Footer />
            </div>

        )
    }
}
export default withRouter(PM10);