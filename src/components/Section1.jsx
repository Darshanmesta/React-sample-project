import React from 'react';
import './styles.css';

function Section1(){
    return(
        <section className="sec1">
            <p>Welcome to Testimonials Section</p>

            <div className="inner">
                <div className="inner-item">
                <div className="one">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLZvMJnyi9ugA3VsBkIVl-aMTzbdDvL-vxfCaPPZrHvCBXcHCC&usqp=CAU" alt="pic1"/>
                    <p>Check Out for the Best color gradients <span className="s1"><a href="https://uigradients.com/#BetweenNightandDay" target="_blank" >Here</a></span></p>
                </div>
                <div className="two">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpSVJzCg3h99D0a3Ng9mmkuOAP7ctgvWxe_F_zCbc5hNwzohol&usqp=CAU" alt="pic2"/>
                    <p>Check Out for the  Best availability of study  <span className="s1" ><a href="https://books.goalkicker.com/" target="_blank">Materials</a></span></p>
                </div>

                <div className="three">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCbgvqe0LHcN6SOIyDHtclPBKUNuI2cnB8_zLCsVcXK_ocHLls&usqp=CAU" alt="pic3"/>
                    <p>Check out for the Best availability of <span className="s1"><a href="https://fonts.google.com/" target="_blank">Fonts</a></span></p>
                </div>

                <div className="four">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCbgvqe0LHcN6SOIyDHtclPBKUNuI2cnB8_zLCsVcXK_ocHLls&usqp=CAU" alt="pic3"/>
                    <p>Checkout for the Best availability of   <span className="s1"><a href="https://www.w3schools.com/" target="_blank">Tutorials</a></span> </p>
                </div>
                </div>
              
            </div>
        </section>
    )
}

export default Section1;
