import React, { useState } from 'react';
import { facultyData } from './FacultyData';
import { ChevronRight, ChevronDown } from 'lucide-react';
import PageTransition from '../PageTransition';
import SectionHeading from '../SectionHeading';

type FacultyCategory = 'all' | 'teaching' | 'nonTeaching' | 'visiting';

const designationColors: { [key: string]: string } = {
  'Professor & Principal': 'bg-blue-100 text-blue-800',
  'Professor & HOD': 'bg-green-100 text-green-800',
  'Assoc. Professor': 'bg-yellow-100 text-yellow-800',
  'Asst. Professor': 'bg-red-100 text-red-800',
  'Computer Applications': 'bg-purple-100 text-purple-800',
  'Bio Stat and Research Methodology': 'bg-pink-100 text-pink-800',
  'English': 'bg-indigo-100 text-indigo-800',
};

const FacultyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FacultyCategory>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Faculty' },
    { id: 'teaching', name: 'Teaching Staff' },
    { id: 'nonTeaching', name: 'Non-Teaching Staff' },
    { id: 'visiting', name: 'Visiting Staff' },
  ];

  // Combine all faculty data into a single array
  const allFaculties = Object.values(facultyData).flat();

  // Filter faculty members based on the selected category
  const filteredFaculties =
    selectedCategory === 'all'
      ? allFaculties
      : facultyData[selectedCategory] || [];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty</h1>
            <p className="text-lg md:text-xl">Meet our esteemed faculty members.</p>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
              alt="Faculty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Faculty Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Faculty"
            subtitle="Learn more about our faculty members."
          />
          <div className="mt-12">
            {/* Dropdown Button for Mobile View */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-2 rounded-lg flex items-center justify-between bg-white shadow-lg"
              >
                <span className="text-xl font-bold text-gray-900">Faculty Categories</span>
                {isDropdownOpen ? (
                  <ChevronDown className="h-6 w-6 text-gray-600" />
                ) : (
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                )}
              </button>
              {isDropdownOpen && (
                <nav className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id as FacultyCategory);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <ChevronRight className={`h-4 w-4 ${
                        selectedCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </button>
                  ))}
                </nav>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sidebar for Desktop View */}
              <div className="hidden md:block md:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Faculty Categories</h2>
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id as FacultyCategory)}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <ChevronRight className={`h-4 w-4 ${
                          selectedCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Faculty Table */}
              <div className="md:col-span-2">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredFaculties.map((faculty, index) => (
                        <tr key={faculty.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{faculty.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{faculty.qualification}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                designationColors[faculty.designation] || 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {faculty.designation}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                            <a href={faculty.profile} target="_blank" rel="noopener noreferrer">View</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FacultyPage;