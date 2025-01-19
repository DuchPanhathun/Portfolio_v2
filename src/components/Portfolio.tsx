import { useState, useEffect } from 'react';
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
      category: 'web',
      image: 'https://drive.google.com/uc?export=view&id=16rMNrum5EPPSfypDlyX8ZzC-ykCwHcu-',
      title: 'HR Management System',
      description: 'A responsive website design for INGO (Save the Children Cambodia)',
      fullDescription: 'A comprehensive web solution featuring responsive design, modern UI/UX principles, and seamless integration with client systems.',
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
    // ... other items
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

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem?.additionalImages?.length) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.additionalImages!.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem?.additionalImages?.length) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.additionalImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

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
                {['all', 'web', 'graphic', 'photography'].map((filter) => (
                  <li key={filter}>
                    <button
                      className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      <i className={`fas ${
                        filter === 'all' ? 'fa-th-large' :
                        filter === 'web' ? 'fa-laptop-code' :
                        filter === 'graphic' ? 'fa-palette' : 'fa-camera'
                      }`}></i>
                      {` ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
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

              {/* Image Collage */}
              <div className="image-collage">
                {/* Main Image */}
                <div className="main-image-container">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Additional Images */}
                {selectedItem.additionalImages?.map((imgSrc, index) => (
                  <div key={index} className="additional-image-container">
                    <Image
                      src={imgSrc}
                      alt={`${selectedItem.title} view ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>

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
