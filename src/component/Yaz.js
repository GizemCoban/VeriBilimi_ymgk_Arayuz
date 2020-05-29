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
        return (
            <div>
                <Container>
                    <Grid divided='vertically'>
                        

                        <Grid.Row columns={1}>
                         
                            <Grid.Column>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>KOCAELİ</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Yaz Mevsiminin Analizi</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Image className="logo" src={yaz} wrapped ui={false} />
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
                            </Grid.Column>
                           


                        </Grid.Row>
                    </Grid>

                </Container>


            </div>
        )
    }
}
export default (Yaz);