import React from 'react'
import './Clients.css';

const Clients = () => {
  return (
    <div class="client-container">
       <div class="client-container-left">
            <h1>Clients</h1>
            <p>With a strong global presence, our media company bridges creativity and strategy to cater to clients worldwide. From India to every corner of the globe, we deliver impactful campaigns tailored to diverse markets. Our expertise lies in understanding cultural nuances and crafting solutions that resonate universally. Partner with us to make your brand a global success!</p>
       </div>
       <div class="client-container-right">
            <div class="client-grid">
                <div class="client-img"><img src='../../assets/images/clients/broc.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/bioguard-logo.png' width={100}/></div>
                <div class="client-img"><img src='../../assets/images/clients/eskay-logo.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/jm-logo.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/viral-logo.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/kent-logo.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/gp-logo.png'/></div>
                <div class="client-img"><img src='../../assets/images/clients/kiwi-logo.png'/></div>
                <div class="client-img"></div>

            </div>
       </div>  
      
    </div>
  )
}

export default Clients
