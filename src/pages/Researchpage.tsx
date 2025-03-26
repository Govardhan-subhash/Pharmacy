import React, { useState } from 'react';
import PageTransition from '../PageTransition';
import { Link } from 'react-router-dom';

const ResearchPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('research-policies');

  const researchSections = [
    {
      id: 'research-policies',
      title: 'Research Policies',
      content: `
        Welcome to the Research Department at Sri Vasavi Institute of Pharmaceutical Sciences.
        At Sri Vasavi Institute of Pharmaceutical Sciences, we take pride in our commitment to advancing pharmaceutical research that addresses the healthcare challenges of today and tomorrow. Our Research Department serves as the nucleus of innovation, fostering a dynamic environment where faculty, researchers, and students collaborate to push the boundaries of pharmaceutical science.

        Our Mission:
        Our mission is to conduct cutting-edge research that contributes to the development of novel drugs, therapies, and healthcare solutions. We are dedicated to excellence in scientific inquiry, interdisciplinary collaboration, and the translation of research findings into tangible benefits for society.

        Research Areas:
        Our research spans a diverse range of areas within pharmaceutical sciences, including:
        1. Pharmacology and Toxicology: We investigate the mechanisms of drug action, pharmacokinetics, pharmacodynamics, and the safety profiles of pharmaceutical compounds to ensure their efficacy and safety.
        2. Pharmaceutical Biotechnology: We leverage the principles of biotechnology to develop biopharmaceuticals, biosimilars, gene therapies, and other advanced healthcare products.
        3. Natural Product Research: We explore the therapeutic potential of natural products, including medicinal plants, marine organisms, and microbial metabolites, for the treatment of various diseases.
        4. Pharmaceutical Analysis and Quality Control: We develop analytical methods and quality control protocols to ensure the purity, potency, and stability of pharmaceutical products throughout their lifecycle.
      `,
    },
    {
      id: 'facilities-resources',
      title: 'Facilities and Resources',
      content: `
        Our state-of-the-art research facilities are equipped with advanced instrumentation and technology, enabling our researchers to conduct innovative experiments and analyses. 
        We provide access to high-performance liquid chromatography (HPLC), UV-VISIBLE spectrometry, cell culture facilities, and computational resources to support our research endeavors.
      `,
    },
    {
      id: 'student-involvement',
      title: 'Student Involvement',
      content: `
        We are committed to fostering the next generation of pharmaceutical scientists through research-oriented education and training programs. 
        Students have the opportunity to engage in hands-on research projects under the mentorship of experienced faculty members, gaining valuable skills and experiences that prepare them for careers in academia, industry, and healthcare.
      `,
    },
    {
      id: 'patents',
      title: 'Patents',
      content: `
        The Research Department at Sri Vasavi Institute of Pharmaceutical Sciences is proud to have a faculty renowned for their innovative contributions to pharmaceutical research, many of whom hold patents for their groundbreaking discoveries and inventions.

        Faculty Patents:
        Our esteemed faculty members have been instrumental in developing novel pharmaceutical technologies and therapies, resulting in several patented inventions. These patents cover a wide range of areas within pharmaceutical sciences, including drug delivery systems, therapeutic formulations, diagnostic methods, and biomedical devices.

        Here are a few of the patents held by our faculty members:

        1. Dr. V. Bhaskara Raju: A Process For Formulating Fast Dissolving Tablets Of Etodolac And Its Composition thereof, Republic Of South Africa Patents Act, 2023/0237.

        2. Dr. V. Bhaskara Raju: Infrared Spectrometer, Government of India, The Patent Office, Certificate of Registration of Design No.378946-001, dated on 08/02/2023.

        3. Dr. P. Narayana Raju: Sustained release matrix tablets containing Zidovudine, Indian patent publication No 387/CHE/2007-48/2008.

        4. Dr. P. Narayana Raju: Long acting formulations containing Stavudine, Indian patent publication No 2296/CHE/2009.
      `,
    },
    {
      id: 'publications',
      title: 'Publications',
      content:  `
      In accordance with the policies of Andhra University, two of our distinguished faculty members, Dr. V. Bhaskara Raju and Dr. P. Narayana Raju, serve as research guides, providing mentorship and guidance to graduate students pursuing research degrees.

      • Dr. V. Bhaskara Raju: With expertise in Pharmaceutical Analysis, Dr. V. Bhaskara Raju has served as a research guide under the policies of Andhra University, mentoring numerous graduate students through the research process, from project inception to publication. Under Dr. V. Bhaskara Raju’s mentorship, students have made significant contributions to the field and have gone on to pursue successful careers in academia, industry, and healthcare.

      • Dr. P. Narayana Raju: As a leading expert in Pharmaceutical Technology and Novel Drug Delivery Systems, Dr. P. Narayana Raju has been instrumental in shaping the research endeavors of graduate students within the department under the policies of Andhra University. Through personalized mentorship and hands-on training, Dr. P. Narayana Raju empowers students to explore new frontiers in pharmaceutical research and develop innovative solutions to pressing healthcare challenges.
    `,
    },
    {
      id: 'journal-club',
      title: 'Journal Club',
      content: `
        Our Research Department hosts regular Journal Club meetings, providing a platform for faculty, researchers, and students to critically analyze and discuss recent publications in the field of pharmaceutical sciences. These interactive sessions offer valuable opportunities to stay abreast of the latest advancements, exchange ideas, and cultivate critical thinking skills.

        Currently, we have registered with the "National Digital Library of India (NDLI CLUB)" from Kharagpur.

        Here is the list of Authority of our club Sri Vasavi Institute of Pharmaceutical Sciences:

        • Club Patron - BHASKARA RAJU VATCHAVAI
        • Club President - NARAYANA RAJU PADALA
        • Club Secretary - VIJAYALAKSHMI YERRA
        • Executive Member - DHABAL KUMAR SATAPATHY
        • Executive Member - SWAAPNIKA GANTA (Student)
      `,
    },
  ];

  const researchPages = [
    { path: '/research/publications', label: 'Publications' },
    { path: '/research/projects', label: 'Projects' },
    { path: '/research/collaborations', label: 'Collaborations' },
    { path: '/research/funding', label: 'Funding' },
    { path: '/research/patents', label: 'Patents' },
  ];

  const selectedSectionData = researchSections.find((section) => section.id === selectedSection);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
            <p className="text-lg md:text-xl">Explore the research initiatives and resources at our institution.</p>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
              alt="Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Research Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar Menu */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Research Areas</h2>
              <nav className="space-y-2">
                {researchSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                      selectedSection === section.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedSectionData?.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{selectedSectionData?.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Explore More Research Pages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {researchPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block bg-blue-600 text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ResearchPage;