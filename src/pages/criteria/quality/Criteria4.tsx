import React from 'react';

const Criteria4: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '4.1.1',
      qnQl: 'QlM',
      description:
        'The Institution has adequate infrastructure and other facilities for teaching learning, viz., classrooms, laboratories, computing equipment, etc. ICT-enabled facilities such as smart class, LMS, etc. Facilities for cultural and sports activities, yoga centre, games (indoor and outdoor), gymnasium, auditorium, etc.',
      downloads: [
        { name: 'Physical Facilities-Classrooms & Labs', url: '/uploads/naac/criteria4/4.1Physical Facilities-Classroom & Labs.pdf' },
        { name: 'Physical Facilities-Gym, Yoga and Culturals', url: '/uploads/naac/criteria4/Physical Faciliies-Yoga,Gym & Culturals.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '4.1.2',
      qnQl: 'QnM',
      description:
        'Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years',
      downloads: [
        { name: '2022-23', url: '/uploads/naac/criteria4/2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria4/2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria4/2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria4/2019-20.pdf' },
        { name: '2018-19', url: '/uploads/naac/criteria4/2018-19.pdf' },
        { name: 'Budget Proposals (2019-24)', url: '/uploads/naac/criteria4/Budget Proposals(2019-24).pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '4.2.1',
      qnQl: 'QlM',
      description:
        'Library is automated with digital facilities using Integrated Library Management System (ILMS), adequate subscriptions to e-resources and journals are made. The library is optimally used by the faculty and students.',
      downloads: [
        { name: 'Library Bills-2023-24', url: '/uploads/naac/criteria4/Library Bills-2023-24.pdf' },
        { name: 'Library Bills-2022-23', url: '/uploads/naac/criteria4/Library Bills-2022-23.pdf' },
        { name: 'Library Bills-2021-22', url: '/uploads/naac/criteria4/Library Bills-2021-22.pdf' },
        { name: 'Library Bills-2020-21', url: '/uploads/naac/criteria4/Library Bills-2020-21.pdf' },
        { name: 'Library Bills-2019-20', url: '/uploads/naac/criteria4/Library Bills-2019-20.pdf' },
        { name: 'e-Resources', url: '/uploads/naac/criteria4/E-Resources.pdf' },
        { name: 'Library Transactions (2019-2024)', url: '/uploads/naac/criteria4/Library Trasansactions (2019-2024).pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '4.3.1',
      qnQl: 'QlM',
      description:
        'Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection.',
      downloads: [
        { name: 'CCTV Bills-2023-24', url: '/uploads/naac/criteria4/CCTV bills-2023-24.pdf' },
        { name: 'Internet Access & WiFi Bills', url: '/uploads/naac/criteria4/Internet access & WIFI-BILLS.pdf' },
        { name: 'IT Infrastructure Details', url: '/uploads/naac/criteria4/4.3.1-IT INFRASTRUCTURE DETAILS.pdf' },
        { name: 'Audit Reports (Internet Bills)', url: '/uploads/naac/criteria4/Audit Reports (Internet Bills).pdf' },
        { name: 'Proposals', url: '/uploads/naac/criteria4/Proposals.pdf' },
      ],
    },
  ];


  return (
    <div className="container mx-auto px-4 py-16">
      

        {/* Main Content */}
        <div className="col-span-3 bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-center mb-8">Criteria 4</h1>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">S.No</th>
                <th className="border border-gray-300 px-4 py-2">Metric No.</th>
                <th className="border border-gray-300 px-4 py-2">Qn/Ql</th>
                <th className="border border-gray-300 px-4 py-2">Metric Description</th>
                <th className="border border-gray-300 px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row.sno}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row.metricNo}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row.qnQl}</td>
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
      </div>
  );
};

export default Criteria4;