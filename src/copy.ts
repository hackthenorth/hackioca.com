export default {
  hero: {
    title: "Hackioca",
    subtitle: "A Qualitea Hackathon",
    eventDate: "April 28 - 30, 2019",
    eventLoc: "Taipei 101",
    toppings: {
      tapioca: "Tapioca",
      red_bean: "Red Bean", // eslint-disable-line @typescript-eslint/camelcase
      grass_jelly: "Grass Jelly", // eslint-disable-line @typescript-eslint/camelcase
      pudding: "Pudding",
      aloe_vera: "Aloe Vera" // eslint-disable-line @typescript-eslint/camelcase
    },
    flavors: {
      mango: "Mango",
      milk: "Milk Tea",
      matcha: "Matcha",
      taro: "Taro",
      strawberry: "Strawberry"
    }
  },
  nav: {
    sections: ["about", "schedule", "judges", "workshops", "activities", "sponsors", "prizes", "faq"],
    socialLinks: [
      {
        name: "facebook",
        icon: "f.png",
        link: "https://www.facebook.com/hackioca"
      },
      {
        name: "twitter",
        icon: "bird.png",
        link: "https://twitter.com/hackioca"
      },
      {
        name: "instagram",
        icon: "camera.png",
        link: "https://www.instagram.com/hackioca/"
      }
    ]
  },
  about: {
    title: "about",
    desc:
      "Hackioca is the first boba-themed hackathon, where your love for boba and tech intertwine. Immerse yourself in a weekend filled with workshops and activities at the Taipei 101. Join hackers from all around the globe who share a passion for world-class builds and boba!"
  },
  schedule: {
    title: "schedule",
    dayOne: {
      title: "Day 1",
      events: [
        { title: "Registration", time: "6pm-12am" },
        { title: "Dinner: Ramen and Boba", time: "6pm-8pm" },
        { title: "Workshop: Binary Tea Algorithms", time: "7pm-8pm" },
        { title: "Opening Ceremonies", time: "8pm-9pm" },
        { title: "Activity: Boba Ball Pit", time: "10pm-11pm" },
        { title: "Workshop: Intro to Perl", time: "11pm-12am" }
      ]
    },
    dayTwo: {
      title: "Day 2",
      events: [
        { title: "Midnight Snack: Tapioca Pudding", time: "12am-2am" },
        { title: "Workshop: Quali-tea Assurance (QA) 101", time: "4am-6am" },
        { title: "Workshop: Intro to Kuberne-tea-s", time: "6am-7am" },
        { title: "Breakfast: Bubble Waffles and Boba", time: "8am - 10am" },
        { title: "Workshop: H-TEA-TEA-P", time: "11am-12pm" },
        { title: "Lunch: Burritos and Boba", time: "12pm-2pm" },
        { title: "Activity: Bubble Soccer", time: "2pm-3pm" },
        { title: "Snack: Mochi and Boba", time: "3pm-5pm" },
        { title: "Dinner: Boba w/ Parental Disappointment", time: "6pm-8pm," },
        { title: "Activity: Do hw that’s due tomorrow", time: "10pm-12am" }
      ]
    },
    dayThree: {
      title: "Day 3",
      events: [
        { title: "Snack: Toast with Grass Jelly and Boba", time: "12am-2am" },
        { title: "Workshop: CoffeeScript", time: "7am-8am" },
        { title: "Breakfast: Eggs, Bacon, and Boba", time: "8am-10am" },
        { title: "Judging", time: "10am-12pm" },
        { title: "Activity: Find Your Boba Bae", time: "12pm-1pm" },
        { title: "Lunch: Burgers and Boba", time: "1pm-2pm" },
        { title: "Closing Ceremonies", time: "2pm-5pm" }
      ]
    }
  },
  judges: {
    title: "judges",
    suffix: "is my favourite.",
    barack: {
      name: "Barack Bobama",
      quote: "Classic Roasted Milk Tea"
    },
    boba: {
      name: "Boba Fett",
      quote: "Passion Fruit Green Tea"
    },
    elon: {
      name: "Oolong Musk",
      quote: "Oolong Milk Tea"
    },
    mark: {
      name: "Matcha Zuckerberg",
      quote: "Matcha Red Bean Milk Tea"
    },
    michael: {
      name: "Michael Bublé Tea",
      quote: "Wintermelon Iced Tea, half sweet"
    }
  },
  faq: {
    title: "faq",
    body: [
      {
        question: "What is Hackioca?",
        answer: "Heaven on Earth, surrounded by boba while hacking."
      },
      {
        question: "Will there be drinking water?",
        answer: "No."
      },
      {
        question: "Who can attend?",
        answer:
          "First time boba drinkers, second time boba drinks, N times boba drinkers."
      },
      {
        question: "Will there be boba?",
        answer: "Does a bear shit in the woods?"
      },
      {
        question: "Will there be reusable straws?",
        answer: "Yes, we'll have big ones for tapioca too!"
      },
      {
        question: "How much does it cost to attend?",
        answer:
          "It's free! We'll be providing all the boba you need, all weekend long."
      },
      {
        question: "Can I attend with a team?",
        answer:
          "Yes! You can bring your own boba baes. We'll also help you find a team, or you can go solo."
      },
      {
        question: "What if I am lactose intolerant?",
        answer: "¯\\_(ツ)_/¯"
      },
      {
        question: "Is bubble tea a meal substitute?",
        answer:
          "No better way to find out than try to survive on it for 2 days straight!"
      },
      {
        question: "Will there be showers at the event?",
        answer: "We’ll have a place for you to enjoy a nice bubble bath."
      }
    ]
  },
  sponsors: {
    title: "sponsors",
    companies: [
      "aliboba",
      "chatime",
      "coco",
      "ibm",
      "lactaid",
      "t-combinator",
      "tea-mobile"
    ]
  },
  prizes: {
    title: "prizes",
    prizes: [
      {
        title: "Best not exactly boba hack",
        desc:
          "For that one drink at the bubble tea place that isn’t actually bubble tea",
        prize: "Prize: a pat on the back and a sticker"
      },
      {
        title: "Degenerate Hack",
        desc: "For the hack that disappoints your parents",
        prize: "Prize: tissue box"
      },
      {
        title: "0% sugar hack",
        desc: "The best health hack",
        prize: "Prize: A bag of apples"
      },
      {
        title: "The regular (classic milk tea)",
        desc: "Awarded to the most basic and overused hackathon ideas",
        prize: "Prize: Golden Boba Straw"
      },
      {
        title: "Most insTEAworthy",
        desc: "Best design hack",
        prize: "Prize: 4 new insta followers"
      }
    ]
  },
  activities: {
    title: "activities",
    body: [
      {
        activity: "Boba Ball Pit",
        desc:
          "Come blow off some steam in our giant tapioca ball pit! If you get stuck, you can eat your way out."
      },
      {
        activity: "Bubble Soccer",
        desc:
          "Soccer with a twist: step inside a giant inflatable bubble and get some physical activity!"
      },
      {
        activity: "Do your homework that’s due tomorrow",
        desc:
          "We know you have to do it. You know you have to do it. Come procrastinate with all the other procrastinators together."
      },
      {
        activity: "Find Your Boba Bae",
        desc:
          "Mix and mingle with those who share your passion for all things boba. Strike up a conversation with someone and see if you’re a matcha!"
      }
    ]
  },
  workshops: {
    title: "workshops",
    body: [
      {
        workshop: "Binary Tea Algorithms",
        desc:
          "This workshop is a tea-rrific way to brush up on a common topic in those technical algorithm interviews!"
      },
      {
        workshop: "Intro to Perl",
        desc:
          "Ever wonder what Perl is? Add some texture to your programming skill set and find out!"
      },
      {
        workshop: "How to conduct Quali-tea Assurance (QA)",
        desc:
          "Ever had a bad cup of boba? This workshop will teach you how to keep your service or product at its best quali-tea for every customer."
      },
      {
        workshop: "Intro to Kuberne-tea-s",
        desc:
          "By the end of this workshop, you’ll barely be able to contain your excitement to try Kuberne-tea-s out!"
      },
      {
        workshop: "H-TEA-TEA-P",
        desc:
          "Spill all the tea! Format as well as transmit your messages across the web."
      },
      {
        workshop: "CoffeeScript",
        desc:
          "Get your day going with this hyper fast paced, stimulating introduction to CoffeeScript. Note: due to it not being a boba drink, coffee will not be provided or permitted at the workshop or the hackathon."
      }
    ]
  },
  footer: {
    logoText: {
      title: "hackioca",
      copyright: "Copyright © hackioca 2019"
    },
    backgrounds: [
      {
        flavor: "milk",
        image: "/images/footer/footer_milktea.svg"
      },
      {
        flavor: "matcha",
        image: "/images/footer/footer_matcha.svg"
      },
      {
        flavor: "taro",
        image: "/images/footer/footer_taro.svg"
      },
      {
        flavor: "mango",
        image: "/images/footer/footer_mango.svg"
      },
      {
        flavor: "strawberry",
        image: "/images/footer/footer_strawberry.svg"
      }
    ]
  }
};
