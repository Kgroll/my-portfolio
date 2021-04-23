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
        <p>Write a blurb about me </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
       </p>
      </div>
    </section>

  );
}

export default About;