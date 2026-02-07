// lesson3-data_concept3.3.js
// Theme 3 → Concept 3.3 → Lesson 3
// (Hydroelectricity: Falling Water → Turbines → Electricity)
// Data-only file used by your HTML app (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.3",
    lessons: [
      {
        id: "T3-C3.3-L3",
        label: "Lesson 3 (3.3) — Hydroelectricity (Falling Water)",
        short:
          "Rivers: gravitational potential → kinetic • Dams store potential energy • Turbines + generators make electricity • Compare water vs wind • Model a turbine generator"
      }
    ]
  },

  lessons: {
    "T3-C3.3-L3": {
      title: "Renewable Energy Resources — Lesson 3 (Hydroelectricity)",
      bigQuestion:
        "How can energy from falling water be used to generate electricity?",

      explanationBlocks: [
        {
          title: "1) Key Idea: Falling Water Can Generate Electricity",
          bullets: [
            "Water can be used to generate electricity, just like wind can.",
            "The lesson focuses on how energy changes form as water moves downhill and through a dam system.",
            "You compare water systems with wind turbines using a similarities/differences organizer."
          ]
        },
        {
          title: "2) Rivers Moving Downhill: Potential → Kinetic",
          bullets: [
            "Rivers run downhill.",
            "As water moves downhill, gravitational potential energy is changed into kinetic energy (energy of motion).",
            "This moving water can be harnessed to do work."
          ]
        },
        {
          title: "3) Hydroelectric Dam: Storing Potential Energy",
          bullets: [
            "A hydroelectric dam holds back the flow of water.",
            "Holding water back builds up gravitational potential energy.",
            "When water is released, it falls and moves fast (kinetic energy increases)."
          ]
        },
        {
          title: "4) Turbines and Generators: Motion → Electricity",
          bullets: [
            "Released water passes through turbines inside the dam.",
            "Falling water makes the turbines turn.",
            "Turbines and generators work together to generate electricity.",
            "The electricity can be sent along wires to cities where it is needed.",
            "Electricity made this way is called hydroelectricity."
          ],
          image: {
            src: "lesson3_3_l3_hydroelectric_dam.png",
            caption:
              "Hydroelectricity: stored water → falling water → spinning turbine → generator → electricity to wires."
          }
        },
        {
          title: "5) Activity 6: Compare Wind vs Water Electricity",
          bullets: [
            "Both wind and water systems use a moving fluid (air or water) with kinetic energy.",
            "Both systems spin turbines and use generators to produce electricity.",
            "Both send electricity through wires to where it is needed.",
            "Difference: a dam can store water (potential energy) before releasing it; wind is not stored in the same way."
          ]
        },
        {
          title: "6) Activity 7 (Hands-On): Model a Turbine Generator",
          bullets: [
            "You use a pinwheel as a model of a spinning turbine in a hydroelectric dam.",
            "Water flowing from a container makes the pinwheel spin (like falling water spinning a turbine).",
            "After water runs out, you change the model to make water renewable within the system (hint: the water cycle).",
            "Key thinking: How does your solution mimic what happens on Earth (evaporation → condensation → precipitation → collection)?"
          ]
        },
        {
          title: "7) Big Takeaway: Mechanical Energy Can Become Electrical Energy",
          bullets: [
            "Wind and falling water are forms of mechanical energy (energy of motion).",
            "Mechanical energy can be used to generate electricity by spinning turbines connected to generators.",
            "Energy does not disappear— it changes form as it moves through the system."
          ]
        }
      ],

      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main focus of Lesson 3 (Concept 3.3)?",
            options: [
              { key: "A", text: "How magnets work" },
              { key: "B", text: "How energy from falling water can generate electricity" },
              { key: "C", text: "How clouds form" },
              { key: "D", text: "How rocks melt" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 3 explains hydroelectricity: using falling water to generate electricity."
          },
          {
            id: 2,
            q: "As rivers run downhill, gravitational potential energy changes into ____.",
            options: [
              { key: "A", text: "Chemical energy" },
              { key: "B", text: "Kinetic energy" },
              { key: "C", text: "Sound energy" },
              { key: "D", text: "Shadow energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "Moving downhill converts stored (potential) energy into motion (kinetic) energy."
          },
          {
            id: 3,
            q: "What does a hydroelectric dam do first to help generate electricity?",
            options: [
              { key: "A", text: "It holds back water to build potential energy" },
              { key: "B", text: "It turns sunlight into electricity" },
              { key: "C", text: "It freezes water into ice" },
              { key: "D", text: "It makes wind stop" }
            ],
            correctKey: "A",
            whyCorrect:
              "The dam stores water to build gravitational potential energy."
          },
          {
            id: 4,
            q: "When water is released from a dam, it passes through ____.",
            options: [
              { key: "A", text: "Turbines" },
              { key: "B", text: "Leaves" },
              { key: "C", text: "Clouds" },
              { key: "D", text: "Magnets" }
            ],
            correctKey: "A",
            whyCorrect:
              "Released water passes through turbines in the dam."
          },
          {
            id: 5,
            q: "What makes the turbines turn in a hydroelectric dam?",
            options: [
              { key: "A", text: "Falling/moving water" },
              { key: "B", text: "Moonlight" },
              { key: "C", text: "Static electricity in the air" },
              { key: "D", text: "Rocks pushing the turbine" }
            ],
            correctKey: "A",
            whyCorrect:
              "The motion of falling water spins the turbine blades."
          },
          {
            id: 6,
            q: "Turbines work with ____ to generate electricity.",
            options: [
              { key: "A", text: "Generators" },
              { key: "B", text: "Mirrors" },
              { key: "C", text: "Seeds" },
              { key: "D", text: "Clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson states turbines and generators in the dam generate electricity."
          },
          {
            id: 7,
            q: "Electricity made from falling water is called ____.",
            options: [
              { key: "A", text: "Hydroelectricity" },
              { key: "B", text: "Solar electricity" },
              { key: "C", text: "Magnetic electricity" },
              { key: "D", text: "Shadow power" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is the name given to electricity generated by a hydroelectric dam."
          },
          {
            id: 8,
            q: "After electricity is generated in a dam, it is sent along ____ to cities.",
            options: [
              { key: "A", text: "Wires" },
              { key: "B", text: "Rivers" },
              { key: "C", text: "Trees" },
              { key: "D", text: "Mountains" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson says electricity is sent along wires to where it is needed."
          },
          {
            id: 9,
            q: "What is the energy type of moving water?",
            options: [
              { key: "A", text: "Kinetic energy" },
              { key: "B", text: "Chemical energy" },
              { key: "C", text: "Radiant energy" },
              { key: "D", text: "No energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Movement means kinetic energy."
          },
          {
            id: 10,
            q: "Activity 6 mainly asks students to compare using ____ and ____ to generate electricity.",
            options: [
              { key: "A", text: "Rocks and sand" },
              { key: "B", text: "Water and wind" },
              { key: "C", text: "The Moon and stars" },
              { key: "D", text: "Heat and cold" }
            ],
            correctKey: "B",
            whyCorrect:
              "The organizer compares similarities and differences between water and wind electricity."
          },
          {
            id: 11,
            q: "Which similarity is correct for wind and water electricity systems?",
            options: [
              { key: "A", text: "Both spin turbines connected to generators" },
              { key: "B", text: "Both require burning coal" },
              { key: "C", text: "Both can only work at night" },
              { key: "D", text: "Both stop energy from changing form" }
            ],
            correctKey: "A",
            whyCorrect:
              "Both systems use kinetic energy to spin turbines and generate electricity."
          },
          {
            id: 12,
            q: "In Activity 7, what object models the spinning turbine?",
            options: [
              { key: "A", text: "Pinwheel" },
              { key: "B", text: "Pencil" },
              { key: "C", text: "Book" },
              { key: "D", text: "Rock" }
            ],
            correctKey: "A",
            whyCorrect:
              "The investigation uses a pinwheel to model a turbine."
          },
          {
            id: 13,
            q: "In the investigation, water is used to make the pinwheel ____.",
            options: [
              { key: "A", text: "Spin" },
              { key: "B", text: "Grow" },
              { key: "C", text: "Glow" },
              { key: "D", text: "Freeze" }
            ],
            correctKey: "A",
            whyCorrect:
              "Flowing water provides motion that spins the pinwheel."
          },
          {
            id: 14,
            q: "How do students make water a renewable resource within the model system?",
            options: [
              { key: "A", text: "By using a method that mimics the water cycle" },
              { key: "B", text: "By throwing the water away" },
              { key: "C", text: "By turning water into coal" },
              { key: "D", text: "By stopping water from moving forever" }
            ],
            correctKey: "A",
            whyCorrect:
              "The activity hints to consider the water cycle to renew water in the system."
          },
          {
            id: 15,
            q: "Wind and falling water are both examples of ____ energy resources.",
            options: [
              { key: "A", text: "Mechanical (motion) energy" },
              { key: "B", text: "Only chemical energy" },
              { key: "C", text: "Only radiant energy" },
              { key: "D", text: "Only magnetic energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Both involve motion, which is mechanical (kinetic) energy."
          },
          {
            id: 16,
            q: "Which simplified energy chain best matches hydroelectricity?",
            options: [
              { key: "A", text: "Stored water (potential) → falling water (kinetic) → turbine → generator → electricity" },
              { key: "B", text: "Moonlight → turbine → electricity" },
              { key: "C", text: "Soil → seeds → electricity" },
              { key: "D", text: "Electricity → water → Sun" }
            ],
            correctKey: "A",
            whyCorrect:
              "That chain shows the correct energy transformations described in the lesson."
          },
          {
            id: 17,
            q: "Which statement is TRUE according to Lesson 3?",
            options: [
              { key: "A", text: "A dam can hold back water to build up potential energy" },
              { key: "B", text: "Rivers move uphill to make electricity" },
              { key: "C", text: "Turbines do not spin in dams" },
              { key: "D", text: "Electricity cannot be sent to cities" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson states dams store water to build potential energy before release."
          }
        ]
      },

      tf: {
        questions: [
          {
            id: 1,
            s: "Lesson 3 explains how falling water can generate electricity.",
            correct: true,
            reason: "That is the title and main idea of the lesson."
          },
          {
            id: 2,
            s: "Rivers run downhill and can change gravitational potential energy into kinetic energy.",
            correct: true,
            reason: "Moving downhill turns stored energy into motion energy."
          },
          {
            id: 3,
            s: "A hydroelectric dam holds back water to build up potential energy.",
            correct: true,
            reason: "Storing water behind the dam increases gravitational potential energy."
          },
          {
            id: 4,
            s: "When water is released, it passes through turbines in the dam.",
            correct: true,
            reason: "That is the step described before electricity generation."
          },
          {
            id: 5,
            s: "Falling water makes the turbines turn.",
            correct: true,
            reason: "Moving water provides the force to spin turbine blades."
          },
          {
            id: 6,
            s: "Generators in the dam help generate electricity.",
            correct: true,
            reason: "The lesson states turbines and generators generate electricity."
          },
          {
            id: 7,
            s: "Electricity produced by a dam is called hydroelectricity.",
            correct: true,
            reason: "This is the term used in the lesson."
          },
          {
            id: 8,
            s: "Electricity from a hydroelectric dam can be sent along wires to cities.",
            correct: true,
            reason: "The text says it is sent along wires to where it is needed."
          },
          {
            id: 9,
            s: "Moving water has kinetic energy.",
            correct: true,
            reason: "Kinetic energy is the energy of motion."
          },
          {
            id: 10,
            s: "Activity 6 asks students to record similarities and differences between water and wind electricity.",
            correct: true,
            reason: "That is the stated organizer task."
          },
          {
            id: 11,
            s: "Wind and water electricity systems both use turbines that can spin.",
            correct: true,
            reason: "Both systems rely on spinning turbines."
          },
          {
            id: 12,
            s: "A hydroelectric dam creates wind to generate electricity.",
            correct: false,
            reason: "A dam uses moving water, not wind."
          },
          {
            id: 13,
            s: "In Activity 7, a pinwheel is used as a model of a turbine.",
            correct: true,
            reason: "The investigation uses a pinwheel to model a spinning turbine."
          },
          {
            id: 14,
            s: "The investigation asks students to change the model so water becomes renewable in the system.",
            correct: true,
            reason: "Students must reuse water and connect the idea to the water cycle."
          },
          {
            id: 15,
            s: "The hint for making water renewable in the model mentions the water cycle.",
            correct: true,
            reason: "The activity explicitly hints to consider the water cycle."
          },
          {
            id: 16,
            s: "Wind and falling water are forms of mechanical energy that can be used to generate electricity.",
            correct: true,
            reason: "Both are motion-based (mechanical) energy resources."
          },
          {
            id: 17,
            s: "In hydroelectric systems, energy disappears when water spins a turbine.",
            correct: false,
            reason: "Energy changes form; it does not disappear."
          }
        ]
      }
    }
  }
};
