import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      {/* Profile Frame */}
      <div className="profile-frame">
        {/* Profile Picture */}
        <div className="profile-pic">
          <img
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
          />
        </div>
        {/* Profile Data */}
        <div className="profile-data">
          <h1>Rahir</h1>
          <div className="profile-info" style={{ display: 'flex' }}>
            <p>40 Posts</p>
            <p>40 Followers</p>
            <p>40 Following</p>
          </div>
        </div>
      </div>

      <hr style={{width:"90%",margin:"25px auto",opacity:"0.8"}}/>

       {/* gallery */}
       <div className="gallery">  
        <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
       </div>
    </div>
  );
};

export default Profile;
