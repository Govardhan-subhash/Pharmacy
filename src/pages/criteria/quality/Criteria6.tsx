import React from 'react';

const Criteria6: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '6.1.1',
      qnQl: 'QlM',
      description:
        'The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance',
      downloads: [
        { name: 'Vision', url: '/uploads/naac/criteria6/6.1 vision.pdf' },
        { name: 'Board of Governing Body', url: '/uploads/naac/criteria6/6.1 boardn of governing body.pdf' },
        { name: 'GBC Meetings 2023-24', url: '/uploads/naac/criteria6/6.1. GBC meetings 2023-24.pdf' },
        { name: 'GBC Meetings 2022-23', url: '/uploads/naac/criteria6/6.1. GBC meetings 2022-23.pdf' },
        { name: 'GBC Meetings 2021-22', url: '/uploads/naac/criteria6/6.1. GBC meetings 2021-22.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '6.2.1',
      qnQl: 'QlM',
      description:
        'The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/ perspective/development plan etc.',
      downloads: [
        { name: 'Functions of Institution Bodies', url: '/uploads/naac/criteria6/6.2.1 functions of various institution bodies.pdf' },
        { name: 'Organogram', url: '/uploads/naac/criteria6/6.2.1 organogram.pdf' },
        { name: 'HR Policy', url: '/uploads/naac/criteria6/6.2.1. HR policy.pdf' },
        { name: 'Strategic Plan', url: '/uploads/naac/criteria6/6.2.1. institutional strategic plan.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '6.2.2',
      qnQl: 'QlM',
      description:
        'Implementation of e-governance in areas of operation: Administration, Finance and Accounts, Student Admission and Support, Examination',
      downloads: [
        { name: 'Annual Report on e-Governance', url: '/uploads/naac/criteria6/6.2.2 annual report on e governance.pdf' },
        { name: 'E-CAP Audit Statement', url: '/uploads/naac/criteria6/6.2.2 ecap audit statement.pdf' },
        { name: 'Institution Implements e-Governance', url: '/uploads/naac/criteria6/6.2.2 institution implrments e governance.pdf' },
        { name: 'Screenshots', url: '/uploads/naac/criteria6/6.2.2. e-governanc screen shots.pdf' },
        { name: 'ERP Policy', url: '/uploads/naac/criteria6/6.2.2. ERP Policy.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '6.3.1',
      qnQl: 'QlM',
      description:
        'The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff',
      downloads: [
        { name: 'Paid Leaves', url: '/uploads/naac/criteria6/6.3.1 paid leaves-merged.pdf' },
        { name: 'ESI', url: '/uploads/naac/criteria6/6.3.1. ESI.pdf' },
        { name: 'Faculty EPF', url: '/uploads/naac/criteria6/6.3.1. faculty EPF.pdf' },
        { name: 'Faculty Appraisal Form', url: '/uploads/naac/criteria6/6.3.1 faculty appraisal form.pdf' },
      ],
    },
  ];


  return (
    <div className="container mx-auto px-4 py-16">

        {/* Main Content */}
        <div className="col-span-3 bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-center mb-8">Criteria 6</h1>
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

export default Criteria6;