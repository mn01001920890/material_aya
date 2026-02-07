// lesson4-data_concept3.2.js
// Theme 3 → Concept 3.2 → Lesson 4 (Choosing Energy Sources / Cleaner Alternatives)
// Data-only file imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.2",
    lessons: [
      {
        id: "T3-C3.2-L4",
        label: "Lesson 4 (3.2) — Choosing Energy Sources",
        short:
          "Compare energy sources • Fossil vs renewable • Advantages/disadvantages • Making evidence-based decisions"
      }
    ]
  },

  lessons: {
    "T3-C3.2-L4": {
      title: "About Fuels — Lesson 4 (Choosing Energy Sources)",
      bigQuestion:
        "How can we compare energy sources and choose options that meet our needs while reducing harm to the environment?",

      explanationBlocks: [
        {
          title: "1) The Big Idea: Not All Energy Sources Are the Same",
          bullets: [
            "People use energy sources for electricity, transport, heating, and cooking.",
            "Different energy sources have different benefits and problems.",
            "A good choice depends on evidence: availability, cost, renewability, efficiency, and environmental impact."
          ]
        },
        {
          title: "2) A Simple Comparison Framework (The ‘Decision Table’)",
          bullets: [
            "When comparing fuels or energy sources, use the same questions every time:",
            "• Where does it come from? (source)",
            "• Renewable or nonrenewable?",
            "• What useful energy do we get? (heat, motion, electricity)",
            "• What unwanted outputs happen? (pollution, waste heat, noise)",
            "• How easy is it to store and transport?"
          ]
        },
        {
          title: "3) Fossil Fuels: Strong Benefits, Real Costs",
          bullets: [
            "Fossil fuels (coal, oil, natural gas) release thermal energy when burned.",
            "They can provide lots of energy and are widely used.",
            "They are nonrenewable (they form over millions of years) and can run out.",
            "Burning fossil fuels can release pollution that affects air quality and the environment."
          ]
        },
        {
          title: "4) Renewable Options: Cleaner Choices (When Possible)",
          bullets: [
            "Renewable resources can be renewed on a human timescale (examples: biofuels from plants, wind, sunlight).",
            "Renewables can reduce dependence on nonrenewable fuels.",
            "Renewable does not mean “unlimited”: renewables still need responsible management (for example, sustainable wood use).",
            "Some renewables depend on weather and location, so planning and storage can matter."
          ]
        },
        {
          title: "5) Energy Efficiency: The Fastest ‘Energy Source’",
          bullets: [
            "Efficiency means getting the same result using less fuel or less energy.",
            "Reducing waste energy (often wasted as heat) means we burn less fuel.",
            "Examples: insulation, efficient appliances, turning things off when not needed, and reducing unnecessary travel."
          ]
        },
        {
          title: "6) Activity Focus: Make a Recommendation Using Evidence",
          bullets: [
            "You practice making a decision like a scientist: you compare options, then explain your choice using reasons.",
            "A strong answer includes: the energy source you chose + at least two evidence-based reasons (renewable/nonrenewable, pollution, cost, availability, efficiency).",
            "You also explain trade-offs: what you gain and what you give up."
          ]
        }
      ],

      // ✅ MCQ (17)
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main goal of Lesson 4 (Concept 3.2)?",
            options: [
              { key: "A", text: "To memorize only fuel names" },
              { key: "B", text: "To compare energy sources and make choices using evidence" },
              { key: "C", text: "To study only planets" },
              { key: "D", text: "To build a car engine" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 4 focuses on comparing energy sources and justifying choices with evidence."
          },
          {
            id: 2,
            q: "Which is a good way to compare energy sources fairly?",
            options: [
              { key: "A", text: "Use different questions for each source" },
              { key: "B", text: "Use the same comparison questions each time (a decision table)" },
              { key: "C", text: "Guess without evidence" },
              { key: "D", text: "Choose the loudest source" }
            ],
            correctKey: "B",
            whyCorrect:
              "A consistent framework helps you compare options fairly."
          },
          {
            id: 3,
            q: "Which set contains only fossil fuels?",
            options: [
              { key: "A", text: "Coal, oil, natural gas" },
              { key: "B", text: "Water, wind, sunlight" },
              { key: "C", text: "Wood, soil, rain" },
              { key: "D", text: "Magnets, rocks, clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "Coal, oil, and natural gas are fossil fuels."
          },
          {
            id: 4,
            q: "Fossil fuels are nonrenewable mainly because they ____.",
            options: [
              { key: "A", text: "Form in a few minutes" },
              { key: "B", text: "Form over millions of years and can run out" },
              { key: "C", text: "Grow on trees every season" },
              { key: "D", text: "Come from wind" }
            ],
            correctKey: "B",
            whyCorrect:
              "They form extremely slowly and are used much faster than they form."
          },
          {
            id: 5,
            q: "Which option is a renewable resource?",
            options: [
              { key: "A", text: "Oil" },
              { key: "B", text: "Coal" },
              { key: "C", text: "Sunlight" },
              { key: "D", text: "Natural gas" }
            ],
            correctKey: "C",
            whyCorrect:
              "Sunlight is renewable on a human timescale."
          },
          {
            id: 6,
            q: "Why should renewable resources still be used responsibly?",
            options: [
              { key: "A", text: "Because renewable means unlimited and waste is fine" },
              { key: "B", text: "Because renewables can still be wasted or cause damage if unmanaged" },
              { key: "C", text: "Because renewables cannot be used for energy" },
              { key: "D", text: "Because renewables always cost more" }
            ],
            correctKey: "B",
            whyCorrect:
              "Renewable does not mean limitless; resources still require responsible use."
          },
          {
            id: 7,
            q: "Which is a common environmental concern when burning fossil fuels?",
            options: [
              { key: "A", text: "Air pollution" },
              { key: "B", text: "Instant forest growth" },
              { key: "C", text: "More rainfall every day" },
              { key: "D", text: "More gravity" }
            ],
            correctKey: "A",
            whyCorrect:
              "Burning fossil fuels can release pollutants that affect air quality."
          },
          {
            id: 8,
            q: "What does energy efficiency mean?",
            options: [
              { key: "A", text: "Using more fuel to do less work" },
              { key: "B", text: "Doing the same job using less fuel or less energy" },
              { key: "C", text: "Energy disappearing" },
              { key: "D", text: "Only using sound energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "Efficiency reduces waste and uses less fuel for the same result."
          },
          {
            id: 9,
            q: "Which action is an example of improving efficiency at home?",
            options: [
              { key: "A", text: "Leaving devices on all day" },
              { key: "B", text: "Using insulation to reduce heat loss" },
              { key: "C", text: "Opening windows while heating" },
              { key: "D", text: "Driving extra trips for fun only" }
            ],
            correctKey: "B",
            whyCorrect:
              "Insulation reduces heat loss and saves energy."
          },
          {
            id: 10,
            q: "Which is a good reason to use a decision table?",
            options: [
              { key: "A", text: "To avoid evidence" },
              { key: "B", text: "To compare sources using clear criteria" },
              { key: "C", text: "To make energy disappear" },
              { key: "D", text: "To choose based on color" }
            ],
            correctKey: "B",
            whyCorrect:
              "A decision table organizes evidence-based comparisons."
          },
          {
            id: 11,
            q: "A strong recommendation in Lesson 4 should include ____.",
            options: [
              { key: "A", text: "A choice with evidence-based reasons and trade-offs" },
              { key: "B", text: "A choice with no reasons" },
              { key: "C", text: "Only a drawing" },
              { key: "D", text: "Only a joke" }
            ],
            correctKey: "A",
            whyCorrect:
              "Lesson 4 emphasizes making recommendations supported by evidence."
          },
          {
            id: 12,
            q: "Which output is often considered ‘waste’ in many energy systems?",
            options: [
              { key: "A", text: "Waste heat" },
              { key: "B", text: "Useful light" },
              { key: "C", text: "Useful motion" },
              { key: "D", text: "Stored chemical energy in food" }
            ],
            correctKey: "A",
            whyCorrect:
              "A common non-useful output is heat that escapes."
          },
          {
            id: 13,
            q: "Which statement is TRUE about renewables?",
            options: [
              { key: "A", text: "Renewables are always available at every time and place" },
              { key: "B", text: "Renewables can depend on weather and location" },
              { key: "C", text: "Renewables form over millions of years" },
              { key: "D", text: "Renewables are the same as fossil fuels" }
            ],
            correctKey: "B",
            whyCorrect:
              "Some renewables depend on conditions like sunlight and wind."
          },
          {
            id: 14,
            q: "Which is an example of a renewable fuel from living things?",
            options: [
              { key: "A", text: "Wood (a biofuel) used sustainably" },
              { key: "B", text: "Coal" },
              { key: "C", text: "Oil" },
              { key: "D", text: "Natural gas" }
            ],
            correctKey: "A",
            whyCorrect:
              "Wood is a biofuel and can be renewable if managed sustainably."
          },
          {
            id: 15,
            q: "Why is reducing unnecessary travel helpful?",
            options: [
              { key: "A", text: "It increases fuel use" },
              { key: "B", text: "It reduces fuel consumption and pollution" },
              { key: "C", text: "It makes fossil fuels renewable" },
              { key: "D", text: "It stops energy conversions" }
            ],
            correctKey: "B",
            whyCorrect:
              "Less travel usually means less fuel burned."
          },
          {
            id: 16,
            q: "Which factor is NOT a good comparison criterion for energy sources?",
            options: [
              { key: "A", text: "Renewable vs nonrenewable" },
              { key: "B", text: "Environmental impact" },
              { key: "C", text: "Availability and cost" },
              { key: "D", text: "The source’s favorite color" }
            ],
            correctKey: "D",
            whyCorrect:
              "Color is not evidence-based for energy decisions."
          },
          {
            id: 17,
            q: "Which conclusion best fits Lesson 4?",
            options: [
              { key: "A", text: "Only one energy source is perfect for every situation" },
              { key: "B", text: "We should compare options and choose based on evidence and trade-offs" },
              { key: "C", text: "Energy choices do not affect anything" },
              { key: "D", text: "Nonrenewable fuels last forever" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 4 focuses on evidence-based choices and trade-offs."
          }
        ]
      },

      // ✅ True/False (17)
      tf: {
        questions: [
          {
            id: 1,
            s: "Lesson 4 focuses on comparing energy sources and making choices using evidence.",
            correct: true,
            reason: "That is the lesson’s central goal."
          },
          {
            id: 2,
            s: "A decision table helps compare energy sources using the same criteria each time.",
            correct: true,
            reason: "Consistent criteria make comparisons fair."
          },
          {
            id: 3,
            s: "Coal, oil, and natural gas are fossil fuels.",
            correct: true,
            reason: "These are the main fossil fuels."
          },
          {
            id: 4,
            s: "Fossil fuels are renewable because they form quickly.",
            correct: false,
            reason: "They form over millions of years and are used faster than they form."
          },
          {
            id: 5,
            s: "Burning fossil fuels can cause air pollution.",
            correct: true,
            reason: "Pollution is a common concern discussed when fuels are burned."
          },
          {
            id: 6,
            s: "Renewable resources can be renewed on a human timescale.",
            correct: true,
            reason: "That is the definition of renewable resources."
          },
          {
            id: 7,
            s: "Renewable means unlimited, so wasting renewable resources is never a problem.",
            correct: false,
            reason: "Renewables still require responsible use and protection."
          },
          {
            id: 8,
            s: "Energy efficiency means doing the same job using less fuel or less energy.",
            correct: true,
            reason: "Efficiency reduces waste and fuel use."
          },
          {
            id: 9,
            s: "Insulation can help reduce heat loss and save energy.",
            correct: true,
            reason: "Reducing heat loss improves efficiency."
          },
          {
            id: 10,
            s: "A strong recommendation should include reasons and mention trade-offs.",
            correct: true,
            reason: "Evidence-based explanations are required in scientific recommendations."
          },
          {
            id: 11,
            s: "Waste heat is a common non-useful output in many energy systems.",
            correct: true,
            reason: "Heat loss is a frequent form of wasted energy."
          },
          {
            id: 12,
            s: "Renewable energy sources always work the same way in every place and at every time.",
            correct: false,
            reason: "Some renewables depend on conditions like weather and location."
          },
          {
            id: 13,
            s: "Wood can be a renewable biofuel if it is used sustainably.",
            correct: true,
            reason: "Sustainable management allows renewal."
          },
          {
            id: 14,
            s: "Reducing unnecessary travel can reduce fuel use and pollution.",
            correct: true,
            reason: "Less fuel burned usually means fewer pollutants."
          },
          {
            id: 15,
            s: "Cost, availability, and environmental impact are useful criteria for comparing energy sources.",
            correct: true,
            reason: "These are evidence-based comparison factors."
          },
          {
            id: 16,
            s: "Choosing an energy source should be based only on what is easiest, not on evidence.",
            correct: false,
            reason: "Lesson 4 emphasizes evidence-based decisions."
          },
          {
            id: 17,
            s: "There is no single perfect energy source for every situation, so trade-offs matter.",
            correct: true,
            reason: "Different sources have different benefits and limits."
          }
        ]
      }
    }
  }
};
