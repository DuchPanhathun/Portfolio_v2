import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import "../styles/portfolio.css"


interface GalleryItem {
  id: number;
  category: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  fullDescription?: string;
  technologies?: string[];
  projectUrl?: string;
  githubUrl?: string;
  additionalImages?: (string | StaticImageData)[];
}

interface PortfolioProps {
  initialFilter?: string | null;
}

const Portfolio = ({ initialFilter = 'all' }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter || 'all');
  const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>('light-mode');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Effect to apply initialFilter when it changes
  useEffect(() => {
    if (initialFilter) {
      setActiveFilter(initialFilter);
    }
  }, [initialFilter]);

  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Web Development Projects',
      image: 'https://drive.google.com/uc?export=view&id=16rMNrum5EPPSfypDlyX8ZzC-ykCwHcu-',
      title: 'HR Management System',
      description: 'A full-featured human resources platform for efficient employee management and administration',
      fullDescription: 'A comprehensive HR management solution designed to streamline employee data management, attendance tracking, performance evaluation, and administrative processes for organizations of all sizes.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=16rMNrum5EPPSfypDlyX8ZzC-ykCwHcu-',
        'https://drive.google.com/uc?export=view&id=1D1dIgNy_nTBXKrDdMZzgqpJZYWv9_GjS',
        'https://drive.google.com/uc?export=view&id=14KzvLDIj9jYN0fFhC37ss74YwxzBtu_H',
        'https://drive.google.com/uc?export=view&id=1CMz-0aWQUIjQ7S-lJgnhTDLJqTq7t2CD',
        'https://drive.google.com/uc?export=view&id=1BhlmseXNgM9B78dO8hOQ-FAIh_rYM3yK',
      ],
    },
    {
      id: 2,
      category: 'Web Development Projects',
      image: 'https://drive.google.com/uc?export=view&id=1suHaGfrqy4rbhfqDJYtO_3h_lKKYfXUC',
      title: 'Partnership Management System',
      description: 'A collaborative platform for Save the Children Cambodia to manage NGO partnerships and initiatives',
      fullDescription: 'A sophisticated partnership management system developed for Save the Children Cambodia to track, manage, and optimize relationships with partner organizations. The system facilitates collaboration, document sharing, and progress tracking for joint humanitarian initiatives.',
      technologies: ['Next.js', "Laravel", "Tailwind CSS", "MySQL"],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1suHaGfrqy4rbhfqDJYtO_3h_lKKYfXUC',
        'https://drive.google.com/uc?export=view&id=17S19zFEh3CWsdZnYBJR1rB5CWRD-ahbU',
        'https://drive.google.com/uc?export=view&id=10d5BC1484OV9IkOT-GPSipISCCDiA5dU',
        'https://drive.google.com/uc?export=view&id=1AViP7k70HBN0k4CkXZlPlRewSqsnrh8Z',
        'https://drive.google.com/uc?export=view&id=1y9gPLEQWyjGRbgycahL6SnSbhhkVQXZJ',
        'https://drive.google.com/uc?export=view&id=1XuEthG_RCCix83Eu_7X8x6HwjD8YiqUu',
      ],
    },
    {
      id: 3,
      category: 'AI-Powered Web Applications',
      image: 'https://drive.google.com/uc?export=view&id=1dyM-LV59YoKI7UOhJpHIA69_3B1-jp8s',
      title: 'OCR and Summary System',
      description: 'Intelligent document processing system that extracts text and generates accurate summaries',
      fullDescription: 'An advanced OCR (Optical Character Recognition) and summarization application that uses AI to extract text from images and documents, then creates concise, coherent summaries of the content. Perfect for researchers, students, and businesses dealing with large volumes of documents.',
      technologies: ['C++', 'Python', 'TensorFlow'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1dyM-LV59YoKI7UOhJpHIA69_3B1-jp8s',
        'https://drive.google.com/uc?export=view&id=1KqMBteUXeIRv1_mpG_Y-XjKiPrHbc55n',
        'https://drive.google.com/uc?export=view&id=1lLb-C4Gum1FS44QbcYwgK3QPzoQHqSBE'
      ],
    },
    {
      id: 4,
      category: 'App Development',
      image: 'https://drive.google.com/uc?export=view&id=14reYkZ8K9NPgaXUlQuKpe2wKeKDX42A8',
      title: 'Ecommerce App',
      description: 'Feature-rich mobile shopping platform with seamless browsing, payment, and order management',
      fullDescription: 'A comprehensive mobile e-commerce solution that provides users with an intuitive shopping experience. Features include product browsing with advanced filters, secure checkout, payment processing, order tracking, and personalized recommendations based on user preferences and shopping history.',
      technologies: ['Kotlin', 'Firebase', 'Material Design', 'Payment Gateway Integration'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1XNLSL1sU1_NvyAr7LaJACUaAatph4Si5',
        'https://drive.google.com/uc?export=view&id=14reYkZ8K9NPgaXUlQuKpe2wKeKDX42A8',
        'https://drive.google.com/uc?export=view&id=1aLp98UPLfvWn0yS5DHHFZaEuw2mho_3U',
        'https://drive.google.com/uc?export=view&id=1yf0FnXyLDihTFRGo28DWa3zjVXlLq-Bo',
        'https://drive.google.com/uc?export=view&id=141bawnbkA47Vfn-aO3D2pMAbazx4_xt_',
        'https://drive.google.com/uc?export=view&id=126p1tKdvUkL6du8vuRsTI_FtdWAMF3pU',
        'https://drive.google.com/uc?export=view&id=1TN-ZOmuMl3DOJSocPfe8BHXCzhg0ILrd',
        'https://drive.google.com/uc?export=view&id=1rdYvifD7IltOdd_A-Ugk8xDg2Pao2-WC',
        'https://drive.google.com/uc?export=view&id=12SxCaqH7_Zcm5Zil8CwCDFwGqCdEH__x',
        'https://drive.google.com/uc?export=view&id=1jAFwjC1NDlq-dn4rHZsNbdapVQz7a5IP',
        'https://drive.google.com/uc?export=view&id=1lCB7R9SRiR1gmN6NdDTButpvm67wkzu_',
        'https://drive.google.com/uc?export=view&id=15zDulKAyQH9fRQdyGMS2ysa6G3fvDbjM',
        'https://drive.google.com/uc?export=view&id=1HgIc8IEm3o2D1QRT4KQlcbmvh5BLW6Wd',
        'https://drive.google.com/uc?export=view&id=1xCLsBtmjN2ufyxNk48dX9Niwa0Vq84eJ'
      ],
    },
    {
      id: 5,
      category: 'AI-Powered Web Applications',
      image: 'https://drive.google.com/uc?export=view&id=1wgako45ZRw9P7MESO0mVemyjMGwMdWrQ',
      title: 'Data Analyst Agent',
      description: 'AI-powered data analysis assistant that processes, visualizes, and interprets complex datasets',
      fullDescription: 'An intelligent data analysis platform that leverages machine learning to help users understand complex datasets. This AI agent automatically cleans data, identifies patterns, creates insightful visualizations, and generates plain-language reports to make data analysis accessible to users of all technical backgrounds.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Streamlit', 'Machine Learning'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1wgako45ZRw9P7MESO0mVemyjMGwMdWrQ',
        'https://drive.google.com/uc?export=view&id=19wQ25cGrnArsScrxnc-_JSCB5R1hqc9h',
        'https://drive.google.com/uc?export=view&id=1_0l8wE22pkytkHJzcwST3msUHzbx_uXz',
        'https://drive.google.com/uc?export=view&id=15-QTozxLVFXGYg3GO2lg-znbg-dNMmr2',
        'https://drive.google.com/uc?export=view&id=1SwCLm1I1luX52V8Y2ppQ1N8MvMV0YRvL',
        'https://drive.google.com/uc?export=view&id=1ApFJGM3xGrxT_KCi-zVnyMBhKok1zhgo',
        'https://drive.google.com/uc?export=view&id=16XWFc2bj_ZvJv9EtVEQrCWfXqnxocTKZ',
        'https://drive.google.com/uc?export=view&id=1ubv7rKZE6C9YGRvYBdSuRV4eP50N_EAr',
        'https://drive.google.com/uc?export=view&id=1-R_d5mgem_cxSKG3LuTWKEzikaaIeIyl',
        'https://drive.google.com/uc?export=view&id=1vcTzQK8412fN50tMHSKGGxIaShu5HixT',
        'https://drive.google.com/uc?export=view&id=1WhDETsfFZqooOoH850utP6Ko3rZDGLrX',
        'https://drive.google.com/uc?export=view&id=1WDqHOPeJs_sMXjQZPnTa0dnfnXezQWoA',
        'https://drive.google.com/uc?export=view&id=14t4aywkASOqqwfCbxryuxB7voJhwquNR',
        'https://drive.google.com/uc?export=view&id=1hOM6vtuR-SWmVXFQfHtkahm50u6SWAQJ'
      ],
    },
    {
      id: 6,
      category: 'Chatbot Development',
      image: 'https://drive.google.com/uc?export=view&id=10mJ5bGe6EfJWs96DZxoS7jEkruDis1e6',
      title: 'Positive Parenting Messenger Chatbot',
      description: 'Facebook Messenger bot providing personalized parenting advice and resources to parents',
      fullDescription: 'An interactive Facebook Messenger chatbot designed to support parents with evidence-based positive parenting techniques. The bot provides personalized advice, responds to parenting questions, shares relevant resources, and offers daily tips to help parents build healthy relationships with their children.',
      technologies: ['Python', 'Firebase', 'Facebook Messenger API', 'Natural Language Processing'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=10mJ5bGe6EfJWs96DZxoS7jEkruDis1e6',
        'https://drive.google.com/uc?export=view&id=1K049ZZRcRolfkkrWuvlHxqbMo74r9_QZ',
        'https://drive.google.com/uc?export=view&id=1JMShgtKFRYoq85sxCoo7-dYkFjfDFxul',
        'https://drive.google.com/uc?export=view&id=1FiJhQaHJDQbojObTimlZWi9Y_74ClEUJ',
        'https://drive.google.com/uc?export=view&id=1V1flmt0L1sdMCPA2Kz3q7VP3j12QC39L',
        'https://drive.google.com/uc?export=view&id=1WGj5BTpVKeO5DHEG9iahqniopXcdyGHo',
        'https://drive.google.com/uc?export=view&id=12duGL5Hbg-FYLIH8yUmWT4dVqRHjf51G',
        'https://drive.google.com/uc?export=view&id=1NYn4TuLB0YFzmvF3DuJ2JLq4g4h2bLgT',
        'https://drive.google.com/uc?export=view&id=1M0FJhGId_qcrPIRvt13tX672JpScJ1Ww'
      ]
    },
    {
      id: 7,
      category: 'Chatbot Development',
      image: 'https://drive.google.com/uc?export=view&id=1_eGr5W5g2K5L8609scsJ2M5FB7xkayq0',
      title: 'Positive Parenting Telegram Chatbot',
      description: 'Telegram-based virtual assistant offering parenting guidance and child development resources',
      fullDescription: 'A conversational Telegram chatbot that helps parents navigate challenges in child-rearing with a positive approach. The bot delivers age-appropriate parenting tips, answers questions, provides communication strategies, and offers emotional support for parents whenever they need guidance.',
      technologies: ['Python', 'Firebase', 'Telegram Bot API', 'Dialog Management'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1_eGr5W5g2K5L8609scsJ2M5FB7xkayq0',
        'https://drive.google.com/uc?export=view&id=15saRm-fxzyn-OFSBvxHY85rtfDAMIyNB',
        'https://drive.google.com/uc?export=view&id=1LR8zq-_HqzKDomAvOPRKYpwFlzN7f6kP',
        'https://drive.google.com/uc?export=view&id=1LRWf-8mJ6qxvTdANjg2i_NTDWxFGRdzc',
        'https://drive.google.com/uc?export=view&id=18osi1o2bogk1wL0PEXtahVw7IL3LRdJF'
      ]
    },
    {
      id: 8,
      category: 'Chatbot Development',
      image: 'https://drive.google.com/uc?export=view&id=1nR_COVqJLpx_Dq17uXKQV-0pfL_pakvm',
      title: 'Plant Recognition Chatbot',
      description: 'AI-powered bot that identifies plants from photos and provides detailed care information',
      fullDescription: 'An intelligent chatbot that uses computer vision and machine learning to identify plants from user-submitted photos. After identification, the bot provides detailed information about the plant species, including care instructions, growth patterns, optimal conditions, and potential issues to watch for.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Convolutional Neural Networks'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1nR_COVqJLpx_Dq17uXKQV-0pfL_pakvm',
        'https://drive.google.com/uc?export=view&id=1Jzmas8IZhCHZQ_FCDkJ7P5kPEZ1W4vAx' 
      ]
    },
    {
      id: 9,
      category: 'AI-Powered Web Applications',
      image: 'https://drive.google.com/uc?export=view&id=1M3fENqswhuNOvd-4ZbPafjt3k-3G3z_3',
      title: 'RAG System',
      description: 'RAG System is a system that uses AI to answer questions based on a given context',
      fullDescription: 'RAG System is a system that uses AI to answer questions based on a given context',
      technologies: ["python", "langchain", "rag", "llm"],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      additionalImages: [
        'https://drive.google.com/uc?export=view&id=1M3fENqswhuNOvd-4ZbPafjt3k-3G3z_3',
        'https://drive.google.com/uc?export=view&id=1NnPvqp_-MEdgpDw0TDG-c1l3vlsGJq75',
        'https://drive.google.com/uc?export=view&id=1NJJcthgJbMTYIaBuQ-bGiqYDCa8sTnsy',
        'https://drive.google.com/uc?export=view&id=1faI5gdpOd6i7_gtlBALhu0rKTFRfM2Bk'
      ]
    }
  ];

  // Filter gallery items
  const filteredItems = galleryItems.filter(item => {
    return (
      (activeFilter === 'all' || item.category === activeFilter)
    );
  });

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(savedTheme as 'light-mode' | 'dark-mode');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedItem?.additionalImages?.length) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.additionalImages!.length - 1 : prev - 1
      );
    }
  }, [selectedItem]);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedItem?.additionalImages?.length) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.additionalImages!.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedItem]);

  const toggleFullScreen = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsFullScreen(prev => !prev);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape') {
        setSelectedItem(null);
        setCurrentImageIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handlePrevImage, handleNextImage]);

  return (
    <div className="portfolio-container">
      <div className={theme}>
        <header className={theme}>
          <div className="header-container">
            <h1 className='header-title'>{"My Portfolio"}</h1>
            <div className="header-controls">
              <button onClick={toggleTheme} aria-label="Toggle Dark/Light Mode">
                <i className={`fas ${theme === 'dark-mode' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </div>
            <nav>
              <ul>
                {['all', 'AI-Powered Web Applications', 'Web Development Projects', 'App Development', 'Chatbot Development'].map((filter) => (
                  <li key={filter}>
                    <button
                      className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      <i className={`fas ${
                        filter === 'all' ? 'fa-th-large' :
                        filter === 'AI-Powered Web Applications' ? 'fa-brain' :
                        filter === 'Web Development Projects' ? 'fa-laptop-code' :
                        filter === 'App Development' ? 'fa-mobile-alt' :
                        filter === 'Chatbot Development' ? 'fa-robot' : 'fa-chart-bar'
                      }`}></i>
                      {` ${filter === 'all' ? 'All' : filter}`}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <main>
              <section className="gallery">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`gallery-item ${theme}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      objectFit="contain"
                      priority
                    />
                    <div className={`overlay ${theme}`}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </section>
            </main>
          </div>
        </header>

        

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className={`lightbox ${theme}`} onClick={() => {
            if (isFullScreen) {
              setIsFullScreen(false);
            } else {
              setSelectedItem(null);
              setCurrentImageIndex(0);
            }
          }}>
            <div className={`lightbox-content ${theme} ${isFullScreen ? 'fullscreen' : ''}`} onClick={(e) => e.stopPropagation()}>
              <span 
                className="lightbox-close" 
                onClick={() => {
                  if (isFullScreen) {
                    setIsFullScreen(false);
                  } else {
                    setSelectedItem(null);
                    setCurrentImageIndex(0);
                  }
                }}
              >
                <i className="fas fa-times"></i>
              </span>

              {/* Main Image Slider */}
              <div className="main-image-slider">
                <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <div 
                  className="featured-image-container" 
                  onClick={toggleFullScreen}
                >
                  {selectedItem.additionalImages && selectedItem.additionalImages.length > 0 ? (
                    <Image
                      src={selectedItem.additionalImages[currentImageIndex]}
                      alt={`${selectedItem.title} view ${currentImageIndex + 1}`}
                      fill
                      style={{ objectFit: isFullScreen ? 'contain' : 'contain', cursor: 'zoom-in' }}
                      priority
                    />
                  ) : (
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      style={{ objectFit: isFullScreen ? 'contain' : 'contain', cursor: 'zoom-in' }}
                      priority
                    />
                  )}
                  
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedItem.additionalImages?.length || 1}
                  </div>

                  <button className="fullscreen-toggle" onClick={toggleFullScreen}>
                    <i className={`fas fa-${isFullScreen ? 'compress' : 'expand'}`}></i>
                  </button>
                </div>

                <button className="nav-btn next-btn" onClick={handleNextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              {/* Hide thumbnails and details in fullscreen mode */}
              {!isFullScreen && (
                <>
                  {/* Thumbnails Gallery */}
                  {selectedItem.additionalImages && selectedItem.additionalImages.length > 1 && (
                    <div className="thumbnails-container">
                      <div className="thumbnails-scroll">
                        {selectedItem.additionalImages.map((imgSrc, index) => (
                          <div 
                            key={index} 
                            className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <Image
                              src={imgSrc}
                              alt={`${selectedItem.title} thumbnail ${index + 1}`}
                              width={80}
                              height={60}
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="project-details">
                    <h2 className="project-title">{selectedItem.title}</h2>
                    <p className="project-description">{selectedItem.fullDescription || selectedItem.description}</p>
                    
                    {selectedItem.technologies && (
                      <div className="technologies-section">
                        <h3>Technologies Used:</h3>
                        <div className="tech-tags">
                          {selectedItem.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="project-links">
                      {selectedItem.projectUrl && (
                        <a 
                          href={selectedItem.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          <i className="fas fa-external-link-alt"></i> View Live
                        </a>
                      )}
                      {selectedItem.githubUrl && (
                        <a 
                          href={selectedItem.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          <i className="fab fa-github"></i> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
