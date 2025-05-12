'use client';
import { useEffect } from 'react';
import "../styles/resume.scss"
import SkillsSection from './Progress';

const Resume = () => {
	useEffect(() => {
		const handlePrintClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.matches('#print-page')) return;
			
			event.preventDefault();
			if (window.console) console.log(target);
			window.print();
		};

		document.addEventListener('click', handlePrintClick, false);
		
		// Cleanup listener on component unmount
		return () => {
			document.removeEventListener('click', handlePrintClick, false);
		};
	}, []);

	return (
		<div className="resume-container">
            <div className="resume">
                <nav className="jump-to">
                    <ul>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </nav>

                <div className="timelines">
                    <section className="timeline education">
                        <h2 className="timeline-title" id="education">Education</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Coding and Programming by Python, Big Data</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-09-28">28th September 2022</time> &ndash; <time dateTime="2022-12-20">20th December 2022</time>
                                </p>
                                <p className="location">Finished Big Data course conducted at Information Technology Center, Sponsored by Samsung via Samsung Innovation Campus</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Management and Protection of Nature Reserves for BRI countries</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-08-07">07th August 2022</time> &ndash; <time dateTime="2022-08-20">20th August 2022</time>
                                </p>
                                <p className="location">Attend an international seminar in Hangzhou, China on 'Management and Protection of Nature Reserves' for BRI countries</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Startup Camp</h3>
                                <p className="date-interval">
                                    <time dateTime="2023-06-19">19th June 2023</time> &ndash; <time dateTime="2023-06-22">22nd June 2023</time>
                                </p>
                                <p className="location">Has Completed a training course and has achieved the required level of competence in NICC 9th Startup Camp (ICT)</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline experience">
                        <h2 className="timeline-title" id="experience">Work Experience</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Freelance Data Interpreter</h3>
                                <p className="date-interval">
                                    <time dateTime="2025-03-28">28/03/2025</time> &ndash; <time dateTime="2025-04-28">28/04/2025</time>
                                </p>
                                <p className="location">CWEA Project</p>
                                <p className="description">
                                    Worked as freelancer data interpretation on CWEA project, analyzing complex datasets and creating visualizations to communicate findings effectively.
                                </p>
                            </li>
                            <li className="timeline-item">
                                <h3>IT Intern</h3>
                                <p className="date-interval">
                                    <time dateTime="2024-02-01">01/02/2024</time> &ndash; <time dateTime="2025-03-01">01/03/2025</time>
                                </p>
                                <p className="location">Save the Children Cambodia</p>
                                <p className="description">
                                    Worked as IT Intern at Save the Children Cambodia, providing technical support, maintaining digital systems, and contributing to technology-based child welfare initiatives.
                                </p>
                            </li>
                            <li className="timeline-item">
                                <h3>Data Collector</h3>
                                <p className="date-interval">
                                    <time dateTime="2023-09-12">12/09/2023</time> &ndash; <time dateTime="2023-10-02">02/10/2023</time>
                                </p>
                                <p className="location">CONFLUENCES ASIE CO., LTD</p>
                                <p className="description">
                                    Worked as freelancer for CONFLUENCES ASIE CO., LTD as data collector, gathering and organizing market research information to support business intelligence initiatives.
                                </p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline certificates">
                        <h2 className="timeline-title" id="certificates">Certificates</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Computer Skills</h3>
                                <p className="date-interval">
                                    <time dateTime="2019-07-08">08th July 2019</time> &ndash; <time dateTime="2022-06-13">13rd June 2022</time>
                                </p>
                                <p className="location">Completed training course on basic Microsoft Office (Microsoft Word, Microsoft Excel, Microsoft PowerPoint)</p>
                            </li>
                            <li className="timeline-item">
                                <h3>English Program</h3>
                                <p className="date-interval">
                                    <time dateTime="2020-12-01">01st December 2020</time>
                                </p>
                                <p className="location">Finished lv14 of General English Program at Stanford American School</p>
                            </li>
                            <li className="timeline-item">
                                <h3>English Program</h3>
                                <p className="date-interval">
                                    <time dateTime="2019-06-13">13rd June 2019</time>
                                </p>
                                <p className="location">Finished lv12 of English Program at Arizona School</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline achievements">
                        <h2 className="timeline-title" id="achievements">Achievements</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Nava-Thon</h3>
                                <p className="date-interval">
                                    <time dateTime="2023-12-22">22nd December 2023</time>
                                </p>
                                <p className="description">Won gold medal in that hackathon for creating a Telegram chatbot promoting positive parenting and child protection to combat violence in Cambodia.</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Mathematics Competition</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-04-05">05th April 2022</time>
                                </p>
                                <p className="description">Won silver medal out of 2000+ participants in Angkor Mathematics Cambodia competition.</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Personal Development Skills</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-07-28">28th July 2022</time> &ndash; <time dateTime="2022-07-30">30th July 2022</time>
                                </p>
                                <p className="description">Completed training on self-development, financial literacy, and critical thinking skills hosted by Prince Foundation.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline skills">
                        <h2 className="timeline-title" id="skills">Skills</h2>
                        <SkillsSection/>
                    </section>
                </div>

                <button id="print-page" className="print-icon">
                    <i className="fas fa-print"></i> Print Resume
                </button>
            </div>
        </div>
	);
};

export default Resume;