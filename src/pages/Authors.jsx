import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar1 from '../images/avatar1.jpg';
import Avatar2 from '../images/avatar2.jpg';
import Avatar3 from '../images/avatar3.jpg';
import Avatar4 from '../images/avatar4.jpg';
import Avatar5 from '../images/avatar5.jpg';
import Avatar6 from '../images/avatar6.jpg';

const AuthorsData = [
  { id: 1, avatar: Avatar1, name: 'William', posts: 3 },
  { id: 2, avatar: Avatar2, name: 'mahesh', posts: 5 },
  { id: 3, avatar: Avatar3, name: 'john Doe', posts: 0 },
  { id: 4, avatar: Avatar4, name: 'Nana', posts: 2 },
  { id: 5, avatar: Avatar5, name: 'Blakely', posts: 1 },
  { id: 6, avatar: Avatar6, name: 'Pallavi', posts: 4 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(AuthorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => (
            <Link key={id} to={`/posts/users/${id}`} className="author-link">
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No authors found</h2>
      )}
    </section>
  );
};

export default Authors;
