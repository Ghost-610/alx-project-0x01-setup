// import React from 'react';

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'danger';
//   disabled?: boolean;
//   type?: 'button' | 'submit' | 'reset';
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   onClick,
//   variant = 'primary',
//   disabled = false,
//   type = 'button'
// }) => {
//   const baseClasses = 'px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
//   const variantClasses = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
//     danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
//   };

//   const disabledClasses = 'opacity-50 cursor-not-allowed';

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;


// components/common/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition duration-200 ease-in-out';

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;