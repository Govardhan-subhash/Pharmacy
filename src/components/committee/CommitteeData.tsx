interface CommitteeData {
    [key: string]: {
      title: string;
      description: string;
      responsibilities: string[];
      members: Array<{
        id: number;
        name: string;
        designation: string;
        profile: string;
      }>;
    };
  }
  
  export const committeeData: CommitteeData = {
    'anti-ragging': {
      title: 'Anti-Ragging Committee',
      description: 'Sri Venkateshwara Institute of Pharmaceutical Sciences has taken various precautions as per AICTE Norms to prevent ragging and ensure 100% no-ragging.',
      responsibilities: [
        "Regularly monitor the spots where any instances of ragging is likely to occur",
        "Conduct regular inspections to areas where ragging is likely to occur",
        "If any incidents are observed, promptly access the situation, take necessary action, and inform the council/cell using the provided form",
        "Ensure that anti-ragging instructions are displayed prominently in high-traffic areas"
      ],
      members: [
        { id: 1, name: "Dr. S. Bhaskara Raju", designation: "Principal", profile: "Chairman" },
        { id: 2, name: "Dr. VR. Srinivas Garu", designation: "Professor, Department of Pharmaceutical Biotechnology", profile: "Member" },
        { id: 3, name: "Mr. Shahed Kumar Sungabati", designation: "Assoc. Professor, Department of Pharmacology", profile: "Member Secretary" }
      ]
    },
    'iqac': {
      title: 'Internal Quality Assurance Cell (IQAC)',
      description: 'The IQAC is responsible for developing a system for conscious, consistent and catalytic improvement in the overall performance of the institution.',
      responsibilities: [
        "Development and application of quality benchmarks for various academic and administrative activities",
        "Facilitating the creation of a learner-centric environment conducive to quality education",
        "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes",
        "Documentation of the various programmes/activities leading to quality improvement"
      ],
      members: [
        { id: 1, name: "Dr. R. K. Sharma", designation: "Principal", profile: "Chairman" },
        { id: 2, name: "Dr. M. S. Patil", designation: "Professor, Quality Assurance", profile: "Coordinator" },
        { id: 3, name: "Dr. A. B. Singh", designation: "Professor, Academic Affairs", profile: "Member" }
      ]
    },
    'anti-discrimination': {
      title: 'Anti Discrimination Cell',
      description: 'The Anti Discrimination Cell ensures equal opportunities and fair treatment for all students and staff members regardless of their background.',
      responsibilities: [
        "Monitor and prevent any form of discrimination within the institution",
        "Handle complaints related to discrimination promptly and effectively",
        "Organize awareness programs about equality and diversity",
        "Ensure compliance with anti-discrimination policies"
      ],
      members: [
        { id: 1, name: "Dr. K. R. Patel", designation: "Professor, Social Sciences", profile: "Chairman" },
        { id: 2, name: "Dr. S. K. Gupta", designation: "Associate Professor", profile: "Member Secretary" },
        { id: 3, name: "Ms. Rekha Singh", designation: "Assistant Professor", profile: "Member" }
      ]
    },
    'grd': {
      title: 'GRD Committee',
      description: 'The Grievance Redressal and Development Committee addresses student and staff concerns while promoting institutional development.',
      responsibilities: [
        "Address grievances from students and staff members",
        "Implement solutions for reported issues",
        "Monitor the effectiveness of grievance resolution",
        "Suggest improvements in institutional processes"
      ],
      members: [
        { id: 1, name: "Dr. M. K. Reddy", designation: "Senior Professor", profile: "Chairman" },
        { id: 2, name: "Dr. P. Kumar", designation: "Professor", profile: "Member Secretary" },
        { id: 3, name: "Dr. S. Mehta", designation: "Associate Professor", profile: "Member" }
      ]
    },
    'library': {
      title: 'Library Committee',
      description: 'The Library Committee oversees the development and management of library resources and services.',
      responsibilities: [
        "Plan and manage library resources",
        "Update library policies and procedures",
        "Recommend new acquisitions and subscriptions",
        "Ensure optimal utilization of library facilities"
      ],
      members: [
        { id: 1, name: "Dr. A. K. Mishra", designation: "Chief Librarian", profile: "Chairman" },
        { id: 2, name: "Dr. R. S. Kumar", designation: "Professor", profile: "Member Secretary" },
        { id: 3, name: "Ms. P. Sharma", designation: "Assistant Librarian", profile: "Member" }
      ]
    },
    'animal-ethical': {
      title: 'Institutional Animal Ethical Committee',
      description: 'The committee ensures ethical treatment of animals in research and educational activities.',
      responsibilities: [
        "Review and approve animal research protocols",
        "Monitor animal welfare in laboratories",
        "Ensure compliance with ethical guidelines",
        "Conduct regular inspections of animal facilities"
      ],
      members: [
        { id: 1, name: "Dr. V. S. Rao", designation: "Professor, Pharmacology", profile: "Chairman" },
        { id: 2, name: "Dr. N. K. Jain", designation: "Veterinarian", profile: "Member Secretary" },
        { id: 3, name: "Dr. P. Das", designation: "External Expert", profile: "Member" }
      ]
    },
    'women-empowerment': {
      title: 'Women Empowerment Cell',
      description: 'The Women Empowerment Cell works towards creating an environment of gender equality and addressing concerns of female students and staff.',
      responsibilities: [
        "Promote gender sensitivity in the college",
        "Organize workshops and seminars on women empowerment",
        "Address complaints regarding harassment or discrimination",
        "Provide counseling and support services"
      ],
      members: [
        { id: 1, name: "Dr. Priya Sharma", designation: "Professor, Women Studies", profile: "Chairperson" },
        { id: 2, name: "Dr. Meena Kumari", designation: "Associate Professor", profile: "Coordinator" },
        { id: 3, name: "Ms. Anjali Desai", designation: "Student Counselor", profile: "Member" }
      ]
    },
    'entrepreneurship': {
      title: 'Entrepreneurship Cell',
      description: 'The E-Cell promotes entrepreneurial spirit among students and provides support for startup initiatives.',
      responsibilities: [
        "Organize entrepreneurship workshops and seminars",
        "Facilitate mentorship programs",
        "Support student startups",
        "Coordinate with industry partners"
      ],
      members: [
        { id: 1, name: "Dr. R. K. Verma", designation: "Professor, Business Studies", profile: "Chairman" },
        { id: 2, name: "Mr. S. K. Joshi", designation: "Industry Expert", profile: "Member Secretary" },
        { id: 3, name: "Ms. N. Patel", designation: "Startup Mentor", profile: "Member" }
      ]
    },
    'alumni': {
      title: 'Alumni Association',
      description: 'The Alumni Association maintains connections with graduates and facilitates their continued involvement with the institution.',
      responsibilities: [
        "Maintain alumni database",
        "Organize alumni meets and events",
        "Facilitate alumni contributions to development",
        "Create networking opportunities"
      ],
      members: [
        { id: 1, name: "Dr. M. S. Rao", designation: "Senior Professor", profile: "Chairman" },
        { id: 2, name: "Mr. K. P. Singh", designation: "Alumni Coordinator", profile: "Member Secretary" },
        { id: 3, name: "Ms. R. Kapoor", designation: "Alumni Representative", profile: "Member" }
      ]
    },
    'st-sc-welfare': {
      title: 'ST/SC Welfare Cell',
      description: 'The ST/SC Welfare Cell ensures the well-being and development of students from Scheduled Tribes and Scheduled Castes.',
      responsibilities: [
        "Implement welfare schemes",
        "Address concerns of ST/SC students",
        "Monitor scholarship disbursement",
        "Organize awareness programs"
      ],
      members: [
        { id: 1, name: "Dr. B. K. Meena", designation: "Professor", profile: "Chairman" },
        { id: 2, name: "Dr. R. L. Kumar", designation: "Associate Professor", profile: "Member Secretary" },
        { id: 3, name: "Mr. S. K. Ram", designation: "Welfare Officer", profile: "Member" }
      ]
    },
    'minority': {
      title: 'Minority Cell',
      description: 'The Minority Cell safeguards the interests of minority students and promotes their educational development.',
      responsibilities: [
        "Implement minority welfare schemes",
        "Address concerns of minority students",
        "Monitor scholarship programs",
        "Promote inclusive education"
      ],
      members: [
        { id: 1, name: "Dr. A. Khan", designation: "Professor", profile: "Chairman" },
        { id: 2, name: "Dr. S. Ahmed", designation: "Associate Professor", profile: "Member Secretary" },
        { id: 3, name: "Ms. M. Joseph", designation: "Counselor", profile: "Member" }
      ]
    },
    'student-mentoring': {
      title: 'Students Mentoring Cell',
      description: 'The Students Mentoring Cell provides guidance and support to students for their academic and personal development.',
      responsibilities: [
        "Implement mentoring programs",
        "Train faculty mentors",
        "Monitor mentoring activities",
        "Evaluate mentoring effectiveness"
      ],
      members: [
        { id: 1, name: "Dr. P. K. Sharma", designation: "Senior Professor", profile: "Chairman" },
        { id: 2, name: "Dr. M. R. Gupta", designation: "Chief Mentor", profile: "Member Secretary" },
        { id: 3, name: "Ms. S. Reddy", designation: "Student Counselor", profile: "Member" }
      ]
    },
    'examination': {
      title: 'Examination Cell',
      description: 'The Examination Cell manages all aspects of student evaluation and examination processes.',
      responsibilities: [
        "Conduct examinations",
        "Maintain examination records",
        "Ensure fair evaluation",
        "Handle examination grievances"
      ],
      members: [
        { id: 1, name: "Dr. S. K. Mishra", designation: "Controller of Examinations", profile: "Chairman" },
        { id: 2, name: "Dr. R. P. Singh", designation: "Deputy Controller", profile: "Member Secretary" },
        { id: 3, name: "Mr. A. Kumar", designation: "Technical Officer", profile: "Member" }
      ]
    },
    'r-and-d': {
      title: 'R&D Cell',
      description: 'The Research and Development Cell promotes and coordinates research activities within the institution.',
      responsibilities: [
        "Promote research activities",
        "Coordinate research projects",
        "Manage research funding",
        "Organize research seminars"
      ],
      members: [
        { id: 1, name: "Dr. V. K. Gupta", designation: "Research Director", profile: "Chairman" },
        { id: 2, name: "Dr. S. P. Rao", designation: "Research Coordinator", profile: "Member Secretary" },
        { id: 3, name: "Dr. M. Kumar", designation: "Senior Researcher", profile: "Member" }
      ]
    },
    'internal-complaint': {
      title: 'Internal Complaint Cell',
      description: 'The Internal Complaint Cell handles grievances and ensures a safe working environment for all.',
      responsibilities: [
        "Address internal complaints",
        "Maintain confidentiality",
        "Conduct fair investigations",
        "Recommend appropriate actions"
      ],
      members: [
        { id: 1, name: "Dr. S. Mathur", designation: "Senior Professor", profile: "Chairman" },
        { id: 2, name: "Dr. R. Khanna", designation: "Legal Advisor", profile: "Member Secretary" },
        { id: 3, name: "Ms. P. Reddy", designation: "Counselor", profile: "Member" }
      ]
    },
    'sc-st-obc': {
      title: 'SC/ST/OBC Cell',
      description: 'The SC/ST/OBC Cell ensures equal opportunities and support for students from scheduled categories and other backward classes.',
      responsibilities: [
        "Implement welfare schemes",
        "Monitor scholarship distribution",
        "Address student concerns",
        "Organize support programs"
      ],
      members: [
        { id: 1, name: "Dr. R. K. Verma", designation: "Professor", profile: "Chairman" },
        { id: 2, name: "Dr. S. K. Das", designation: "Welfare Officer", profile: "Member Secretary" },
        { id: 3, name: "Mr. P. Kumar", designation: "Coordinator", profile: "Member" }
      ]
    }
  };