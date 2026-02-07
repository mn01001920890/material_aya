// lesson2-data_concept3.3.js
// Theme 3 → Concept 3.3 → Lesson 2
// (Solar Energy + Harness the Wind)
// Data-only file used by your HTML app (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.3",
    lessons: [
      {
        id: "T3-C3.3-L2",
        label: "Lesson 2 (3.3) — Solar & Wind Electricity",
        short:
          "Solar cells: radiant → electrical • Use vs store in batteries • Wind: Sun warms air → wind • Turbines: kinetic → electrical • Energy chain"
      }
    ]
  },

  lessons: {
    "T3-C3.3-L2": {
      title: "Renewable Energy Resources — Lesson 2",
      bigQuestion:
        "How can we capture renewable energy (Sun and wind) to generate electricity?",

      explanationBlocks: [
        {
          title: "1) Solar Panels: What They Do",
          bullets: [
            "Most solar panels are used to generate electricity.",
            "Solar panels that generate electricity are made of many small solar cells.",
            "Solar cells catch the Sun’s radiant energy and turn it directly into electricity."
          ],
          image: {
            src: "lesson3_3_l2_solar_panels.png",
            caption:
              "Solar cells: radiant energy (input) → electricity (output)."
          }
        },
        {
          title: "2) Using Electricity vs Storing Electricity",
          bullets: [
            "The electricity can be used immediately (example: turning on a streetlight).",
            "The electricity can also be stored in a battery for later use.",
            "Examples mentioned: solar-powered streetlights, solar-cell calculators, rooftop solar panels on buildings."
          ]
        },
        {
          title: "3) Solar Power in Communities (Real Uses)",
          bullets: [
            "Some villages use solar power to run irrigation equipment.",
            "This shows solar energy can support important daily needs (not only small devices).",
            "Key idea: a system can include solar panels + wires + a battery + a device."
          ]
        },
        {
          title: "4) Activity 4 Core Questions (Input → Output)",
          bullets: [
            "If the Sun’s energy is the input of the solar panel system, the output is electricity.",
            "Form of energy entering the panels: radiant energy (sunlight).",
            "Form of energy after conversion: electrical energy."
          ]
        },
        {
          title: "5) Wind Exists Because of the Sun",
          bullets: [
            "As the Sun warms Earth, it warms the air.",
            "Different places get different amounts of solar energy.",
            "This causes air to move and wind to blow."
          ]
        },
        {
          title: "6) Wind Turbines: Kinetic Energy → Electrical Energy",
          bullets: [
            "Wind contains kinetic energy (energy of motion).",
            "Wind turbines use wind energy to turn blades (like modern windmills).",
            "Turning blades helps generate electrical energy.",
            "Electricity from wind turbines is carried by big wires to places where it is needed."
          ],
          image: {
            src: "lesson3_3_l2_wind_turbine.png",
            caption:
              "Wind turbine: wind kinetic energy (input) → electrical energy (output)."
          }
        },
        {
          title: "7) Activity 5 Task: Draw an Energy Chain (Inputs & Outputs)",
          bullets: [
            "An energy chain shows how energy enters a system and what energy comes out.",
            "For a wind turbine on a wind farm, the input is wind kinetic energy.",
            "The useful output is electrical energy (carried by wires).",
            "You can also note that some energy can be lost as sound/heat (not the main focus, but realistic)."
          ]
        }
      ],

      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main focus of Lesson 2 (Concept 3.3)?",
            options: [
              { key: "A", text: "How volcanoes erupt" },
              { key: "B", text: "How solar and wind energy can generate electricity" },
              { key: "C", text: "How rocks change into soil" },
              { key: "D", text: "How magnets attract metal" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 2 explains how solar panels and wind turbines generate electricity."
          },
          {
            id: 2,
            q: "Solar panels that generate electricity are made of many small ____.",
            options: [
              { key: "A", text: "Batteries" },
              { key: "B", text: "Solar cells" },
              { key: "C", text: "Magnets" },
              { key: "D", text: "Mirrors" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson states that solar panels are made of many small solar cells."
          },
          {
            id: 3,
            q: "Which form of energy enters the solar panels?",
            options: [
              { key: "A", text: "Radiant energy (sunlight)" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Gravity energy" },
              { key: "D", text: "Shadow energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Solar cells catch radiant energy from the Sun."
          },
          {
            id: 4,
            q: "Solar cells convert the Sun’s radiant energy directly into ____.",
            options: [
              { key: "A", text: "Thermal energy only" },
              { key: "B", text: "Electrical energy" },
              { key: "C", text: "Chemical energy" },
              { key: "D", text: "Magnetic energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson says solar cells turn radiant energy directly into electricity."
          },
          {
            id: 5,
            q: "Which is an example of electricity being used immediately?",
            options: [
              { key: "A", text: "Turning on a streetlight" },
              { key: "B", text: "Growing a tree" },
              { key: "C", text: "Forming coal" },
              { key: "D", text: "Making wind stop" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson gives the streetlight as an immediate-use example."
          },
          {
            id: 6,
            q: "Electricity generated by solar panels can be stored in a ____.",
            options: [
              { key: "A", text: "Cloud" },
              { key: "B", text: "Battery" },
              { key: "C", text: "Rock" },
              { key: "D", text: "Leaf" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson explains that electricity can be stored in a battery."
          },
          {
            id: 7,
            q: "A solar-cell calculator runs on batteries powered by ____.",
            options: [
              { key: "A", text: "Small solar cells" },
              { key: "B", text: "Coal" },
              { key: "C", text: "Windmills" },
              { key: "D", text: "Sound" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson states calculators can use batteries powered by small solar cells."
          },
          {
            id: 8,
            q: "In some villages, solar power is used to power ____ equipment.",
            options: [
              { key: "A", text: "Irrigation" },
              { key: "B", text: "Earthquake" },
              { key: "C", text: "Volcano" },
              { key: "D", text: "Moon" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson mentions solar power for irrigation equipment."
          },
          {
            id: 9,
            q: "What is the output of a solar panel system when the input is the Sun’s energy?",
            options: [
              { key: "A", text: "Electricity" },
              { key: "B", text: "Wind" },
              { key: "C", text: "Soil" },
              { key: "D", text: "Rain" }
            ],
            correctKey: "A",
            whyCorrect:
              "The system converts solar energy into electricity."
          },
          {
            id: 10,
            q: "According to the lesson, wind happens because ____.",
            options: [
              { key: "A", text: "The Sun warms Earth and the air moves" },
              { key: "B", text: "Rocks push the air" },
              { key: "C", text: "The Moon pulls the air into circles" },
              { key: "D", text: "Batteries create air movement" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explains wind forms when the Sun warms air unevenly and it moves."
          },
          {
            id: 11,
            q: "Wind contains ____ energy.",
            options: [
              { key: "A", text: "Kinetic energy" },
              { key: "B", text: "Only chemical energy" },
              { key: "C", text: "Only light energy" },
              { key: "D", text: "No energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Moving air has kinetic energy."
          },
          {
            id: 12,
            q: "What do wind turbines use wind energy to do first?",
            options: [
              { key: "A", text: "Turn blades" },
              { key: "B", text: "Freeze water" },
              { key: "C", text: "Grow plants" },
              { key: "D", text: "Make rocks melt" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson says wind turbines turn blades using wind energy."
          },
          {
            id: 13,
            q: "The useful output of a wind turbine system is usually ____.",
            options: [
              { key: "A", text: "Electrical energy" },
              { key: "B", text: "Shadow energy" },
              { key: "C", text: "Rock energy" },
              { key: "D", text: "Ocean energy only" }
            ],
            correctKey: "A",
            whyCorrect:
              "Wind turbines generate electrical energy."
          },
          {
            id: 14,
            q: "Electricity from wind turbines is carried by big ____.",
            options: [
              { key: "A", text: "Wires" },
              { key: "B", text: "Leaves" },
              { key: "C", text: "Ropes" },
              { key: "D", text: "Clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson says big wires carry electricity where it is needed."
          },
          {
            id: 15,
            q: "What is an energy chain mainly used for in Activity 5?",
            options: [
              { key: "A", text: "To show inputs and outputs of a wind turbine system" },
              { key: "B", text: "To list planets in order" },
              { key: "C", text: "To draw animals eating animals" },
              { key: "D", text: "To measure rainfall only" }
            ],
            correctKey: "A",
            whyCorrect:
              "The activity asks for an energy chain showing inputs and outputs."
          },
          {
            id: 16,
            q: "Which is a correct wind turbine energy chain (simplified)?",
            options: [
              { key: "A", text: "Sun → warms air → wind (kinetic) → turbine blades → electricity" },
              { key: "B", text: "Moon → clouds → rocks → electricity" },
              { key: "C", text: "Soil → seeds → electricity" },
              { key: "D", text: "Electricity → Sun → wind" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explains the Sun warms air, creating wind that can generate electricity."
          },
          {
            id: 17,
            q: "Which is TRUE according to Lesson 2?",
            options: [
              { key: "A", text: "Solar cells can convert radiant energy into electricity" },
              { key: "B", text: "Solar panels only work at night" },
              { key: "C", text: "Wind has no kinetic energy" },
              { key: "D", text: "Electricity cannot travel along wires" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is the key scientific statement in the solar panel reading."
          }
        ]
      },

      tf: {
        questions: [
          {
            id: 1,
            s: "Most solar panels are used to generate electricity.",
            correct: true,
            reason: "The lesson states this directly."
          },
          {
            id: 2,
            s: "Solar panels that generate electricity are made of many small solar cells.",
            correct: true,
            reason: "This is described in the solar panel text."
          },
          {
            id: 3,
            s: "Solar cells catch radiant energy from the Sun and turn it directly into electricity.",
            correct: true,
            reason: "That is the main energy conversion described."
          },
          {
            id: 4,
            s: "The output of a solar panel system is usually sound energy.",
            correct: false,
            reason: "The output is electrical energy (electricity)."
          },
          {
            id: 5,
            s: "Electricity from solar panels can be used immediately or stored in a battery.",
            correct: true,
            reason: "The lesson gives both immediate use and storage examples."
          },
          {
            id: 6,
            s: "A streetlight is an example of electricity being used immediately.",
            correct: true,
            reason: "The lesson uses a streetlight as an example."
          },
          {
            id: 7,
            s: "Solar-cell calculators can use batteries powered by small solar cells.",
            correct: true,
            reason: "This is stated in the lesson text."
          },
          {
            id: 8,
            s: "Rooftop solar panels can help provide electricity for buildings.",
            correct: true,
            reason: "The lesson mentions rooftop solar panels on houses and other buildings."
          },
          {
            id: 9,
            s: "Some villages use solar power to run irrigation equipment.",
            correct: true,
            reason: "This example is included in the solar panel text."
          },
          {
            id: 10,
            s: "Wind exists because different parts of Earth receive different amounts of solar energy.",
            correct: true,
            reason: "Uneven warming causes air movement and wind."
          },
          {
            id: 11,
            s: "Wind is moving air, so it has kinetic energy.",
            correct: true,
            reason: "Kinetic energy is the energy of motion."
          },
          {
            id: 12,
            s: "Wind turbines use wind energy to turn blades.",
            correct: true,
            reason: "That is the first step described for wind turbines."
          },
          {
            id: 13,
            s: "Wind turbines can generate electrical energy.",
            correct: true,
            reason: "The lesson explains this energy conversion."
          },
          {
            id: 14,
            s: "Electricity from wind turbines is carried by big wires to where it is needed.",
            correct: true,
            reason: "The text says electricity is carried by big wires."
          },
          {
            id: 15,
            s: "In Activity 5, students are asked to draw an energy chain showing inputs and outputs of a wind turbine.",
            correct: true,
            reason: "That is the stated task for Activity 5."
          },
          {
            id: 16,
            s: "A correct wind energy chain can start with the Sun warming Earth’s air.",
            correct: true,
            reason: "The lesson explains wind begins with solar warming of air."
          },
          {
            id: 17,
            s: "Solar panels generate electricity by turning electrical energy into radiant energy.",
            correct: false,
            reason: "Solar panels convert radiant energy into electrical energy (not the opposite)."
          }
        ]
      }
    }
  }
};
