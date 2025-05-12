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
                                <h3>Coding and Programming by Pyhon, Big Data</h3>
                                <p className="date-interval">
                                    <time dateTime="2024-02">28th September 2022</time> &ndash; <time dateTime="2024-12">20th December 2024</time>
                                </p>
                                <p className="location">Finished Big Data course conducted at Information Technology Center, Sponsored by Samsung via Samsung Innovation Campus</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Management and Protection of Nature Reserves for BRI countries</h3>
                                <p className="date-interval">
                                    <time dateTime="2024-08">07th August 2024</time> &ndash; <time dateTime="2024-08">20th August 2024</time>
                                </p>
                                <p className="location">Attend an international seminar in Hangzhou, China on 'Management and Protection of Nature Reserves' for BRI countries</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Startup Camp</h3>
                                <p className="date-interval">
                                    <time dateTime="2023-06">19th June 2023</time> &ndash; <time dateTime="2010-06">22nd June 2023</time>
                                </p>
                                <p className="location">Has Completed a training course and has achieved the required level of competence in NICC 9th Startup Camp (ICT)</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Personal Development Financial Literacy Skill</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-07">28th July 2022</time> &ndash; <time dateTime="2023">30th July 2022</time>
                                </p>
                                <p className="location">Completed training on self-development, financial literacy, and critical thinking skills hosting by Prince Foundation.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline experience">
                        <h2 className="timeline-title" id="experience">Education</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Computer Skill</h3>
                                <p className="date-interval">
                                    <time dateTime="2022-07">08th July 2019</time> &ndash; <time dateTime="2023">13rd June 2022</time>
                                </p>
                                <p className="location">Completed training course on basic Microsoft Office (Microsoft Word, Microsoft Excel, Microsoft PowerPoint"</p>
                            </li>
                            <li className="timeline-item">
                                <h3>English Program</h3>
                                <p className="date-interval">
                                    <time dateTime="2019-10">01st December 2020</time>
                                </p>
                                <p className="location">Finsihed lv14 of General Englsih Program at Standford American School</p>
                            </li>
                            <li className="timeline-item">
                                <h3>English Program</h3>
                                <p className="date-interval">
                                    <time dateTime="2018-09">13rd June 2019</time>
                                </p>
                                <p className="location">Finished lv12 of English Program at Arizon School</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline achievements">
                        <h2 className="timeline-title" id="achievements">Achievements</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Nava-Thon</h3>
                                <p className="date-interval">
                                    <time dateTime="2022">22nd December 2023</time>
                                </p>
                                <p>Won gold medal in that hackathon for creating a Telegram chatbot promoting positive parenting and child protection to combat violence in Cambodia.</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Mathematic Competition</h3>
                                <p className="date-interval">
                                    <time dateTime="2020">05th April 2022</time>
                                </p>
                                <p>Won siliver medal out of 2000s participants in Angkor Mathematics Cambodia competition.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline skills">
                        <h2 className="timeline-title" id="achievements">Skills</h2>
                        <SkillsSection/>
                    </section>
                </div>

                <button id="print-page" className="print-icon">Print the page</button>
            </div>
        </div>
	);
};

export default Resume;