// import React from 'react';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   createdAt: string;
//   tags?: string[];
// }

// interface PostCardProps {
//   post: Post;
//   onReadMore?: (id: number) => void;
// }

// const PostCard: React.FC<PostCardProps> = ({ post, onReadMore }) => {
//   const handleReadMore = () => {
//     if (onReadMore) {
//       onReadMore(post.id);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
//       <div className="flex justify-between items-start mb-3">
//         <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
//           {post.title}
//         </h3>
//         <span className="text-sm text-gray-500">
//           {new Date(post.createdAt).toLocaleDateString()}
//         </span>
//       </div>
      
//       <p className="text-gray-600 mb-4 line-clamp-3">
//         {post.content}
//       </p>
      
//       <div className="flex justify-between items-center">
//         <div className="flex items-center">
//           <span className="text-sm text-gray-500">By {post.author}</span>
//         </div>
        
//         {onReadMore && (
//           <button
//             onClick={handleReadMore}
//             className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//           >
//             Read More →
//           </button>
//         )}
//       </div>
      
//       {post.tags && post.tags.length > 0 && (
//         <div className="flex flex-wrap gap-2 mt-3">
//           {post.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostCard;


// components/common/PostCard.tsx
import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  id: string;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        <Link href={`/posts/${id}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 text-base line-clamp-3">{body}</p>
      <div className="mt-4">
        <Link href={`/posts/${id}`} className="text-blue-500 hover:text-blue-600 font-semibold">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default PostCard;