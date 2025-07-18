import React, { useState } from 'react';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center mt-6">Users</h1>

      {/* Add User Button */}
      <div className="flex justify-center my-4">
        <button
          onClick={openModal}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add User
        </button>
      </div>

      {/* Render User Cards */}
      {posts.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}

      {/* User Modal */}
      <UserModal isOpen={isModalOpen} onClose={closeModal} />
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

export default Users;
