import React from 'react';
import './BlogList.css';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';

const BlogList = () => {
  return (
    <section>
      {/* <div className='pt-11'>
      <BlogHeader/>

      </div> */}
      <div>
        <BlogPost/>
      </div>
      
      
        {/* Add blog list content here */}
      

     
    </section>
  );
};

export default BlogList;
