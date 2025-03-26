import React from 'react';

const Criteria1: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '1.1',
      description:
        'The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/AU Approval Students List-2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/AU Approval Students List-2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/AU Approval Students List-2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/AU Approval Students List-2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/AU Approval Students List-2019-20.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '2.1',
      description: 'List of Faculty during last five years',
      downloads: [
        { name: 'View', url: '/uploads/naac/2.1 List of Faculty during last five years.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '2.2',
      description: '',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/2.4.1 Faculty List For-2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/2.4.1 Faculty List For-2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/2.4.1 Faculty List For-2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/2.4.1 Faculty List For-2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/2.4.1 Faculty List For-2019-20.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '3.1',
      description: 'Exp Statement excluding Salaries<br>Financial Statement',
      downloads: [
        { name: 'Exp Statement excluding Salaries', url: '/uploads/naac/Exp Statement excluding Salaries.pdf' },
        { name: 'Financial Statement', url: '/uploads/naac/Financial Statement.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Criteria 1</h1>
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
          {tableData.map((row, index) => (
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
  );
};

export default Criteria1;