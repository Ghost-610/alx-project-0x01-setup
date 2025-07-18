// components/common/UserModal.tsx

import React from 'react';
import { UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        {/* You can replace this with a form or more input fields later */}
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Name" className="border px-3 py-2 rounded" />
          <input type="email" placeholder="Email" className="border px-3 py-2 rounded" />
          <input type="text" placeholder="Phone" className="border px-3 py-2 rounded" />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
