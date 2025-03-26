import React from 'react';

const Criteria3: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '3.1.1',
      qnQl: 'QnM',
      description:
        'Grants received from Government and non-governmental agencies for research projects, endowments, Chairs in the institution during the last five years (INR in Lakhs)',
      downloads: [{ name: 'Grants', url: '/uploads/naac/criteria3/3.1.1 Grants.pdf' }],
    },
    {
      sno: 2,
      metricNo: '3.2.1',
      qnQl: 'QlM',
      description:
        'Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation centre facilities in the HEI to be considered)',
      downloads: [{ name: 'Additional Information', url: '/uploads/naac/criteria3/3.2.1 DISCREPTION.pdf' }],
    },
    {
      sno: 3,
      metricNo: '3.2.2',
      qnQl: 'QnM',
      description:
        'Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the last five years',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/criteria3/Seminars and Workshops 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria3/Seminars and Workshops 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria3/Seminars and Workshops 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria3/Seminars and Workshops 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria3/Seminars and Workshops 2019-20.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '3.3.1',
      qnQl: 'QnM',
      description:
        'Number of research papers per teachers in the Journals notified on UGC website during the last five years',
      downloads: [
        { name: 'Link to Journal', url: '/uploads/naac/criteria3/3.3.1(2).pdf' },
        { name: 'Link to Published Papers', url: '/uploads/naac/criteria3/3.3.1(3).pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '3.3.2',
      qnQl: 'QnM',
      description:
        'Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years',
      downloads: [
        { name: 'List of Chapters/Books', url: '/uploads/naac/criteria3/3.3.2 (1).pdf' },
        { name: 'Copy of Cover Page', url: '/uploads/naac/criteria3/3.3.2(3) Cover Page.pdf' },
      ],
    },
  ];

  // const menuItems = [
  //   { name: 'NAAC', url: '#' },
  //   { name: 'IIQA', url: '/iiqa' },
  //   { name: 'RTI', url: '/naac_certificates' },
  //   { name: 'SSR', url: '/ssr' },
  //   { name: 'Executive Summary', url: '/executive-summary' },
  //   { name: 'Profile', url: '/profile' },
  //   { name: 'Extended Profile', url: '/extend' },
  //   { name: 'Quality Indicator', url: '/qi' },
  //   { name: 'DVV Clarification Metrics', url: '/dvv' },
  //   { name: 'Extended Profile Deviations', url: '/extended-profile-deviations' },
  //   { name: 'Metric Level Deviations', url: '/metric-level-deviations' },
  // ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/*  */}

        {/* Main Content */}
        <div className="col-span-3 bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-center mb-8">Criteria 3</h1>
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

export default Criteria3;