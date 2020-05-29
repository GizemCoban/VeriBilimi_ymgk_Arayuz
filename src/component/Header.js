import React from 'react';
import { Container,Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HeaderDesing extends React.Component{
    openMenu = () => {
        document.querySelector('#mobile-navigation').classList.toggle('displayActive');
    }
    render(){
      
        return(
                <div className="site-header">
				
                    <Container>
						
						<a href="/" className="branding">
						<img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" className="logo" style={{width:"64px"}}/>
						<div className="logo-type">
							<h1 className="site-title">Veri Bilimi</h1>
							<small className="site-description">Gizem ÇOBAN</small>
						</div>
					</a>
						
                  

				
					<div className="main-navigation">
						<button type="button" className="menu-toggle" onClick={this.openMenu}> <Icon name="bars" /></button>
						<ul className="menu">
							<li className="menu-item current-menu-item"><Link to="/"> Anasayfa</Link></li>
							<li className="menu-item"><Link to="/hkinedir">Hava Kalitesi Nedir?</Link></li>
							<li className="menu-item"><Link to="/analizler">Analizler</Link></li>
							<li className="menu-item"><a href="photos.html">Grafikler</a></li>
							<li className="menu-item"><a href="contact.html">Hakkımda</a></li>
						</ul> 
					</div>

					<div id="mobile-navigation" className="mobile-navigation">
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><Link to="/"> Anasayfa</Link></li>
							<li className="menu-item"><Link to="/hkinedir">Hava Kalitesi Nedir?</Link></li>
							<li className="menu-item"><a href="analizler">Analizler</a></li>
							<li className="menu-item"><a href="photos.html">Grafikler</a></li>
							<li className="menu-item"><a href="contact.html">Hakkımda</a></li>
						</ul> 
                    </div>
                    </Container>
				

				
			</div> 

        )
    }
}
export default HeaderDesing ;