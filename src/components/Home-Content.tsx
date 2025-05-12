import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import "../styles/home-content.css";
import Myself from "../assets/myself_c.png";
import B_Myself from "../assets/b_myself.png";
import FacebookIcon from "../assets/fb_ic";
import InstagramIcon from "../assets/ig_ic";
import LinkInIcon from "../assets/li_ic";
import TelegramIcon from "../assets/tele_ic";

interface HomeContentProps {
  onNavigateToPortfolio?: () => void;
}

const HomeContent = ({ onNavigateToPortfolio }: HomeContentProps) => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    // The CV file should be placed in the public/documents folder
    window.open('/documents/Duch_Panhathun_CV.pdf', '_blank');
  };

  const handleHireMe = () => {
    // Scroll to contact section
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReadMore = (category: string) => {
    if (onNavigateToPortfolio) {
      // Navigate to portfolio and pass category information
      onNavigateToPortfolio();
      // We could also store the selected category in localStorage if needed
      localStorage.setItem('selectedCategory', category);
    }
  };

  return (
    <div className="home-content-container">
      <section>
        <div className="text-container">
          <p>Hello,</p>
          <p>I'M Duch Panhathun</p>
          <p>I am a Web Developer</p>
          <button className="hire-btn" onClick={handleHireMe}>Hire me</button>
          <button className="down-cv" onClick={handleDownloadCV}>Download CV</button>
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

          <button className="hire-btn" onClick={handleHireMe}>Hire me</button>
          <button className="down-cv" onClick={handleDownloadCV}>Download CV</button>
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
            <p className="heading">AI-Powered Applications</p>
            <p className="details">I develop intelligent applications that leverage the power of artificial intelligence to solve real-world problems. From data analysis agents to custom AI solutions, I can help you harness the potential of machine learning and AI.</p>
            <button onClick={() => handleReadMore('AI-Powered Web Applications')}>Read More</button>
          </div>
          
          <div className="box2">
            <span>2</span>
            <p className="heading">Web Development</p>
            <p className="details">By combining creativity and technical skills, I create and maintain responsive, high-performance websites that look great on all devices. My full-stack approach ensures seamless functionality and engaging user experiences.</p>
            <button onClick={() => handleReadMore('Web Development Projects')}>Read More</button>
          </div>

          <div className="box3">
            <span>3</span>
            <p className="heading">App Development</p>
            <p className="details">I design and build mobile applications with intuitive interfaces and robust functionality. Whether for Android or iOS, my apps combine beautiful design with powerful features to deliver exceptional user experiences.</p>
            <button onClick={() => handleReadMore('App Development')}>Read More</button>
          </div>
          
          <div className="box4">
            <span>4</span>
            <p className="heading">Chatbot Development</p>
            <p className="details">I specialize in creating intelligent, conversational chatbots for various platforms including Messenger and Telegram. From customer service bots to specialized tools like plant recognition, I build AI-powered assistants that enhance user engagement.</p>
            <button onClick={() => handleReadMore('Chatbot Development')}>Read More</button>
          </div>
        </div>
      </div>

      <div className="contact-me" ref={contactRef}>
        <p>If you have any project in your mind</p>
        <a href="mailto:duch.panhathun@gmail.com" className="contact-button">
          Contact me
        </a>
      </div>

      <footer>
        <p>Duch Panhathun</p>
        <p>Hello, my name is Duch Panhathun. I'm a developer and also a designer. If you have any project or if you want to make a software for your business, you can contact me!</p>

        <div className="social-icons">
          <Link href="https://www.facebook.com/thun.768089" target="_blank" rel="noopener noreferrer"><FacebookIcon/></Link>
          <Link href="https://www.linkedin.com/in/duch-panhathun-406336235" target="_blank" rel="noopener noreferrer"><LinkInIcon/></Link>
          <Link href="https://www.instagram.com/duch_panhathun" target="_blank" rel="noopener noreferrer"><InstagramIcon/></Link>
          <Link href="https://t.me/nhacool" target="_blank" rel="noopener noreferrer"><TelegramIcon/></Link>
        </div>
      </footer>

      <div className="a-social-b">
        <Link href="https://www.facebook.com/thun.768089" target="_blank" rel="noopener noreferrer"><FacebookIcon/></Link>
        <Link href="https://www.linkedin.com/in/duch-panhathun-406336235" target="_blank" rel="noopener noreferrer"><LinkInIcon/></Link>
        <Link href="https://www.instagram.com/duch_panhathun" target="_blank" rel="noopener noreferrer"><InstagramIcon/></Link>
        <Link href="https://t.me/nhacool" target="_blank" rel="noopener noreferrer"><TelegramIcon/></Link>
      </div>
    </div>
  )
}

export default HomeContent