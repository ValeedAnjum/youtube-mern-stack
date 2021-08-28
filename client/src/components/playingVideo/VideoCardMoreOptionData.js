import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
export const videoCardMoreOptions = [
  {
    text: "Save to Watch later",
    icon: <AccessTimeIcon />,
  },
  {
    text: "Save to playlist",
    icon: <PlaylistAddIcon />,
  },
  {
    divider: true,
  },
  {
    text: "Remove from playlist",
    icon: <DeleteForeverIcon />,
  },
];
