'use client';
import { useEffect } from 'react';
import "../styles/resume.scss"

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
                                <h3>Master of Science in information systems with computing</h3>
                                <p className="date-interval">
                                    <time dateTime="2017-09">2017</time> &ndash; <time dateTime="2019-07">2019</time>
                                </p>
                                <p className="location">Dublin Business School, Dublin, Ireland</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Bachelor of electrical engineering</h3>
                                <p className="date-interval">
                                    <time dateTime="2011-09">2011</time> &ndash; <time dateTime="2017-07">2017</time>
                                </p>
                                <p className="location">North Maharashtra University, Jalgaon, India</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Boys town public school</h3>
                                <p className="date-interval">
                                    <time dateTime="2009-08">2009</time> &ndash; <time dateTime="2010-06">2010</time>
                                </p>
                                <p className="location">Dublin Business School, Dublin, Ireland</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline experience">
                        <h2 className="timeline-title" id="experience">Experience</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Sofware developer</h3>
                                <p className="date-interval">
                                    <time dateTime="2021-04">2021</time> &ndash; <time dateTime="2023">Present</time>
                                </p>
                                <p className="location">Kare, Newbridge, Ireland</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Junior developer</h3>
                                <p className="date-interval">
                                    <time dateTime="2019-10">2019</time> &ndash; <time dateTime="2021-03">2021</time>
                                </p>
                                <p className="location">Unipupil limited, Dublin, Ireland</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Junior developer</h3>
                                <p className="date-interval">
                                    <time dateTime="2018-09">2018</time> &ndash; <time dateTime="2019-06">2019</time>
                                </p>
                                <p className="location">Dublin Business School, Dublin, Ireland</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline achievements">
                        <h2 className="timeline-title" id="achievements">Achievements</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Best Developer Award</h3>
                                <p className="date-interval">
                                    <time dateTime="2022">2022</time>
                                </p>
                                <p className="location">Kare, Newbridge</p>
                                <p>Recognized for outstanding contributions to critical projects and innovative solutions.</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Project Excellence Award</h3>
                                <p className="date-interval">
                                    <time dateTime="2020">2020</time>
                                </p>
                                <p className="location">Unipupil Limited</p>
                                <p>Led successful implementation of key features resulting in 40% improvement in user engagement.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="timeline skills">
                        <h2 className="timeline-title" id="skills">Skills</h2>
                        <ul className="timeline-items">
                            <li className="timeline-item">
                                <h3>Programming Languages</h3>
                                <p>JavaScript, TypeScript, Python, Java</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Frontend Development</h3>
                                <p>React, Next.js, HTML5, CSS3/SASS, Redux</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Backend Development</h3>
                                <p>Node.js, Express, REST APIs, GraphQL</p>
                            </li>
                            <li className="timeline-item">
                                <h3>Database & Tools</h3>
                                <p>MongoDB, PostgreSQL, Git, Docker</p>
                            </li>
                        </ul>
                    </section>
                </div>

                <button id="print-page" className="print-icon">Print the page</button>
            </div>
        </div>
	);
};

export default Resume;