import React from "react";
import { withRouter } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon,Popup } from 'semantic-ui-react';
import logo from "./resimler/logo2.png"


const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '0.5em',
}
const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',

    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',

    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',

    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',

    },

]
class HkiTahmin extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <Grid divided='vertically'>
                       

                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <div style={{margin:"30px"}}>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Dropdown
                                    placeholder='Tarih Seçiniz'
                                    fluid
                                    selection
                                    options={friendOptions}
                                    style={{width:"400px",borderColor:"#03a0d9",borderRadius:"13px"}}
                                />

                            </Grid.Column>

                        </Grid.Row>

                        </div>
                        

                            </Grid.Column>
                            <Grid.Column>
                            <div style={{margin:"30px"}}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>KOCAELİ</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>TARİH</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Image className="logo" src={logo} wrapped ui={false} />
                                    <Card.Meta>
                                            <span className='date'>TAHMİN</span>
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
                                                            <span>-</span>
                                                        </div>

                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <span>SO</span>
                                                        <sub>2</sub>
                                                        <div>
                                                            <span>-</span>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <span>NO</span>
                                                        <sub>2</sub>
                                                        <div>
                                                            <span>-</span>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <span>O</span>
                                                        <sub>3</sub>
                                                        <div>
                                                            <span>-</span>
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
                                                        <span>-</span>
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
                                                        <span>-</span>
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column>
                                                <Popup
                                                        trigger={ <Icon size="large" color='teal' name='cloudversify' />}
                                                        content='Rüzgar Hızı'
                                                        style={style}
                                                        inverted
                                                    />
                                                   
                                                    <div>
                                                        <span>-</span>
                                                    </div>
                                                </Grid.Column>


                                            </Grid.Row>
                                        </Grid>
                                    </Card.Content>
                                </Card>
                                </div>
                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>


                        </Grid.Row>
                    </Grid>

                </Container>


            </div>
        )
    }
}
export default (HkiTahmin);