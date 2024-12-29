import React from 'react';
import Navbar from '../../Components/Navigation/Navbar';

const About = () => {
   return (
      <div className="about-page">
         <Navbar />
         <main className="p-5 md:w-3/4 lg:w-4/5 mx-auto">
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Welcome to [Your News Website Name]</h2>
               <p className="text-gray-700">
                  At [Your News Website Name], we are committed to delivering accurate, timely, and unbiased news
                  that keeps you informed about the world around you. In an age where information moves at the
                  speed of light, we stand out by offering well-researched stories that cut through the noise.
               </p>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
               <ul className="list-disc pl-5 text-gray-700">
                  <li>To keep our readers informed with credible, factual news.</li>
                  <li>To provide a platform for diverse opinions and thought-provoking analysis.</li>
                  <li>To uphold journalistic integrity while covering stories that matter the most.</li>
               </ul>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">What We Cover</h2>
               <p className="text-gray-700">
                  We cover a wide range of topics to ensure there’s something for everyone:
               </p>
               <ul className="list-disc pl-5 text-gray-700">
                  <li><strong>Breaking News:</strong> Real-time updates on major events as they unfold.</li>
                  <li><strong>Politics:</strong> Comprehensive coverage of political developments worldwide.</li>
                  <li><strong>Business & Finance:</strong> Insights into the economy, markets, and business trends.</li>
                  <li><strong>Technology:</strong> The latest updates on innovation, gadgets, and the digital world.</li>
                  <li><strong>Lifestyle:</strong> Articles on health, culture, and everyday living.</li>
                  <li><strong>Entertainment:</strong> From the world of films, TV, and music to celebrity news.</li>
                  <li><strong>Sports:</strong> Updates, analysis, and highlights from the world of sports.</li>
               </ul>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Why Choose Us?</h2>
               <ul className="list-disc pl-5 text-gray-700">
                  <li><strong>Credibility:</strong> Our news is sourced from reliable channels and fact-checked by experienced journalists.</li>
                  <li><strong>Diversity:</strong> We embrace diverse perspectives to provide a balanced view on every story.</li>
                  <li><strong>Engagement:</strong> We value your opinions and encourage meaningful discussions in our community.</li>
               </ul>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Meet Our Team</h2>
               <p className="text-gray-700">
                  Behind every story, there’s a dedicated team of editors, writers, and journalists who work
                  tirelessly to bring you the best content. Our passion for storytelling and commitment to
                  accuracy drive us to keep improving every day.
               </p>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Join Our Community</h2>
               <p className="text-gray-700">
                  Be a part of our growing community of readers who seek truth and knowledge. Subscribe to
                  our newsletter and follow us on social media to stay updated with the latest news.
               </p>
            </section>
            <section>
               <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
               <p className="text-gray-700">
                  Have a story idea or feedback for us? Feel free to reach out at <a href="mailto:info@yourwebsite.com" className="text-blue-500">info@yourwebsite.com</a>.
               </p>
            </section>
         </main>
      </div>
   );
};

export default About;
