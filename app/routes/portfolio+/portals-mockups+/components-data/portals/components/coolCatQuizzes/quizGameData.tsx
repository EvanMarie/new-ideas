export type QuizGameScreens = "select" | "questions" | "results";

export type QuizQuestion = {
  question: string;
  answerOptions: string[];
};

export type QuizGameData = {
  id: string;
  quizName: string;
  quizQuestions: QuizQuestion[];
  aiPrompt: string;
};

export const quizGameData = [
  // 1 What kind of feline are you?
  {
    id: "1",
    quizName: "What cat are you?",
    quizQuestions: [
      {
        question: "How would you describe your social style?",
        answerOptions: [
          "Solitary and independent",
          "Live in a small family group",
          "Enjoy the company of others",
          "Prefer to be alone, but tolerate company",
          "Thrive in social situations",
          "Adaptable to various social settings",
        ],
      },
      // {
      //   question: "What is your preferred activity level?",
      //   answerOptions: [
      //     "Mostly inactive, conserving energy",
      //     "Moderate, with short bursts of activity",
      //     "High energy, always on the move",
      //     "Varies depending on mood and situation",
      //     "Love to play and explore",
      //     "Prefer relaxation and lounging",
      //   ],
      // },
      // {
      //   question: "How do you react to changes in your environment?",
      //   answerOptions: [
      //     "Highly cautious and easily stressed",
      //     "Curious but hesitant",
      //     "Confident and adaptable",
      //     "Indifferent and unaffected",
      //     "Protective and territorial",
      //     "Thriving in new situations",
      //   ],
      // },
      // {
      //   question: "What is your favorite time of day?",
      //   answerOptions: [
      //     "Early morning",
      //     "Midday",
      //     "Late afternoon",
      //     "Evening",
      //     "Night",
      //     "No preference",
      //   ],
      // },
      // {
      //   question: "How do you approach problem-solving?",
      //   answerOptions: [
      //     "Observe and wait for the right moment",
      //     "Analyze and plan carefully",
      //     "Charge head-on with confidence",
      //     "Find creative solutions",
      //     "Collaborate with others",
      //     "Avoid the problem altogether",
      //   ],
      // },
      // {
      //   question: "What is your preferred habitat?",
      //   answerOptions: [
      //     "Dense forests",
      //     "Open grasslands",
      //     "Rocky terrains",
      //     "Snowy regions",
      //     "Urban areas",
      //     "Adaptable to various habitats",
      //   ],
      // },
      // {
      //   question: "How do you react to threats?",
      //   answerOptions: [
      //     "Camouflage and hide",
      //     "Stand your ground and intimidate",
      //     "Confront with aggression",
      //     "Outrun and escape",
      //     "Rely on stealth and ambush",
      //     "Use distraction tactics",
      //   ],
      // },
      // {
      //   question: "What is your approach to hunting?",
      //   answerOptions: [
      //     "Stalk and ambush prey",
      //     "Chase down prey with speed",
      //     "Work together with others",
      //     "Scavenge for leftovers",
      //     "Rely on stealth and patience",
      //     "Use clever tactics and planning",
      //   ],
      // },
      // {
      //   question: "How do you communicate with others?",
      //   answerOptions: [
      //     "Subtle body language",
      //     "Loud vocalizations",
      //     "Scent marking",
      //     "Visual displays",
      //     "Rubbing and grooming",
      //     "Rarely communicate",
      //   ],
      // },
      // {
      //   question: "What is your primary defense mechanism?",
      //   answerOptions: [
      //     "Speed and agility",
      //     "Camouflage and stealth",
      //     "Powerful bite or claws",
      //     "Intimidating size and strength",
      //     "Climbing and hiding",
      //     "Blending in with surroundings",
      //   ],
      // },
    ],
    aiPrompt:
      "Identify the cat breed that mirrors the user's personality, considering their social behavior, adaptability, and how they tackle problems. Describe why this cat breed, whether it's a playful Abyssinian or a serene Ragdoll, perfectly captures their essence, adding a whimsical twist to your explanation.",
  },
  // 2 What kind of fish are you?
  {
    id: "2",
    quizName: "What fish are you?",
    quizQuestions: [
      {
        question: "How would you describe your social style?",
        answerOptions: [
          "Solitary",
          "Live in a small group",
          "Prefer large schools",
          "Constantly on the move",
          "Territorial",
          "Adaptable to various situations",
        ],
      },
      {
        question: "What is your preferred swimming speed?",
        answerOptions: [
          "Slow and steady",
          "Moderate and consistent",
          "Fast and energetic",
          "Burst of speed when needed",
          "Vary depending on the situation",
          "Hardly move at all",
        ],
      },
      {
        question: "How do you react to changes in your environment?",
        answerOptions: [
          "Highly sensitive and easily stressed",
          "Cautious but adaptable",
          "Curious and exploratory",
          "Indifferent and unaffected",
          "Protective and defensive",
          "Thriving in new conditions",
        ],
      },
      {
        question: "What is your favorite time of day?",
        answerOptions: [
          "Early morning",
          "Midday",
          "Late afternoon",
          "Evening",
          "Night",
          "No preference",
        ],
      },
      {
        question: "How do you approach problem-solving?",
        answerOptions: [
          "Wait for others to solve it",
          "Analyze and plan carefully",
          "Charge head-on",
          "Find creative solutions",
          "Collaborate with others",
          "Avoid the problem altogether",
        ],
      },
      {
        question: "What is your preferred habitat?",
        answerOptions: [
          "Coral reefs",
          "Open ocean",
          "Shallow waters",
          "Freshwater streams",
          "Deep sea",
          "Coastal areas",
        ],
      },
      {
        question: "How do you react to predators?",
        answerOptions: [
          "Camouflage and hide",
          "Form a defensive group",
          "Confront and intimidate",
          "Outswim and escape",
          "Rely on armor or spines for protection",
          "Use confusion tactics",
        ],
      },
      {
        question: "What is your approach to finding food?",
        answerOptions: [
          "Scavenge for leftovers",
          "Graze constantly",
          "Ambush prey",
          "Actively pursue and chase",
          "Filter feed on plankton",
          "Forage on the bottom",
        ],
      },
      {
        question: "How do you communicate with others?",
        answerOptions: [
          "Subtle body language",
          "Bright colors and patterns",
          "Vocal sounds",
          "Bioluminescence",
          "Electric signals",
          "Pheromones",
        ],
      },
      {
        question: "What is your primary defense mechanism?",
        answerOptions: [
          "Speed and agility",
          "Camouflage and stealth",
          "Venomous spines or barbs",
          "Thick scales or armor",
          "Size and strength",
          "Traveling in large numbers",
        ],
      },
    ],
    aiPrompt:
      "Determine which type of fish embodies the user's traits, from their social interactions to their approach to challenges. Explain, with a sprinkle of creativity, why this fish, perhaps a speedy swordfish or a sociable goldfish, aligns with their character.",
  },
  // 3 Which mythical creature best represents your personality?
  {
    id: "3",
    quizName: "Which mythical creature are you?",
    quizQuestions: [
      {
        question: "How would you describe your temperament?",
        answerOptions: [
          "Fiery and passionate",
          "Calm and wise",
          "Playful and mischievous",
          "Mysterious and alluring",
          "Loyal and protective",
          "Adaptable and transformative",
        ],
      },
      {
        question: "What is your preferred habitat?",
        answerOptions: [
          "Soaring through the skies",
          "Dwelling in the depths of the ocean",
          "Roaming the enchanted forests",
          "Lurking in the shadows",
          "Guarding ancient treasures",
          "Shapeshifting in various environments",
        ],
      },
      {
        question: "How do you approach challenges?",
        answerOptions: [
          "Confront them head-on with bravery",
          "Analyze and strategize carefully",
          "Use clever tricks and illusions",
          "Rely on charm and persuasion",
          "Defend and protect fiercely",
          "Adapt and find alternative solutions",
        ],
      },
      {
        question: "What is your most prominent physical feature?",
        answerOptions: [
          "Majestic wings",
          "Shimmering scales",
          "Enchanting horn",
          "Mesmerizing eyes",
          "Powerful claws or fangs",
          "Ever-changing appearance",
        ],
      },
      {
        question: "How do you interact with others?",
        answerOptions: [
          "Inspire and lead with charisma",
          "Offer guidance and wisdom",
          "Engage in playful banter",
          "Maintain an air of mystery",
          "Show unwavering loyalty",
          "Blend in and observe",
        ],
      },
      {
        question: "What is your greatest strength?",
        answerOptions: [
          "Courage and determination",
          "Intelligence and knowledge",
          "Creativity and resourcefulness",
          "Beauty and grace",
          "Strength and endurance",
          "Versatility and adaptability",
        ],
      },
      {
        question: "What is your preferred time of day?",
        answerOptions: [
          "Sunrise and daylight",
          "Twilight and dusk",
          "Nighttime and moonlight",
          "Late evenings",
          "Early mornings",
          "No preference",
        ],
      },
      {
        question: "How do you handle conflicts?",
        answerOptions: [
          "Confront them directly",
          "Seek peaceful resolutions",
          "Outsmart and outmaneuver",
          "Use diplomacy and charm",
          "Protect and defend",
          "Avoid and adapt",
        ],
      },
      {
        question: "What is your primary motivation?",
        answerOptions: [
          "Achieving glory and fame",
          "Seeking knowledge and truth",
          "Enjoying life's pleasures",
          "Uncovering secrets and mysteries",
          "Ensuring the safety of loved ones",
          "Exploring and experiencing new things",
        ],
      },
      {
        question: "How do you view the world?",
        answerOptions: [
          "As a place to conquer and rule",
          "As a source of wisdom and learning",
          "As a playground for adventures",
          "As a realm of hidden wonders",
          "As a place to protect and nurture",
          "As an ever-changing landscape to navigate",
        ],
      },
    ],
    aiPrompt:
      "Assess which mythical creature represents the user's personality, looking at their strengths, problem-solving style, and motivations. Provide a vivid and imaginative explanation, suggesting they might be a dragon, phoenix, or another enchanting entity, and why.",
  },
  // 4 What type of coffee drink are you?
  {
    id: "3",
    quizName: "What coffee drink are you?",
    quizQuestions: [
      {
        question: "How do you typically start your day?",
        answerOptions: [
          "Rushing out the door",
          "Slowly and leisurely",
          "With a structured routine",
          "It varies day to day",
          "With a quick workout",
          "Hitting the snooze button",
        ],
      },
      {
        question: "What is your preferred work environment?",
        answerOptions: [
          "Fast-paced and energetic",
          "Calm and quiet",
          "Organized and structured",
          "Creative and collaborative",
          "Independent and focused",
          "Flexible and adaptable",
        ],
      },
      {
        question: "How do you like to spend your free time?",
        answerOptions: [
          "Adventurous outdoor activities",
          "Relaxing and unwinding",
          "Learning new skills or hobbies",
          "Socializing with friends",
          "Engaging in physical exercise",
          "Exploring new places",
        ],
      },
      {
        question: "What is your preferred flavor profile?",
        answerOptions: [
          "Bold and robust",
          "Smooth and mellow",
          "Rich and indulgent",
          "Light and refreshing",
          "Complex and nuanced",
          "Sweet and creamy",
        ],
      },
      {
        question: "How do you handle stress?",
        answerOptions: [
          "Tackle it head-on",
          "Take a step back and relax",
          "Create a plan of action",
          "Seek support from others",
          "Engage in physical activity",
          "Adapt and find solutions",
        ],
      },
      {
        question: "What is your ideal morning routine?",
        answerOptions: [
          "Grab and go",
          "Slow and mindful",
          "Structured and efficient",
          "Social and interactive",
          "Energizing and active",
          "Flexible and spontaneous",
        ],
      },
      {
        question: "How do you approach your daily tasks?",
        answerOptions: [
          "Tackle them quickly and move on",
          "Take breaks and pace yourself",
          "Prioritize and stay organized",
          "Collaborate and brainstorm",
          "Focus deeply on one task at a time",
          "Adapt and multitask as needed",
        ],
      },
      {
        question: "What is your preferred social setting?",
        answerOptions: [
          "Lively and bustling",
          "Intimate and cozy",
          "Professional and networking",
          "Casual and laid-back",
          "Intellectually stimulating",
          "Trendy and fashionable",
        ],
      },
      {
        question: "How do you like to treat yourself?",
        answerOptions: [
          "Trying new and exciting things",
          "Indulging in relaxation and pampering",
          "Investing in personal growth",
          "Spending quality time with loved ones",
          "Engaging in physical self-care",
          "Exploring new places and experiences",
        ],
      },
      {
        question: "What is your preferred time of day for coffee?",
        answerOptions: [
          "First thing in the morning",
          "Mid-morning break",
          "Lunchtime pick-me-up",
          "Afternoon social hour",
          "Post-workout boost",
          "Anytime, anywhere",
        ],
      },
    ],
    aiPrompt:
      "Evaluate which coffee drink best suits the user's lifestyle, from their morning routine to their stress management. Craft a lively description of how their life parallels a particular coffee drink, like a robust espresso or a comforting latte.",
  },
  // 5 If you were a superhero superpower be?
  {
    id: "5",
    quizName: "What is your superhero superpower?",
    quizQuestions: [
      {
        question: "What is your biggest strength?",
        answerOptions: [
          "Physical strength and endurance",
          "Mental agility and intelligence",
          "Empathy and understanding",
          "Creativity and resourcefulness",
          "Charisma and leadership",
          "Adaptability and versatility",
        ],
      },
      {
        question: "How do you approach problems?",
        answerOptions: [
          "Tackle them head-on with force",
          "Analyze and strategize",
          "Connect with others and seek support",
          "Think outside the box and innovate",
          "Rally and inspire others",
          "Adapt and find alternative solutions",
        ],
      },
      {
        question: "What is your biggest fear?",
        answerOptions: [
          "Physical vulnerability",
          "Mental manipulation",
          "Emotional isolation",
          "Creative blockage",
          "Loss of influence",
          "Inability to adapt",
        ],
      },
      {
        question: "What motivates you to help others?",
        answerOptions: [
          "Protecting the weak and innocent",
          "Solving complex problems",
          "Providing emotional support",
          "Inspiring and uplifting others",
          "Leading and guiding people",
          "Being a versatile helper",
        ],
      },
      {
        question: "What is your preferred working style?",
        answerOptions: [
          "Solo and independent",
          "Collaborative and team-oriented",
          "Empathetic and supportive",
          "Innovative and unconventional",
          "Leading and directing",
          "Flexible and adaptable",
        ],
      },
      {
        question: "How do you handle high-pressure situations?",
        answerOptions: [
          "Remain calm and focused",
          "Analyze and make quick decisions",
          "Seek support and delegate",
          "Think creatively and improvise",
          "Take charge and lead",
          "Adapt and prioritize",
        ],
      },
      {
        question: "What is your ideal superhero costume?",
        answerOptions: [
          "Sleek and stealthy",
          "High-tech and advanced",
          "Comforting and approachable",
          "Unique and expressive",
          "Authoritative and commanding",
          "Versatile and multifunctional",
        ],
      },
      {
        question: "What is your preferred mode of transportation?",
        answerOptions: [
          "Superhuman speed and agility",
          "Advanced vehicles and gadgets",
          "Telepathic or empathetic connection",
          "Portals or dimensional travel",
          "Flight or levitation",
          "Shape-shifting or teleportation",
        ],
      },
      {
        question: "What is your biggest weakness?",
        answerOptions: [
          "Overconfidence and recklessness",
          "Overthinking and indecisiveness",
          "Emotional vulnerability and attachment",
          "Unconventional methods and unpredictability",
          "Difficulty delegating and trusting others",
          "Spreading yourself too thin",
        ],
      },
      {
        question: "What kind of superhero team would you prefer?",
        answerOptions: [
          "A small, elite group of specialists",
          "A diverse team of intelligent minds",
          "A close-knit, supportive group",
          "A team of unique and creative individuals",
          "A well-organized, hierarchical team",
          "A versatile, adaptable team",
        ],
      },
    ],
    aiPrompt:
      "Identify the superhero superpower that aligns with the user's greatest strengths and coping mechanisms. Use vivid language to explain how their superpower, whether it's super strength or mind reading, is a perfect match for their personality and life challenges.",
  },
  // 6 What kind of dog breed would you be?
  {
    id: "6",
    quizName: "What dog breed are you?",
    quizQuestions: [
      {
        question: "What is your energy level?",
        answerOptions: [
          "High energy and always on the go",
          "Moderate energy, enjoy a balance of activity and rest",
          "Laid-back and relaxed",
          "Adaptive to the situation",
          "Calm and gentle",
          "Energetic in short bursts",
        ],
      },
      {
        question: "How do you prefer to spend your free time?",
        answerOptions: [
          "Engaging in physical activities and sports",
          "Socializing and playing with others",
          "Relaxing and enjoying quiet time",
          "Exploring and going on adventures",
          "Cuddles and quality time with loved ones",
          "Trying new things and experiences",
        ],
      },
      {
        question: "What is your ideal living environment?",
        answerOptions: [
          "A spacious home with a large yard",
          "A social setting with plenty of interaction",
          "A cozy and comfortable space",
          "An environment with plenty of stimuli and activities",
          "A calm and peaceful household",
          "A flexible living space that adapts to your needs",
        ],
      },
      {
        question: "How do you react to new people and situations?",
        answerOptions: [
          "Excited and eager to interact",
          "Friendly and approachable",
          "Cautious and reserved",
          "Curious and inquisitive",
          "Calm and welcoming",
          "Adaptable and open-minded",
        ],
      },
      {
        question: "What is your preferred level of grooming?",
        answerOptions: [
          "Low maintenance and natural",
          "Regular grooming and maintenance",
          "Minimal grooming required",
          "Unique and stylish",
          "Soft and fluffy",
          "Adaptable to different grooming styles",
        ],
      },
      {
        question: "What is your preferred training style?",
        answerOptions: [
          "Energetic and engaging",
          "Positive reinforcement and rewards",
          "Gentle and patient",
          "Challenging and mentally stimulating",
          "Consistent and structured",
          "Adaptable to different training methods",
        ],
      },
      {
        question: "What is your ideal day?",
        answerOptions: [
          "Filled with physical activities and adventures",
          "Spending quality time with family and friends",
          "Relaxing and enjoying a peaceful day",
          "Exploring new places and experiencing new things",
          "Receiving love and affection from loved ones",
          "A perfect balance of activity and rest",
        ],
      },
      {
        question: "How do you handle stressful situations?",
        answerOptions: [
          "Tackle them head-on with confidence",
          "Seek comfort and support from others",
          "Retreat to a quiet and safe space",
          "Find creative outlets and distractions",
          "Remain calm and composed",
          "Adapt and find solutions",
        ],
      },
      {
        question: "What is your preferred level of independence?",
        answerOptions: [
          "Highly independent and self-sufficient",
          "Enjoy a balance of independence and companionship",
          "Prefer close companionship and attention",
          "Adaptable to different levels of independence",
          "Content with a consistent routine and guidance",
          "Enjoy freedom and flexibility",
        ],
      },
      {
        question: "What is your ideal family dynamic?",
        answerOptions: [
          "Active and adventurous",
          "Loving and affectionate",
          "Calm and low-key",
          "Playful and engaging",
          "Supportive and nurturing",
          "Adaptable and inclusive",
        ],
      },
    ],
    aiPrompt:
      "Pinpoint the dog breed that resonates with the user's energy levels and lifestyle preferences. Offer a detailed and playful rationale for why they might embody the traits of a loyal Labrador or an adventurous Husky.",
  },
  // 7 What type of musical instrument are you?
  {
    id: "7",
    quizName: "What musical instrument are you?",
    quizQuestions: [
      {
        question: "What is your personality like?",
        answerOptions: [
          "Bold and expressive",
          "Sensitive and emotional",
          "Structured and disciplined",
          "Fun-loving and energetic",
          "Versatile and adaptable",
          "Unique and unconventional",
        ],
      },
      {
        question: "How do you approach challenges?",
        answerOptions: [
          "Tackle them head-on with confidence",
          "Analyze and plan carefully",
          "Break them down into smaller steps",
          "Approach them with enthusiasm",
          "Adapt and find creative solutions",
          "Think outside the box",
        ],
      },
      {
        question: "What is your preferred style of music?",
        answerOptions: [
          "Powerful and intense",
          "Melodic and expressive",
          "Classical and refined",
          "Upbeat and lively",
          "Diverse and eclectic",
          "Experimental and avant-garde",
        ],
      },
      {
        question: "How do you express yourself?",
        answerOptions: [
          "Passionately and fearlessly",
          "Deeply and emotionally",
          "Precisely and skillfully",
          "Joyfully and enthusiastically",
          "Flexibly and dynamically",
          "Uniquely and innovatively",
        ],
      },
      {
        question: "What role do you play in a group?",
        answerOptions: [
          "The leader and frontman",
          "The supportive and harmonious player",
          "The reliable and consistent player",
          "The energetic and lively player",
          "The adaptable and complementary player",
          "The distinctive and independent player",
        ],
      },
      {
        question: "How do you handle the spotlight?",
        answerOptions: [
          "Embrace it confidently",
          "Prefer to blend in harmoniously",
          "Approach it with discipline and poise",
          "Enjoy it and have fun",
          "Adapt to it as needed",
          "Use it to showcase your uniqueness",
        ],
      },
      {
        question: "What is your preferred practice style?",
        answerOptions: [
          "Intense and focused",
          "Emotional and expressive",
          "Structured and methodical",
          "Playful and experimental",
          "Varied and well-rounded",
          "Unconventional and exploratory",
        ],
      },
      {
        question: "How do you handle improvisation?",
        answerOptions: [
          "Dive in with boldness",
          "Incorporate emotional depth",
          "Approach it with calculated precision",
          "Embrace it with enthusiasm",
          "Adapt and blend in",
          "Use it to showcase your originality",
        ],
      },
      {
        question: "What is your ideal performance setting?",
        answerOptions: [
          "A grand and impressive stage",
          "An intimate and emotional venue",
          "A formal and prestigious concert hall",
          "A lively and energetic atmosphere",
          "A diverse and eclectic mix of settings",
          "An unconventional and unique space",
        ],
      },
      {
        question: "What is your musical aspiration?",
        answerOptions: [
          "To captivate and inspire audiences",
          "To evoke deep emotions and connections",
          "To achieve technical mastery and precision",
          "To bring joy and entertainment",
          "To explore various genres and styles",
          "To push boundaries and innovate",
        ],
      },
    ],
    aiPrompt:
      "Select the musical instrument that matches the user's personality and musical inclinations. Explain, with a creative flair, why they resonate with this instrument, whether it's the versatile guitar or the soulful violin. Be sure the result is a musical instrument, rather than a musician who plays the musical instrument. The quiz is for what musical INSTRUMENT are you. Approach the resulting explanation from the perspective of the instrument itself.",
  },
  // 8 What fictional world would you most like to live in?
  {
    id: "8",
    quizName: "What fictional world suits you?",
    quizQuestions: [
      {
        question: "What type of setting appeals to you most?",
        answerOptions: [
          "Futuristic and high-tech",
          "Magical and enchanting",
          "Adventurous and action-packed",
          "Dystopian and thought-provoking",
          "Historical and immersive",
          "Whimsical and imaginative",
        ],
      },
      {
        question: "What kind of character would you like to be?",
        answerOptions: [
          "A brave hero/heroine",
          "A powerful wizard/witch",
          "An intelligent scientist/inventor",
          "A skilled warrior/fighter",
          "A charismatic leader/diplomat",
          "An enigmatic outsider/rebel",
        ],
      },
      {
        question: "What type of story arc intrigues you most?",
        answerOptions: [
          "An epic quest or journey",
          "A tale of magic and wonder",
          "A thrilling adventure or mystery",
          "A social or political commentary",
          "A historical drama or romance",
          "A whimsical or surreal exploration",
        ],
      },
      {
        question: "What kind of technology or magic interests you?",
        answerOptions: [
          "Advanced gadgets and machines",
          "Elemental or nature-based magic",
          "Supernatural abilities or powers",
          "Mind-bending or reality-altering tech",
          "Steampunk or retro-futuristic inventions",
          "Whimsical or unexpected enchantments",
        ],
      },
      {
        question: "What type of society appeals to you?",
        answerOptions: [
          "A hierarchical or structured system",
          "A harmonious or peaceful community",
          "A competitive or merit-based society",
          "A rebellious or unconventional group",
          "A traditional or historical culture",
          "An eccentric or quirky community",
        ],
      },
      {
        question: "What kind of creatures fascinate you?",
        answerOptions: [
          "Intelligent aliens or androids",
          "Majestic dragons or unicorns",
          "Fierce monsters or beasts",
          "Genetically-modified or evolved species",
          "Mythological or legendary beings",
          "Whimsical or talking animals",
        ],
      },
      {
        question: "What type of landscape captures your imagination?",
        answerOptions: [
          "Sleek and modern cityscapes",
          "Enchanted forests or gardens",
          "Rugged and untamed wilderness",
          "Desolate or post-apocalyptic ruins",
          "Majestic castles or ancient ruins",
          "Surreal or dream-like landscapes",
        ],
      },
      {
        question: "What kind of conflict intrigues you?",
        answerOptions: [
          "Man vs. Machine",
          "Good vs. Evil",
          "Man vs. Nature",
          "Individual vs. Society",
          "Tradition vs. Progress",
          "Reality vs. Illusion",
        ],
      },
      {
        question: "What type of abilities would you like to have?",
        answerOptions: [
          "Superhuman strength or speed",
          "Magical spells or potions",
          "Advanced technology or gadgets",
          "Psychic or mental powers",
          "Mastery of a unique skill or trade",
          "Shape-shifting or metamorphosis",
        ],
      },
      {
        question: "What kind of ending would you prefer?",
        answerOptions: [
          "A triumphant victory or success",
          "A bittersweet or poignant resolution",
          "An open-ended or ambiguous finale",
          "A shocking or twist ending",
          "A satisfying or full-circle conclusion",
          "A whimsical or unexpected outcome",
        ],
      },
    ],
    aiPrompt:
      "Determine the fictional world where the user would most thrive, considering their preferred landscapes and societal values. Elaborate with a dynamic narrative on why they belong in a world like Middle-earth or the Star Wars galaxy.",
  },
  // 9 What type of plant are you?
  {
    id: "9",
    quizName: "What plant are you?",
    quizQuestions: [
      {
        question: "How would you describe your personality?",
        answerOptions: [
          "Bold and confident",
          "Calm and serene",
          "Adaptable and resilient",
          "Unique and unconventional",
          "Nurturing and caring",
          "Vibrant and energetic",
        ],
      },
      {
        question: "What is your preferred climate?",
        answerOptions: [
          "Warm and tropical",
          "Cool and temperate",
          "Arid and dry",
          "Varied and changing",
          "Humid and moist",
          "Sunny and bright",
        ],
      },
      {
        question: "How do you handle challenges or adversity?",
        answerOptions: [
          "Face them head-on with strength",
          "Remain calm and composed",
          "Adapt and find ways to thrive",
          "Embrace them as opportunities for growth",
          "Seek support and nurturing from others",
          "Maintain a positive and vibrant outlook",
        ],
      },
      {
        question: "What is your preferred growth habit?",
        answerOptions: [
          "Tall and upright",
          "Low and spreading",
          "Climbing or trailing",
          "Irregular or asymmetrical",
          "Bushy or mounding",
          "Fast and vigorous",
        ],
      },
      {
        question: "What type of environment do you thrive in?",
        answerOptions: [
          "Open and spacious",
          "Shaded and sheltered",
          "Rocky or sandy",
          "Urban or developed",
          "Moist and boggy",
          "Bright and sunny",
        ],
      },
      {
        question: "What is your preferred type of soil?",
        answerOptions: [
          "Rich and loamy",
          "Sandy and well-draining",
          "Clay and moisture-retaining",
          "Varied and adaptable",
          "Organic and nutrient-rich",
          "Light and airy",
        ],
      },
      {
        question: "What is your blooming or fruiting habit?",
        answerOptions: [
          "Large and showy",
          "Small and delicate",
          "Infrequent or rare",
          "Unusual or exotic",
          "Abundant and prolific",
          "Colorful and vibrant",
        ],
      },
      {
        question: "How do you contribute to your ecosystem?",
        answerOptions: [
          "Provide shelter or shade",
          "Stabilize soil or prevent erosion",
          "Adapt to various conditions",
          "Attract pollinators or wildlife",
          "Improve air or water quality",
          "Add beauty or visual interest",
        ],
      },
      {
        question: "What is your preferred method of propagation?",
        answerOptions: [
          "Seeds or spores",
          "Cuttings or divisions",
          "Runners or rhizomes",
          "Grafting or budding",
          "Layering or rooting",
          "Self-seeding or spreading",
        ],
      },
      {
        question: "What is your desired impact or legacy?",
        answerOptions: [
          "To be admired for strength and resilience",
          "To create a sense of calm and tranquility",
          "To inspire adaptability and versatility",
          "To be appreciated for uniqueness and beauty",
          "To provide nourishment and support for others",
          "To bring joy and vibrancy to surroundings",
        ],
      },
    ],
    aiPrompt:
      "Choose the plant that reflects the user's growth patterns and environmental preferences. Detail, in an engaging manner, why they are akin to a resilient cactus or a flourishing sunflower.",
  },
  // 10 What type of dessert are you?
  {
    id: "10",
    quizName: "What dessert are you?",
    quizQuestions: [
      {
        question: "What is your favorite flavor profile?",
        answerOptions: [
          "Rich and chocolatey",
          "Light and fruity",
          "Creamy and indulgent",
          "Sweet and caramelized",
          "Tart and tangy",
          "Spiced and aromatic",
        ],
      },
      {
        question: "What is your preferred texture?",
        answerOptions: [
          "Smooth and velvety",
          "Fluffy and airy",
          "Crisp and crunchy",
          "Gooey and sticky",
          "Soft and moist",
          "Dense and chewy",
        ],
      },
      {
        question: "What is your ideal serving temperature?",
        answerOptions: [
          "Warm and comforting",
          "Chilled and refreshing",
          "Room temperature",
          "Frozen and icy",
          "Freshly baked or prepared",
          "Varies depending on the dessert",
        ],
      },
      {
        question: "What is your preferred level of sweetness?",
        answerOptions: [
          "Rich and indulgent",
          "Light and balanced",
          "Intensely sweet",
          "Mildly sweet",
          "Not too sweet",
          "Varies depending on the dessert",
        ],
      },
      {
        question: "What is your ideal serving size?",
        answerOptions: [
          "Bite-sized or mini",
          "Individual portion",
          "Shareable or family-style",
          "Oversized or indulgent",
          "Varies depending on the occasion",
          "Customizable or adjustable",
        ],
      },
      {
        question: "What is your preferred preparation method?",
        answerOptions: [
          "Baked or roasted",
          "Chilled or frozen",
          "Whipped or beaten",
          "Layered or assembled",
          "Fried or deep-fried",
          "No-bake or raw",
        ],
      },
      {
        question: "What is your ideal occasion for enjoying dessert?",
        answerOptions: [
          "As a special treat or indulgence",
          "As a light and refreshing finish to a meal",
          "As a comforting and nostalgic delight",
          "As a celebratory or festive dish",
          "As a midday pick-me-up or snack",
          "Anytime, anywhere!",
        ],
      },
      {
        question: "What is your preferred accompaniment?",
        answerOptions: [
          "A glass of cold milk",
          "A scoop of ice cream",
          "A dollop of whipped cream",
          "A drizzle of sauce or syrup",
          "A sprinkle of toppings or garnishes",
          "Enjoyed on its own",
        ],
      },
      {
        question: "What is your ideal presentation style?",
        answerOptions: [
          "Elegant and refined",
          "Rustic and homemade",
          "Playful and whimsical",
          "Simple and understated",
          "Bold and adventurous",
          "Artistic and visually stunning",
        ],
      },
      {
        question: "What is your desired effect or mood from dessert?",
        answerOptions: [
          "Comfort and warmth",
          "Refreshment and lightness",
          "Indulgence and satisfaction",
          "Excitement and surprise",
          "Nostalgia and familiarity",
          "Varies depending on the moment",
        ],
      },
    ],
    aiPrompt:
      "Identify the dessert that mirrors the user's taste preferences and presentation style. Explain with charm why they are similar to a decadent chocolate cake or a refreshing sorbet.",
  },
  // 11 What historical figure are you?
  {
    id: "11",
    quizName: "What historical figure are you?",
    quizQuestions: [
      {
        question: "What personal trait do you identify with the most?",
        answerOptions: [
          "Determination and resilience",
          "Intellectual curiosity and knowledge",
          "Creative spirit and originality",
          "Leadership and courage",
          "Altruism and compassion",
          "Wit and charm",
        ],
      },
      {
        question: "What is your preferred method of solving problems?",
        answerOptions: [
          "Persistence and toughing it out",
          "Researching and learning more about the issue",
          "Thinking outside the box",
          "Taking charge and leading the way",
          "Finding harmonious solutions that help everyone",
          "Using humor to lighten the mood",
        ],
      },
      {
        question: "Which of these activities do you enjoy the most?",
        answerOptions: [
          "Debating and discussing ideas",
          "Reading and studying",
          "Painting, writing, or creating",
          "Exploring or adventuring",
          "Volunteering or caregiving",
          "Hosting or entertaining",
        ],
      },
      {
        question: "Which historical era do you find most fascinating?",
        answerOptions: [
          "The Classical Period",
          "The Renaissance",
          "The Romantic Era",
          "The Age of Exploration",
          "The Modern Era",
          "It varies; I like multiple eras",
        ],
      },
      {
        question: "What type of leadership do you resonate with?",
        answerOptions: [
          "Strategic and resilient",
          "Philosophical and educational",
          "Innovative and groundbreaking",
          "Charismatic and inspiring",
          "Empathetic and supportive",
          "Lighthearted and inclusive",
        ],
      },
      {
        question: "What do you value most in society?",
        answerOptions: [
          "Justice and integrity",
          "Knowledge and wisdom",
          "Creativity and freedom of expression",
          "Bravery and exploration",
          "Equality and humanitarianism",
          "Joy and community",
        ],
      },
      {
        question: "What setting do you prefer for relaxation and inspiration?",
        answerOptions: [
          "Quiet and secluded places",
          "Libraries or museums",
          "Art studios or theaters",
          "Nature or wilderness",
          "Community spaces or social services",
          "Cafes or social venues",
        ],
      },
      {
        question: "What impact would you like to leave on the world?",
        answerOptions: [
          "Be a symbol of strength and resilience",
          "Advance knowledge and understanding",
          "Inspire creativity and originality",
          "Pioneer new frontiers",
          "Improve lives and promote peace",
          "Bring laughter and happiness",
        ],
      },
      {
        question: "What would be your preferred way of learning?",
        answerOptions: [
          "Through experience and challenges",
          "Through study and research",
          "Through artistic exploration",
          "Through travel and adventure",
          "Through social interaction",
          "Through fun and games",
        ],
      },
      {
        question: "How do you influence others?",
        answerOptions: [
          "By setting an example",
          "By sharing knowledge",
          "By expressing ideas creatively",
          "By leading ventures",
          "By caring and advocating",
          "By making people smile",
        ],
      },
    ],
    aiPrompt:
      "Analyze which historical figure the user most closely resembles, based on their leadership style and societal values. Provide a compelling narrative explaining this alignment, perhaps suggesting they share traits with Cleopatra or Einstein.",
  },
  // 12 What type of weather are you?
  {
    id: "12",
    quizName: "What type of weather are you?",
    quizQuestions: [
      {
        question: "How would you describe your personality?",
        answerOptions: [
          "Energetic and dynamic",
          "Calm and peaceful",
          "Adaptable and versatile",
          "Unpredictable and changeable",
          "Warm and nurturing",
          "Refreshing and invigorating",
        ],
      },
      {
        question: "What is your preferred season?",
        answerOptions: [
          "Spring",
          "Summer",
          "Autumn",
          "Winter",
          "Varies depending on the day",
          "No preference",
        ],
      },
      {
        question: "How do you handle challenges or obstacles?",
        answerOptions: [
          "With enthusiasm and energy",
          "With patience and serenity",
          "With flexibility and creativity",
          "With adaptability and resilience",
          "With warmth and compassion",
          "With refreshing and invigorating energy",
        ],
      },
      {
        question: "What is your preferred time of day?",
        answerOptions: [
          "Morning",
          "Afternoon",
          "Evening",
          "Night",
          "Varies depending on the day",
          "No preference",
        ],
      },
      {
        question: "What type of weather do you enjoy most?",
        answerOptions: [
          "Sunny and warm",
          "Clear and breezy",
          "Cool and crisp",
          "Rainy and refreshing",
          "Snowy and cozy",
          "Varies depending on the day",
        ],
      },
      {
        question: "What is your preferred activity in the weather?",
        answerOptions: [
          "Outdoor adventures and exploration",
          "Relaxing and unwinding",
          "Engaging in creative pursuits",
          "Adapting and finding new experiences",
          "Connecting and nurturing relationships",
          "Recharging and revitalizing",
        ],
      },
      {
        question: "What is your desired impact on others?",
        answerOptions: [
          "To inspire and motivate",
          "To bring peace and tranquility",
          "To encourage adaptability and growth",
          "To challenge and provoke thought",
          "To nurture and support",
          "To refresh and invigorate",
        ],
      },
      {
        question: "What is your preferred season for socializing?",
        answerOptions: [
          "Spring",
          "Summer",
          "Autumn",
          "Winter",
          "Varies depending on the day",
          "No preference",
        ],
      },
      {
        question: "What is your favorite weather type?",
        answerOptions: [
          "Sunny and clear",
          "Partly cloudy and breezy",
          "Cool and overcast",
          "Rainy and drizzly",
          "Snowy and frosty",
          "Varies depending on the day",
        ],
      },
      {
        question: "What is your desired impact on the environment?",
        answerOptions: [
          "To bring growth and vitality",
          "To maintain balance and harmony",
          "To encourage change and renewal",
          "To cleanse and purify",
          "To bring stillness and peace",
          "To refresh and rejuvenate",
        ],
      },
    ],
    aiPrompt:
      "Ascertain the type of weather that captures the essence of the user's personality and preferences. Illustrate vividly why they might be a sunny day or a thunderstorm, linking these conditions to their life's impact and activities.",
  },
  // 13 What film genre are you?
  {
    id: "13",
    quizName: "What film genre are you?",
    quizQuestions: [
      {
        question: "What is your preferred mood or atmosphere?",
        answerOptions: [
          "Exciting and action-packed",
          "Romantic and heartwarming",
          "Mysterious and suspenseful",
          "Thought-provoking and intellectual",
          "Light-hearted and comedic",
          "Innovative and experimental",
        ],
      },
      {
        question: "What type of story appeals to you most?",
        answerOptions: [
          "Epic adventures and heroic quests",
          "Love stories and emotional journeys",
          "Thrillers and crime dramas",
          "Sci-fi and fantasy epics",
          "Comedies and feel-good films",
          "Art-house and indie films",
        ],
      },
      {
        question: "What is your preferred pacing or tempo?",
        answerOptions: [
          "Fast-paced and high-energy",
          "Slow and deliberate",
          "Gradual build-up to a climax",
          "Complex and multi-layered",
          "Quick wit and banter",
          "Unconventional and unpredictable",
        ],
      },
      {
        question: "What is your preferred visual style?",
        answerOptions: [
          "Spectacular special effects and CGI",
          "Beautiful cinematography and scenery",
          "Dark and moody lighting",
          "Sleek and futuristic design",
          "Bright and colorful aesthetics",
          "Innovative and artistic visuals",
        ],
      },
      {
        question: "What is your preferred character archetype?",
        answerOptions: [
          "The brave hero/heroine",
          "The star-crossed lover",
          "The cunning detective",
          "The wise mentor",
          "The quirky sidekick",
          "The enigmatic anti-hero",
        ],
      },
      {
        question: "What is your preferred soundtrack or music style?",
        answerOptions: [
          "Epic orchestral scores",
          "Romantic ballads and melodies",
          "Tense and suspenseful themes",
          "Experimental and avant-garde sounds",
          "Upbeat and catchy tunes",
          "Innovative and eclectic music",
        ],
      },
      {
        question: "What is your desired emotional impact?",
        answerOptions: [
          "Excitement and adrenaline",
          "Love and warmth",
          "Suspense and intrigue",
          "Intellectual stimulation",
          "Laughter and joy",
          "Awe and inspiration",
        ],
      },
      {
        question: "What is your preferred narrative structure?",
        answerOptions: [
          "Linear and straightforward",
          "Flashbacks and non-linear storytelling",
          "Twists and surprises",
          "Layered and complex",
          "Humor and satire",
          "Experimental and unconventional",
        ],
      },
      {
        question: "What is your ideal ending or resolution?",
        answerOptions: [
          "A triumphant victory or success",
          "A heartwarming reunion or confession",
          "A shocking revelation or twist",
          "An open-ended or ambiguous finale",
          "A feel-good resolution",
          "A thought-provoking or ambiguous conclusion",
        ],
      },
      {
        question: "What is your preferred film genre?",
        answerOptions: [
          "Action and adventure",
          "Romance and drama",
          "Mystery and suspense",
          "Sci-fi and fantasy",
          "Comedy and humor",
          "Drama and art-house",
        ],
      },
    ],
    aiPrompt:
      "Based on the user's personality and life preferences, determine which film genre they embody. Provide a creative explanation of why they resonate with a particular genre, such as action-packed thrillers or heartwarming rom-coms, linking their characteristics to classic elements of the genre.",
  },
];

export const quizOptions = quizGameData.map((quiz) => quiz.quizName);
