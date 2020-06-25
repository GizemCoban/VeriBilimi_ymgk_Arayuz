import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon,Popup } from 'semantic-ui-react';
import yaz from "./resimler/yaz.png"


const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '0.5em',
}

class Yaz extends React.Component {


    render() {
        console.log(this.props)
        const data = this.props.data && JSON.parse(this.props.data)
        console.log(data)
        let hkiSeviye = ""
        let hkiAciklama = ""
        if (data) {
            if (Math.round(data.HKI) == 1) {
                hkiSeviye = "İyi"
                hkiAciklama = "Hava kalitesi memnun edici ve hava kirliliği az riskli veya hiç risk teşkil etmiyor"
            } else if (Math.round(data.HKI) == 2) {
                hkiSeviye = "Orta"
                hkiAciklama = "Hava kalitesi uygun fakat alışılmadık şekilde hava kirliliğine hassas olan çok az sayıdaki insanlar için bazı kirleticiler açısından orta düzeyde sağlık endişesi oluşabilir."

            } else if (Math.round(data.HKI) == 3) {

                hkiSeviye = "HASSAS"
                hkiAciklama = " Hassas gruplar için sağlık etkileri oluşabilir. Genel olarak kamunun etkilenmesi olası değildir."

            } else if (Math.round(data.HKI) == 4) {

                hkiSeviye = "SAĞLIKSIZ"
                hkiAciklama = "Herkes sağlık etkileri yaşamaya başlayabilir, hassas gruplar için ciddi sağlık etkileri söz konusu olabilir."

            } else if (Math.round(data.HKI) == 5) {

                hkiSeviye = "KÖTÜ"
                hkiAciklama = "Sağlık açısından acil durum oluşturabilir. Nüfusun tamamının etkilenme olasılığı yüksektir."

            } else if (Math.round(data.HKI) > 5) {

                hkiSeviye = "TEHLİKELİ"
                hkiAciklama = "Sağlık alarmı: Herkes daha ciddi sağlık etkileri ile karşılaşabilir."

            }
        }
        return (
            <div>
                
                    <Grid divided='vertically'>
                        

                        <Grid.Row columns={1}>
                         
                            <Grid.Column>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>KOCAELİ</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Yaz Mevsiminin Analizi</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Image className="logo" src={yaz} wrapped ui={false} />
                                    <Card.Meta style={{padding: '10px'}}>
                                    <span className='date' style={{fontSize:"18px", fontWeight:"bold"}}>
                                        {hkiSeviye}
                                       

                                        </span>
                                        <Popup
                                            trigger={<Icon name='question circle outline'  size='large' />}
                                            content={hkiAciklama} 
                                            position='top left'
                                        />
                                </Card.Meta>
                                    <Card.Content>

                                        <Card.Description>
                                            Kirleticiler
                                            <Grid>
                                            <Grid.Row columns={4}>
                                                <Grid.Column>
                                                    <span>PM</span>
                                                    <sub>10</sub>
                                                    <div>
                                                        <span>{data && data.PM10.toFixed(2)}</span>
                                                    </div>

                                                </Grid.Column>
                                                <Grid.Column>
                                                    <span>SO</span>
                                                    <sub>2</sub>
                                                    <div>
                                                        <span>{data && data.SO2.toFixed(2)}</span>
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <span>NO</span>
                                                    <sub>2</sub>
                                                    <div>
                                                        <span>{data && data.NO2.toFixed(2)}</span>
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <span>O</span>
                                                    <sub>3</sub>
                                                    <div>
                                                        <span>{data && data.O3.toFixed(2)}</span>
                                                    </div>
                                                </Grid.Column>

                                            </Grid.Row>
                                            </Grid>
                                        </Card.Description>

                                    </Card.Content>
                                    <Card.Content extra>
                                        <Grid>
                                        <Grid.Row columns={3}>
                                            <Grid.Column>
                                                <Popup
                                                    trigger={<Icon size="large" color='yellow' name='thermometer three quarters' />}
                                                    content='Sıcaklık'
                                                    style={style}
                                                    inverted
                                                />
                                                <div>
                                                    <span>{data && data.HavaSicakligi.toFixed(2)}</span>
                                                </div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Popup
                                                    trigger={<Icon size="large" color='blue' name='tint' />}
                                                    content='Nem'
                                                    style={style}
                                                    inverted
                                                />

                                                <div>
                                                    <span>{data && data.BagilNem.toFixed(2)}</span>
                                                </div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Popup
                                                    trigger={<Icon size="large" color='teal' name='cloudversify' />}
                                                    content='Rüzgar Hızı'
                                                    style={style}
                                                    inverted
                                                />

                                                <div>
                                                    <span>{data && data.RuzgarHizi.toFixed(2)}</span>
                                                </div>
                                            </Grid.Column>


                                        </Grid.Row>
                                        </Grid>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                           


                        </Grid.Row>
                    </Grid>

                

            </div>
        )
    }
}
export default (Yaz);