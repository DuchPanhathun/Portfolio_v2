import Image from 'next/image';
import Link from 'next/link';
import "../styles/home-content.css";
import Myself from "../assets/myself_c.png";
import B_Myself from "../assets/b_myself.png";
import FacebookIcon from "../assets/fb_ic";
import InstagramIcon from "../assets/ig_ic";
import XIcon from "../assets/x_ic";
import YoutubeIcon from "../assets/yt_ic";

const HomeContent = () => {
  return (
    <div className="home-content-container">
      <section>
        <div className="text-container">
          <p>Hello,</p>
          <p>I'M Duch Panhathun</p>
          <p>I am a Web Developer</p>
          <button className="hire-btn">Hire me</button>
          <button className="down-cv">Download CV</button>
        </div>

        <Image 
          src={Myself}
          alt="model img" 
          className="model"
          width={500}
          height={500}
        />
      </section>

      <div className="about-container">
        <Image 
          src={B_Myself}
          className='b-model'
          alt="image"
          width={500}
          height={500}
        />

        <div className="about-text">
          <p>About me</p>
          <p>Developer & Designer</p>
          <p>Hello, my name is Duch Panhathun. I'm a developer and also a designer. If you have any project or if you want to make a software for your business, you can contact me! I make it as soon as possible. You'll really like my work, if you don't, I'll make changes until you like the results</p>
          <p>For Android and Apple, I can create visually appealing apps interfaces, layouts, menus, buttons and icons that ensures a user-friendly experience</p>

          <button className="hire-btn">Hire me</button>
          <button className="down-cv">Download CV</button>
        </div>
      </div>

      <div className="services">
        <div className="services-text">
          <p>Services</p>
          <p>Have any project in mind?</p>
          <p>I'd love to hear about it! Whether it's a small idea or a grand vision, I'm ready to bring it to life. Reach out today and let's make your project a reality!</p>
        </div>

        <div className="box-container">
          <div className="box1">
            <span>1</span>
            <p className="heading">Web Design</p>
            <p className="details">By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            <button>Read More</button>
          </div>
          
          <div className="box2">
            <span>2</span>
            <p className="heading">Web Development</p>
            <p className="details">By combining creativity and technical skills, I can create and maintain websites by using front-end and back-end development, responsive design for most screens and web performance optimization</p>
            <button>Read More</button>
          </div>

          <div className="box3">
            <span>3</span>
            <p className="heading">Security/<abbr title="Search Engine Optimization">SEO</abbr></p>
            <p className="details">I create secure websites with relevant content that meets the needs of your customers. Also I seek mobile optimization, faster loading pages and keywords that helps search engines and rankings</p>
            <button>Read More</button>
          </div>
        </div>
      </div>

      <div className="contact-me">
        <p>If you have any project in your mind</p>
        <button>Contact me</button>
      </div>

      <footer>
        <p>ULTRA CODE</p>
        <p>Hello, my name is Duch Panhathun. I'm a developer and also a designer. If you have any project or if you want to make a software for your business, you can contact me!</p>

        <div className="social-icons">
          <Link href="#"><FacebookIcon/></Link>
          <Link href="#"><XIcon/></Link>
          <Link href="#"><InstagramIcon/></Link>
          <Link href="#"><YoutubeIcon/></Link>
        </div>

        <p>Copyright ULTRA CODE</p>
      </footer>

      <div className="a-social-b">
        <Link href="#"><FacebookIcon/></Link>
        <Link href="#"><XIcon/></Link>
        <Link href="#"><InstagramIcon/></Link>
        <Link href="#"><YoutubeIcon/></Link>
      </div>
    </div>
  )
}

export default HomeContent