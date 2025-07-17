// pages/posts/index.tsx
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const dummyPosts = [
  { id: '1', title: 'First Post Ever', body: 'This is the body of the first dummy post. It contains some interesting content to showcase how the PostCard component renders text.' },
  { id: '2', title: 'Exploring Next.js', body: 'Next.js offers a fantastic developer experience for building React applications. We are just scratching the surface here!' },
  { id: '3', title: 'Styling with Tailwind CSS', body: 'Tailwind CSS is a utility-first CSS framework that makes styling components incredibly fast and efficient. Look at how quickly we styled these components!' },
];

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPosts.map(post => (
            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;