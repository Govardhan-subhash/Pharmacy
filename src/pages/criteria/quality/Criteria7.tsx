import React from 'react';

const Criteria7: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '7.1.1',
      qnQl: 'QlM',
      description:
        'Gender Equity and celebration of days of National/International commemoration. Measures initiated by the Institution for the promotion of gender equity and Institutional initiatives to celebrate/organize national and international commemorative days, events, and festivals during the last five years.',
      downloads: [
        { name: 'Gender Sensitization', url: '/uploads/naac/criteria7/Gender Equity description.pdf' },
        { name: 'Gender Sensitization Activities', url: '/uploads/naac/criteria7/Gender Sesitization Activities During last five years-pages-2.pdf' },
        { name: 'Gender Audit', url: '/uploads/naac/criteria7/Gender audit.pdf' },
        { name: 'Gender Specific Facilities', url: '/uploads/naac/criteria7/Gender specific facilities.pdf' },
        { name: 'National and International Days', url: '/uploads/naac/criteria7/National days description.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '7.1.2',
      qnQl: 'QnM',
      description:
        'The Institution has facilities and initiatives for alternate sources of energy, waste management, water conservation, green campus initiatives, and disabled-friendly environment.',
      downloads: [
        { name: 'Policy Document', url: '/uploads/naac/criteria7/7.1.2 Policy documents.pdf' },
        { name: 'Bills', url: '/uploads/naac/criteria7/7.1.2 Bills.pdf' },
        { name: 'Geo-tagged Photographs', url: '/uploads/naac/criteria7/7.1.2 Geo tagged Photographs.pdf' },
        { name: 'Video of Facilities', url: '/uploads/naac/criteria7/video_20240723_161237_edit.mp4' },
        { name: 'Circulars and Reports', url: '/uploads/naac/criteria7/7.1.2 circulars and reports.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '7.1.3',
      qnQl: 'QnM',
      description:
        'Quality audits on environment and energy regularly undertaken by the Institution. Includes green audit, energy audit, clean and green campus initiatives, and beyond the campus environmental promotion activities.',
      downloads: [
        { name: 'Policy Document', url: '/uploads/naac/criteria7/7.1.3 Policy documents.pdf' },
        { name: 'Certificates', url: '/uploads/naac/criteria7/7.1.3 certificates.pdf' },
        { name: 'Beyond Campus Activities', url: '/uploads/naac/criteria7/7.1.3 Beyond the campus.pdf' },
        { name: 'Audit Reports', url: '/uploads/naac/criteria7/7.1.3 Audit reports.pdf' },
      ],
    },
    {
      sno: 4,
      metricNo: '7.2.1',
      qnQl: 'QlM',
      description:
        'Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual.',
      downloads: [
        { name: 'Best Practices-I', url: '/uploads/naac/criteria7/Best practice-1 description.pdf' },
        { name: 'Supporting Document for Best Practices-I', url: '/uploads/naac/criteria7/7.2 Best Practices-1 supporting document.pdf' },
        { name: 'Best Practices-II', url: '/uploads/naac/criteria7/Best practices-2 description.pdf' },
        { name: 'Supporting Document for Best Practices-II', url: '/uploads/naac/criteria7/7.2 Best Practices-2 supporting document.pdf' },
      ],
    },
  ];


  return (
    <div className="container mx-auto px-4 py-16">


        {/* Main Content */}
        <div className="col-span-3 bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-center mb-8">Criteria 7</h1>
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

export default Criteria7;