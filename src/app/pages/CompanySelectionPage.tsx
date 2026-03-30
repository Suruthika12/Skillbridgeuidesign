import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { BackButton } from '../components/BackButton';
import { motion } from 'motion/react';
import { Building2, TrendingUp, Users, MapPin, FileText } from 'lucide-react';

const companies = [
  {
    id: 'cognizant',
    name: 'Cognizant',
    logo: '💼',
    difficulty: 'Medium',
    applications: '8.2K',
    location: 'Bangalore, India',
    color: 'from-blue-500 to-blue-600',
    questionCount: '150+',
  },
  {
    id: 'hexaware',
    name: 'Hexaware',
    logo: '🔷',
    difficulty: 'Medium',
    applications: '4.5K',
    location: 'Mumbai, India',
    color: 'from-cyan-500 to-blue-500',
    questionCount: '85+',
  },
  {
    id: 'zoho',
    name: 'Zoho',
    logo: '⚡',
    difficulty: 'Hard',
    applications: '6.8K',
    location: 'Chennai, India',
    color: 'from-red-500 to-orange-500',
    questionCount: '120+',
  },
  {
    id: 'wipro',
    name: 'Wipro',
    logo: '🌟',
    difficulty: 'Medium',
    applications: '9.5K',
    location: 'Bangalore, India',
    color: 'from-purple-500 to-indigo-600',
    questionCount: '180+',
  },
  {
    id: 'accenture',
    name: 'Accenture',
    logo: '🎯',
    difficulty: 'Medium',
    applications: '12K',
    location: 'Pune, India',
    color: 'from-indigo-600 to-purple-600',
    questionCount: '200+',
  },
  {
    id: 'infosys',
    name: 'Infosys',
    logo: '🚀',
    difficulty: 'Easy',
    applications: '15K',
    location: 'Bangalore, India',
    color: 'from-blue-600 to-cyan-600',
    questionCount: '220+',
  },
];

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Medium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

export function CompanySelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <BackButton to="/app" className="mb-6" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Company-Specific Preparation</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Choose a company to access curated resources, mock tests, and interview questions from real candidates.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card 
              className="p-6 cursor-pointer h-full transition-all duration-300 hover:shadow-xl" 
              hoverable
              onClick={() => navigate(`/app/resources/${company.id}`)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-4 text-3xl shadow-lg`}>
                {company.logo}
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{company.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[company.difficulty]}`}>
                  {company.difficulty}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {company.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  {company.applications} applicants
                </div>
              </div>

              {/* Interview Questions Placeholder */}
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Interview Questions</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Access {company.questionCount} curated questions from recent interviews
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  <Building2 className="w-4 h-4" />
                  <span>View Resources</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12"
      >
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Platform Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">6</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Top Companies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">955+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Interview Questions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">10K+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Success Stories</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">85%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}