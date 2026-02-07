// lesson5-data_concept3.2.js
// Theme 3 → Concept 3.2 → Lesson 5 (Energy Sources and the Future / Final Review & Apply)
// Data-only file imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.2",
    lessons: [
      {
        id: "T3-C3.2-L5",
        label: "Lesson 5 (3.2) — Energy Sources and the Future",
        short:
          "Synthesize concepts • Renewable/nonrenewable decisions • Conservation & efficiency • Final apply task"
      }
    ]
  },

  lessons: {
    "T3-C3.2-L5": {
      title: "About Fuels — Lesson 5 (Energy Sources and the Future)",
      bigQuestion:
        "How can we plan for the future by using energy sources responsibly and choosing smarter options?",

      explanationBlocks: [
        {
          title: "1) The Big Picture (What You Now Know)",
          bullets: [
            "Fuels release thermal energy when burned, and we use them for transport, heating, cooking, and electricity.",
            "Biofuels come from living things and can be renewable if managed sustainably.",
            "Fossil fuels (coal, oil, natural gas) formed over millions of years and are nonrenewable on a human timescale."
          ]
        },
        {
          title: "2) Why the Future Matters",
          bullets: [
            "Nonrenewable resources can run out if humans use them faster than they form.",
            "Burning fuels can create pollution, so choices about energy can affect health and the environment.",
            "Planning for the future means reducing waste and increasing the use of renewable options when possible."
          ]
        },
        {
          title: "3) Smart Energy Choices (A Simple Decision Checklist)",
          bullets: [
            "When choosing an energy source, compare:",
            "• Renewable vs nonrenewable",
            "• Environmental impact (pollution, habitat damage)",
            "• Efficiency (how much useful energy we get)",
            "• Availability (local resources) and cost",
            "Good decisions use evidence, not guesses."
          ]
        },
        {
          title: "4) Efficiency + Conservation (The Fastest Way to Save Energy)",
          bullets: [
            "Efficiency means doing the same job using less fuel or energy.",
            "Reducing wasted energy (often wasted as heat) means we burn less fuel and create less pollution.",
            "Conservation actions: turn things off when not needed, use insulation, maintain machines (like tire pressure), and reduce unnecessary travel."
          ]
        },
        {
          title: "5) Apply Task: Make a Plan for a Community",
          bullets: [
            "In this lesson, you apply what you learned to a real situation.",
            "You choose a mix of energy sources for a small community (for electricity, cooking, or transport).",
            "You explain your plan with evidence: renewability, efficiency, and environmental impact.",
            "You include at least one action that reduces energy waste (efficiency/conservation)."
          ]
        },
        {
          title: "6) Strong Answer Structure (How to Write Like a Scientist)",
          bullets: [
            "Step 1: State your choice (or energy mix).",
            "Step 2: Give at least 2 evidence-based reasons (renewable/nonrenewable, pollution, availability, efficiency).",
            "Step 3: Mention a trade-off (what you gain and what you give up).",
            "Step 4: Add one conservation/efficiency action to reduce waste."
          ]
        }
      ],

      // ✅ MCQ (17)
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main purpose of Lesson 5 (Concept 3.2)?",
            options: [
              { key: "A", text: "To learn a new planet system" },
              { key: "B", text: "To review and apply what you learned about fuels and energy choices" },
              { key: "C", text: "To build a volcano model" },
              { key: "D", text: "To study only rocks" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 5 is a synthesis/apply lesson about planning energy choices responsibly."
          },
          {
            id: 2,
            q: "Which statement best explains why the future matters for fossil fuels?",
            options: [
              { key: "A", text: "Fossil fuels renew quickly" },
              { key: "B", text: "Fossil fuels are nonrenewable and can run out" },
              { key: "C", text: "Fossil fuels are made by machines" },
              { key: "D", text: "Fossil fuels are always clean" }
            ],
            correctKey: "B",
            whyCorrect:
              "Fossil fuels form over millions of years and can be used up."
          },
          {
            id: 3,
            q: "Which set contains fossil fuels?",
            options: [
              { key: "A", text: "Coal, oil, natural gas" },
              { key: "B", text: "Sunlight, wind, water" },
              { key: "C", text: "Plastic, glass, metal" },
              { key: "D", text: "Clouds, rain, snow" }
            ],
            correctKey: "A",
            whyCorrect:
              "Coal, oil, and natural gas are fossil fuels."
          },
          {
            id: 4,
            q: "Biofuels are considered renewable when ____.",
            options: [
              { key: "A", text: "They are used faster than plants can regrow" },
              { key: "B", text: "They are managed sustainably so the source can be renewed" },
              { key: "C", text: "They form over millions of years" },
              { key: "D", text: "They are never replaced" }
            ],
            correctKey: "B",
            whyCorrect:
              "Renewable biofuels depend on sustainable management and regrowth."
          },
          {
            id: 5,
            q: "Which is a renewable energy source?",
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
            q: "Which is an important reason to reduce fuel use?",
            options: [
              { key: "A", text: "To make fuels disappear" },
              { key: "B", text: "To save resources and reduce pollution" },
              { key: "C", text: "To stop energy conversions" },
              { key: "D", text: "To increase waste heat" }
            ],
            correctKey: "B",
            whyCorrect:
              "Using less fuel conserves resources and can reduce pollution."
          },
          {
            id: 7,
            q: "What does efficiency mean?",
            options: [
              { key: "A", text: "Doing the same job using less fuel/energy" },
              { key: "B", text: "Using more fuel for the same job" },
              { key: "C", text: "Energy disappearing" },
              { key: "D", text: "Only using sound energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Efficiency means less fuel for the same result (less waste)."
          },
          {
            id: 8,
            q: "Which is a good efficiency action at home?",
            options: [
              { key: "A", text: "Leaving lights on all day" },
              { key: "B", text: "Using insulation to reduce heat loss" },
              { key: "C", text: "Opening windows while heating" },
              { key: "D", text: "Running devices when not needed" }
            ],
            correctKey: "B",
            whyCorrect:
              "Insulation reduces heat loss and saves energy."
          },
          {
            id: 9,
            q: "Which is a good transport action to reduce fuel use?",
            options: [
              { key: "A", text: "Driving extra trips for fun" },
              { key: "B", text: "Sharing rides or using public transport" },
              { key: "C", text: "Keeping tires underinflated" },
              { key: "D", text: "Taking the longest route" }
            ],
            correctKey: "B",
            whyCorrect:
              "Ride sharing/public transport reduces overall fuel use."
          },
          {
            id: 10,
            q: "Which criterion helps compare energy sources in a fair way?",
            options: [
              { key: "A", text: "Renewable vs nonrenewable" },
              { key: "B", text: "Pollution/environmental impact" },
              { key: "C", text: "Availability and cost" },
              { key: "D", text: "All of the above" }
            ],
            correctKey: "D",
            whyCorrect:
              "A fair comparison uses multiple evidence-based criteria."
          },
          {
            id: 11,
            q: "A strong plan for a community should include ____.",
            options: [
              { key: "A", text: "Only one energy source with no reasons" },
              { key: "B", text: "A choice (or mix) plus evidence-based reasons and at least one efficiency action" },
              { key: "C", text: "Only a drawing" },
              { key: "D", text: "Only a list of fuel names" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 5 emphasizes applying knowledge using reasons and conservation actions."
          },
          {
            id: 12,
            q: "Why do trade-offs matter in energy decisions?",
            options: [
              { key: "A", text: "Because every option has only benefits" },
              { key: "B", text: "Because choices often involve advantages and disadvantages" },
              { key: "C", text: "Because evidence is not needed" },
              { key: "D", text: "Because renewable means perfect" }
            ],
            correctKey: "B",
            whyCorrect:
              "Energy sources have pros and cons, so you must explain trade-offs."
          },
          {
            id: 13,
            q: "Which statement is TRUE about renewable resources?",
            options: [
              { key: "A", text: "Renewable means it can be renewed on a human timescale" },
              { key: "B", text: "Renewable means it forms over millions of years" },
              { key: "C", text: "Renewable means it can be wasted safely" },
              { key: "D", text: "Renewable means it creates energy from nothing" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is the definition of renewable resources."
          },
          {
            id: 14,
            q: "Which statement is TRUE about nonrenewable resources?",
            options: [
              { key: "A", text: "They are used faster than they can be replaced" },
              { key: "B", text: "They renew instantly" },
              { key: "C", text: "They are always clean" },
              { key: "D", text: "They never run out" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is the definition of nonrenewable resources."
          },
          {
            id: 15,
            q: "Which choice best supports a long-term future plan?",
            options: [
              { key: "A", text: "Waste energy because energy is unlimited" },
              { key: "B", text: "Reduce waste, improve efficiency, and increase renewable use when possible" },
              { key: "C", text: "Use only nonrenewable fuels forever" },
              { key: "D", text: "Ignore pollution" }
            ],
            correctKey: "B",
            whyCorrect:
              "That matches the lesson’s future-focused message."
          },
          {
            id: 16,
            q: "Which action best matches ‘conservation’?",
            options: [
              { key: "A", text: "Turning devices off when not needed" },
              { key: "B", text: "Leaving devices on all night" },
              { key: "C", text: "Driving extra trips" },
              { key: "D", text: "Wasting water because it is renewable" }
            ],
            correctKey: "A",
            whyCorrect:
              "Conservation means reducing unnecessary energy use."
          },
          {
            id: 17,
            q: "Which conclusion best fits Lesson 5?",
            options: [
              { key: "A", text: "Energy choices do not matter" },
              { key: "B", text: "We can plan for the future by using energy responsibly and making evidence-based choices" },
              { key: "C", text: "Only fossil fuels should be used" },
              { key: "D", text: "Renewable resources never need protection" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 5 is about future planning with responsible, evidence-based choices."
          }
        ]
      },

      // ✅ True/False (17)
      tf: {
        questions: [
          {
            id: 1,
            s: "Lesson 5 reviews and applies what students learned about fuels and energy choices.",
            correct: true,
            reason: "It is a synthesis and apply lesson."
          },
          {
            id: 2,
            s: "Fossil fuels are nonrenewable and can run out.",
            correct: true,
            reason: "They form very slowly and are used faster than they form."
          },
          {
            id: 3,
            s: "Biofuels can be renewable if managed sustainably.",
            correct: true,
            reason: "Plants can regrow if resources are managed properly."
          },
          {
            id: 4,
            s: "Renewable resources can be wasted with no consequences.",
            correct: false,
            reason: "Even renewable resources should be conserved and protected."
          },
          {
            id: 5,
            s: "Efficiency means doing the same job using less fuel or energy.",
            correct: true,
            reason: "Efficiency reduces waste."
          },
          {
            id: 6,
            s: "Reducing wasted energy can reduce fuel use and pollution.",
            correct: true,
            reason: "Less fuel burned usually means less pollution."
          },
          {
            id: 7,
            s: "Insulation can help save energy by reducing heat loss.",
            correct: true,
            reason: "This improves efficiency."
          },
          {
            id: 8,
            s: "Sharing rides or using public transport can reduce total fuel use.",
            correct: true,
            reason: "Fewer cars or fewer trips usually means less fuel burned."
          },
          {
            id: 9,
            s: "Good energy decisions should be based on evidence and comparison criteria.",
            correct: true,
            reason: "Lesson 5 emphasizes evidence-based planning."
          },
          {
            id: 10,
            s: "Trade-offs matter because energy choices can have both benefits and drawbacks.",
            correct: true,
            reason: "Most energy choices involve pros and cons."
          },
          {
            id: 11,
            s: "A strong plan includes at least one action that reduces energy waste.",
            correct: true,
            reason: "Lesson 5 emphasizes efficiency and conservation actions."
          },
          {
            id: 12,
            s: "Nonrenewable resources can be renewed soon after they are used.",
            correct: false,
            reason: "That describes renewable resources, not nonrenewable."
          },
          {
            id: 13,
            s: "Sunlight is a renewable energy source.",
            correct: true,
            reason: "Sunlight can be renewed on a human timescale."
          },
          {
            id: 14,
            s: "Oil is a renewable resource because it is found underground.",
            correct: false,
            reason: "Oil is nonrenewable and forms slowly over millions of years."
          },
          {
            id: 15,
            s: "Planning for the future can include using more renewables when possible.",
            correct: true,
            reason: "This reduces dependence on nonrenewables."
          },
          {
            id: 16,
            s: "Turning devices off when not needed is an example of conservation.",
            correct: true,
            reason: "It reduces unnecessary energy use."
          },
          {
            id: 17,
            s: "Lesson 5 suggests energy choices do not affect the environment.",
            correct: false,
            reason: "Energy choices can affect pollution and resource use."
          }
        ]
      }
    }
  }
};
