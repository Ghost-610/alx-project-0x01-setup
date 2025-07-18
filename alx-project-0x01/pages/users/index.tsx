// // pages/users/index.tsx
// import React from 'react';
// import Header from '../../components/layout/Header';
// import Footer from '../../components/layout/Footer';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface UsersPageProps {
//   posts: User[];
// }

// const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Header />
//       <main className="flex-grow container mx-auto p-4">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">All Users</h1>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <ul className="divide-y divide-gray-200">
//             {posts.map(user => (
//               <li key={user.id} className="py-4 flex justify-between items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
//                   <p className="text-gray-600">{user.email}</p>
//                 </div>
//                 <span className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer">View Profile &rarr;</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default UsersPage;


// pages/users/index.tsx

import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[]; // 'posts' is the key returned from getStaticProps
}

const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center mt-6">Users</h1>
      {posts.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UsersPage;
