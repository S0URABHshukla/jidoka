import {Heading} from "@chakra-ui/react"
import "./Footer.css"
export const Footer  =()=>{
    return(
        <>
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>About Us</h4>
  	 			<ul>
  	 				<li><a href="#">Company Profile</a></li>
  	 				<li><a href="#">Milestones</a></li>
                    <li><a href="#">Certificates</a></li>
  	 				<li><a href="#">Business Philosophy</a></li>
  	 				<li><a href="#">Customer Reviews</a></li>
                    <li><a href="#">Cooperative Client</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Product</h4>
  	 			<ul>
  	 				<li><a href="#">Linear Motion</a></li>
  	 				<li><a href="#">Transmission Parts</a></li>
  	 				<li><a href="#">Rotational Motion</a></li>
  	 				<li><a href="#">Positioning And Fixing Guide</a></li>
  	 				<li><a href="#">Pneumatic Components</a></li>
                    <li><a href="#">View More</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><img src="https://www.china-me.com/_nuxt/img/Twitter.b9fdb7e.svg" alt="" /></a>
  	 				<a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov…xMzgzLjQgMjkwMy4xNzYpIi8+DQogIDwvZz4NCjwvc3ZnPg0K" alt="" /></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
        <hr />
  	 </div>
  </footer>

        </>
    )
}