// lesson2-data.js
// Theme 3 → Concept 3.1 → Lesson 2 (Energy Chains)
// This file is imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science • Theme 3",
  nav: {
    conceptTitle: "Concept 3.1",
    lessons: [
      {
        id: "T3-C3.1-L2",
        label: "Lesson 2 (3.1) — Energy Chains",
        short:
          "Energy input/output • Trace energy from the Sun • Hair dryer chain • Energy escapes as heat"
      }
    ]
  },

  lessons: {
    "T3-C3.1-L2": {
      title: "Devices and Energy — Lesson 2 (Energy Chains)",
      bigQuestion: "Where does the energy we use come from and go to?",

      explanationBlocks: [
        {
          title: "1) Devices in Use: Energy Input → Energy Output",
          bullets: [
            "Any device that is working must have energy going in (input) and energy coming out (output).",
            "Activity 4 asks you to identify input and output for devices such as a hair dryer, a washing machine, and a detergent bottle.",
            "Ask yourself: What energy goes into the device? What energy comes out while it is operating?"
          ]
        },
        {
          title: "2) What is an Energy Chain?",
          bullets: [
            "An energy chain is a model (diagram) that shows the path of energy from its source until it reaches a device.",
            "It helps us trace energy backward from the device to find the original source.",
            "The lesson explains that most of the energy we use is made inside the Sun, so many energy chains start with the Sun."
          ]
        },
        {
          title: "3) Example: Eating an Orange (Sun → Plant → You)",
          bullets: [
            "Sun (light energy) → sunlight reaches Earth.",
            "An orange tree changes light energy into stored chemical energy (sugars).",
            "When you eat the orange, your body uses chemical energy for movement and activities."
          ]
        },
        {
          title: "4) Example: Heating Water with Wood",
          bullets: [
            "Sunlight helps a tree grow → the tree stores energy as chemical energy in wood.",
            "When wood burns, chemical energy transforms into thermal energy.",
            "Thermal energy heats the water in the pan."
          ]
        },
        {
          title: "5) Hair Dryer Energy Chain (Tracing Back to the Sun)",
          bullets: [
            "A hair dryer needs electrical energy, which enters through an electrical cord (often made of copper).",
            "This electricity may come from a power plant that burns coal or gas to generate electrical energy.",
            "Coal formed long ago from dead trees/plants.",
            "Those trees originally got their energy from sunlight (the Sun).",
            "A simplified chain: Sun → light → plants/trees → coal (chemical) → power plant → electrical → hair dryer."
          ]
        },
        {
          title: "6) Important Idea: Energy Doesn’t Vanish — It Changes Form",
          bullets: [
            "Not all energy becomes the useful output we want from the device.",
            "At each step in the chain, some energy changes into other forms.",
            "The lesson notes that most ‘extra’ energy escapes as heat."
          ]
        }
      ],

      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main focus of Lesson 2?",
            options: [
              { key: "A", text: "How to build a dam" },
              { key: "B", text: "Energy chains: tracing energy from the Sun to devices" },
              { key: "C", text: "How rocks break" },
              { key: "D", text: "How clouds form" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 2 introduces energy chains to trace energy pathways from the Sun to devices."
          },
          {
            id: 2,
            q: "In Activity 4, what do students discuss about devices?",
            options: [
              { key: "A", text: "Color only" },
              { key: "B", text: "Energy input (source) and energy output" },
              { key: "C", text: "Brand name" },
              { key: "D", text: "Price" }
            ],
            correctKey: "B",
            whyCorrect: "Activity 4 is about identifying energy input and output."
          },
          {
            id: 3,
            q: "What is an energy chain?",
            options: [
              { key: "A", text: "A list of planets" },
              { key: "B", text: "A model showing the path of energy from the Sun to a device" },
              { key: "C", text: "A type of metal chain" },
              { key: "D", text: "Only an animal food chain" }
            ],
            correctKey: "B",
            whyCorrect:
              "An energy chain models the path of energy from a source (often the Sun) to the device."
          },
          {
            id: 4,
            q: "Lesson 2 says most energy we use is made inside the ____.",
            options: [
              { key: "A", text: "Ocean" },
              { key: "B", text: "Sun" },
              { key: "C", text: "Moon" },
              { key: "D", text: "Soil" }
            ],
            correctKey: "B",
            whyCorrect: "The lesson states most energy we use is made inside the Sun."
          },
          {
            id: 5,
            q: "In the orange example, the plant stores energy mainly as ____ energy.",
            options: [
              { key: "A", text: "Chemical" },
              { key: "B", text: "Sound" },
              { key: "C", text: "Magnetic" },
              { key: "D", text: "Shadow" }
            ],
            correctKey: "A",
            whyCorrect: "Plants store sunlight as chemical energy (sugars)."
          },
          {
            id: 6,
            q: "Burning wood mostly produces ____ energy that heats water.",
            options: [
              { key: "A", text: "Thermal" },
              { key: "B", text: "Gravity" },
              { key: "C", text: "No energy" },
              { key: "D", text: "Only light" }
            ],
            correctKey: "A",
            whyCorrect: "Burning wood releases thermal energy."
          },
          {
            id: 7,
            q: "The hair dryer’s input energy is mainly ____.",
            options: [
              { key: "A", text: "Electrical energy" },
              { key: "B", text: "Moonlight" },
              { key: "C", text: "Water energy" },
              { key: "D", text: "Rock energy" }
            ],
            correctKey: "A",
            whyCorrect: "A hair dryer uses electrical energy from the power supply."
          },
          {
            id: 8,
            q: "Coal is a form of ____ energy.",
            options: [
              { key: "A", text: "Chemical" },
              { key: "B", text: "Sound" },
              { key: "C", text: "Ice" },
              { key: "D", text: "Wind" }
            ],
            correctKey: "A",
            whyCorrect: "Coal stores chemical energy."
          },
          {
            id: 9,
            q: "In the lesson chain, coal formed long ago from dead ____.",
            options: [
              { key: "A", text: "Trees (plants)" },
              { key: "B", text: "Clouds" },
              { key: "C", text: "Oceans" },
              { key: "D", text: "Mountains" }
            ],
            correctKey: "A",
            whyCorrect: "The lesson links coal formation to dead trees/plants."
          },
          {
            id: 10,
            q: "Where did the trees get their energy from originally?",
            options: [
              { key: "A", text: "Sunlight" },
              { key: "B", text: "Sockets" },
              { key: "C", text: "Earthquakes" },
              { key: "D", text: "Moon only" }
            ],
            correctKey: "A",
            whyCorrect: "Trees get energy from sunlight."
          },
          {
            id: 11,
            q: "Which is a correct simplified hair dryer energy chain?",
            options: [
              { key: "A", text: "Sun → light → coal → power plant → electrical → hair dryer" },
              { key: "B", text: "Moon → rain → fish → hair dryer" },
              { key: "C", text: "Wind → sand → hair dryer" },
              { key: "D", text: "Hair dryer → Sun only" }
            ],
            correctKey: "A",
            whyCorrect: "This matches the trace described in the lesson."
          },
          {
            id: 12,
            q: "Why doesn’t all energy become the useful output?",
            options: [
              { key: "A", text: "Because energy disappears" },
              { key: "B", text: "Because some energy changes form at each link and escapes" },
              { key: "C", text: "Because the Sun stops" },
              { key: "D", text: "Because wires delete energy" }
            ],
            correctKey: "B",
            whyCorrect: "Energy transforms; some becomes other forms that escape."
          },
          {
            id: 13,
            q: "The lesson says most escaped energy is released as ____.",
            options: [
              { key: "A", text: "Heat" },
              { key: "B", text: "Plants" },
              { key: "C", text: "Ice" },
              { key: "D", text: "Magnetism" }
            ],
            correctKey: "A",
            whyCorrect: "It notes most extra energy escapes as heat."
          },
          {
            id: 14,
            q: "Energy chains help us mainly to ____.",
            options: [
              { key: "A", text: "Trace where energy comes from and where it goes" },
              { key: "B", text: "Count planets" },
              { key: "C", text: "Measure rainfall only" },
              { key: "D", text: "Name mountains" }
            ],
            correctKey: "A",
            whyCorrect: "Energy chains model the path of energy."
          },
          {
            id: 15,
            q: "In the orange example, the body uses energy mostly for ____.",
            options: [
              { key: "A", text: "Activities and movement" },
              { key: "B", text: "Making sunlight" },
              { key: "C", text: "Creating coal instantly" },
              { key: "D", text: "Stopping heat loss" }
            ],
            correctKey: "A",
            whyCorrect: "Food chemical energy powers body activities."
          },
          {
            id: 16,
            q: "A device in use must have ____.",
            options: [
              { key: "A", text: "Energy input and energy output" },
              { key: "B", text: "Only output" },
              { key: "C", text: "Only input" },
              { key: "D", text: "No energy at all" }
            ],
            correctKey: "A",
            whyCorrect: "Working devices have input energy and produce outputs."
          },
          {
            id: 17,
            q: "Which statement is TRUE?",
            options: [
              { key: "A", text: "Energy chains show a path from source to device" },
              { key: "B", text: "Energy chains are only about animals eating animals" },
              { key: "C", text: "Energy is destroyed at each step" },
              { key: "D", text: "The Sun is not part of energy stories" }
            ],
            correctKey: "A",
            whyCorrect: "That’s the definition of energy chains in this lesson."
          }
        ]
      },

      tf: {
        questions: [
          { id: 1,  s: "Activity 4 asks students to identify energy input and energy output.", correct: true,  reason: "That is the point of Activity 4." },
          { id: 2,  s: "An energy chain shows the path of energy from the Sun to a device.", correct: true,  reason: "This is the definition given in the lesson." },
          { id: 3,  s: "Lesson 2 says most energy we use is made inside the Sun.", correct: true,  reason: "The lesson states this directly." },
          { id: 4,  s: "Plants can store sunlight energy as chemical energy.", correct: true,  reason: "Plants store energy in sugars (chemical)." },
          { id: 5,  s: "When you eat an orange, your body uses chemical energy from the food.", correct: true,  reason: "Food contains stored chemical energy." },
          { id: 6,  s: "Wood contains no stored energy.", correct: false, reason: "Wood stores chemical energy." },
          { id: 7,  s: "Burning wood can produce thermal energy that heats water.", correct: true,  reason: "That’s exactly the example." },
          { id: 8,  s: "A hair dryer mainly uses electrical energy as input.", correct: true,  reason: "Hair dryers run on electricity." },
          { id: 9,  s: "Coal stores chemical energy.", correct: true,  reason: "Coal is chemical energy." },
          { id: 10, s: "Coal formed long ago from dead plants/trees.", correct: true,  reason: "The lesson traces coal back to dead trees." },
          { id: 11, s: "The trees that became coal got their energy from sunlight.", correct: true,  reason: "Trees grow using sunlight energy." },
          { id: 12, s: "Energy disappears at each link in an energy chain.", correct: false, reason: "Energy changes form; it doesn’t vanish." },
          { id: 13, s: "Some energy can escape as forms not useful for the device.", correct: true,  reason: "The lesson explains energy transforms and escapes." },
          { id: 14, s: "Most escaped energy is released as heat.", correct: true,  reason: "The lesson notes heat is the main escape." },
          { id: 15, s: "Energy chains help trace energy backward to its original source.", correct: true,  reason: "Hair dryer example traces back to the Sun." },
          { id: 16, s: "A working device must have an energy input and energy outputs.", correct: true,  reason: "That’s a core idea of the lesson." },
          { id: 17, s: "Energy chains are the same thing as animal food chains only.", correct: false, reason: "They are different; energy chains trace energy sources." }
        ]
      }
    }
  }
};
