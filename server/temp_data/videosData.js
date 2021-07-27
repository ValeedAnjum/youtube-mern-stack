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
      "https://i.ytimg.com/an_webp/GON4kF-gp4A/mqdefault_6s.webp?du=3000&sqp=CICy-IcG&rs=AOn4CLC7tNRl9JN0PGuCuqDPiEm-DTSxCg",
    src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GON4kF-gp4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    title:
      "Daily 60 KG Aloo Ke Chips Bechne Wala - Jisne Nokri Chor Kar Arabian Foods Ka Auto Stall Laga Lia",
    searchTitle: "Nokri Chor Kar Stall Laga Lia",
    thumbnail:
      "https://i.ytimg.com/an_webp/6RN3uzDrlcM/mqdefault_6s.webp?du=3000&sqp=CIHv-IcG&rs=AOn4CLB1NRq6do042k4ptIZYgxJM-8fSeg",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6RN3uzDrlcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "10 Animals That Can Defeat A Lion",
    searchTitle: "10 Animals That Can Defeat A Lion",
    thumbnail:
      "https://i.ytimg.com/an_webp/6KV7p3QtM9g/mqdefault_6s.webp?du=3000&sqp=CODN-IcG&rs=AOn4CLAYY5CQmGEFYxtrI3wPTF6MReM3Ug",
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
      "https://i.ytimg.com/an_webp/LuIxFw34YFU/mqdefault_6s.webp?du=3000&sqp=CNOt-IcG&rs=AOn4CLCDNl_bY8ixQ21498A32UnwRO-x-g",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LuIxFw34YFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Istiklal Street |Night Walking Tour In The Beating heart Of Istanbul 17July 2021 |4k UHD 60fps",
    searchTitle: "Istiklal Street 4k UHD 60fps",
    thumbnail:
      "https://i.ytimg.com/an_webp/t_fA6amyfGs/mqdefault_6s.webp?du=3000&sqp=CLrH-IcG&rs=AOn4CLAWXKALOQsd8fKxv98oP5y5kDS1oQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t_fA6amyfGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Ronaldo First Day at Juventus!",
    searchTitle: "Ronaldo First Day at Juventus!",
    thumbnail:
      "https://i.ytimg.com/an_webp/_DyxqCcidTg/mqdefault_6s_480x270.webp?du=3000&sqp=CODo-IcG&rs=AOn4CLDSX4U9vKTM5KBisuuJaDCuUDS6xg",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_DyxqCcidTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "They Call Me Trinity | WESTERN | English | Full Length Spaghetti Western Film | Full Movie",
    searchTitle: "They Call Me Trinity",
    thumbnail:
      "https://i.ytimg.com/an_webp/r8dfQja43Ik/mqdefault_6s_480x270.webp?du=3000&sqp=CK3a-IcG&rs=AOn4CLDUGGJzl1yR4fb-ZcLq9bLx1NcTzg",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/r8dfQja43Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Ertugrul Ghazi Urdu | Episode 60| Season 4",
    searchTitle: "Ertugrul Ghazi Urdu",
    thumbnail:
      "https://i.ytimg.com/an_webp/pbx2K04pTrk/mqdefault_6s.webp?du=3000&sqp=CJf3-IcG&rs=AOn4CLCVmVIhImGLUJ8EhYNR4Wuj34BmFQ",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/pbx2K04pTrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Mission Dubai | Part 1 | Paisay Kahan gaye? | Our Vines | Rakx Production",
    searchTitle: "Mission Dubai",
    thumbnail:
      "https://i.ytimg.com/an_webp/Fbu-i8m_MFw/mqdefault_6s.webp?du=3000&sqp=CLD3-IcG&rs=AOn4CLDrqOHIzunoFWYMG_qsLG4DAQeQuA",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Fbu-i8m_MFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "MongoDB 5.0, Build a Flutter Game, FARM Stack ?🤯 // STACKr News Weekly - Issue 3",
    searchTitle: "MongoDB 5.0, Build a Flutter Game",
    thumbnail:
      "https://i.ytimg.com/an_webp/UyO3r3_rECw/mqdefault_6s.webp?du=3000&sqp=CMDy-IcG&rs=AOn4CLAYkTa0h_hdhbOzCdCv5dkPxpH0fw",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/UyO3r3_rECw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title:
      "Christian Sister Accept Islam After She Got Her 2 Answer - Dr. Zakir Naik",
    searchTitle: "Christian Sister Accept Islam - Dr. Zakir Naik",
    thumbnail:
      "https://i.ytimg.com/an_webp/T5ZlSSOhbzQ/mqdefault_6s.webp?du=3000&sqp=CPDb-IcG&rs=AOn4CLCi8bI2MkqPefki-irOmk-f3ynGCA",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/T5ZlSSOhbzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "Why Web Development Is Hard",
    searchTitle: "Why Web Development Is Hard",
    thumbnail:
      "https://i.ytimg.com/an_webp/CuWowKXsNHg/mqdefault_6s.webp?du=3000&sqp=CMDh-IcG&rs=AOn4CLCmzD-17AhM2A41vRNj5Dz8EExUMA",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CuWowKXsNHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    title: "React Tutorial For Beginners",
    searchTitle: "React Tutorial For Beginners",
    thumbnail:
      "https://i.ytimg.com/an_webp/dGcsHMXbSOA/mqdefault_6s_480x270.webp?du=3000&sqp=CID9-IcG&rs=AOn4CLB9pHHBHgC_VfJaYcsWGEvpO9mk9g",
    src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dGcsHMXbSOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

module.exports = videosData;
