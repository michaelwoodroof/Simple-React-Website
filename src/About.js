import React from 'react';
import './css/About.css';
import './css/TextStyles.css';

function About() {
    return (
        <div className="Content">
            <h1>About Us</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <h1 className="Name">Our Values</h1>
            <ul>
                <li>Magna sit amet purus gravida quis blandit turpis cursus in.</li>
                <li>Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.</li>
                <li>Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.</li>
                <li>Sit amet est placerat in egestas erat imperdiet sed euismod.</li>
                <li>Diam ut venenatis tellus in metus vulputate eu scelerisque felis.</li>
            </ul>
        </div>
    )
}

export default About;
