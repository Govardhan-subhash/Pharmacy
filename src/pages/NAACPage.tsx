import React, { useState } from 'react';

const NAACPage: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const documents = [
    {
      id: 1,
      title: 'IIQA',
      content: 'IIQA Content',
      links: [
        { name: 'IIQA', url: '/pdfs/iiqa.pdf' },
        { name: 'Undertaking Form', url: '/pdfs/undertaking-form.pdf' },
        { name: 'Self Declaration', url: '/pdfs/self-declaration.pdf' },
      ],
    },
    {
      id: 2,
      title: 'RTI',
      content: 'RTI Content',
      links: [],
    },
    {
      id: 3,
      title: 'SSR',
      content: 'SSR Content',
      links: [
        { name: 'Self Study Report', url: '/pdfs/ssr.pdf' },
      ],
    },
    {
      id: 4,
      title: 'Executive Summary',
      content: 'Executive Summary Content',
      links: [
        { name: 'Executive Summary Report', url: '/pdfs/executive-summary.pdf' },
      ],
    },
    {
      id: 5,
      title: 'Profile',
      content: 'Profile Content',
      links: [
        { name: 'Institutional Profile', url: '/pdfs/profile.pdf' },
      ],
    },
    {
      id: 6,
      title: 'Extended Profile',
      content: 'Extended Profile Content',
      table: [
        {
          sno: 1,
          metricNo: '1.1',
          description: 'AU Approvals Students List',
          downloads: [
            { name: '2023-24', url: '/pdfs/au-approvals-2023-24.pdf' },
            { name: '2022-23', url: '/pdfs/au-approvals-2022-23.pdf' },
            { name: '2021-22', url: '/pdfs/au-approvals-2021-22.pdf' },
          ],
        },
        {
          sno: 2,
          metricNo: '2.1',
          description: 'List of Faculty during last five years',
          downloads: [{ name: 'View', url: '/pdfs/faculty-list.pdf' }],
        },
        {
          sno: 3,
          metricNo: '3.1',
          description: 'Exp Statement excluding Salaries',
          downloads: [
            { name: 'View', url: '/pdfs/exp-statement.pdf' },
            { name: 'Financial Statement', url: '/pdfs/financial-statement.pdf' },
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Quality Indicator',
      content: 'Quality Indicator Metrics',
      table: [
        { name: 'CRITERIA-I', url: '/criteria/criteria-i' },
        { name: 'CRITERIA-II', url: '/criteria/criteria-ii' },
        { name: 'CRITERIA-III', url: '/criteria/criteria-iii' },
        { name: 'CRITERIA-IV', url: '/criteria/criteria-iv' },
        { name: 'CRITERIA-V', url: '/criteria/criteria-v' },
        { name: 'CRITERIA-VI', url: '/criteria/criteria-vi' },
        { name: 'CRITERIA-VII', url: '/criteria/criteria-vii' },
      ],
    },
    {
      id: 8,
      title: 'DVV Clarification Metrics',
      content: 'DVV Clarification Metrics Content',
      links: [],
    },
    {
      id: 9,
      title: 'Extended Profile Deviations',
      content: 'Extended Profile Deviations Content',
      links: [],
    },
    {
      id: 10,
      title: 'Metric Level Deviations',
      content: 'Metric Level Deviations Content',
      links: [],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3')`,
        }}
      >
        <h1 className="text-5xl font-bold text-white">NAAC</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Documents</h2>
            <ul className="space-y-2">
              {documents.map((doc) => (
                <li key={doc.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      selectedDocument === doc.content
                        ? 'bg-blue-100 text-blue-600 font-semibold'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setSelectedDocument(doc.content)}
                  >
                    {doc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className="col-span-3 bg-white p-6 rounded shadow">
            {selectedDocument === 'Extended Profile Content' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Extended Profile</h2>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">S.No</th>
                      <th className="border border-gray-300 px-4 py-2">Metric No.</th>
                      <th className="border border-gray-300 px-4 py-2">Metric Description</th>
                      <th className="border border-gray-300 px-4 py-2">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents
                      .find((doc) => doc.title === 'Extended Profile')
                      ?.table.map((row, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 text-center">{row.sno}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{row.metricNo}</td>
                          <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.downloads.map((download, i) => (
                              <a
                                key={i}
                                href={download.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline mr-2"
                              >
                                {download.name}
                              </a>
                            ))}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : selectedDocument === 'Quality Indicator Metrics' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality Indicator Metrics</h2>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-i"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-I
                        </a>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-iv"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-IV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-ii"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-II
                        </a>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-v"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-V
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-iii"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-III
                        </a>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <a
                          href="/criteria/criteria-vi"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-VI
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        <a
                          href="/criteria/criteria-vii"
                          className="text-yellow-600 hover:underline"
                        >
                          CRITERIA-VII
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : selectedDocument ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {documents.find((doc) => doc.content === selectedDocument)?.title}
                </h2>
                <p className="text-gray-600 mb-4">{selectedDocument}</p>
                {/* Links for Selected Document */}
                {documents
                  .find((doc) => doc.content === selectedDocument)
                  ?.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:underline mb-2"
                    >
                      {link.name}
                    </a>
                  ))}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to NAAC</h2>
                <p className="text-gray-600">
                  Select a document from the left to view its details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAACPage;