// lesson1-data.js
// Theme 3 → Concept 3.2 → Lesson 1 (About Fuels)
// Data-only file used by your existing html.html (imported as type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.2",
    lessons: [
      {
        id: "T3-C3.2-L1",
        label: "Lesson 1 (3.2) — About Fuels",
        short:
          "Fuels & road trips • Ask questions • Fuels we use daily • Where fuels come from"
      }
    ]
  },

  lessons: {
    "T3-C3.2-L1": {
      title: "About Fuels — Lesson 1",
      bigQuestion: "Where does the fuel we use every day come from?",

      explanationBlocks: [
        {
          title: "1) The Big Idea: Fuels Provide Energy for Work",
          bullets: [
            "Many things we use every day need energy to work (especially vehicles).",
            "Cars and trucks need energy to move—this lesson starts by connecting fuels to movement and daily life.",
            "The lesson prepares you to learn about fuels and other energy sources people use."
          ]
        },
        {
          title: "2) Activity 2: Fuels and Road Trips (Ask Questions Like a Scientist)",
          bullets: [
            "Think about a family road trip: the vehicle needs energy to move.",
            "You write questions you have about fuels: what they are, where they come from, and how we use them.",
            "You also think about a real-life idea: can a car use solar energy, and is that a good idea?"
          ]
        },
        {
          title: "3) What Scientists Do Here: Turn Curiosity into Investigation Questions",
          bullets: [
            "Strong investigation questions are clear and focused (what / where / how / why).",
            "Examples you can write:",
            "• “Where does the fuel in cars come from?”",
            "• “Why do some fuels cost more than others?”",
            "• “How does fuel change into motion?”",
            "Your questions will guide what you look for in later lessons."
          ]
        },
        {
          title: "4) Activity 3: What Do You Already Know About Fuels? (Evaluate Like a Scientist)",
          bullets: [
            "You think about fuels your family uses to cook or heat a home.",
            "You choose one fuel from the pictures and share ideas about:",
            "• Where it comes from",
            "• How it is used as energy",
            "Examples shown include fuels used for cars, natural gas, coal, and wood."
          ]
        },
        {
          title: "5) Key Skill Focus: Using Reliable Information",
          bullets: [
            "The lesson highlights a life skill: deciding whether a source is reliable.",
            "That means you should prefer trustworthy sources (science books, teachers, credible educational sites) when answering your fuel questions."
          ]
        }
      ],

      // ✅ MCQ quiz (17) — aligned to Concept 3.2 Lesson 1 (Wonder)
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the big question of Lesson 1 (Concept 3.2)?",
            options: [
              { key: "A", text: "How do mountains form?" },
              { key: "B", text: "Where does the fuel we use every day come from?" },
              { key: "C", text: "How do clouds make rain?" },
              { key: "D", text: "Why do magnets stick?" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 1 begins by asking where everyday fuel comes from."
          },
          {
            id: 2,
            q: "In the road trip example, why does a car need energy?",
            options: [
              { key: "A", text: "To change color" },
              { key: "B", text: "To move" },
              { key: "C", text: "To grow leaves" },
              { key: "D", text: "To make water" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson states that cars and trucks need energy to move."
          },
          {
            id: 3,
            q: "Activity 2 mainly asks you to do what?",
            options: [
              { key: "A", text: "Write questions you have about fuels" },
              { key: "B", text: "Build a real engine" },
              { key: "C", text: "Memorize all fuel prices" },
              { key: "D", text: "Paint a car" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 2 is an ‘Ask Questions Like a Scientist’ task about fuels."
          },
          {
            id: 4,
            q: "Which is an example of a good investigation question for this lesson?",
            options: [
              { key: "A", text: "What is your favorite color?" },
              { key: "B", text: "Where do different types of fuels come from?" },
              { key: "C", text: "How many planets are there?" },
              { key: "D", text: "Which animal is fastest?" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson focuses on fuels, where they come from, and how we use them."
          },
          {
            id: 5,
            q: "What real-life situation is used to start thinking about fuels?",
            options: [
              { key: "A", text: "A road trip using a car" },
              { key: "B", text: "A snowstorm" },
              { key: "C", text: "A volcano eruption" },
              { key: "D", text: "A spacewalk" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson asks you to think about a trip with your family using a car."
          },
          {
            id: 6,
            q: "What is one idea the lesson asks you to consider about cars and energy?",
            options: [
              { key: "A", text: "Cars can only run on water" },
              { key: "B", text: "Whether a car could work with solar energy" },
              { key: "C", text: "Cars must be made of wood" },
              { key: "D", text: "Cars do not need energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "Activity 2 asks about the possibility of solar-powered cars."
          },
          {
            id: 7,
            q: "Activity 3 asks you to think about fuels used for which daily needs?",
            options: [
              { key: "A", text: "Cooking or heating a home" },
              { key: "B", text: "Growing rainbows" },
              { key: "C", text: "Making rocks float" },
              { key: "D", text: "Stopping gravity" }
            ],
            correctKey: "A",
            whyCorrect:
              "The activity mentions fuel used to cook or heat your home."
          },
          {
            id: 8,
            q: "Which set matches the fuel examples shown in Lesson 1?",
            options: [
              { key: "A", text: "Car fuels, natural gas, coal, wood" },
              { key: "B", text: "Only sunlight and water" },
              { key: "C", text: "Only batteries and magnets" },
              { key: "D", text: "Only wind and clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson shows examples including car fuels, natural gas, coal, and wood."
          },
          {
            id: 9,
            q: "In Activity 3, what do you do with the fuels pictured?",
            options: [
              { key: "A", text: "Choose one and share ideas about where it comes from and how it is used" },
              { key: "B", text: "Throw them away" },
              { key: "C", text: "Mix them together" },
              { key: "D", text: "Measure their temperature only" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 3 asks you to choose one fuel and discuss where it comes from and how it is used."
          },
          {
            id: 10,
            q: "What does the lesson say you will learn about in this concept?",
            options: [
              { key: "A", text: "Only dinosaurs" },
              { key: "B", text: "Fuels and some other sources of energy we use" },
              { key: "C", text: "Only earthquakes" },
              { key: "D", text: "Only the Moon" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson states the concept will teach about fuels and other energy sources."
          },
          {
            id: 11,
            q: "Which Life Skill is highlighted in Lesson 1?",
            options: [
              { key: "A", text: "I can decide if a source is reliable" },
              { key: "B", text: "I can fly a plane" },
              { key: "C", text: "I can breathe underwater" },
              { key: "D", text: "I can stop time" }
            ],
            correctKey: "A",
            whyCorrect:
              "Lesson 1 includes the Life Skill about deciding if a source is reliable."
          },
          {
            id: 12,
            q: "A key purpose of asking questions in science is to ____.",
            options: [
              { key: "A", text: "Start an investigation" },
              { key: "B", text: "Avoid learning" },
              { key: "C", text: "Hide evidence" },
              { key: "D", text: "Make fuel disappear" }
            ],
            correctKey: "A",
            whyCorrect:
              "Science questions guide what you investigate and learn next."
          },
          {
            id: 13,
            q: "Which question best matches the lesson focus?",
            options: [
              { key: "A", text: "Where do fuels come from?" },
              { key: "B", text: "How many stars are in the sky?" },
              { key: "C", text: "Why do cats purr?" },
              { key: "D", text: "How do plants look green?" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson is about where fuels come from and how we use them."
          },
          {
            id: 14,
            q: "When evaluating information about fuels, you should prefer ____.",
            options: [
              { key: "A", text: "Reliable sources" },
              { key: "B", text: "Random guesses only" },
              { key: "C", text: "Rumors" },
              { key: "D", text: "Unproven claims" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson emphasizes choosing reliable sources."
          },
          {
            id: 15,
            q: "What is the best next step after writing your fuel questions in Activity 2?",
            options: [
              { key: "A", text: "Investigate answers using evidence and reliable sources" },
              { key: "B", text: "Delete the questions" },
              { key: "C", text: "Ignore fuels completely" },
              { key: "D", text: "Only draw pictures" }
            ],
            correctKey: "A",
            whyCorrect:
              "Science questions are meant to be investigated using evidence."
          },
          {
            id: 16,
            q: "Which statement is TRUE according to the lesson?",
            options: [
              { key: "A", text: "Cars and trucks need energy to move" },
              { key: "B", text: "Cars move without energy" },
              { key: "C", text: "Fuels are never used at home" },
              { key: "D", text: "Questions are not part of science" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explicitly connects vehicles moving to needing energy."
          },
          {
            id: 17,
            q: "What is the main goal of Lesson 1 in Concept 3.2?",
            options: [
              { key: "A", text: "To memorize fuel names only" },
              { key: "B", text: "To activate prior knowledge and curiosity about fuels" },
              { key: "C", text: "To build a dam" },
              { key: "D", text: "To study rocks only" }
            ],
            correctKey: "B",
            whyCorrect:
              "This is the Wonder part of the concept: questions + what you already know."
          }
        ]
      },

      // ✅ True/False quiz (17) — aligned to Lesson 1
      tf: {
        questions: [
          { id: 1,  s: "Lesson 1 asks: Where does the fuel we use every day come from?", correct: true,  reason: "That is the guiding question of Lesson 1." },
          { id: 2,  s: "Cars and trucks need energy to move.", correct: true,  reason: "The road trip prompt connects energy to vehicle movement." },
          { id: 3,  s: "Activity 2 is about asking questions like a scientist.", correct: true,  reason: "It is labeled as an ‘Ask Questions Like a Scientist’ activity." },
          { id: 4,  s: "In Activity 2, students think about a family trip using a car.", correct: true,  reason: "That is the situation described in the activity." },
          { id: 5,  s: "The lesson suggests thinking about solar-powered cars as an idea.", correct: true,  reason: "Activity 2 includes a question about cars working with solar energy." },
          { id: 6,  s: "Activity 3 asks students to think about fuels used to cook or heat a home.", correct: true,  reason: "The activity mentions cooking and heating at home." },
          { id: 7,  s: "Lesson 1 says fuels are never used in daily life.", correct: false, reason: "The lesson is built around everyday fuel use." },
          { id: 8,  s: "The fuel examples shown include natural gas, coal, and wood.", correct: true,  reason: "These examples are pictured in Lesson 1." },
          { id: 9,  s: "In Activity 3, you choose one fuel and share ideas about it.", correct: true,  reason: "That is the instruction for the activity." },
          { id: 10, s: "The Life Skill in Lesson 1 is about deciding if a source is reliable.", correct: true,  reason: "The lesson highlights this Life Skill." },
          { id: 11, s: "A good science question can start an investigation.", correct: true,  reason: "Questions guide what we investigate and learn." },
          { id: 12, s: "Reliable sources are important when learning about fuels.", correct: true,  reason: "The lesson emphasizes evaluating reliability." },
          { id: 13, s: "Lesson 1 is mainly about how fossils form.", correct: false, reason: "Lesson 1 focuses on fuels in daily life and where they come from (intro/Wonder)." },
          { id: 14, s: "This lesson asks students to think about where fuels come from and how we use them.", correct: true,  reason: "That is the core theme of the activities." },
          { id: 15, s: "The lesson tells students to avoid asking questions.", correct: false, reason: "It explicitly asks students to write questions." },
          { id: 16, s: "A road trip is used to connect fuel to energy for movement.", correct: true,  reason: "That is the purpose of the road trip prompt." },
          { id: 17, s: "Lesson 1 helps activate what students already know before deeper learning.", correct: true,  reason: "It is part of the Wonder section: prior knowledge + questions." }
        ]
      }
    }
  }
};
