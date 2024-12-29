import React from 'react';
import Navbar from '../../Components/Navigation/Navbar';

const Career = () => {
   return (
      <div className="careers-page">
         <Navbar />
         <main className="p-5 md:w-3/4 lg:w-4/5 mx-auto">
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Join Our Team</h2>
               <p className="text-gray-700">
                  At [Your News Website Name], we’re always looking for talented, passionate, and creative individuals to join our dynamic team. If you’re someone who thrives in a fast-paced environment and wants to make an impact in the media industry, we’d love to hear from you!
               </p>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Why Work With Us?</h2>
               <ul className="list-disc pl-5 text-gray-700">
                  <li><strong>Innovative Environment:</strong> Work with cutting-edge tools and technologies in digital journalism.</li>
                  <li><strong>Growth Opportunities:</strong> We support personal and professional development to help you thrive.</li>
                  <li><strong>Inclusive Culture:</strong> Be a part of a team that values diversity, creativity, and collaboration.</li>
                  <li><strong>Meaningful Impact:</strong> Help shape the way people consume and engage with news.</li>
               </ul>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">Current Openings</h2>
               <p className="text-gray-700">
                  We are currently hiring for the following positions:
               </p>
               <ul className="list-disc pl-5 text-gray-700">
                  <li><strong>Journalist/Reporter:</strong> Cover breaking news and in-depth stories.</li>
                  <li><strong>Content Editor:</strong> Edit and optimize articles for accuracy and readability.</li>
                  <li><strong>Social Media Manager:</strong> Drive engagement and manage our online presence.</li>
                  <li><strong>Graphic Designer:</strong> Create visually appealing content for our website and social media platforms.</li>
                  <li><strong>Web Developer:</strong> Improve and maintain our digital platform for seamless user experience.</li>
               </ul>
               <p className="text-gray-700 mt-3">
                  Don’t see a position that fits your profile? Send us your resume anyway! We’re always on the lookout for great talent.
               </p>
            </section>
            <section className="mb-5">
               <h2 className="text-xl font-semibold mb-3">How to Apply</h2>
               <p className="text-gray-700">
                  Send your resume and a cover letter detailing your interest and experience to
                  <a href="mailto:careers@yourwebsite.com" className="text-blue-500"> careers@yourwebsite.com</a>.
                  Make sure to include the position you’re applying for in the subject line.
               </p>
            </section>
            <section>
               <h2 className="text-xl font-semibold mb-3">Internship Opportunities</h2>
               <p className="text-gray-700">
                  We also offer internships for students and recent graduates looking to kickstart their career in the media industry. Gain hands-on experience and learn from the best in the field.
               </p>
               <p className="text-gray-700 mt-3">
                  Interested? Reach out to us at <a href="mailto:internships@yourwebsite.com" className="text-blue-500">internships@yourwebsite.com</a>.
               </p>
            </section>
         </main>
      </div>
   );
};

export default Career;
