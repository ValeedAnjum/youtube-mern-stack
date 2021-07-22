import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
const imgSrc =
  "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.6435-1/c0.46.160.160a/p160x160/134635600_2802392070088014_3682958511635115744_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFkrlxvSBoYlP6CMp-yrBkyh2PpGm0ys92HY-kabTKz3VPgVdjRaHf9ymH-NW-xjOATtvNPavnX4tjXOSMoJhHF&_nc_ohc=AuU1oPkkWgoAX9O8bnt&_nc_ht=scontent.fkhi6-1.fna&oh=3a696ab165e1ee38483678d535640918&oe=60FE4032";

const useStyles = makeStyles(() => {
  return {
    avatar: {
      //   backgroundColor: "blue",
    },
  };
});
const UserTab = () => {
  const classes = useStyles();
  return <Avatar className={classes.avatar}>H</Avatar>;
};

export default UserTab;
