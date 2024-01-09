import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <div className="footer-wraper">
            <div className="foot-menu">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About us</li></a>
                    <a href="/contact"><li>Contact us</li></a>
                </ul>   
            </div>
            <div class="foot-social">
                <ul>
                    <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://telegram.org" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                    <a href="https://mail.google.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                </ul>   
            </div>
            <div className="foot-address">
                <p>
                    7 build - Some Road - M14 5WW - Manchester
                </p>
                <p>
                    Tel : +44 711 111 111
                </p>
            </div>
        </div>
        <div className="copy-right">
            <p>Copyright © 1995-2023. All Rights Reserved</p>
        </div>
    </footer>
  )
}