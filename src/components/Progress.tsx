import React from "react";
import "../styles/progress.css"

const SkillsSection: React.FC = () => {
  const skills = [
    // Frontend Skills
    { name: "React/Next.js", level: 70, color: "#61DAFB" },  // React color
    { name: "TypeScript", level: 70, color: "#3178C6" },     // TypeScript color
    { name: "Tailwind CSS", level: 80, color: "#38B2AC" },   // Tailwind color
    { name: "HTML5/CSS3", level: 95, color: "#E44D26" },     // HTML5 color
    
    // Backend & Database
    { name: "Python", level: 85, color: "#3776AB" },         // Python color
    { name: "Laravel", level: 70, color: "#FF2D20" },        // Laravel color
    { name: "Firebase", level: 85, color: "#FFCA28" },       // Firebase color
    { name: "MongoDB", level: 60, color: "#47A248" },        // MongoDB color
    { name: "MySQL", level: 60, color: "#4479A1" },          // MySQL color
    

    // Mobile
    { name: "Kotlin", level: 75, color: "#7F52FF" },         // Kotlin color
    
    // Design
    { name: "UI/UX Design", level: 50, color: "#FF7F50" },   // Coral for design
  ];

  // Group skills by category
  const frontendSkills = skills.slice(0, 4);
  const backendSkills = skills.slice(4, 9);
  const aiSkills = skills.slice(9, 12);

  return (
    <main className="progress-container">
      <div className="progress">
        <h2 className="skills-heading">Technical Skills</h2>
        
        <section id="skills" className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category">Frontend</h3>
            <article className="skills">
              {frontendSkills.map((skill, index) => (
                <div 
                  className="t-6" 
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p data-value={`${skill.level}%`}>{skill.name}</p>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </article>
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category">Backend & Database</h3>
            <article className="skills">
              {backendSkills.map((skill, index) => (
                <div 
                  className="t-6" 
                  key={index}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <p data-value={`${skill.level}%`}>{skill.name}</p>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </article>
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category">Mobile & Design</h3>
            <article className="skills">
              {aiSkills.map((skill, index) => (
                <div 
                  className="t-6" 
                  key={index}
                  style={{ animationDelay: `${(index + 9) * 0.1}s` }}
                >
                  <p data-value={`${skill.level}%`}>{skill.name}</p>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkillsSection;
  