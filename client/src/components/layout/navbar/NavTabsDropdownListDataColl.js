import LiveTvIcon from "@material-ui/icons/LiveTv";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FaceIcon from "@material-ui/icons/Face";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import SecurityIcon from "@material-ui/icons/Security";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";

const styleForAppsIcons = { color: "#ff0000" };
export const appsDropDownListData = [
  {
    text: "YouTube TV",
    Icon: <LiveTvIcon style={styleForAppsIcons} />,
    divider: true,
  },
  {
    text: "YouTube Music",
    Icon: <PlayCircleFilledIcon style={styleForAppsIcons} />,
  },
  {
    text: "YouTube Kids",
    Icon: <FaceIcon style={styleForAppsIcons} />,
    divider: true,
  },
  { text: "Creator Academy", Icon: <ArtTrackIcon style={styleForAppsIcons} /> },
  {
    text: "YouTube for Artists",
    Icon: <YouTubeIcon style={styleForAppsIcons} />,
  },
];

const styleForArrowIcon = { width: "0.7rem", height: "0.7rem" };
const ArrowForwardIosIconWithStyle = () => (
  <ArrowForwardIosIcon style={styleForArrowIcon} />
);

//more dropdown list data
export const moreDropDownListData = [
  {
    text: "Appearnce: Light",
    Icon: <Brightness4Icon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  {
    text: "Language: British English",
    Icon: <TranslateIcon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  {
    text: "Location: Pakistan",
    Icon: <LanguageIcon />,
    lastIcon: <ArrowForwardIosIconWithStyle />,
  },
  { text: "Settings", Icon: <SettingsIcon /> },
  { text: "Your data in YouTube", Icon: <SecurityIcon /> },
  { text: "Help", Icon: <HelpIcon /> },
  { text: "Send feedback", Icon: <FeedbackIcon /> },
  { text: "Keyboard shortcuts", Icon: <KeyboardIcon />, divider: true },
  { text: "Restricted Mode: On" },
];

//create video dropdown list data

const styleForCreateVideosIcons = { color: "#ff0000" };

export const createVideosDropDownListData = [
  {
    text: "Upload video",
    Icon: <LiveTvIcon style={styleForCreateVideosIcons} />,
  },
  {
    text: "Go live",
    Icon: <SettingsInputAntennaIcon style={styleForCreateVideosIcons} />,
  },
];
