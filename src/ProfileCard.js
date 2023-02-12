// import React from 'react';

const ProfileCard = (props) => {

    const { title, handle , image} = props;
    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>title: {title}</div>
            <div>Handle: {handle}</div>
        </div>
  );
};

export default ProfileCard;
