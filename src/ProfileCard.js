// import React from 'react';

const ProfileCard = (props) => {

    const { title, handle } = props;
    return (
        <div>
        <h1>title: {title}</h1>
        <p>Handle: {handle}</p>
        </div>
  );
};

export default ProfileCard;
