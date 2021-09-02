import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { removeVideoFromQueue } from "../../store/actions/videosActions";
export const videoCardMoreOptions = [
  {
    text: "Remove from playlist",
    icon: <DeleteForeverIcon />,
    OnClick: (id) => removeVideoFromQueue(id),
  },
];
