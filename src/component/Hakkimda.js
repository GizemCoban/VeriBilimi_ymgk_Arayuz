import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon, Popup, Header, Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";

class Hakkimda extends React.Component {
    render() {
        return (
            <div>
                <HeaderDesign />
                <Container text>
                    <Segment style={{ margin: "30px" }}>
                        <Header as='h2'>Hakkımda</Header>
                        <Image src={process.env.PUBLIC_URL + "/images/hakkimda.png"} size='medium' centered />
                        <p style={{ margin: "30px",textAlign:"justify" }} >
                            1996 Sivas doğumluyum. Ailemle birlikte İstanbul’da yaşamaya devam ediyorum.
                            Yazılıma olan merakım lise yıllarında başlamıştır. İstanbul’da Anadolu liseleri kazandım fakat evime çok uzak olmasından dolayı ailem tarafından meslek lisesini kayıt ettirildim. Ve bu olay aslında benim dönüş noktam oldu çünkü olmak istediğim mesleğe karar vermiştim. 2016 yılında Marmara Üniversitesi Bilgisayar Programcılığından mezun oldum. 2017 yılında dgs ile Fırat Üniversitesi Yazılım Mühendisliği bölümü kazandım.  Şuan son sınıf öğrencisiyim.

</p>
                        <p style={{ margin: "30px",textAlign:"justify" }}>
                            Bilgisayar Programcılığı okurken Mediaclick adında bir şirkette zorunlu stajımı yaptım. Burada stajımı yaparken PHP programlama dilini öğrendim. Stajlarım dışında frelance içerik editörlüğü yaptım. Fırat üniversitesinde yazılım mühendisliğini okurken ise hem yaz stajımı hem de son sınıftaki iş yeri eğitimi adındaki programda uzun dönem stajımı Netaş A.Ş. React.js, Node,js ve MongoDb kullanarak bir e-ticaret sitesi geliştirdim. Şuan bu teknolojiler üzerine çalışıp kendimi geliştirmekteyim.
</p>
                    </Segment>
                </Container>
                <Footer />
            </div>

        )
    }
}
export default withRouter(Hakkimda);