import React, { Fragment } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import GamesIcon from "@material-ui/icons/Games";
import ReceiptIcon from "@material-ui/icons/Receipt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import CardLocal from "./Card";

const cards = [
  {
    Icon: WhatshotIcon,
    Text: "Trending",
  },
  {
    Icon: MusicNoteIcon,
    Text: "Music",
  },
  {
    Icon: GamesIcon,
    Text: "Gaming",
  },
  {
    Icon: ReceiptIcon,
    Text: "News",
  },
  {
    Icon: SportsEsportsIcon,
    Text: "Sport",
  },
];

const useStyle = makeStyles(() => {
  return {
    card: {
      boxShadow: "none",
      cursor: "pointer",
      "& :hover": {
        backgroundColor: "#cccccc9c",
      },
    },
    cardIcon: {
      backgroundColor: "transparent !important",
    },
    cardHeading: {
      userSelect: "none",
      backgroundColor: "transparent !important",
    },
  };
});
const Cards = () => {
  const classes = useStyle();
  return (
    <Grid container>
      {cards.map((item, index) => (
        <CardLocal classes={classes} key={index} item={item} />
      ))}
    </Grid>
  );
};

export default Cards;
