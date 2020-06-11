import React, { useState, useCallback } from "react";
import { withRouter } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Dropdown, Container, Grid, Image, Card, Icon,Popup } from 'semantic-ui-react';
import HeaderDesign from "./Header";
import Footer from "./Footer";
class FotografGalery extends React.Component {
    state = {
        CurrentImage: 0,
        viewerIsOpen: false,
    }
    openLightbox = (event, { photo, index }) => {
        console.log(index)
        this.setState({
            CurrentImage: index,
            viewerIsOpen: true
        })
    }
    closeLightbox = () => {
        this.setState({
            CurrentImage: 0,
            viewerIsOpen: false,
        })
    }
    render() {
        return (
            <div>
                 <HeaderDesign />
                <Container>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <ModalGateway style={{MarginBottom:"10px"}}>
                    {this.state.viewerIsOpen ? (
                        <Modal onClose={this.closeLightbox}>
                            <Carousel
                                currentIndex={this.state.CurrentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

                </Container>
                <Footer />          
            </div>
        )
    }
} export default withRouter(FotografGalery);