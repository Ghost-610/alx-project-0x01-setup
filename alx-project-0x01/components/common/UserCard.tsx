// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">Email: {email}</p>
      <p className="text-sm text-gray-600">Phone: {phone}</p>
      <p className="text-sm text-gray-600">Website: {website}</p>
      <p className="text-sm text-gray-600">Company: {company.name}</p>
      <p className="text-sm text-gray-600">
        Address: {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
