import React from "react";

const ChannelLogo = ({ img, classes }) => {
  return (
    <div className={classes.channelLogoContainer}>
      <img src={img} alt="channel_logo" className={classes.channelLogoImg} />
    </div>
  );
};

export default ChannelLogo;
