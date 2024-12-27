import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(1); // Initial likes count

  // Handle comment input change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handle like button click
  const handleLike = () => {
    setLikes(likes + 1); // Increment like count
    console.log('Likes:', likes + 1); // Print the updated like count to console
  // Redirect to the /profile page
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (comment.trim()) {
      console.log('Comment:', comment); // Print comment to console
      setComment(''); // Clear the comment input field
     // Redirect to the /profile page
    }
  };

  return (
    <div>
      {/* card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <Link to='/profile'>
          <h5>Rahir</h5>
          </Link>
        </div>

        {/* card image */}
        <div className="card-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1700838996810-eb6c0101902b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        {/* card content */}
        <div className="card-content">
          <span
            className="material-symbols-outlined"
            onClick={handleLike}
            style={{ cursor: 'pointer' }}
          >
            favorite
          </span>
          <p>{likes} Like{likes > 1 ? 's' : ''}</p>
          <p>This is amazing</p>
        </div>

        {/* add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input
            type="text"
            placeholder="Add a Comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <button className="comment" onClick={handleCommentSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
