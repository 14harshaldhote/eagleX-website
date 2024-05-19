import React from 'react';
import blog from '../assets/images/blog.png';

function BlogHeader() {
  return (
    <div className="bg-deepBlue w-full py-12 mt-28 md:mt-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-12 lg:p-20">
        <div className="hero-content text-white flex-1 md:mr-10 lg:mr-20 mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">Latest Posts</h2>
          <p className="text-lg md:text-xl text-left">Stay updated with our latest news and articles.</p>
        </div>
        <div className="flex-shrink-0">
          <img src={blog} alt="blog" className="max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
