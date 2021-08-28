import React from "react";
import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import { videoCardMoreOptions } from "./VideoCardMoreOptionsData";
import MiniVideoCard from "../../miniVideoCard/MiniVideoCard";

const MiniPlayerFooter = ({ VideoForMiniplayer, videoCardClickHan }) => {
  return (
    <Fragment>
      <Grid item container direction="column">
        {VideoForMiniplayer &&
          VideoForMiniplayer.length >= 1 &&
          VideoForMiniplayer.map((video, index) => (
            <MiniVideoCard
              videoCardClickHan={() => videoCardClickHan(video, index)}
              key={uuidv4()}
              video={video}
              videoCardMoreOptions={videoCardMoreOptions}
            />
          ))}
      </Grid>
    </Fragment>
  );
};

export default MiniPlayerFooter;
