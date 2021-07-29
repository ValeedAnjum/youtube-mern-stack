const videosData = [
  {
    title:
      "ARY NEWS LIVE | Latest Pakistan News 24/7 | Headlines , Bulletins, Special & Exclusive Coverage",
    searchTitle: "ARY NEWS LIVE",
    thumbnail:
      "https://i.ytimg.com/vi/38IEolI8f-w/hq720_live.jpg?sqp=CPDv-IcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpp8eBs9moeiX_JbV--tvFJF20bA",
    src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/38IEolI8f-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    title: "How to Trade Forex | Live Demonstration | Educational Video",
    searchTitle: "Trade Forex Live",
    thumbnail:
      "https://i.ytimg.com/vi/GON4kF-gp4A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFgw9b9hCd3zeZ_OSE6u3c77-YoQ",
    src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GON4kF-gp4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    title:
      "Daily 60 KG Aloo Ke Chips Bechne Wala - Jisne Nokri Chor Kar Arabian Foods Ka Auto Stall Laga Lia",
    searchTitle: "Nokri Chor Kar Stall Laga Lia",
    thumbnail:
      "https://i.ytimg.com/vi/6RN3uzDrlcM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuu0wY4aR7L3ZgZcZvJARBaC3E4Q",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6RN3uzDrlcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "10 Animals That Can Defeat A Lion",
    searchTitle: "10 Animals That Can Defeat A Lion",
    thumbnail:
      "https://i.ytimg.com/vi/cmpX9u6hRQo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0TYSoU_cyRS3bL2M6hY7X220Jrg",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6KV7p3QtM9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "AMJAD BALTISTANI | YA HAYYU YA QAYYUM | Official Video | Kalam 2021",
    searchTitle: "AMJAD BALTISTANI | YA HAYYU YA QAYYUM",
    thumbnail:
      "https://i.ytimg.com/vi/LwO9COsEJn8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6T2x4iSKR4he-YgY5PEA9l7E-Ow",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LwO9COsEJn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Azad Kashmir Legislative Assembly elections PTI won 15 seats",
    searchTitle: "Azad Kashmir elections PTI won 15 seats",
    thumbnail:
      "https://i.ytimg.com/vi/ioARqKQLbdQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsza7Qei3LAYfP5rsODeASKPePbQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LuIxFw34YFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Istiklal Street |Night Walking Tour In The Beating heart Of Istanbul 17July 2021 |4k UHD 60fps",
    searchTitle: "Istiklal Street 4k UHD 60fps",
    thumbnail:
      "https://i.ytimg.com/vi/t_fA6amyfGs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBntm8HvuJx2jkkXX1WdQ9kbvjW7A",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t_fA6amyfGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Ronaldo First Day at Juventus!",
    searchTitle: "Ronaldo First Day at Juventus!",
    thumbnail:
      "https://i.ytimg.com/vi/_DyxqCcidTg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSNok5eALZLgGwE1Ucv_huof8Ozw",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_DyxqCcidTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "They Call Me Trinity | WESTERN | English | Full Length Spaghetti Western Film | Full Movie",
    searchTitle: "They Call Me Trinity",
    thumbnail:
      "https://i.ytimg.com/vi/CVw1WMJFdlQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEBLtSbTNh60h3CBCw_kIYja3_NQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/r8dfQja43Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Ertugrul Ghazi Urdu | Episode 60| Season 4",
    searchTitle: "Ertugrul Ghazi Urdu",
    thumbnail:
      "https://i.ytimg.com/vi/aJMXuCkP6vE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrEBqLiDaKQYQO47iK1bpbBHjqCA",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/pbx2K04pTrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Mission Dubai | Part 1 | Paisay Kahan gaye? | Our Vines | Rakx Production",
    searchTitle: "Mission Dubai",
    thumbnail:
      "https://i.ytimg.com/vi/Fbu-i8m_MFw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6UprzwJJLPniyWIyLYIpUA0HzWw",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Fbu-i8m_MFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "MongoDB 5.0, Build a Flutter Game, FARM Stack ?🤯 // STACKr News Weekly - Issue 3",
    searchTitle: "MongoDB 5.0, Build a Flutter Game",
    thumbnail:
      "https://i.ytimg.com/vi/UyO3r3_rECw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjO6GcBuMGmW8tzYqiA-ih1ILDag",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/UyO3r3_rECw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik",
    searchTitle: "Christian Sister Accept Islam - Dr. Zakir Naik",
    thumbnail:
      "https://i.ytimg.com/vi/T5ZlSSOhbzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE1GtvJ71DA7wgpdS9YMPDCNaloQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/T5ZlSSOhbzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Why Web Development Is Hard",
    searchTitle: "Why Web Development Is Hard",
    thumbnail:
      "https://i.ytimg.com/vi/4cM5OP1A_H0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjKFtcNXsJXiZ0zoxdOB43XCMz8w",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CuWowKXsNHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "React Tutorial For Beginners",
    searchTitle: "React Tutorial For Beginners",
    thumbnail:
      "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3_J8cSnEXaxGCt_FS2SLg9dc0SQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dGcsHMXbSOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

module.exports = videosData;
