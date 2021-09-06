const videosData = [
  {
    title: "Web Developer Jobs with Just HTML & CSS",
    searchTitle: "Web Developer Jobs with Just HTML & CSS",
    thumbnail:
      "https://i.ytimg.com/vi/SWLjGeP_4C4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB99eMy3OfaLrga_CNcdNMlxt6QNg",
    src: "https://www.youtube.com/embed/SWLjGeP_4C4",
    videoDuration: "1:40:39",
  },
  {
    title: "From $13 Hour to $22,000 a month (Developer Stories - Codingphase)",
    searchTitle: "From $13 Hour to $22,000 a month",
    thumbnail:
      "https://i.ytimg.com/vi/Z6IvLgDMP7w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqh3IVzltuZNBYd66fc5AAqhK63Q",
    src: "https://www.youtube.com/embed/Z6IvLgDMP7w",
    videoDuration: "20:50",
  },
  {
    title:
      "Are You Ready to apply to Web Development and Engineering jobs? | Tech Industry",
    searchTitle: "Are You Ready to apply to jobs?",
    thumbnail:
      "https://i.ytimg.com/vi/06zPxlwpI98/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBxhnDRvNWPGUXcj1bt_v_JrwuLQ",
    src: `https://www.youtube.com/embed/06zPxlwpI98`,
    videoDuration: "10:54",
  },
  {
    title: "10 Animals That Can Defeat A Lion",
    searchTitle: "10 Animals That Can Defeat A Lion",
    thumbnail:
      "https://i.ytimg.com/vi/cmpX9u6hRQo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0TYSoU_cyRS3bL2M6hY7X220Jrg",
    src: `https://www.youtube.com/embed/6KV7p3QtM9g`,
    videoDuration: "9:46",
  },
  {
    title:
      "Make $500/Week With an Email List - Developer Side Hustle(Passive Income) #grindreel",
    searchTitle: "Make $500/Week With an Email List",
    thumbnail:
      "https://i.ytimg.com/vi/Y4A3kFndF40/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9jT1i2_anSHa2YHQz9UnWHTkGQg",
    src: `https://www.youtube.com/embed/Y4A3kFndF40`,
    videoDuration: "11:39",
  },
  {
    title: "Why people fail at learning code",
    searchTitle: "Why people fail at learning code",
    thumbnail:
      "https://i.ytimg.com/vi/BYU9HUSAueM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvkRPMdNpegF3dp85W1wYgga_D_w",
    src: `https://www.youtube.com/embed/BYU9HUSAueM`,
    videoDuration: "10:11",
  },
  {
    title: "Can you get a job with THESE REAL portfolios?",
    searchTitle: "Can you get a job with THESE REAL portfolios?",
    thumbnail:
      "https://i.ytimg.com/vi/AZUxfJ9PvoM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPHSyv4c6OQsUFxeYbOjcT4jsknw",
    src: `https://www.youtube.com/embed/AZUxfJ9PvoM`,
    videoDuration: "11:46",
  },
  {
    title: "Ronaldo First Day at Juventus!",
    searchTitle: "Ronaldo First Day at Juventus!",
    thumbnail:
      "https://i.ytimg.com/vi/_DyxqCcidTg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSNok5eALZLgGwE1Ucv_huof8Ozw",
    src: `https://www.youtube.com/embed/_DyxqCcidTg`,
    videoDuration: "4:26",
  },
  {
    title:
      "Web Developer: I Got Hired After 2 Months Studying to Code | #CodingPhase",
    searchTitle: "I Got Hired After 2 Months Studying to Code",
    thumbnail:
      "https://i.ytimg.com/vi/JsgZx2MLwxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeC9YfDG_nPjuUODUlmm6z6XZHuw",
    src: `https://www.youtube.com/embed/JsgZx2MLwxA`,
    videoDuration: "5:05",
  },
  {
    title:
      "Task 80 - WordPress Theme Development from Scratch - Coding Phase - Urdu | Hindi",
    searchTitle: "WordPress Theme Development from Scratch",
    thumbnail:
      "https://i.ytimg.com/vi/SsdJk1-_JYE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMvO9FmfzCFcXJHXNS45pFfFmIUA",
    src: `https://www.youtube.com/embed/SsdJk1-_JYE`,
    videoDuration: "1:03:46",
  },
  {
    title:
      "Web Developer Portfolio Review - Focused On HTML Emails Guaranteed To Get Hired",
    searchTitle: "Focused On HTML Emails Guaranteed To Get Hired",
    thumbnail:
      "https://i.ytimg.com/vi/eTghRu0Pt_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMYurPoftXCk_RTK2S4uuFmVBXYA",
    src: `https://www.youtube.com/embed/Fbu-i8m_MFw`,
    videoDuration: "16:05",
  },
  {
    title: "5 Projects to Get You Hired as an HTML Email Developer",
    searchTitle: "5 Projects to Get You Hired as an HTML Email Developer",
    thumbnail:
      "https://i.ytimg.com/vi/3I2gLI7k_Wk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzIifs2wtTlnYaafpAGdlH-JHWfg",
    src: `https://www.youtube.com/embed/3I2gLI7k_Wk`,
  },
  {
    title:
      "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik",
    searchTitle: "Christian Sister Accept Islam - Dr. Zakir Naik",
    thumbnail:
      "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ",
    src: `https://www.youtube.com/embed/T5ZlSSOhbzQ`,
    videoDuration: "4:20",
  },
  {
    title: "Why PHP Frameworks | #CodingPhase",
    searchTitle: "Why PHP Frameworks | #CodingPhase",
    thumbnail:
      "https://i.ytimg.com/vi/mT08N8Lfwhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF70z_S3A46AdzNnzf5_TX9thoOg",
    src: `https://www.youtube.com/embed/mT08N8Lfwhg`,
    videoDuration: "17:15",
  },
  {
    title: "Everything You Need To Know to Become A HTML Email Developer",
    searchTitle: "Become A HTML Email Developer",
    thumbnail:
      "https://i.ytimg.com/vi/j7vxvX0yoVM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMDEcbC23_i9nJvMLHSXJAy9U7Fw",
    src: `https://www.youtube.com/embed/j7vxvX0yoVM`,
    videoDuration: "23:22",
  },
];

module.exports = videosData;
