import React from 'react';

const Criteria1: React.FC = () => {
  const tableData = [
    {
      sno: 1,
      metricNo: '1.1.1',
      description:
        'The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment',
      downloads: [
        { name: 'Academic Regulations', url: '/pdfs/academic-regulations.pdf' },
        { name: 'Syllabus', url: '/pdfs/syllabus.pdf' },
        { name: 'Class Timetable', url: '/pdfs/class-timetable.pdf' },
        { name: 'All Academic Calendars', url: '/pdfs/academic-calendars.pdf' },
        { name: 'Midterm Exam Timetable', url: '/pdfs/midterm-exam-timetable.pdf' },
        { name: 'Seminar and Exam Timetables', url: '/pdfs/seminar-exam-timetables.pdf' },
        { name: 'Faculty Workload', url: '/pdfs/faculty-workload.pdf' },
        { name: 'Course File', url: '/pdfs/course-file.pdf' },
      ],
    },
    {
      sno: 2,
      metricNo: '1.2.1',
      description:
        'Number of Add on/Certificate/Value added programs offered during the last five years',
      downloads: [
        { name: 'Brochures', url: '/pdfs/brochures.pdf' },
        { name: 'List of Students Enrolled', url: '/pdfs/students-enrolled.pdf' },
        { name: 'Attendance Sheets', url: '/pdfs/attendance-sheets.pdf' },
        { name: 'Summary Reports', url: '/pdfs/summary-reports.pdf' },
        { name: 'Certificates', url: '/pdfs/certificates.pdf' },
      ],
    },
    {
      sno: 3,
      metricNo: '1.4.1',
      description:
        'Institution obtains feedback on the syllabus and its transaction at the institution from stakeholders',
      downloads: [
        { name: 'Feedback Forms', url: '/pdfs/feedback-forms.pdf' },
        { name: 'Action Taken Reports', url: '/pdfs/action-taken-reports.pdf' },
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