const websites = [

  // ===== AI =====
{
    name: "ChatGPT",
    url: "https://chatgpt.com",
    category: "AI",
    desc: "AI assistant for writing and coding",
    free: true,
    top: true,
    trending: true
},
  {
    name: "Google Gemini",
    url: "https://gemini.google.com",
    category: "AI",
    desc: "Google AI assistant",
    free: true
  },

{
    name: "Microsoft Copilot",
    url: "https://copilot.microsoft.com",
    category: "AI",
    desc: "Microsoft AI assistant",
    free: true,
    top: true,
    trending: true
},
{
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    category: "AI",
    desc: "Advanced AI chatbot",
    free: true,
    top: true,
    trending: true
},
{
    name: "Grok",
    url: "https://grok.com",
    category: "AI",
    desc: "AI assistant by xAI",
    free: true,
    top: true,
    trending: true
},
{
    name: "Poe",
    url: "https://poe.com",
    category: "AI",
    desc: "Multiple AI models in one place",
    free: true,
    top: true,
    trending: false
},

{
name:"YouTube Music",
url:"https://music.youtube.com",
category:"Music",
desc:"Music streaming by YouTube",
free:true,
top:true,
trending:true
},
{
name:"Apple Music",
url:"https://music.apple.com",
category:"Music",
desc:"Apple music streaming",
free:false,
top:true,
trending:true
},
{
name:"Amazon Music",
url:"https://music.amazon.com",
category:"Music",
desc:"Amazon music service",
free:false,
top:true,
trending:false
},
{
name:"JioSaavn",
url:"https://www.jiosaavn.com",
category:"Music",
desc:"Indian music streaming",
free:true,
top:true,
trending:true
},
{
name:"Gaana",
url:"https://gaana.com",
category:"Music",
desc:"Online music platform",
free:true,
top:true,
trending:false
},
{
name:"Wynk Music",
url:"https://wynk.in/music",
category:"Music",
desc:"Airtel music app",
free:true,
top:false,
trending:false
},

{
name:"Facebook",
url:"https://www.facebook.com",
category:"Social Media",
desc:"Connect with friends",
free:true,
top:true,
trending:true
},
{
name:"Instagram",
url:"https://www.instagram.com",
category:"Social Media",
desc:"Photo & video sharing",
free:true,
top:true,
trending:true
},
{
name:"X",
url:"https://x.com",
category:"Social Media",
desc:"Social networking platform",
free:true,
top:true,
trending:true
},
{
name:"Threads",
url:"https://www.threads.net",
category:"Social Media",
desc:"Text sharing platform",
free:true,
top:true,
trending:true
},
{
name:"Snapchat",
url:"https://www.snapchat.com",
category:"Social Media",
desc:"Share snaps & stories",
free:true,
top:true,
trending:false
},
{
name:"LinkedIn",
url:"https://www.linkedin.com",
category:"Social Media",
desc:"Professional networking",
free:true,
top:true,
trending:true
},
{
name:"Pinterest",
url:"https://www.pinterest.com",
category:"Social Media",
desc:"Ideas & inspiration",
free:true,
top:true,
trending:false
},
{
name:"Reddit",
url:"https://www.reddit.com",
category:"Social Media",
desc:"Communities & discussions",
free:true,
top:true,
trending:true
},
{
name:"Discord",
url:"https://discord.com",
category:"Social Media",
desc:"Voice & text communities",
free:true,
top:true,
trending:true
},
{
name:"Telegram",
url:"https://telegram.org",
category:"Social Media",
desc:"Messaging platform",
free:true,
top:true,
trending:true
},

{
name:"Google News",
url:"https://news.google.com",
category:"News",
desc:"Latest news worldwide",
free:true,
top:true,
trending:true
},
{
name:"BBC News",
url:"https://www.bbc.com/news",
category:"News",
desc:"International news",
free:true,
top:true,
trending:true
},
{
name:"CNN",
url:"https://edition.cnn.com",
category:"News",
desc:"Breaking news",
free:true,
top:true,
trending:true
},
{
name:"Reuters",
url:"https://www.reuters.com",
category:"News",
desc:"Global news agency",
free:true,
top:true,
trending:true
},
{
name:"NDTV",
url:"https://www.ndtv.com",
category:"News",
desc:"Indian news",
free:true,
top:true,
trending:false
},
{
name:"India Today",
url:"https://www.indiatoday.in",
category:"News",
desc:"News & current affairs",
free:true,
top:true,
trending:false
},
{
name:"The Hindu",
url:"https://www.thehindu.com",
category:"News",
desc:"Indian newspaper",
free:true,
top:true,
trending:false
},
{
name:"Times of India",
url:"https://timesofindia.indiatimes.com",
category:"News",
desc:"Latest Indian news",
free:true,
top:true,
trending:false
},
{
name:"Hindustan Times",
url:"https://www.hindustantimes.com",
category:"News",
desc:"National & world news",
free:true,
top:false,
trending:false
},
  
{
name:"News18",
url:"https://www.news18.com",
category:"News",
desc:"Indian news portal",
free:true,
top:false,
trending:false
},

{
name:"Figma",
url:"https://www.figma.com",
category:"Design",
desc:"UI/UX design tool",
free:true,
top:true,
trending:true
},
{
name:"Adobe Express",
url:"https://www.adobe.com/express",
category:"Design",
desc:"Quick graphic design",
free:true,
top:true,
trending:true
},
{
name:"Adobe Photoshop",
url:"https://www.adobe.com/products/photoshop.html",
category:"Design",
desc:"Professional photo editing",
free:false,
top:true,
trending:true
},
{
name:"Adobe Illustrator",
url:"https://www.adobe.com/products/illustrator.html",
category:"Design",
desc:"Vector graphics editor",
free:false,
top:true,
trending:false
},
{
name:"Photopea",
url:"https://www.photopea.com",
category:"Design",
desc:"Free online Photoshop",
free:true,
top:true,
trending:true
},
{
name:"Pixlr",
url:"https://pixlr.com",
category:"Design",
desc:"Online photo editor",
free:true,
top:false,
trending:false
},
{
name:"Remove.bg",
url:"https://www.remove.bg",
category:"Design",
desc:"Remove image background",
free:true,
top:true,
trending:true
},
{
name:"Coolors",
url:"https://coolors.co",
category:"Design",
desc:"Color palette generator",
free:true,
top:false,
trending:false
},
{
name:"Dribbble",
url:"https://dribbble.com",
category:"Design",
desc:"Design inspiration",
free:true,
top:true,
trending:false
},
{
name:"Behance",
url:"https://www.behance.net",
category:"Design",
desc:"Creative portfolio",
free:true,
top:true,
trending:false
},

{
name:"Notion",
url:"https://www.notion.so",
category:"Productivity",
desc:"Notes & workspace",
free:true,
top:true,
trending:true
},
{
name:"Trello",
url:"https://trello.com",
category:"Productivity",
desc:"Task management",
free:true,
top:true,
trending:false
},
{
name:"Asana",
url:"https://asana.com",
category:"Productivity",
desc:"Project management",
free:true,
top:true,
trending:false
},
{
name:"Slack",
url:"https://slack.com",
category:"Productivity",
desc:"Team communication",
free:true,
top:true,
trending:true
},
{
name:"Zoom",
url:"https://zoom.us",
category:"Productivity",
desc:"Video meetings",
free:true,
top:true,
trending:false
},
{
name:"Google Keep",
url:"https://keep.google.com",
category:"Productivity",
desc:"Quick notes",
free:true,
top:false,
trending:false
},
{
name:"Todoist",
url:"https://todoist.com",
category:"Productivity",
desc:"Task organizer",
free:true,
top:false,
trending:false
},
{
name:"Evernote",
url:"https://evernote.com",
category:"Productivity",
desc:"Notes & organization",
free:true,
top:false,
trending:false
},
{
name:"Google Calendar",
url:"https://calendar.google.com",
category:"Productivity",
desc:"Schedule planner",
free:true,
top:true,
trending:false
},
{
name:"Microsoft To Do",
url:"https://to-do.microsoft.com",
category:"Productivity",
desc:"Task management",
free:true,
top:false,
trending:false
},

{
name:"VirusTotal",
url:"https://www.virustotal.com",
category:"Security",
desc:"Scan files & URLs",
free:true,
top:true,
trending:true
},
{
name:"Have I Been Pwned",
url:"https://haveibeenpwned.com",
category:"Security",
desc:"Check data breaches",
free:true,
top:true,
trending:true
},
{
name:"1Password",
url:"https://1password.com",
category:"Security",
desc:"Password manager",
free:false,
top:true,
trending:false
},
{
name:"Bitwarden",
url:"https://bitwarden.com",
category:"Security",
desc:"Free password manager",
free:true,
top:true,
trending:true
},
{
name:"NordVPN",
url:"https://nordvpn.com",
category:"Security",
desc:"VPN service",
free:false,
top:true,
trending:true
},
{
name:"Proton VPN",
url:"https://protonvpn.com",
category:"Security",
desc:"Privacy-focused VPN",
free:true,
top:true,
trending:false
},
{
name:"Cloudflare",
url:"https://www.cloudflare.com",
category:"Security",
desc:"Web security & CDN",
free:true,
top:true,
trending:true
},
{
name:"LastPass",
url:"https://www.lastpass.com",
category:"Security",
desc:"Password manager",
free:true,
top:false,
trending:false
  },

{
name:"LinkedIn Jobs",
url:"https://www.linkedin.com/jobs",
category:"Jobs",
desc:"Find jobs worldwide",
free:true,
top:true,
trending:true
},
{
name:"Indeed",
url:"https://in.indeed.com",
category:"Jobs",
desc:"Job search platform",
free:true,
top:true,
trending:true
},
{
name:"Naukri",
url:"https://www.naukri.com",
category:"Jobs",
desc:"Indian job portal",
free:true,
top:true,
trending:true
},
{
name:"Foundit",
url:"https://www.foundit.in",
category:"Jobs",
desc:"Career opportunities",
free:true,
top:false,
trending:false
},
{
name:"Internshala",
url:"https://internshala.com",
category:"Jobs",
desc:"Internships & jobs",
free:true,
top:true,
trending:true
},
{
name:"Glassdoor",
url:"https://www.glassdoor.com",
category:"Jobs",
desc:"Jobs & company reviews",
free:true,
top:true,
trending:false
},
{
name:"Wellfound",
url:"https://wellfound.com",
category:"Jobs",
desc:"Startup jobs",
free:true,
top:false,
trending:false
},
{
name:"Upwork",
url:"https://www.upwork.com",
category:"Jobs",
desc:"Freelance marketplace",
free:true,
top:true,
trending:true
},
{
name:"Fiverr",
url:"https://www.fiverr.com",
category:"Jobs",
desc:"Freelance services",
free:true,
top:true,
trending:true
},
{
name:"Freelancer",
url:"https://www.freelancer.com",
category:"Jobs",
desc:"Freelance projects",
free:true,
top:true,
trending:false
},

// ===== Finance =====

{
name:"Google Finance",
url:"https://www.google.com/finance",
category:"Finance",
desc:"Market information",
free:true,
top:true,
trending:true
},
{
name:"Yahoo Finance",
url:"https://finance.yahoo.com",
category:"Finance",
desc:"Stock market news",
free:true,
top:true,
trending:true
},
{
name:"TradingView",
url:"https://www.tradingview.com",
category:"Finance",
desc:"Charts & analysis",
free:true,
top:true,
trending:true
},
{
name:"Moneycontrol",
url:"https://www.moneycontrol.com",
category:"Finance",
desc:"Indian finance news",
free:true,
top:true,
trending:true
},
{
name:"Groww",
url:"https://groww.in",
category:"Finance",
desc:"Invest in stocks & mutual funds",
free:true,
top:true,
trending:true
},
{
name:"Zerodha",
url:"https://zerodha.com",
category:"Finance",
desc:"Stock broker",
free:true,
top:true,
trending:true
},
{
name:"Upstox",
url:"https://upstox.com",
category:"Finance",
desc:"Trading platform",
free:true,
top:false,
trending:false
},
{
name:"CoinMarketCap",
url:"https://coinmarketcap.com",
category:"Finance",
desc:"Crypto prices",
free:true,
top:true,
trending:true
},
{
name:"CoinGecko",
url:"https://www.coingecko.com",
category:"Finance",
desc:"Cryptocurrency tracker",
free:true,
top:false,
trending:false
},
{
name:"Paytm Money",
url:"https://www.paytmmoney.com",
category:"Finance",
desc:"Investment platform",
free:true,
top:false,
trending:false
},
  
{
name:"Audiomack",
url:"https://audiomack.com",
category:"Music",
desc:"Discover new music",
free:true,
top:false,
trending:false
},
{
name:"Bandcamp",
url:"https://bandcamp.com",
category:"Music",
desc:"Support independent artists",
free:true,
top:false,
trending:false
},
{
name:"Genius",
url:"https://genius.com",
category:"Music",
desc:"Lyrics and song meanings",
free:true,
top:true,
trending:false
},
{
name:"Shazam",
url:"https://www.shazam.com",
category:"Music",
desc:"Identify songs instantly",
free:true,
top:true,
trending:true
},

// ===== Gaming =====

{
name:"Steam",
url:"https://store.steampowered.com",
category:"Gaming",
desc:"PC game store",
free:true,
top:true,
trending:true
},
{
name:"Epic Games",
url:"https://store.epicgames.com",
category:"Gaming",
desc:"Game store & free games",
free:true,
top:true,
trending:true
},
{
name:"Xbox",
url:"https://www.xbox.com",
category:"Gaming",
desc:"Xbox gaming platform",
free:true,
top:true,
trending:false
},
{
name:"PlayStation",
url:"https://www.playstation.com",
category:"Gaming",
desc:"PlayStation official",
free:true,
top:true,
trending:true
},
{
name:"Nintendo",
url:"https://www.nintendo.com",
category:"Gaming",
desc:"Nintendo games",
free:true,
top:true,
trending:false
},
{
name:"Roblox",
url:"https://www.roblox.com",
category:"Gaming",
desc:"Play and create games",
free:true,
top:true,
trending:true
},
{
name:"Minecraft",
url:"https://www.minecraft.net",
category:"Gaming",
desc:"Sandbox adventure game",
free:false,
top:true,
trending:true
},
{
name:"Chess.com",
url:"https://www.chess.com",
category:"Gaming",
desc:"Play chess online",
free:true,
top:true,
trending:false
},
{
name:"Lichess",
url:"https://lichess.org",
category:"Gaming",
desc:"Free chess platform",
free:true,
top:false,
trending:false
},
{
name:"Poki",
url:"https://poki.com",
category:"Gaming",
desc:"Free online games",
free:true,
top:false,
trending:false
},

// ===== Travel =====

{
name:"Booking.com",
url:"https://www.booking.com",
category:"Travel",
desc:"Hotel booking",
free:true,
top:true,
trending:true
},
{
name:"Airbnb",
url:"https://www.airbnb.com",
category:"Travel",
desc:"Vacation rentals",
free:true,
top:true,
trending:true
},
{
name:"Agoda",
url:"https://www.agoda.com",
category:"Travel",
desc:"Hotel deals",
free:true,
top:true,
trending:false
},
{
name:"MakeMyTrip",
url:"https://www.makemytrip.com",
category:"Travel",
desc:"Flights & hotels",
free:true,
top:true,
trending:true
},
{
name:"Goibibo",
url:"https://www.goibibo.com",
category:"Travel",
desc:"Travel booking",
free:true,
top:true,
trending:false
},
{
name:"Yatra",
url:"https://www.yatra.com",
category:"Travel",
desc:"Travel services",
free:true,
top:false,
trending:false
},
{
name:"Tripadvisor",
url:"https://www.tripadvisor.com",
category:"Travel",
desc:"Travel reviews",
free:true,
top:true,
trending:true
},
{
name:"Skyscanner",
url:"https://www.skyscanner.com",
category:"Travel",
desc:"Flight comparison",
free:true,
top:true,
trending:false
},
{
name:"Google Maps",
url:"https://maps.google.com",
category:"Travel",
desc:"Maps & navigation",
free:true,
top:true,
trending:true
},
{
name:"IRCTC",
url:"https://www.irctc.co.in",
category:"Travel",
desc:"Indian railway booking",
free:true,
top:true,
trending:true
},
{
    name: "Hugging Face",
    url: "https://huggingface.co",
    category: "AI",
    desc: "Open-source AI models",
    free: true,
    top: true,
    trending: false
},
{
    name: "Leonardo AI",
    url: "https://leonardo.ai",
    category: "AI",
    desc: "AI image generator",
    free: true,
    top: true,
    trending: true
},
{
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "AI",
    desc: "AI image generation",
    free: false,
    top: true,
    trending: true
},
{
    name: "Runway",
    url: "https://runwayml.com",
    category: "AI",
    desc: "AI video generation",
    free: true,
    top: true,
    trending: true
},
{
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    category: "AI",
    desc: "AI voice generator",
    free: true,
    top: true,
    trending: true
},
{
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    category: "AI",
    desc: "Google AI research notebook",
    free: true,
    top: true,
    trending: true
  },
  
  {
    name: "Claude",
    url: "https://claude.ai",
    category: "AI",
    desc: "AI assistant by Anthropic",
    free: true
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    category: "AI",
    desc: "AI search engine",
    free: true
  },

  // ===== Coding =====
  {
    name: "GitHub",
    url: "https://github.com",
    category: "Coding",
    desc: "Host and manage code repositories",
    free: true
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    category: "Coding",
    desc: "Programming questions and answers",
    free: true
  },

  // ===== Design =====
  {
    name: "Canva",
    url: "https://www.canva.com",
    category: "Design",
    desc: "Online graphic design platform",
    free: true
  },
  {
    name: "Adobe Express",
    url: "https://www.adobe.com/express",
    category: "Design",
    desc: "Quick photo and graphic editing",
    free: true
  },

  // ===== Music =====
  {
    name: "Spotify",
    url: "https://spotify.com",
    category: "Music",
    desc: "Music streaming service",
    free: true
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com",
    category: "Music",
    desc: "Discover and stream music",
    free: true
  },
 // ===== AI =====

{
name:"Microsoft Copilot",
url:"https://copilot.microsoft.com",
category:"AI",
desc:"Microsoft AI assistant",
free:true,
top:true,
trending:true
},
{
name:"DeepSeek",
url:"https://chat.deepseek.com",
category:"AI",
desc:"Advanced AI chatbot",
free:true,
top:true,
trending:true
},
{
name:"Grok",
url:"https://grok.com",
category:"AI",
desc:"AI assistant by xAI",
free:true,
top:true,
trending:true
},
{
name:"Poe",
url:"https://poe.com",
category:"AI",
desc:"Multiple AI models",
free:true,
top:true,
trending:false
},
{
name:"Hugging Face",
url:"https://huggingface.co",
category:"AI",
desc:"Open source AI models",
free:true,
top:true,
trending:false
},
{
name:"Leonardo AI",
url:"https://leonardo.ai",
category:"AI",
desc:"AI image generator",
free:true,
top:true,
trending:true
},
{
name:"Midjourney",
url:"https://www.midjourney.com",
category:"AI",
desc:"AI image creator",
free:false,
top:true,
trending:true
},
{
name:"Runway",
url:"https://runwayml.com",
category:"AI",
desc:"AI video generation",
free:true,
top:true,
trending:true
},
{
name:"ElevenLabs",
url:"https://elevenlabs.io",
category:"AI",
desc:"AI voice generator",
free:true,
top:true,
trending:true
},
{
name:"NotebookLM",
url:"https://notebooklm.google.com",
category:"AI",
desc:"Google AI notebook",
free:true,
top:true,
trending:true
},

// ===== Coding =====

{
name:"Visual Studio Code",
url:"https://code.visualstudio.com",
category:"Coding",
desc:"Popular code editor",
free:true,
top:true,
trending:true
},
{
name:"CodePen",
url:"https://codepen.io",
category:"Coding",
desc:"Frontend playground",
free:true,
top:true,
trending:false
},
{
name:"Replit",
url:"https://replit.com",
category:"Coding",
desc:"Online coding platform",
free:true,
top:true,
trending:true
},
{
name:"JSFiddle",
url:"https://jsfiddle.net",
category:"Coding",
desc:"JavaScript playground",
free:true,
top:false,
trending:false
},
{
name:"W3Schools",
url:"https://www.w3schools.com",
category:"Coding",
desc:"Learn web development",
free:true,
top:true,
trending:false
},
{
name:"MDN Web Docs",
url:"https://developer.mozilla.org",
category:"Coding",
desc:"Official web documentation",
free:true,
top:true,
trending:false
},
{
name:"GeeksforGeeks",
url:"https://www.geeksforgeeks.org",
category:"Coding",
desc:"Programming tutorials",
free:true,
top:true,
trending:false
},
{
name:"LeetCode",
url:"https://leetcode.com",
category:"Coding",
desc:"Coding interview practice",
free:true,
top:true,
trending:true
},
{
name:"HackerRank",
url:"https://www.hackerrank.com",
category:"Coding",
desc:"Programming challenges",
free:true,
top:true,
trending:false
},
{
name:"FreeCodeCamp",
url:"https://www.freecodecamp.org",
category:"Coding",
desc:"Free coding courses",
free:true,
top:true,
trending:false
},

// ===== Streaming =====

{
name:"Netflix",
url:"https://www.netflix.com",
category:"Streaming",
desc:"Movies & TV Shows",
free:false,
top:true,
trending:true
},
{
name:"Disney+",
url:"https://www.disneyplus.com",
category:"Streaming",
desc:"Disney streaming",
free:false,
top:true,
trending:true
},
{
name:"Amazon Prime Video",
url:"https://www.primevideo.com",
category:"Streaming",
desc:"Prime Video",
free:false,
top:true,
trending:true
},
{
name:"JioHotstar",
url:"https://www.jiohotstar.com",
category:"Streaming",
desc:"Indian streaming platform",
free:true,
top:true,
trending:true
},
{
name:"Sony LIV",
url:"https://www.sonyliv.com",
category:"Streaming",
desc:"Sony entertainment",
free:true,
top:false,
trending:false
},
{
name:"ZEE5",
url:"https://www.zee5.com",
category:"Streaming",
desc:"Movies & TV",
free:true,
top:false,
trending:false
},

// ===== Entertainment =====

{
name:"IMDb",
url:"https://www.imdb.com",
category:"Entertainment",
desc:"Movie database",
free:true,
top:true,
trending:false
},
{
name:"Rotten Tomatoes",
url:"https://www.rottentomatoes.com",
category:"Entertainment",
desc:"Movie reviews",
free:true,
top:true,
trending:false
},
{
name:"Letterboxd",
url:"https://letterboxd.com",
category:"Entertainment",
desc:"Movie community",
free:true,
top:true,
trending:true
},
{
name:"IGN",
url:"https://www.ign.com",
category:"Entertainment",
desc:"Gaming & entertainment news",
free:true,
top:true,
trending:false
},
{
name:"9GAG",
url:"https://9gag.com",
category:"Entertainment",
desc:"Funny memes & videos",
free:true,
top:false,
trending:false
},

// ===== Study =====

{
name:"Khan Academy",
url:"https://www.khanacademy.org",
category:"Study",
desc:"Free online learning",
free:true,
top:true,
trending:true
},
{
name:"Coursera",
url:"https://www.coursera.org",
category:"Study",
desc:"Online university courses",
free:true,
top:true,
trending:true
},
{
name:"Udemy",
url:"https://www.udemy.com",
category:"Study",
desc:"Online courses",
free:false,
top:true,
trending:true
},
{
name:"edX",
url:"https://www.edx.org",
category:"Study",
desc:"University learning platform",
free:true,
top:true,
trending:false
},
{
name:"Skillshare",
url:"https://www.skillshare.com",
category:"Study",
desc:"Creative online classes",
free:false,
top:true,
trending:false
},
{
name:"Codecademy",
url:"https://www.codecademy.com",
category:"Study",
desc:"Learn programming",
free:true,
top:true,
trending:true
},
{
name:"SoloLearn",
url:"https://www.sololearn.com",
category:"Study",
desc:"Coding lessons",
free:true,
top:false,
trending:false
},
{
name:"Great Learning",
url:"https://www.mygreatlearning.com",
category:"Study",
desc:"Professional courses",
free:true,
top:false,
trending:false
},
{
name:"Physics Wallah",
url:"https://www.pw.live",
category:"Study",
desc:"Competitive exam learning",
free:true,
top:true,
trending:true
},
{
name:"Unacademy",
url:"https://unacademy.com",
category:"Study",
desc:"Exam preparation",
free:true,
top:true,
trending:true
},
{
name:"BYJU'S",
url:"https://byjus.com",
category:"Study",
desc:"Online education",
free:false,
top:true,
trending:false
},
{
name:"Vedantu",
url:"https://www.vedantu.com",
category:"Study",
desc:"Live online classes",
free:true,
top:false,
trending:false
},
{
name:"Brainly",
url:"https://brainly.com",
category:"Study",
desc:"Homework help",
free:true,
top:false,
trending:false
},
{
name:"Quizlet",
url:"https://quizlet.com",
category:"Study",
desc:"Flashcards & quizzes",
free:true,
top:true,
trending:false
},
{
name:"Duolingo",
url:"https://www.duolingo.com",
category:"Study",
desc:"Language learning",
free:true,
top:true,
trending:true
},

// ===== Shopping =====

{
name:"Amazon",
url:"https://www.amazon.in",
category:"Shopping",
desc:"Online shopping",
free:true,
top:true,
trending:true
},
{
name:"Flipkart",
url:"https://www.flipkart.com",
category:"Shopping",
desc:"Shopping marketplace",
free:true,
top:true,
trending:true
},
{
name:"Myntra",
url:"https://www.myntra.com",
category:"Shopping",
desc:"Fashion shopping",
free:true,
top:true,
trending:false
},
{
name:"Ajio",
url:"https://www.ajio.com",
category:"Shopping",
desc:"Fashion & lifestyle",
free:true,
top:false,
trending:false
},
{
name:"Meesho",
url:"https://www.meesho.com",
category:"Shopping",
desc:"Affordable shopping",
free:true,
top:true,
trending:true
},
{
name:"Nykaa",
url:"https://www.nykaa.com",
category:"Shopping",
desc:"Beauty products",
free:true,
top:true,
trending:false
},
{
name:"Reliance Digital",
url:"https://www.reliancedigital.in",
category:"Shopping",
desc:"Electronics shopping",
free:true,
top:false,
trending:false
},
{
name:"Croma",
url:"https://www.croma.com",
category:"Shopping",
desc:"Electronics store",
free:true,
top:false,
trending:false
},
{
name:"Apple Store",
url:"https://www.apple.com/in/store",
category:"Shopping",
desc:"Official Apple Store",
free:true,
top:true,
trending:true
},
{
name:"Samsung Store",
url:"https://www.samsung.com/in",
category:"Shopping",
desc:"Samsung products",
free:true,
top:true,
trending:false
},
{
name:"OnePlus Store",
url:"https://www.oneplus.in",
category:"Shopping",
desc:"Official OnePlus Store",
free:true,
top:false,
trending:false
},
{
name:"Boat Lifestyle",
url:"https://www.boat-lifestyle.com",
category:"Shopping",
desc:"Audio accessories",
free:true,
top:false,
trending:false
},
{
name:"Nike",
url:"https://www.nike.com",
category:"Shopping",
desc:"Sportswear shopping",
free:true,
top:true,
trending:false
},
{
name:"Adidas",
url:"https://www.adidas.co.in",
category:"Shopping",
desc:"Sports apparel",
free:true,
top:true,
trending:false
},
{
name:"Decathlon",
url:"https://www.decathlon.in",
category:"Shopping",
desc:"Sports equipment",
free:true,
top:true,
trending:false
},
{
name:"Bored Panda",
url:"https://www.boredpanda.com",
category:"Entertainment",
desc:"Creative stories",
free:true,
top:false,
trending:false
      }
];
