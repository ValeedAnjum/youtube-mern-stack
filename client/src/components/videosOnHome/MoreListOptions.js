import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FlagIcon from "@material-ui/icons/Flag";

import store from "../../store";
import { addToQueue } from "../../store/actions/videosActions";

export const MoreListOptionsForGuest = [
  {
    Text: "Add to queue",
    Icon: <PlaylistPlayIcon />,
    onClick: (name) => addToQueue(store.dispatch, name),
  },
];
export const MoreListOptionsForAuth = [
  { Text: "Add to queue", Icon: <PlaylistPlayIcon /> },
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
