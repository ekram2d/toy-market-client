import React from 'react';

const Blog = () => {
      return (
            <>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                              1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                              <h1 className='font-bold'>Answer:</h1>
                              <p className='font-serif'>An access token is a credential that proves authorization to access resources</p>
                              <p className='font-thin'>while a refresh token allows obtaining a new access token when the current one expire</p>
                              <p className='font-serif'>
                                    Access tokens are used to authenticate and authorize access to resources, while refresh tokens are used to obtain new access tokens without requiring reauthentication.</p>
                              <p className='font-thin'> Access tokens and refresh tokens should be securely stored on the client-side using recommended storage mechanisms provided by the platform or frameworks used.</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                              2: Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                              <h1 className='font-bold'>Answer:</h1>
                              <p>SQL databases are relational and use structured query language for defining and manipulating data, while NoSQL databases are non-relational and offer flexible data models and scalability.</p>
                              
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                              3: What is express js? What is Nest JS ?
                        </div>
                        <div className="collapse-content">
                              <h1 className='font-bold'>Answer:</h1>
                              <p className='font-serif'>Express.js is a popular and lightweight web application framework for Node.js, used to build server-side applications and APIs with simplicity and flexibility.</p>
                            
                              <p className='font-mono'>Nest.js is a progressive, modular, and TypeScript-based framework for building scalable and efficient server-side applications with a focus on developer productivity and maintainability.</p>
                        </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                              4: What is MongoDB aggregate and how does it work ?
                        </div>
                        <div className="collapse-content">
                              <h1 className='font-bold'>Answer:</h1>
                              <p className='font-serif'>MongoDB's aggregate is a powerful feature that allows flexible querying and data transformation by combining multiple operations, such as grouping, filtering, sorting, and calculating aggregations, in a single query.</p>
                            
                              <p className='font-thin'>The MongoDB aggregate pipeline works by taking a collection of documents as input and sequentially applying various stages, such as match, group, sort, and project, to filter, manipulate, and aggregate the data, ultimately producing the desired result set based on the specified operations.</p>
                        </div>
                  </div>
                 
            </>
      );
};

export default Blog;