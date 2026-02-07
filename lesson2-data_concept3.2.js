// lesson2-data_concept3.2.js
// Theme 3 → Concept 3.2 → Lesson 2 (Types of Fuel)
// Data-only file imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.2",
    lessons: [
      {
        id: "T3-C3.2-L2",
        label: "Lesson 2 (3.2) — Types of Fuel",
        short:
          "Fuels release thermal energy • Biofuels vs fossil fuels • Renewable vs nonrenewable • Oil vs water resources"
      }
    ]
  },

  lessons: {
    "T3-C3.2-L2": {
      title: "About Fuels — Lesson 2 (Types of Fuel)",
      bigQuestion: "What are the different types of fuels, and where do they come from?",

      explanationBlocks: [
        {
          title: "1) What is a Fuel?",
          bullets: [
            "A fuel is a substance that releases thermal (heat) energy when it is burned.",
            "People use fuels to generate energy for daily needs (cooking, heating, transportation, and electricity)."
          ]
        },
        {
          title: "2) Biofuels (Renewable Fuels from Living Things)",
          bullets: [
            "Some fuels come from living things or materials made from living things. These are called biofuels.",
            "Wood is one of the oldest fuels and is still widely used around the world.",
            "Charcoal (made from wood) is an example of a biofuel.",
            "Some plants can be turned into liquid fuels (for example: switch grass, wood chips, and corn).",
            "If we trace the energy in these fuels back to the start, it began as light energy from the Sun.",
            "Because plants can grow again, the supply of biofuels can be renewed—so these fuels are called renewable fuels."
          ]
        },
        {
          title: "3) Managing Renewable Fuels (Sustainable Use)",
          bullets: [
            "Renewable does not mean ‘unlimited’—renewable fuels must be managed carefully.",
            "Using wood sustainably means not using the resource faster than it can be replaced.",
            "If trees are cut down faster than they can grow back, it can cause deforestation, which harms the environment."
          ]
        },
        {
          title: "4) Fossil Fuels (Nonrenewable Fuels Formed Over Millions of Years)",
          bullets: [
            "Fossil fuels formed from the remains of plants and animals that lived millions of years ago and were buried under Earth’s surface.",
            "Over a very long time, heat and pressure turned these remains into fuels.",
            "Coal formed mainly from ancient plants.",
            "Oil and natural gas formed mostly from ancient sea animals that were buried rapidly.",
            "Fossil fuels form very slowly over millions of years, but humans use them much faster than they are formed.",
            "Because they cannot be easily renewed on a human timescale, fossil fuels are called nonrenewable energy sources."
          ]
        },
        {
          title: "5) Activity 5: Oil and Water (Renewable vs Nonrenewable Resources)",
          bullets: [
            "Oil comes from deep underground. Scientists think it formed from decomposed sea creatures, then heat and pressure slowly turned the remains into oil.",
            "Oil is nonrenewable: it is used faster than it can be replaced, so we must use it wisely because we could run out.",
            "Water is renewable: it can be renewed soon after it is used.",
            "Even though water is renewable, we must still conserve it by not wasting or polluting it.",
            "Lesson conclusion: Oil and water are different resources, but both must be used wisely."
          ]
        },
        {
          title: "6) Key Vocabulary to Master",
          bullets: [
            "Fuel: a substance burned to release thermal energy.",
            "Biofuel: a fuel made from living things (or materials from living things).",
            "Renewable resource: can be renewed soon after it is used.",
            "Nonrenewable resource: used faster than it can be replaced.",
            "Fossil fuels: coal, oil, and natural gas formed from ancient living things over millions of years.",
            "Sustainable use: using a resource at a rate that allows it to be replaced."
          ]
        }
      ],

      // ✅ MCQ quiz (17) — aligned to Lesson 2 (Concept 3.2)
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main focus of Lesson 2 (Concept 3.2)?",
            options: [
              { key: "A", text: "How earthquakes happen" },
              { key: "B", text: "Different types of fuels and where they come from" },
              { key: "C", text: "How to build a robot" },
              { key: "D", text: "How clouds form" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 2 is titled about types of fuel and explains where fuels come from."
          },
          {
            id: 2,
            q: "A fuel is a substance that, when burned, releases ____ energy.",
            options: [
              { key: "A", text: "Magnetic" },
              { key: "B", text: "Thermal (heat)" },
              { key: "C", text: "Shadow" },
              { key: "D", text: "Gravity" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson defines fuels as substances that release thermal energy when burned."
          },
          {
            id: 3,
            q: "Wood is described in the lesson as ____.",
            options: [
              { key: "A", text: "The newest fuel" },
              { key: "B", text: "The most ancient fuel and still widely used" },
              { key: "C", text: "Not a fuel" },
              { key: "D", text: "A fossil fuel" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson states wood is the most ancient fuel and still widely used."
          },
          {
            id: 4,
            q: "Biofuels are called biofuels because they are made from ____.",
            options: [
              { key: "A", text: "Living things (plants and other materials from living things)" },
              { key: "B", text: "Only rocks" },
              { key: "C", text: "Only oceans" },
              { key: "D", text: "Only electricity" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson explains they are made from living things."
          },
          {
            id: 5,
            q: "Which is an example of a biofuel mentioned in the lesson?",
            options: [
              { key: "A", text: "Charcoal" },
              { key: "B", text: "Granite" },
              { key: "C", text: "Plastic" },
              { key: "D", text: "Magnet" }
            ],
            correctKey: "A",
            whyCorrect: "Charcoal made from wood is given as a biofuel example."
          },
          {
            id: 6,
            q: "Some plants can be turned into ____ fuels.",
            options: [
              { key: "A", text: "Liquid" },
              { key: "B", text: "Metal" },
              { key: "C", text: "Stone" },
              { key: "D", text: "Magnetic" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson says some plants can be turned into liquid fuels."
          },
          {
            id: 7,
            q: "If we trace the energy in many biofuels back to the start, it began as light energy from the ____.",
            options: [
              { key: "A", text: "Moon" },
              { key: "B", text: "Sun" },
              { key: "C", text: "Soil" },
              { key: "D", text: "Ocean" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson states it started with light energy from the Sun."
          },
          {
            id: 8,
            q: "Biofuels are considered renewable because ____.",
            options: [
              { key: "A", text: "They form in one second" },
              { key: "B", text: "Plants grow and the supply can be renewed" },
              { key: "C", text: "They come from rocks" },
              { key: "D", text: "They cannot be replaced" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson explains plant growth renews supply."
          },
          {
            id: 9,
            q: "Using wood sustainably means ____.",
            options: [
              { key: "A", text: "Using it faster than it can be replaced" },
              { key: "B", text: "Not using a resource faster than it can be replaced" },
              { key: "C", text: "Never planting trees" },
              { key: "D", text: "Only using oil" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson defines sustainable use as not using faster than replacement."
          },
          {
            id: 10,
            q: "Cutting down trees faster than they can grow back can cause ____.",
            options: [
              { key: "A", text: "Deforestation" },
              { key: "B", text: "More rainbows" },
              { key: "C", text: "More planets" },
              { key: "D", text: "Instant new forests" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson warns that faster cutting leads to deforestation."
          },
          {
            id: 11,
            q: "Fossil fuels formed from the remains of ____ that lived millions of years ago.",
            options: [
              { key: "A", text: "Plants and animals" },
              { key: "B", text: "Clouds" },
              { key: "C", text: "Sand only" },
              { key: "D", text: "Wind only" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson defines fossil fuels as remains of ancient plants and animals."
          },
          {
            id: 12,
            q: "Coal formed mainly from ancient ____.",
            options: [
              { key: "A", text: "Plants" },
              { key: "B", text: "Ice" },
              { key: "C", text: "Stars" },
              { key: "D", text: "Magnets" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson states coal formed mainly from ancient plants."
          },
          {
            id: 13,
            q: "Oil and natural gas formed mostly from ancient ____.",
            options: [
              { key: "A", text: "Sea animals" },
              { key: "B", text: "Mountains" },
              { key: "C", text: "Coins" },
              { key: "D", text: "Robots" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson explains oil and gas formed mostly from ancient sea animals."
          },
          {
            id: 14,
            q: "Fossil fuels are called nonrenewable because ____.",
            options: [
              { key: "A", text: "They form very quickly" },
              { key: "B", text: "We use them much faster than they are formed" },
              { key: "C", text: "They grow on trees every week" },
              { key: "D", text: "They are made by machines" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson says they form slowly over millions of years but are used up faster."
          },
          {
            id: 15,
            q: "Oil is described in Activity 5 as a ____ resource.",
            options: [
              { key: "A", text: "Renewable" },
              { key: "B", text: "Nonrenewable" },
              { key: "C", text: "Magnetic" },
              { key: "D", text: "Invisible" }
            ],
            correctKey: "B",
            whyCorrect: "Activity 5 states oil is nonrenewable."
          },
          {
            id: 16,
            q: "Water is described in Activity 5 as a ____ resource.",
            options: [
              { key: "A", text: "Renewable" },
              { key: "B", text: "Nonrenewable" },
              { key: "C", text: "Nuclear" },
              { key: "D", text: "Only thermal" }
            ],
            correctKey: "A",
            whyCorrect: "Activity 5 states water is renewable."
          },
          {
            id: 17,
            q: "Which statement matches the lesson conclusion about using resources?",
            options: [
              { key: "A", text: "Only nonrenewable resources need careful use." },
              { key: "B", text: "Renewable resources can be wasted with no problems." },
              { key: "C", text: "Both oil and water should be used wisely." },
              { key: "D", text: "Resources do not matter because they renew instantly." }
            ],
            correctKey: "C",
            whyCorrect: "The lesson says we must use both oil and water wisely."
          }
        ]
      },

      // ✅ True/False (17) — aligned to Lesson 2 (Concept 3.2)
      tf: {
        questions: [
          {
            id: 1,
            s: "Fuels are substances that, when burned, release thermal energy.",
            correct: true,
            reason: "This is the definition given in the lesson text."
          },
          {
            id: 2,
            s: "Wood is described as one of the newest fuels.",
            correct: false,
            reason: "The lesson says wood is the most ancient fuel and still widely used."
          },
          {
            id: 3,
            s: "Biofuels are fuels made from living things or materials from living things.",
            correct: true,
            reason: "The lesson explains they are made from living things."
          },
          {
            id: 4,
            s: "Charcoal made from wood is an example of a biofuel.",
            correct: true,
            reason: "The lesson uses charcoal as a biofuel example."
          },
          {
            id: 5,
            s: "Some plants can be turned into liquid fuels.",
            correct: true,
            reason: "The lesson mentions plant-based liquid fuels."
          },
          {
            id: 6,
            s: "The energy in many biofuels can be traced back to light energy from the Sun.",
            correct: true,
            reason: "The lesson states the energy started with sunlight."
          },
          {
            id: 7,
            s: "Biofuels are renewable because plants can grow and renew the supply.",
            correct: true,
            reason: "The lesson describes renewal through plant growth."
          },
          {
            id: 8,
            s: "Renewable fuels do not need any management because they are unlimited.",
            correct: false,
            reason: "The lesson says renewable fuels require careful management."
          },
          {
            id: 9,
            s: "Using wood sustainably means not using a resource faster than it can be replaced.",
            correct: true,
            reason: "This is the sustainability idea stated in the lesson."
          },
          {
            id: 10,
            s: "Cutting down trees faster than they can grow can lead to deforestation.",
            correct: true,
            reason: "The lesson links overcutting to deforestation."
          },
          {
            id: 11,
            s: "Fossil fuels formed from the remains of plants and animals that lived millions of years ago.",
            correct: true,
            reason: "This is the fossil fuel definition in the lesson."
          },
          {
            id: 12,
            s: "Coal formed mainly from ancient plants.",
            correct: true,
            reason: "The lesson states coal formed mainly from ancient plants."
          },
          {
            id: 13,
            s: "Oil and natural gas formed mostly from ancient sea animals.",
            correct: true,
            reason: "The lesson describes oil and gas formation from sea animals."
          },
          {
            id: 14,
            s: "Fossil fuels form quickly, so they are easy to replace.",
            correct: false,
            reason: "The lesson says fossil fuels form very slowly over millions of years."
          },
          {
            id: 15,
            s: "Fossil fuels are nonrenewable because we use them up much faster than they are formed.",
            correct: true,
            reason: "This is the key reason given for nonrenewable fossil fuels."
          },
          {
            id: 16,
            s: "Oil is a nonrenewable resource.",
            correct: true,
            reason: "Activity 5 states oil is nonrenewable."
          },
          {
            id: 17,
            s: "Water is renewable, but we should still avoid wasting or polluting it.",
            correct: true,
            reason: "Activity 5 explains water is renewable but must be used carefully."
          }
        ]
      }
    }
  }
};
