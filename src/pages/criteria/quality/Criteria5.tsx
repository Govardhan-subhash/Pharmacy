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
        { name: '2023-24', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria5/5.1.1 List of Beneficiary Students 2019-20.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '5.1.2',
      qnQl: 'QnM',
      description:
        'Following capacity development and skills enhancement activities organized for improving student’s capability',
      downloads: [
        { name: 'Soft Skills', url: '/uploads/naac/criteria5/5.1.2.1 Soft Skills.pdf' },
        { name: 'Language and Communication Skills', url: '/uploads/naac/criteria5/5.1.2.2 Language and Communication Skills.pdf' },
        { name: 'Life Skills', url: '/uploads/naac/criteria5/5.1.2.3 LIfe Skills.pdf' },
        { name: 'Awareness of Trends in Technology', url: '/uploads/naac/criteria5/5.1.2.4 Trends inTechnology.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '5.1.3',
      qnQl: 'QnM',
      description:
        'Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/criteria5/5.1.3. 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria5/5.1.3  2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria5/5.1.3  2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria5/5.1.3   2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria5/5.1.3   2019-20.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '5.2.1',
      qnQl: 'QnM',
      description:
        'Percentage of placement of outgoing students and students progressing to higher education during the last five years',
      downloads: [
        { name: '2023-24', url: '/uploads/naac/criteria5/5.2.1.1.STUDENTS PLACEMENT 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria5/5.2.1.1.STUDENTS PLACEMENT 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria5/5.2.1.1.STUDENTS PLACEMENT 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria5/5.2.1.1.STUDENTS PLACEMENT 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria5/5.2.1.1.STUDENTS PLACEMENT 2019-20.pdf' },
      ],
    },
  ];



  return (
    <div className="container mx-auto px-4 py-16">
      

        {/* Main Content */}
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

export default Criteria5;