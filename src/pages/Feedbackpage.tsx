import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<string>(''); // State to track selected feedback
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    academicYear: '',
  }); // State to track form data
  const [step, setStep] = useState<number>(1); // State to track the current step (1: first form, 2: second form)
  const [questionResponses, setQuestionResponses] = useState<{ [key: string]: string }>({}); // State to track responses to questions

  const feedbackData: { [key: string]: string } = {
    'Student Feedback on Curriculum': 'This section contains student feedback on the curriculum.',
    'Student Feedback on Infrastructure': 'This section contains student feedback on the infrastructure.',
    'Faculty Feedback on Curriculum': 'This section contains faculty feedback on the curriculum.',
    'Faculty Feedback on Infrastructure': 'This section contains faculty feedback on the infrastructure.',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuestionResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFirstFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to the second form
  };

  const handleSecondFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('First Form Data:', formData);
    console.log('Question Responses:', questionResponses);
    alert('Feedback submitted successfully!');
    // Reset the forms
    setFormData({
      name: '',
      designation: '',
      academicYear: '',
    });
    setQuestionResponses({});
    setStep(1); // Reset to the first form
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3')`,
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Feedback</h1>
          <p className="mt-4 text-lg">
            Explore feedback from students and faculty on various aspects of the institution.
          </p>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Left Side Container */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold mb-4">Feedback Categories</h2>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Student Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Student Feedback on Curriculum');
              setStep(1); // Reset to the first form
            }}
          >
            Student Feedback on Curriculum
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Student Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Student Feedback on Infrastructure');
              setStep(1); // Reset to the first form
            }}
          >
            Student Feedback on Infrastructure
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Faculty Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Faculty Feedback on Curriculum');
              setStep(1); // Reset to the first form
            }}
          >
            Faculty Feedback on Curriculum
          </div>
          <div
            className={`p-2 mb-2 cursor-pointer rounded ${
              selectedFeedback === 'Faculty Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => {
              setSelectedFeedback('Faculty Feedback on Infrastructure');
              setStep(1); // Reset to the first form
            }}
          >
            Faculty Feedback on Infrastructure
          </div>
        </div>

        {/* Right Side Container */}
        <div className="w-full md:w-3/4 bg-white p-6 shadow-md rounded-md ml-0 md:ml-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold mb-4">Feedback Details</h2>
          {selectedFeedback === 'Student Feedback on Curriculum' && step === 1 ? (
            // First Form for Student Feedback on Curriculum
            <form onSubmit={handleFirstFormSubmit} className="space-y-4">
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber || ''}
                onChange={handleInputChange}
                placeholder="Roll Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <select
                name="year"
                value={formData.year || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Year</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
              <select
                name="semester"
                value={formData.semester || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Semester</option>
                <option value="I">I</option>
                <option value="II">II</option>
              </select>
              <select
                name="academicYear"
                value={formData.academicYear || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Academic Year</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
                <option value="2020-21">2020-21</option>
                <option value="2019-20">2019-20</option>
                <option value="2018-19">2018-19</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
              >
                Continue
              </button>
            </form>
          ) : step === 2 && selectedFeedback === 'Student Feedback on Curriculum' ? (
            // Second Form for Student Feedback on Curriculum
            <form onSubmit={handleSecondFormSubmit} className="space-y-4">
              {[
                'Are you aware of objectives and outcome of each course?',
                'Do the theoretical knowledge and gained practical skill set have a sufficient correlation?',
                'Were cutting-edge instruction techniques (PowerPoint/Video Presentation) used?',
                'Is the importance of professional ethics and human values taught?',
                'Whether there is space for pursuing the learned practical knowledge?',
                'Evaluate the syllabus in terms of providing ideas for future objectives.',
                'Score the educational program according to how likely it is to be finished in the time allotted by the institution.',
                'Rate the accessibility of course material in the library.',
                'Rate the syllabus ability to help pupils for competitive exam placements.',
                'Rate the evaluation methodology and transparency of each course.',
              ].map((question, index) => (
                <div key={index}>
                  <p className="text-gray-700">{question}</p>
                  <select
                    name={`question${index + 1}`}
                    value={questionResponses[`question${index + 1}`] || ''}
                    onChange={handleQuestionChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-Poor">1-Poor</option>
                    <option value="2-Average">2-Average</option>
                    <option value="3-Above">3-Above</option>
                    <option value="4-Good">4-Good</option>
                    <option value="5-Excellent">5-Excellent</option>
                  </select>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          ) : step === 1 && selectedFeedback === 'Student Feedback on Infrastructure' ? (
            // First Form for Student Feedback on Infrastructure
            <form onSubmit={handleFirstFormSubmit} className="space-y-4">
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber || ''}
                onChange={handleInputChange}
                placeholder="Roll Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <select
                name="year"
                value={formData.year || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Year</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
              <select
                name="semester"
                value={formData.semester || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Semester</option>
                <option value="I">I</option>
                <option value="II">II</option>
              </select>
              <select
                name="academicYear"
                value={formData.academicYear || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Academic Year</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
                <option value="2020-21">2020-21</option>
                <option value="2019-20">2019-20</option>
                <option value="2018-19">2018-19</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
              >
                Continue
              </button>
            </form>
          ) : step === 2 && selectedFeedback === 'Student Feedback on Infrastructure' ? (
            // Second Form for Student Feedback on Infrastructure
            <form onSubmit={handleSecondFormSubmit} className="space-y-4">
              {[
                'How would you assess the cleanliness and maintenance of the campus?',
                'Are the classrooms well-equipped with necessary facilities?',
                'How would you rate the availability of drinking water facilities?',
                'Are the washrooms clean and hygienic?',
                'How would you rate the availability of sports facilities?',
                'How would you rate the availability of library resources?',
                'Are the laboratories well-equipped and maintained?',
                'How would you rate the availability of parking facilities?',
                'How would you rate the availability of internet facilities on campus?',
                'How would you rate the overall infrastructure of the institution?',
              ].map((question, index) => (
                <div key={index}>
                  <p className="text-gray-700">{question}</p>
                  <select
                    name={`question${index + 1}`}
                    value={questionResponses[`question${index + 1}`] || ''}
                    onChange={handleQuestionChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-Poor">1-Poor</option>
                    <option value="2-Average">2-Average</option>
                    <option value="3-Above">3-Above</option>
                    <option value="4-Good">4-Good</option>
                    <option value="5-Excellent">5-Excellent</option>
                  </select>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          ) : selectedFeedback === 'Faculty Feedback on Curriculum' && step === 1 ? (
            // First Form for Faculty Feedback on Curriculum
            <form onSubmit={handleFirstFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <select
                name="designation"
                value={formData.designation || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Designation</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Sr. Assistant Professor">Sr. Assistant Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
              </select>
              <select
                name="academicYear"
                value={formData.academicYear || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Academic Year</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
                <option value="2020-21">2020-21</option>
                <option value="2019-20">2019-20</option>
                <option value="2018-19">2018-19</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
              >
                Continue
              </button>
            </form>
          ) : step === 2 && selectedFeedback === 'Faculty Feedback on Curriculum' ? (
            // Second Form for Faculty Feedback on Curriculum
            <form onSubmit={handleSecondFormSubmit} className="space-y-4">
              {[
                'Do the syllabus provide students with extensive knowledge?',
                'How well does the syllabus align with the newest subjects?',
                'Does the educational program improve students critical thinking, problem-solving, analytical and inventive abilities?',
                "The curriculum improves student's employability?",
                'Does the length of hours in the course of study justify its distribution?',
                "Rate the library's accessibility of the syllabus material.",
                "Assess the syllabus's ability to prepare students for competitive exam performances.",
                'Score the curriculum according to how likely it is to be finished in the time allotted by the institution.',
                'How effectively would the syllabus material assist learners in expanding their knowledge?',
                "Evaluate the curriculum's theoretical application to practice.",
              ].map((question, index) => (
                <div key={index}>
                  <p className="text-gray-700">{question}</p>
                  <select
                    name={`question${index + 1}`}
                    value={questionResponses[`question${index + 1}`] || ''}
                    onChange={handleQuestionChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-Poor">1-Poor</option>
                    <option value="2-Average">2-Average</option>
                    <option value="3-Above">3-Above</option>
                    <option value="4-Good">4-Good</option>
                    <option value="5-Excellent">5-Excellent</option>
                  </select>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          ) : step === 1 && selectedFeedback === 'Faculty Feedback on Infrastructure' ? (
            // First Form for Faculty Feedback on Infrastructure
            <form onSubmit={handleFirstFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              />
              <select
                name="designation"
                value={formData.designation || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Designation</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Sr. Assistant Professor">Sr. Assistant Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
              </select>
              <select
                name="academicYear"
                value={formData.academicYear || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required
              >
                <option value="">Select Academic Year</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
                <option value="2020-21">2020-21</option>
                <option value="2019-20">2019-20</option>
                <option value="2018-19">2018-19</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
              >
                Continue
              </button>
            </form>
          ) : step === 2 && selectedFeedback === 'Faculty Feedback on Infrastructure' ? (
            // Second Form for Faculty Feedback on Infrastructure
            <form onSubmit={handleSecondFormSubmit} className="space-y-4">
              {[
                'In institution includes a well-equipped classroom with a projector and interactive panel facility?',
                'Does the college have well equipped labs?',
                'To what extent ICT is deployed in classes?',
                'Does college encourages the establishment and development of infrastructure to foster an excellent teaching and learning environment?',
                'How would you rate accessibility to online teaching and learning resources?',
                'Does college provides office spaces, common areas, and separate rest rooms?',
                'Does college provides advanced library facility?',
                'Does college provide adequate sports facilities?',
                'Does college provide adequate transport facility?',
                'Does college provides good and hygienic hostel facility?',
              ].map((question, index) => (
                <div key={index}>
                  <p className="text-gray-700">{question}</p>
                  <select
                    name={`question${index + 1}`}
                    value={questionResponses[`question${index + 1}`] || ''}
                    onChange={handleQuestionChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-Poor">1-Poor</option>
                    <option value="2-Average">2-Average</option>
                    <option value="3-Above">3-Above</option>
                    <option value="4-Good">4-Good</option>
                    <option value="5-Excellent">5-Excellent</option>
                  </select>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className="text-gray-500">Select a feedback category to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;