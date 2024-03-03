import React from 'react';
import PostAuthor from '../components/PostAuthor';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/blog5.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to="/posts/werwer/edit" className='btn sm primary'>Edit</Link>
            <Link to="/posts/werwer/delete" className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <div> 
          <h1>This is the post title!</h1>

          <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="" /> 
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore eos, doloremque fugit beatae officia reiciendis itaque odit saepe dicta odio amet voluptate aliquid quas, voluptates voluptatem voluptatum est numquam? Facere facilis assumenda sint illo dignissimos quod delectus ducimus quis.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ut eligendi placeat, qui reprehenderit fugit sequi obcaecati recusandae tempore harum aliquid cum facere ducimus aliquam aperiam repudiandae illum officiis amet deleniti debitis corporis nemo dolorum at. Libero quaerat quia dignissimos. Quae pariatur in commodi aut neque, autem omnis cupiditate aperiam impedit corrupti facilis cumque sunt!
          </p>
        </div> 
      </div>
    </section>
  );
}

export default PostDetail;
