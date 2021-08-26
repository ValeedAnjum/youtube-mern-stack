import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
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
    Icon: <PlaylistAddIcon />,
  },
  {
    Text: "Save To playlist",
    Icon: <FlagIcon />,
    divider: true,
  },
  {
    Text: "Not interested",
    Icon: <PlaylistPlayIcon />,
  },
  {
    Text: "Don't recommend channel",
    Icon: <PlaylistAddIcon />,
  },
  {
    Text: "Report",
    Icon: <FlagIcon />,
  },
];
