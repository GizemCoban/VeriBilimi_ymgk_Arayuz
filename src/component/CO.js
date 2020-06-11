import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Button, Header, Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src1 from "./resimler/co.png"

class CO extends React.Component {
    onClickTable = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <HeaderDesign />
                <Container text>
                    <Segment style={{ height: "400px", margin: "30px" }}>
                        <Header as='h2'>CO: Karbonmonoksit </Header>
                        <Image src={src1} size='medium' floated='left' />
                        <p style={{ margin: "30px", textAlign: "justify" }}>
                            Karbonmonoksit gazı renksiz, tatsız, kokusuz, yanıcı, zehirli bir gazdır. Duvarlardan bile sızabilir. CO vücuda girdiğinde kanın hücrelere, dokulara ve organlara oksijen getirmesini engeller. Uzun süre CO’ya maruz kalmanın sonucu olarak felç ve beyin hasarı meydana gelebilir. CO havadaki diğer kimyasallar ile tepkimeye girdiği taktir de bitki örtüsüne de zarar vermektedir. Karbonmonoksitin fazlalığı havadaki farklı elementlerin tepkimesi sonucunda orman yangınlarına bile yol açablir.
</p>
                        <Button onClick={this.onClickTable} id="ButonColor" style={{ position: "absolute", bottom: "10px" }} content='Tabloya Geri Dön' />

                    </Segment>

                </Container>
                <Footer />
            </div>
        )
    }
}
export default withRouter(CO);