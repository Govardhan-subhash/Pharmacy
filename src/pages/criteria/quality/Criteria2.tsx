import React from 'react';

const Criteria2: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '2.1.1',
      qnQl: 'QnM',
      description: 'Enrollment percentage',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/criteria2/2.1.1. 2023-24 B.Pharm apsche.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria2/2.1.1. 2022-23 B.Pharm apsche.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria2/2.1.1. 2021-22 B.Pharm apsche.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria2/2.1.1. 2020-21 B.Pharm apsche.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria2/2.1.1. 2019-20 B.Pharm apsche.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '2.1.2',
      qnQl: 'QnM',
      description:
        'Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc.)',
      downloads: [
        { name: 'GO', url: '/uploads/naac/criteria2/2.pdf' },
        { name: '2023-24', url: '/uploads/naac/criteria2/Admission extract _2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria2/Admission extract _2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria2/Admission extract _2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria2/Admission extract _2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria2/Admission extract _2019-20.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '2.2.1',
      qnQl: 'QnM',
      description: 'Student- Full time teacher ratio (Data for the latest completed academic year)',
      downloads: [
        { name: 'View', url: '/uploads/naac/criteria2/2.2.1.documents.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '2.3.1',
      qnQl: 'QlM',
      description:
        'Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences using ICT tools',
      downloads: [
        { name: 'View', url: '/uploads/naac/criteria2/2.3.1 documents.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '2.4.1',
      qnQl: 'QnM',
      description: 'Percentage of full time teachers against sanctioned posts during the last five years',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/criteria2/2.4.1 Faculty List For-2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria2/2.4.1 Faculty List For-2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria2/2.4.1 Faculty List For-2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria2/2.4.1 Faculty List For-2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria2/2.4.1 Faculty List For-2019-20.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 2</h1>
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
  );
};

export default Criteria2;