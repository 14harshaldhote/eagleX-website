// BlogPostCard.js
import React from 'react';

const BlogPostCard = ({ post, onSelect }) => {
  return (
    <div className="p-10 sm:p-6 md:p-8">
      <div
        className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-6 cursor-pointer flex flex-col h-full"
        onClick={() => onSelect(post)}
      >
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="text-gray-500 text-sm">{post.date}</div>
            <div className="text-lg font-bold text-left">{post.title}</div>
            <div className="text-gray-700 mt-2">By {post.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
