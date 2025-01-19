'use client';

const Contact = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            <div className="rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    Let's Connect
                </h2>
                <p className="text-gray-600 mb-8">I'd love to hear from you. Send me a message!</p>
                <div className="flex flex-col lg:flex-row gap-14">
                    <form className="space-y-6 lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:border-blue-400"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:border-blue-400"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:border-blue-400"
                                placeholder="Message subject"
                                required
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:border-blue-400 resize-none"
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                    </form>
                    <div className="lg:w-1/2">
                        <div className="relative w-full h-[405px] rounded-xl overflow-hidden group">
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10"></div>
                            
                            {/* Map container with hover effects */}
                            <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15911.395326163594!2d104.94885908032751!3d11.509545704340047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095746c383c141%3A0x5fc3a0dbff6ecd7b!2sPH%20Euro%20Park!5e0!3m2!1sen!2skh!4v1737279486205!5m2!1sen!2skh"
                                    width="100%"
                                    height="100%"
                                    className="border-0 shadow-2xl rounded-xl filter saturate-[0.85] contrast-[1.1] group-hover:saturate-100 group-hover:contrast-100 transition-all duration-300"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Optional: Location marker animation */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20 group-hover:translate-y-0 translate-y-12 transition-transform duration-300">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                                    <span className="text-sm font-medium text-gray-700">PH Euro Park</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <button
                        type="submit"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                    >
                        Send Message
                    </button>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                <p className="mt-1 text-gray-600 hover:text-blue-600 transition-colors">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                <p className="mt-1 text-gray-600 hover:text-blue-600 transition-colors">contact@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                                <p className="mt-1 text-gray-600 hover:text-blue-600 transition-colors">Dublin, Ireland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;