import React from 'react';

const PCIPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PCI Approvals</h1>
            <p className="text-lg md:text-xl">
              Explore the approval letters and documents related to PCI and AU for the academic year 2023-2024.
            </p>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1581091870621-3c4e1d76d6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="PCI Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Floating Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-4">PCI Approvals</h1>
          <ul className="space-y-4">
            <li>
              <a
                href="/pdfs/AU_Approval_Letter_2023-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AU Approval Letter 2023-2024
              </a>
            </li>
            <li>
              <a
                href="/pdfs/PCI_Approval_Letter_2023-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                PCI Approval Letter 2023-2024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PCIPage;