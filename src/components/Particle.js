
import React from 'react'
import Particles from 'react-particles-js'

const Particle = () => {
    const styles = {
        particle: {
            position: "fixed", 
            top: '0', 
            height: window.innerHeight, 
            backgroundColor: "rgb(13,24,41)",
            zIndex: "-1",
        }
      }
return (
    <Particles
    style={styles.particle}
    params={{
      "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }} />
    )
}


export default Particle; 