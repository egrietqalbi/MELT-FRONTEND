import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    
	<div>
  {/*
	header-img start 
	============================== */}
  <section id="hero-area">
    <img className="img-responsive" src="images/header.jpg" alt />
  </section>
  {/*
    Header start 
	============================== */}
  <nav id="navigation">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="Logo" />
                  </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right" id="top-nav">
                    <li><a href="#hero-area">Home</a></li>
                    <li><a href="#about-us">about us</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#price">menu</a></li>
                    <li><a href="#subscribe">news</a></li>
                    <li><a href="#contact-us">contacts</a></li>
                  </ul>
                </div>{/* /.navbar-collapse */}
              </div>{/* /.container-fluid */}
            </nav>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .container close */}
  </nav>{/* header close */}
  {/*
    Slider start
    ============================== */}
  <section id="slider">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
            <div className="title">
              <h3>Featured <span>Works</span></h3>
            </div>
            <div id="owl-example" className="owl-carousel">
              <div>
                <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt />
              </div>
              <div>
                <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt />
              </div>
            </div>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .container close */}
  </section>{/* slider close */}
  {/*
    about-us start
    ============================== */}
  <section id="about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <img className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms" src="images/cooker-img.png" alt="cooker-img" />
            <h1 className="heading wow fadeInUp" data-wow-duration="400ms" data-wow-delay="500ms">Your <span>Restaurant’s</span> <br /> Website Has To Look <span>Good</span>
            </h1>
            <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="600ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .containe close */}
  </section>{/* #call-to-action close */}
  {/*
    blog start
    ============================ */}
  <section id="blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h1 className="heading">Latest <span>From</span> the <span>Blog</span></h1>
            <ul>
              <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms">
                <div className="blog-img">
                  <img src="images/blog/blog-img-1.jpg" alt="blog-img" />
                </div>
                <div className="content-right">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="400ms">
                <div className="blog-img">
                  <img src="images/blog/blog-img-2.jpg" alt="blog-img" />
                </div>
                <div className="content-right">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="500ms">
                <div className="content-left">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
                <div className="blog-img-2">
                  <img src="images/blog/blog-img-3.jpg" alt="blog-img" />
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="600ms">
                <div className="content-left">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
                <div className="blog-img-2">
                  <img src="images/blog/blog-img-4.jpg" alt="blog-img" />
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="700ms">
                <div className="blog-img">
                  <img src="images/blog/blog-img-5.jpg" alt="blog-img" />
                </div>
                <div className="content-right">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="800ms">
                <div className="blog-img">
                  <img src="images/blog/blog-img-6.jpg" alt="blog-img" />
                </div>
                <div className="content-right">
                  <h3>Homestyle Chicken Pot Pie</h3>
                  <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                </div>
              </li>
            </ul>
            <a className="btn btn-default btn-more-info wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#" role="button">More Info</a>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .containe close */}
  </section>{/* #blog close */}
  {/*
    price start
    ============================ */}
  <section id="price">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h1 className="heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">our <span>MENU</span> the <span>PRICE</span></h1>
            <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
            <div className="pricing-list">
              <div className="title">
                <h3>Featured <span>on the week</span></h3>
              </div>
              <ul>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Pancakes n' Such</h2>
                      <div className="border-bottom" />
                      <span>$ 25.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Homestyle Chicken Pot Pie</h2>
                      <div className="border-bottom" />
                      <span>$ 10.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Cereal, Panecillos y Frutas </h2>
                      <div className="border-bottom" />
                      <span>$ 5.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="600ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Meat of Skewers</h2>
                      <div className="border-bottom" />
                      <span>$ 15.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="700ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Steak with a Garlic and Parsley Risotto</h2>
                      <div className="border-bottom" />
                      <span>$ 75.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="800ms">
                  <div className="item">
                    <div className="item-title">
                      <h2>Caesar Salad</h2>
                      <div className="border-bottom" />
                      <span>$ 7.00</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                  </div>
                </li>
              </ul>
              <a className="btn btn-default pull-right wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#" role="button">More Info</a>
            </div>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .containe close */}
  </section>{/* #price close */}
  {/*
    subscribe start
    ============================ */}
  <section id="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h1 className=" heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms"> SUBSCRIBE <span>to our</span> NEWSLETTER</h1>
            <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <form className="form-inline">
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" id="exampleInputAmount" placeholder="Enter your email to subscribe..." />
                  <div className="input-group-addon">
                    <button className="btn btn-default" type="submit">subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .containe close */}
  </section>{/* #subscribe close */}
  {/*
    CONTACT US  start
    ============================= */}
  <section id="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h1 className="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">our <span>CONTACT US</span></h1>
            <h3 className="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">Sign Up for <span>Email Alerts</span> </h3>
            <form>
              <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Write your full name here..." />
              </div>
              <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                <input type="text" className="form-control" placeholder="Write your email address here..." />
              </div>
              <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                <textarea className="form-control" rows={3} placeholder="Write your message here..." defaultValue={""} />
              </div>
            </form>
            <a className="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" role="button">send your message</a>
          </div>
        </div>{/* .col-md-12 close */}
      </div>{/* .row close */}
    </div>{/* .container close */}
  </section>{/* #contact-us close */}
  {/*
    footer  start
    ============================= */}
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="block wow fadeInLeft" data-wow-delay="200ms">
            <h3>CONTACT <span>INFO</span></h3>
            <div className="info">
              <ul>
                <li>
                  <h4><i className="fa fa-phone" />Telefone</h4>
                  <p>(000) 123 456 78- (000) 123 4567 89</p>
                </li>
                <li>
                  <h4><i className="fa fa-map-marker" />Address</h4>
                  <p>2046 Blue Spruce Lane Laurel Canada</p>
                </li>
                <li>
                  <h4><i className="fa fa-envelope" />E mail</h4>
                  <p>rest@gmail.com - rest@mail.ru</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .col-md-4 close */}
        <div className="col-md-4">
          <div className="block wow fadeInLeft" data-wow-delay="700ms">
            <h3>LATEST <span>BLOG POSTS</span></h3>
            <div className="blog">
              <ul>
                <li>
                  <h4><a href="#">Nov 9-2014</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur ut blandit sapien</p>
                </li>
                <li>
                  <h4><a href="#">Sep 8-2014</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur ut blandit sapien</p>
                </li>
              </ul>                
            </div>
          </div>
        </div>
        {/* .col-md-4 close */}
        <div className="col-md-4">
          <div className="block wow fadeInLeft" data-wow-delay="1100ms">
            <div className="gallary">
              <h3>PHOTO <span>STREAM</span></h3>
              <ul>
                <li>
                  <a href="#"><img src="images/photo/photo-1.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img src="images/photo/photo-2.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img src="images/photo/photo-3.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img src="images/photo/photo-4.jpg" alt /></a>
                </li>
              </ul>
            </div>
            <div className="social-media-link">
              <h3>Follow <span>US</span></h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .col-md-4 close */}
      </div>{/* .row close */}
    </div>{/* .containe close */}
  </section>{/* #footer close */}
  {/*
    footer-bottom  start
    ============================= */}
  <footer id="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="block">
            <p>Copyright © 2014 - All Rights Reserved.Design and Developed By <a href="http://www.themefisher.com">Themefisher</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>



	
  )

  
}
 export async function getServerSideProps(context){
   const localhink ="http://localhost:5000/"
   const onelineLink=""
 const dataRespone=await fetch(localhink);
  const dataJson=await dataRespone.json();
 return{
    props:{
  web:dataJson
    }
  }
}


