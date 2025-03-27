import React from 'react';

const Criteria5: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '5.1.1',
      qnQl: 'QnM',
      description:
        'Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years',
      downloads: [
        { category: 'No. of students benefitted', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2019-20.pdf' },
        ]},
        { category: 'Sanction Letters', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.1.1 Sanction Letters 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.1.1 Sanction Letters 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.1.1 Sanction Letters 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.1.1 Sanction Letters 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.1.1 Sanction Letters 2019-20.pdf' },
        ]},
        { name: 'Policy Documents', url: '/uploads/naac/criteria5/5.1.1 Policy Documents.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '5.1.2',
      qnQl: 'QnM',
      description:
        'Following capacity development and skills enhancement activities organized for improving student’s capability',
      downloads: [
        { name: 'List of students placed along with placement', url: '/uploads/naac/criteria5/5.1.2 Placement List.pdf' },
        { name: 'Soft Skills', url: '/uploads/naac/criteria5/5.1.2.1 Soft Skills.pdf' },
        { name: 'Language and Communication Skills', url: '/uploads/naac/criteria5/5.1.2.2 Language and Communication Skills.pdf' },
        { name: 'Life Skills', url: '/uploads/naac/criteria5/5.1.2.3 Life Skills.pdf' },
        { name: 'Awareness of trends in technology', url: '/uploads/naac/criteria5/5.1.2.4 Trends in Technology.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '5.1.3',
      qnQl: 'QnM',
      description:
        'Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years',
      downloads: [
        { category: 'Activities organized', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.1.3 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.1.3 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.1.3 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.1.3 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.1.3 2019-20.pdf' },
        ]},
      ],
    },
    {
      sno: 4,
      metricNo: '5.1.4',
      qnQl: 'QnM',
      description:
        'The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases',
      downloads: [
        { name: 'Policies', url: '/uploads/naac/criteria5/5.1.4 Policies.pdf' },
        { name: 'Proofs', url: '/uploads/naac/criteria5/5.1.4 Proofs.pdf' },
        { name: 'Awareness', url: '/uploads/naac/criteria5/5.1.4 Awareness.pdf' },
        { name: 'Mechanisms', url: '/uploads/naac/criteria5/5.1.4 Mechanisms.pdf' },
        { name: 'Annual Report', url: '/uploads/naac/criteria5/5.1.4 Annual Report.pdf' },
      ],
    },
    {
      sno: 5,
      metricNo: '5.2.1',
      qnQl: 'QnM',
      description:
        'Percentage of placement of outgoing students and students progressing to higher education during the last five years',
      downloads: [
        { category: 'List of students placed along with placement', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.2.1 Placement 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.2.1 Placement 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.2.1 Placement 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.2.1 Placement 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.2.1 Placement 2019-20.pdf' },
        ]},
        { category: 'List of students progressing for Higher Education', links: [
          { name: '2022-23', url: '/uploads/naac/criteria5/5.2.1 Higher Education 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.2.1 Higher Education 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.2.1 Higher Education 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.2.1 Higher Education 2019-20.pdf' },
          { name: '2018-19', url: '/uploads/naac/criteria5/5.2.1 Higher Education 2018-19.pdf' },
        ]},
      ],
    },
    {
      sno: 6,
      metricNo: '5.2.2',
      qnQl: 'QnM',
      description:
        'Percentage of students qualifying in state/national/international level examinations during the last five years',
      downloads: [
        { category: 'Qualified list', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.2.2 Qualified List 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.2.2 Qualified List 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.2.2 Qualified List 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.2.2 Qualified List 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.2.2 Qualified List 2019-20.pdf' },
        ]},
      ],
    },
    {
      sno: 7,
      metricNo: '5.3.1',
      qnQl: 'QnM',
      description:
        'Number of awards/medals for outstanding performance in sports/cultural activities at University/state/national/international level (award for a team event should be counted as one) during the last five years',
      downloads: [
        { name: 'e-Copies of Awards & Certificates', url: '/uploads/naac/criteria5/5.3.1 Awards Certificates.pdf' },
        { name: 'Student Awards & Medals', url: '/uploads/naac/criteria5/5.3.1 Student Awards.pdf' },
        { name: 'Inter College Certificates', url: '/uploads/naac/criteria5/5.3.1 Inter College Certificates.pdf' },
      ],
    },
    {
      sno: 8,
      metricNo: '5.3.2',
      qnQl: 'QnM',
      description:
        'Average number of sports and cultural programs in which students of the Institution participated during last five years',
      downloads: [
        { category: 'Circulars', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.3.2 Circulars 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.3.2 Circulars 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.3.2 Circulars 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.3.2 Circulars 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.3.2 Circulars 2019-20.pdf' },
        ]},
        { category: 'List of participants', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.3.2 Participants 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.3.2 Participants 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.3.2 Participants 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.3.2 Participants 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.3.2 Participants 2019-20.pdf' },
        ]},
        { category: 'Reports', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.3.2 Reports 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.3.2 Reports 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.3.2 Reports 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.3.2 Reports 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.3.2 Reports 2019-20.pdf' },
        ]},
        { category: 'Certificates', links: [
          { name: '2023-24', url: '/uploads/naac/criteria5/5.3.2 Certificates 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria5/5.3.2 Certificates 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria5/5.3.2 Certificates 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria5/5.3.2 Certificates 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria5/5.3.2 Certificates 2019-20.pdf' },
        ]},
      ],
    },
    {
      sno: 9,
      metricNo: '5.4.1',
      qnQl: 'QlM',
      description:
        'There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services',
      downloads: [
        { name: 'Alumni Association', url: '/uploads/naac/criteria5/5.4.1 Alumni Association.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="col-span-3 bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-8">Criteria 5</h1>
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
                  {row.downloads.map((download, i) =>
                    download.category ? (
                      <div key={i} className="mb-4">
                        <p className="font-semibold">{download.category}:</p>
                        {download.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline block"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        key={i}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        {download.name}
                      </a>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Criteria5;  
