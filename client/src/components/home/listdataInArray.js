import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsIcon from "@material-ui/icons/Sports";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import AddIcon from "@material-ui/icons/Add";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
export const drawerListContentData = [
  {
    Text: "Home",
    Icon: <HomeIcon />,
    To: "/home",
  },
  {
    Text: "Explore",
    Icon: <ExploreIcon />,
    To: "/home/explore",
  },
  {
    Text: "Subscritions",
    Icon: <SubscriptionsIcon />,
    Dividr: true,
    To: "/home/subscritions",
  },
  {
    Text: "Library",
    Icon: <VideoLibraryIcon />,
    To: "/home/library",
  },
  {
    Text: "History",
    Icon: <HistoryIcon />,
    Dividr: true,
    To: "/home/history",
  },
  {
    Heading: "best of youtube",
  },
  {
    Text: "Music",
    Icon: <LibraryMusicIcon />,
    To: "/home/music",
  },
  {
    Text: "Sports",
    Icon: <SportsIcon />,
    To: "/home/sports",
  },
  {
    Text: "Gaming",
    Icon: <SportsEsportsIcon />,
    To: "/home/gaming",
  },
  {
    Text: "News",
    Icon: <AnnouncementIcon />,
    To: "/home/news",
  },
  {
    Text: "Live",
    Icon: <SignalCellularAltIcon />,
    To: "/home/live",
  },
  {
    Text: "360 videos",
    Icon: <SlowMotionVideoIcon />,
    Dividr: true,
    To: "/home/360videos",
  },
  {
    Text: "Browse channels",
    Icon: <AddIcon />,
    Dividr: true,
    To: "/home/browsechannels",
  },
  {
    Heading: "more from youtube",
  },
  {
    Text: "Live",
    Icon: <SignalWifi4BarIcon />,
    Dividr: true,
    To: "/home/livestreaming",
  },
  {
    Text: "Settings",
    Icon: <SettingsIcon />,
    To: "/home/settings",
  },
  {
    Text: "Report history",
    Icon: <FlagIcon />,
    To: "/home/reporthistory",
  },
  {
    Text: "Help",
    Icon: <HelpIcon />,
    To: "/home/help",
  },
  {
    Text: "Send feedback",
    Icon: <AnnouncementIcon />,
    Dividr: true,
    To: "/home/sendfeedback",
  },
];
