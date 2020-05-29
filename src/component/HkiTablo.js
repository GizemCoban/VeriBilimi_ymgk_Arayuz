import React from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown, Container, Grid, Image, Card, Icon, Popup, Header, Table, Rating } from 'semantic-ui-react';

class HkiTablo extends React.Component {
    render() {
        return (
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine textAlign='center' rowSpan='2'>İndeks</Table.HeaderCell>
                            <Table.HeaderCell singleLine textAlign='center' rowSpan='2'>HKİ</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'><Link to="/so2">SO <sub>2</sub> [µg/m³] </Link></Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'><Link to="/no2">NO <sub>2</sub> [µg/m³] </Link></Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'><Link to="co">CO  [µg/m³] </Link></Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' > <Link to="/o3">O <sub>3</sub> [µg/m³]</Link></Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'><Link to="/pm10">PM <sub>10</sub> [µg/m³] </Link></Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell  textAlign='center'>1 Sa. Ort.</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>1 Sa. Ort.</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>8 Sa. Ort.</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>8 Sa. Ort.</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>24 Sa. Ort.</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="tablorenk1" textAlign='center'> İYİ
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='	Hava kalitesi memnun edici ve hava kirliliği az riskli veya hiç risk teşkil etmiyor.'
                                    position='top left'
                                />


                                </Table.Cell>
                            <Table.Cell textAlign='center'>0 - 50</Table.Cell>
                            <Table.Cell textAlign='center'>0-100</Table.Cell>
                            <Table.Cell textAlign='center'>0-100</Table.Cell>
                            <Table.Cell textAlign='center' >0-5500</Table.Cell>
                            <Table.Cell textAlign='center' >0-120</Table.Cell>
                            <Table.Cell textAlign='center'>0-50 </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell className="tablorenk2" textAlign='center'>ORTA
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='Hava kalitesi uygun fakat alışılmadık şekilde hava kirliliğine hassas olan çok az sayıdaki insanlar için bazı kirleticiler açısından orta düzeyde sağlık endişesi oluşabilir.'
                                    position='top left'
                                />
                            
                            </Table.Cell>
                            <Table.Cell textAlign='center'>51 - 100 </Table.Cell>
                            <Table.Cell textAlign='center'>101-250</Table.Cell>
                            <Table.Cell textAlign='center'>101-200</Table.Cell>
                            <Table.Cell textAlign='center'>5501-10000</Table.Cell>
                            <Table.Cell textAlign='center'>121-160</Table.Cell>
                            <Table.Cell textAlign='center'>51-100 </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="tablorenk3" textAlign='center'>HASSAS
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='Hassas gruplar için sağlık etkileri oluşabilir. Genel olarak kamunun etkilenmesi olası değildir.'
                                    position='top left'
                                />
                            
                            </Table.Cell>
                            <Table.Cell textAlign='center'>101 – 150</Table.Cell>
                            <Table.Cell textAlign='center'>251-500 </Table.Cell>
                            <Table.Cell textAlign='center'>201-500</Table.Cell>
                            <Table.Cell textAlign='center'>10001-16000</Table.Cell>
                            <Table.Cell textAlign='center'>161-180</Table.Cell>
                            <Table.Cell textAlign='center'>101-260 </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell className="tablorenk" textAlign='center'>SAĞLIKSIZ
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='Herkes sağlık etkileri yaşamaya başlayabilir, hassas gruplar için ciddi sağlık etkileri söz konusu olabilir..'
                                    position='top left'
                                />
                            
                            </Table.Cell>
                            <Table.Cell textAlign='center'>151 – 200</Table.Cell>
                            <Table.Cell textAlign='center'>501-850</Table.Cell>
                            <Table.Cell textAlign='center'>501-1000</Table.Cell>
                            <Table.Cell textAlign='center'>16001-24000</Table.Cell>
                            <Table.Cell textAlign='center'>181-240</Table.Cell>
                            <Table.Cell textAlign='center'>261-400 </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="tablorenk5" textAlign='center'>KÖTÜ
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='Sağlık açısından acil durum oluşturabilir. Nüfusun tamamının etkilenme olasılığı yüksektir.'
                                    position='top left'
                                />
                            
                            </Table.Cell>
                            <Table.Cell textAlign='center'>201 – 300</Table.Cell>
                            <Table.Cell textAlign='center'>851-1100  </Table.Cell>
                            <Table.Cell textAlign='center'>1001-2000</Table.Cell>
                            <Table.Cell textAlign='center'>24001-32000</Table.Cell>
                            <Table.Cell textAlign='center'>241-700</Table.Cell>
                            <Table.Cell textAlign='center'>401-520</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell className="tablorenk6" textAlign='center'>TEHLİKELİ
                            <Popup
                                    trigger={<Icon name='question circle outline'  size='small' />}
                                    content='Sağlık alarmı: Herkes daha ciddi sağlık etkileri ile karşılaşabilir.'
                                    position='top left'
                                />
                            </Table.Cell>
                            <Table.Cell textAlign='center'>301 – 500</Table.Cell>
                            <Table.Cell textAlign='center'> >1101</Table.Cell>
                            <Table.Cell textAlign='center'>>2001</Table.Cell>
                            <Table.Cell textAlign='center'>>32001</Table.Cell>
                            <Table.Cell textAlign='center'>>701</Table.Cell>
                            <Table.Cell textAlign='center'>>521 </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>




            </Container>


        )
    }
}
export default (HkiTablo);