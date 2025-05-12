import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>('light-mode');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Web Development Projects',
      image: 'https://drive.google.com/uc?export=view&id=16rMNrum5EPPSfypDlyX8ZzC-ykCwHcu-',
      title: 'HR Management System',
      description: 'A responsive website design for INGO (Save the Children Cambodia)',
      fullDescription: 'A comprehensive web solution featuring responsive design, modern UI/UX principles, and seamless integration with client systems.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'MongoDB'],
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
      description: 'A responsive website design for INGO (Save the Children Cambodia)',
      fullDescription: 'A comprehensive web solution featuring responsive design, modern UI/UX principles, and seamless integration with client systems.',
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
      title: 'OCR and Summary system',
      description: 'OCR and Summary system',
      fullDescription: 'A comprehensive web solution featuring responsive design, modern UI/UX principles, and seamless integration with client systems.',
      technologies: ['C++', 'Python'],
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
      description: 'Ecommerce App',
      fullDescription: 'A comprehensive web solution featuring responsive design, modern UI/UX principles, and seamless integration with client systems.',
      technologies: ['Kotlin', 'Firebase'],
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
    }
  ];

  // Filter gallery items
  const filteredItems = galleryItems.filter(item => {
    return (
      (activeFilter === 'all' || item.category === activeFilter) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                {['all', 'AI-Powered Web Applications', 'Web Development Projects', 'App Development', 'Chatbot Development', 'Data Interpretation & Visualization'].map((filter) => (
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
            setSelectedItem(null);
            setCurrentImageIndex(0);
          }}>
            <div className={`lightbox-content ${theme}`} onClick={(e) => e.stopPropagation()}>
              <span 
                className="lightbox-close" 
                onClick={() => {
                  setSelectedItem(null);
                  setCurrentImageIndex(0);
                }}
              >
                <i className="fas fa-times"></i>
              </span>

              {/* Main Image Slider */}
              <div className="main-image-slider">
                <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <div className="featured-image-container">
                  {selectedItem.additionalImages && selectedItem.additionalImages.length > 0 ? (
                    <Image
                      src={selectedItem.additionalImages[currentImageIndex]}
                      alt={`${selectedItem.title} view ${currentImageIndex + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  ) : (
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  )}
                  
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedItem.additionalImages?.length || 1}
                  </div>
                </div>

                <button className="nav-btn next-btn" onClick={handleNextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
