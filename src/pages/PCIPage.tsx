import React from 'react';

const PCIPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Floating Container */}
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
  );
};

export default PCIPage;