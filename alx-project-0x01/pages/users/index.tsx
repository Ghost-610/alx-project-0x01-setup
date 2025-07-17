// pages/users/index.tsx
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

interface User {
  id: string;
  name: string;
  email: string;
}

const dummyUsers: User[] = [
  { id: 'u1', name: 'Alice Smith', email: 'alice@example.com' },
  { id: 'u2', name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 'u3', name: 'Charlie Brown', email: 'charlie@example.com' },
];

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">All Users</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {dummyUsers.map(user => (
              <li key={user.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                {/* You can add a link to a user detail page here later */}
                <span className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer">View Profile &rarr;</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;