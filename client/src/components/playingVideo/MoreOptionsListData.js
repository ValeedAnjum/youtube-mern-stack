import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import FlagIcon from "@material-ui/icons/Flag";
import { addToQueue } from "../../store/actions/videosActions";

export const MoreListOptionsForGuest = [
  {
    Text: "Add to queue",
    Icon: <PlaylistPlayIcon />,
    OnClick: (data) => addToQueue(data),
  },
];

export const MoreListOptionsForAuth = [
  {
    Text: "Add to queue",
    Icon: <PlaylistPlayIcon />,
    OnClick: (data) => addToQueue(data),
  },
  {
    Text: "Save to Watch later",
    Icon: <WatchLaterIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <PlaylistAddIcon />,
    divider: true,
  },
  { Text: "Not interested", Icon: <NotInterestedIcon /> },
  { Text: "Report", Icon: <FlagIcon /> },
];
