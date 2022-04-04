import React from 'react';

const Blogs = () => {
  return (
    <>
      <div>
        <h1>Blogs</h1>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Blogs;

export const getServerSideProps = async () => {
  return {
    props: {
      name: 'Blogs',
    },
  };
};
