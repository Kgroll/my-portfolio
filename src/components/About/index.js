import React from 'react';
import coverImage from '../../assets/cover/cover-image.png';

function About() {
  return (
    <section className="my-5" >
          <h1 id='about'>A little bit about me</h1>
          <div
            class="cover-image"
            style={{
              backgroundImage: 'url(' + coverImage + ')',
              backgroundSize: "cover",
              height: "100vh",
              color: "#f5f5f5"
            }}
          >
            <p> This background picture is one of my favourite places in the world</p><p> I hope to, some day, be able to spend more time watching sunsets over many other lakes! </p>
            <p> At the present time I am a Medical Sonographer specializing in High Risk Obstetrics.</p> 
            <p>I have always had an interest in the latest and greatest technology and am at a point where a career change will be welcome.</p> 
            <p>I look forward to the challenges awaiting me!</p>
          </div>
        </section>
    
      );
    } 
export default About;