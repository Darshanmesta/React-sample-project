import React , {Component} from 'react'
import './styles.css'

class Section2 extends Component {
    render(){
        return(
           <section className="sec2">
               <div className="secinn">
                   <div className="secone">
                       <img class="secim" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="im1"/>
                       <p>Let's Work</p>
                   </div>
                   <div className="sectwo">
                       <img class='secim' src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="im2"/>
                       <p>Let's have a Break</p>
                   </div>
                   <div className="secthree">
                       <img class="secim" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Clouds_over_the_Atlantic_Ocean.jpg" alt="im3"/>
                       <p>Let's Explore</p>
                   </div>
                   <div className="secfour">
                       <img class="secim" src="https://www.roughguides.com/wp-content/uploads/2016/02/matterhorn-shutterstock_1118486243.jpg" alt="im4"/>
                       <p>Let's Travel</p>
                   </div>
               </div>
           </section>
        )
    }
}

export default Section2;