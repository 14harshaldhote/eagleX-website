// BlogPost.js
import React, { useState } from 'react';
import BlogPostList from './BlogPostList';
import BlogPostDetail from './BlogPostDetail';
import BlogHeader from './BlogHeader';

const BlogPost = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <BlogHeader />
      {selectedPost ? (
        <BlogPostDetail post={selectedPost} onBack={handleBack} />
      ) : (
        <BlogPostList onSelectPost={handleSelectPost} />
      )}
    </div>
  );
};

export default BlogPost;
