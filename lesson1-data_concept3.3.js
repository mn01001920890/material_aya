// lesson1-data_concept3.3.js
// Theme 3 → Concept 3.3 → Lesson 1 (Renewable Energy Resources)
// Data-only file used by your HTML app (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.3",
    lessons: [
      {
        id: "T3-C3.3-L1",
        label: "Lesson 1 (3.3) — Renewable Energy Resources",
        short:
          "Big question • Windmills & watermills (before electricity) • Solar energy (radiation) • Sun → heat & useful energy"
      }
    ]
  },

  lessons: {
    "T3-C3.3-L1": {
      title: "Renewable Energy Resources — Lesson 1",
      bigQuestion:
        "What are the different ways we can use renewable energy to generate electricity?",

      // ✅ Lesson 1 explanation blocks (aligned to the textbook activities)
      explanationBlocks: [
        {
          title: "1) Big Idea: Renewable Energy Can Generate Electricity",
          bullets: [
            "This concept asks how we can use renewable energy (energy that can be naturally replaced) to generate electricity.",
            "The lesson starts with real examples like solar panels powering street lights, then builds the ideas step-by-step.",
            "Goal: connect what you observe (devices/systems) to how energy moves and changes form."
          ],
          image: {
            src: "lesson3_3_l1_solar_panels_streetlights.png",
            caption:
              "Example: Solar panels can power street lights (renewable energy → electricity)."
          }
        },

        {
          title: "2) Wonder: How Did Machines Work Before Electricity?",
          bullets: [
            "Before electricity, people still needed machines to do hard work.",
            "Windmills and watermills were used to crush grain to make flour at a mill.",
            "Some mills used wind, others used moving water — both are renewable sources because wind and water keep moving naturally.",
            "You are asked to think about advantages and disadvantages of early mills, and why modern turbines look different today."
          ],
          image: {
            src: "lesson3_3_l1_windmills_watermills.png",
            caption:
              "Wonder: Compare windmills & watermills and write your wonder statements."
          }
        },

        {
          title: "3) Solar Energy: Energy from the Sun (Radiation)",
          bullets: [
            "Sunlight is radiant energy (radiation). Energy received from the Sun is called solar energy.",
            "Even when you can’t see the Sun at night, you can feel warmth because some of the Sun’s energy was absorbed by the atmosphere and Earth’s surface earlier.",
            "Land and water absorb the Sun’s energy, which can increase their temperature (energy → heat)."
          ]
        },

        {
          title: "4) Using Solar Energy as Thermal Energy (Everyday Examples)",
          bullets: [
            "Greenhouses let in light/radiant energy from the Sun; that energy converts to heat, warming the inside. This helps farmers grow crops that need warm climates.",
            "Houses can be designed to warm up by placing large glass windows on the wall facing the Sun for the longest part of the day.",
            "Solar energy can be used for cooking: convergent (concave) mirrors can focus sunlight to heat a metal pot and cook food.",
            "Solar energy can heat water: black-pipe panels on the roof warm water as it passes through; the hot water can be stored in a tank for later use."
          ],
          image: {
            src: "lesson3_3_l1_solar_water_heater.png",
            caption:
              "Example model: Solar energy can be transformed into heat to warm water (solar water heater)."
          }
        },

        {
          title: "5) Modeling (Diagram Task): Show Energy Transformations",
          bullets: [
            "The lesson asks you to underline evidence that energy is transformed from one type to another (for example: radiant energy → thermal energy).",
            "Then you draw a labeled diagram showing how the Sun’s energy is transformed in one example (greenhouse / cooking / heating water).",
            "Key skill: use labels like 'radiant energy', 'thermal energy', and show arrows for energy transfer."
          ]
        }
      ],

      // ✅ MCQ quiz (17) — aligned to Lesson 1
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the big question for Concept 3.3 (used in Lesson 1)?",
            options: [
              { key: "A", text: "How do rocks break down?" },
              { key: "B", text: "What are the different ways we can use renewable energy to generate electricity?" },
              { key: "C", text: "How do animals breathe?" },
              { key: "D", text: "Why do seasons change?" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 1 begins with this exact driving question for renewable energy and electricity generation."
          },
          {
            id: 2,
            q: "In the lesson, solar panels are shown powering ____.",
            options: [
              { key: "A", text: "Street lights" },
              { key: "B", text: "Volcanoes" },
              { key: "C", text: "Mountains" },
              { key: "D", text: "Earthquakes" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson opens with an example of solar panels used to power street lights."
          },
          {
            id: 3,
            q: "What did many windmills and watermills commonly do 400 years ago?",
            options: [
              { key: "A", text: "Make rain" },
              { key: "B", text: "Crush grain to make flour" },
              { key: "C", text: "Create sunlight" },
              { key: "D", text: "Freeze water" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson states windmills and watermills were used to crush grain to make flour."
          },
          {
            id: 4,
            q: "Which energy source is described as energy received from the Sun?",
            options: [
              { key: "A", text: "Solar energy" },
              { key: "B", text: "Coal energy" },
              { key: "C", text: "Nuclear energy" },
              { key: "D", text: "Battery energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The text defines energy received from the Sun as solar energy."
          },
          {
            id: 5,
            q: "Sunlight is described as ____ energy.",
            options: [
              { key: "A", text: "Sound" },
              { key: "B", text: "Radiant (radiation)" },
              { key: "C", text: "Magnetic" },
              { key: "D", text: "Chemical" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson says sunlight is radiant energy, also called radiation."
          },
          {
            id: 6,
            q: "When land and water absorb the Sun’s energy, what can happen?",
            options: [
              { key: "A", text: "Their temperatures can increase" },
              { key: "B", text: "They become invisible" },
              { key: "C", text: "They stop existing" },
              { key: "D", text: "They turn into metal" }
            ],
            correctKey: "A",
            whyCorrect:
              "Absorbing solar energy can increase temperature (energy becomes heat)."
          },
          {
            id: 7,
            q: "How does a greenhouse mainly use the Sun’s energy?",
            options: [
              { key: "A", text: "It blocks all light" },
              { key: "B", text: "It lets in radiant energy that converts to heat inside" },
              { key: "C", text: "It turns sunlight into sound" },
              { key: "D", text: "It freezes the air" }
            ],
            correctKey: "B",
            whyCorrect:
              "Greenhouses allow light in, and that radiant energy converts to heat to warm the inside."
          },
          {
            id: 8,
            q: "Which home design idea is mentioned for using solar energy?",
            options: [
              { key: "A", text: "Put windows on the wall that faces the Sun longest" },
              { key: "B", text: "Build walls from ice" },
              { key: "C", text: "Remove all windows" },
              { key: "D", text: "Paint the roof purple to create electricity" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explains using large glass windows on the wall that faces the Sun longest."
          },
          {
            id: 9,
            q: "What type of mirror is mentioned for solar cooking?",
            options: [
              { key: "A", text: "Flat mirror only" },
              { key: "B", text: "Convergent (concave) mirror" },
              { key: "C", text: "Mirror made of plastic only" },
              { key: "D", text: "No mirrors can be used" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson says convergent (concave) mirrors can focus sunlight to cook."
          },
          {
            id: 10,
            q: "In the solar water heater example, why are black pipes useful?",
            options: [
              { key: "A", text: "They help water cool down" },
              { key: "B", text: "They help absorb heat from sunlight to warm water" },
              { key: "C", text: "They create wind" },
              { key: "D", text: "They turn water into rocks" }
            ],
            correctKey: "B",
            whyCorrect:
              "The example describes panels made of black pipes heating water as it passes through."
          },
          {
            id: 11,
            q: "Why does the lesson ask you to draw a labeled diagram?",
            options: [
              { key: "A", text: "To show energy transformations and transfers clearly" },
              { key: "B", text: "To memorize only definitions" },
              { key: "C", text: "To avoid using evidence" },
              { key: "D", text: "To draw without labels" }
            ],
            correctKey: "A",
            whyCorrect:
              "The task is to model how the Sun’s energy changes form (for example radiant → heat)."
          },
          {
            id: 12,
            q: "Which is an example of solar energy being used as thermal energy?",
            options: [
              { key: "A", text: "Greenhouse warming the air inside" },
              { key: "B", text: "A rock making electricity by itself" },
              { key: "C", text: "A battery creating sunlight" },
              { key: "D", text: "A magnet making clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "The greenhouse example is specifically about radiant energy converting to heat."
          },
          {
            id: 13,
            q: "Which statement best matches the lesson’s focus on evidence?",
            options: [
              { key: "A", text: "Underline evidence that energy changes from one type to another" },
              { key: "B", text: "Ignore the text and guess" },
              { key: "C", text: "Only copy pictures with no thinking" },
              { key: "D", text: "Use only opinions with no observation" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 3 explicitly asks students to underline evidence for energy transformation."
          },
          {
            id: 14,
            q: "What are windmills and watermills introduced to help you think about?",
            options: [
              { key: "A", text: "How machines worked before electricity" },
              { key: "B", text: "How to create earthquakes" },
              { key: "C", text: "How to stop the Sun" },
              { key: "D", text: "How to make clouds heavier" }
            ],
            correctKey: "A",
            whyCorrect:
              "They show how people used wind and water energy before modern electric systems."
          },
          {
            id: 15,
            q: "In the lesson, the warmth you can feel is an example of which energy form?",
            options: [
              { key: "A", text: "Thermal energy (heat)" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Magnetic energy" },
              { key: "D", text: "Shadow energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The text explains feeling warmth from absorbed solar energy (heat)."
          },
          {
            id: 16,
            q: "Which best describes the word 'radiation' in this lesson?",
            options: [
              { key: "A", text: "Energy from the Sun that travels as radiant energy (sunlight)" },
              { key: "B", text: "Only energy from batteries" },
              { key: "C", text: "Energy that can’t move" },
              { key: "D", text: "Energy made only inside oceans" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson defines sunlight as radiant energy, or radiation."
          },
          {
            id: 17,
            q: "Which is TRUE according to Lesson 1?",
            options: [
              { key: "A", text: "Solar energy can be used for cooking and heating water" },
              { key: "B", text: "Solar energy can only be used at night" },
              { key: "C", text: "Windmills never helped people" },
              { key: "D", text: "Greenhouses block solar energy completely" }
            ],
            correctKey: "A",
            whyCorrect:
              "The text gives examples of solar cooking and solar water heating."
          }
        ]
      },

      // ✅ True/False (17) — aligned to Lesson 1
      tf: {
        questions: [
          {
            id: 1,
            s: "Lesson 1 asks how renewable energy can be used to generate electricity.",
            correct: true,
            reason:
              "That is the big question of Concept 3.3 at the start of this lesson."
          },
          {
            id: 2,
            s: "The lesson shows solar panels powering street lights.",
            correct: true,
            reason:
              "A street-light example is used at the beginning of the concept."
          },
          {
            id: 3,
            s: "People only started using machines after electricity was invented.",
            correct: false,
            reason:
              "The lesson explains people used machines long before electricity (windmills/watermills)."
          },
          {
            id: 4,
            s: "Windmills and watermills were used to crush grain to make flour.",
            correct: true,
            reason:
              "This is stated directly in the lesson text."
          },
          {
            id: 5,
            s: "Sunlight is described as radiant energy (radiation).",
            correct: true,
            reason:
              "The lesson defines sunlight that way."
          },
          {
            id: 6,
            s: "Energy received from the Sun is called solar energy.",
            correct: true,
            reason:
              "This is the definition given in Activity 3."
          },
          {
            id: 7,
            s: "Land and water can absorb the Sun’s energy and increase in temperature.",
            correct: true,
            reason:
              "The text says absorbed solar energy can warm surfaces."
          },
          {
            id: 8,
            s: "A greenhouse turns sunlight into cold air.",
            correct: false,
            reason:
              "Greenhouses let in radiant energy that converts to heat inside."
          },
          {
            id: 9,
            s: "Greenhouses can help farmers grow crops that need warm climates.",
            correct: true,
            reason:
              "The lesson states greenhouse warming helps crops grow."
          },
          {
            id: 10,
            s: "The lesson mentions using large glass windows facing the Sun to warm houses.",
            correct: true,
            reason:
              "This is one of the examples of using solar energy for heat."
          },
          {
            id: 11,
            s: "A convergent (concave) mirror can help focus sunlight for cooking.",
            correct: true,
            reason:
              "Solar cooking is described using concave mirrors."
          },
          {
            id: 12,
            s: "Solar water heaters can use black-pipe panels to warm water on a roof.",
            correct: true,
            reason:
              "The lesson describes this heating method and storing hot water."
          },
          {
            id: 13,
            s: "The lesson asks students to underline evidence of energy changing form.",
            correct: true,
            reason:
              "Activity 3 explicitly asks for underlining evidence of transformation."
          },
          {
            id: 14,
            s: "Drawing a diagram with labels helps model energy transfer and transformation.",
            correct: true,
            reason:
              "The activity requires a labeled diagram showing how energy changes."
          },
          {
            id: 15,
            s: "Solar energy cannot be used as a thermal energy source.",
            correct: false,
            reason:
              "The lesson gives multiple examples of solar energy used for heat."
          },
          {
            id: 16,
            s: "Windmills and watermills are included to help students think about life before electricity.",
            correct: true,
            reason:
              "That is the purpose of Activity 2 in the Wonder section."
          },
          {
            id: 17,
            s: "At night, it is impossible to feel warmth that came from the Sun’s energy.",
            correct: false,
            reason:
              "The lesson explains you can still feel warmth because energy was absorbed by the atmosphere and surfaces."
          }
        ]
      }
    }
  }
};
