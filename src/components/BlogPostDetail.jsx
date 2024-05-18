// BlogPostDetail.js
import React from 'react';

const BlogPostDetail = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <div className="container mx-auto p-4">
      <button onClick={onBack} className="text-blue-500 mb-4">Back to Blog List</button>
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-auto h-26 object-cover" />
        <div className="p-12">
          <div className="text-gray-500 text-sm">{post.date}</div>
          <div className="text-4xl font-bold">{post.title}</div>
          <div className="text-gray-700 mt-2">By {post.author}</div>
          <div className="text-gray-800 mt-4 whitespace-pre-line">{post.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
