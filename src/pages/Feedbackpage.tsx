import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<string>(''); // State to track selected feedback

  const feedbackData: { [key: string]: string } = {
    'Student Feedback on Curriculum': 'This section contains student feedback on the curriculum.',
    'Student Feedback on Infrastructure': 'This section contains student feedback on the infrastructure.',
    'Faculty Feedback on Curriculum': 'This section contains faculty feedback on the curriculum.',
    'Faculty Feedback on Infrastructure': 'This section contains faculty feedback on the infrastructure.',
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Container */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Feedback Categories</h2>
        <div
          className={`p-2 mb-2 cursor-pointer rounded ${
            selectedFeedback === 'Student Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
          }`}
          onClick={() => setSelectedFeedback('Student Feedback on Curriculum')}
        >
          Student Feedback on Curriculum
        </div>
        <div
          className={`p-2 mb-2 cursor-pointer rounded ${
            selectedFeedback === 'Student Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
          }`}
          onClick={() => setSelectedFeedback('Student Feedback on Infrastructure')}
        >
          Student Feedback on Infrastructure
        </div>
        <div
          className={`p-2 mb-2 cursor-pointer rounded ${
            selectedFeedback === 'Faculty Feedback on Curriculum' ? 'bg-blue-200' : 'bg-white'
          }`}
          onClick={() => setSelectedFeedback('Faculty Feedback on Curriculum')}
        >
          Faculty Feedback on Curriculum
        </div>
        <div
          className={`p-2 mb-2 cursor-pointer rounded ${
            selectedFeedback === 'Faculty Feedback on Infrastructure' ? 'bg-blue-200' : 'bg-white'
          }`}
          onClick={() => setSelectedFeedback('Faculty Feedback on Infrastructure')}
        >
          Faculty Feedback on Infrastructure
        </div>
      </div>

      {/* Right Side Container */}
      <div className="w-3/4 bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Feedback Details</h2>
        {selectedFeedback ? (
          <p>{feedbackData[selectedFeedback]}</p>
        ) : (
          <p className="text-gray-500">Select a feedback category to view details.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;