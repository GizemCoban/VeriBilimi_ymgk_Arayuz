import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon, Popup, Header, Segment } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
import src from "./resimler/hki.jpg"
import src1 from "./resimler/resim.jpg"

class HavaKalitesi extends React.Component {

    render() {
        return (

            <div>
                <HeaderDesign />
                <Container>
                    <Segment style={{height:"400px",margin:"30px"}}>
                        <Header as='h2'>Hava Kalitesi Nedir?</Header>
                        <Image src={src} size='small' floated='left' />
                        <p>
                            Hava, insan ve diğer canlıların yaşamasını sağlayan önemli bir alıcı ortamdır.  Atmosferdeki hava tabakasının kalınlığı 150 km olup, bunun sadece 5 km'si canlıların yaşamasına elverişlidir.
    </p>
                        <p>
                            "Hava kalitesi" terimi, çevremizdeki hava durumu anlamına gelir. İyi hava kalitesi temiz, berrak ve kirli olmayan havayı ifade eder. Temiz hava, bu gezegende sadece insanlar değil, yaban hayatı, bitki örtüsü, su, toprak  ve hassas dengeyi korumak için şarttır. Kötü hava kalitesi,   hem doğal hem de "insan kaynaklı" çeşitli kaynaklardan gelen emisyonlar da dahil olmak üzere birçok faktörün bir sonucudur. Düşük hava kalitesi,insan sağlığını ve / veya çevreyi tehlikeye atacak kadar yüksek konsantrasyonlara ulaştığında ortaya çıkar.
</p>
                        <Image src={src1} size='medium' floated='right' />
                        <p>
                            İnsan beslenmeden 1-2 gün, susuz saatler mertebesinde ancak havasız saniyeler mertebesinde yaşayabilir. Hava insan ve canlıların yaşamasının sağlanmasında önemli ortamdır.  Yaşadığımız ortamlarda bulunan ısınma, sanayi ve ulaşım kaynaklarının faaliyeti ile birlikte hava alıcı ortamına salınan kükürtdioksit, azot oksitler, partikül madde vb. gibi kirletici parametrelerin insan sağlığına zarar verecek miktarda ve sürede bulunması hava kirlilik sorununun göstergesidir.
    </p>
                    </Segment>

                </Container>
                <Footer />

            </div>


        )
    }
}
export default (HavaKalitesi);