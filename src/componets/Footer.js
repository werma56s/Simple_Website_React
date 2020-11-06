import React, { Component } from 'react'
import './style/Footer.css'
import img1 from '../img/icon1.png'
import img2 from '../img/icon2.png'


 class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                <div className="contentFooter">
                    <h4>Contact:</h4>
                        <ul>
                            <li>Phon: 000 000 000</li>
                            <li>Email: firma@xyz.pl</li>
                        </ul>
                    </div>
                <div className="contentFooter">
                    <h4>Social Media</h4>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><img src={img2} /></li>
                        </ul> 
                </div>
                <div className="contentFooter">
                    <h4>Place for something</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul> 
                </div>
                <div className="copyrighting"> <h6><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Weronika Górska - na potrzeby stażu i portfolio </h6></div>
                
            </div>
        )
    }
}

export default Footer
