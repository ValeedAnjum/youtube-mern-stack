import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

export const MoreListOptionsForGuest = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
];

export const MoreListOptionsForAuth = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
  {
    Text: "Save to Watch later",
    Icon: <WatchLaterIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <PlaylistAddIcon />,
  },
];
