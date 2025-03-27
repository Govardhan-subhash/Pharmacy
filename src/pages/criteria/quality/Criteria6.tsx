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
        { name: 'Governing Body Minutes of Meetings 2023-24', url: '/uploads/naac/criteria6/6.1. GBC meetings 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria6/6.1. GBC meetings 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria6/6.1. GBC meetings 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria6/6.1. GBC meetings 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria6/6.1. GBC meetings 2019-20.pdf' },
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
        { name: 'Institutional Strategic Plan', url: '/uploads/naac/criteria6/6.2.1. institutional strategic plan.pdf' },
      ]
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
    {
      sno: 5,
      metricNo: '6.3.2',
      qnQl: 'QnM',
      description:
        'Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years',
      downloads: [
        { name: 'Audit Report Reflecting Financial Assistance', url: '/uploads/naac/criteria6/6.3.2 audit report.pdf' },
        { name: 'Policy Document for Financial Assistance', url: '/uploads/naac/criteria6/6.3.2 policy document.pdf' },
        { name: 'Financial Assistance 2023-24', url: '/uploads/naac/criteria6/6.3.2 financial assistance 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria6/6.3.2 financial assistance 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria6/6.3.2 financial assistance 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria6/6.3.2 financial assistance 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria6/6.3.2 financial assistance 2019-20.pdf' },
      ],
    },
    {
      sno: 6,
      metricNo: '6.3.3',
      qnQl: 'QnM',
      description:
        'Percentage of teaching and non-teaching staff participating in Faculty Development Programmes (FDP), professional development/administrative training programs during the last five years',
      downloads: [
        { category: 'Brochures', links: [
          { name: '2023-24', url: '/uploads/naac/criteria6/6.3.3 brochures 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria6/6.3.3 brochures 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria6/6.3.3 brochures 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria6/6.3.3 brochures 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria6/6.3.3 brochures 2019-20.pdf' },
        ]},
        { category: 'Certificates', links: [
          { name: '2023-24', url: '/uploads/naac/criteria6/6.3.3 certificates 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria6/6.3.3 certificates 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria6/6.3.3 certificates 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria6/6.3.3 certificates 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria6/6.3.3 certificates 2019-20.pdf' },
        ]},
        { category: 'Reports', links: [
          { name: '2023-24', url: '/uploads/naac/criteria6/6.3.3 reports 2023-24.pdf' },
          { name: '2022-23', url: '/uploads/naac/criteria6/6.3.3 reports 2022-23.pdf' },
          { name: '2021-22', url: '/uploads/naac/criteria6/6.3.3 reports 2021-22.pdf' },
          { name: '2020-21', url: '/uploads/naac/criteria6/6.3.3 reports 2020-21.pdf' },
          { name: '2019-20', url: '/uploads/naac/criteria6/6.3.3 reports 2019-20.pdf' },
        ]},
        { name: 'FDP Participants Outside College', url: '/uploads/naac/criteria6/6.3.3 fdp participants outside college.pdf' },
      ],
    },
    {
      sno: 7,
      metricNo: '6.4.1',
      qnQl: 'QlM',
      description:
        'Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/non-government organizations) and it conducts financial audits regularly (internal and external)',
      downloads: [
        { name: 'External Audit Statements', url : '#'},
        { name:'2022-23' , url: '/uploads/naac/criteria6/6.4.1 external audit 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria6/6.4.1 external audit 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria6/6.4.1 external audit 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria6/6.4.1 external audit 2019-20.pdf' },
        { name: '2018-19', url: '/uploads/naac/criteria6/6.4.1 external audit 2018-19.pdf' },
        { name: 'Audit Policy', url: '/uploads/naac/criteria6/6.4.1 audit policy.pdf' },
      ],
    },
    {
      sno: 8,
      metricNo: '6.5.1',
      qnQl: 'QlM',
      description:
        'Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities',
      downloads: [
        { name: 'Audit Policy', url: '/uploads/naac/criteria6/6.5.1 audit policy.pdf' },
        { name: 'IQAC Formation', url: '/uploads/naac/criteria6/6.5.1 iqac formation.pdf' },
        { name: 'IQAC Strategies', url: '/uploads/naac/criteria6/6.5.1 iqac strategies.pdf' },
      ],
    },
    {
      sno: 9,
      metricNo: '6.5.2',
      qnQl: 'QnM',
      description:
        'Quality assurance initiatives of the institution include: Regular meeting of Internal Quality Assurance Cell (IQAC); Feedback collected, analysed and used for improvements, Collaborative quality initiatives with other institution(s)/ membership of international networks, Participation in NIRF, Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA, ISO Certification etc.',
      downloads: [
        { name: 'NIRF 2023-24', url: '/uploads/naac/criteria6/6.5.2 nirf 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria6/6.5.2 nirf 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria6/6.5.2 nirf 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria6/6.5.2 nirf 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria6/6.5.2 nirf 2019-20.pdf' },
        { name: 'ISO 14001', url: '/uploads/naac/criteria6/6.5.2 iso 14001.pdf' },
        { name: 'ISO 21001', url: '/uploads/naac/criteria6/6.5.2 iso 21001.pdf' },
        { name: 'ISO 50001', url: '/uploads/naac/criteria6/6.5.2 iso 50001.pdf' },
        { name: 'Collaborative Quality Initiatives', url: '/uploads/naac/criteria6/6.5.2 collaborative quality initiatives.pdf' },
        { name: 'Academic and Administrative Audits', url: '/uploads/naac/criteria6/6.5.2 academic and administrative audits.pdf' },
        { name: 'IQAC Meetings 2023-24', url: '/uploads/naac/criteria6/6.5.2 iqac meetings 2023-24.pdf' },
        { name: '2022-23', url: '/uploads/naac/criteria6/6.5.2 iqac meetings 2022-23.pdf' },
        { name: '2021-22', url: '/uploads/naac/criteria6/6.5.2 iqac meetings 2021-22.pdf' },
        { name: '2020-21', url: '/uploads/naac/criteria6/6.5.2 iqac meetings 2020-21.pdf' },
        { name: '2019-20', url: '/uploads/naac/criteria6/6.5.2 iqac meetings 2019-20.pdf' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
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
                  {row.downloads.map((download, i) =>
                    'links' in download ? (
                      <div key={i} className="mb-4">
                        <p className="font-semibold">{download.category}:</p>
                        {download.links?.map((link, j) => (
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

export default Criteria6;
