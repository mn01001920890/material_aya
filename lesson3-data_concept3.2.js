// lesson3-data_concept3.2.js
// Theme 3 → Concept 3.2 → Lesson 3 (Using Fuels Wisely)
// Data-only file imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.2",
    lessons: [
      {
        id: "T3-C3.2-L3",
        label: "Lesson 3 (3.2) — Using Fuels Wisely",
        short:
          "Renewable vs nonrenewable • Environmental impact • Efficiency • Saving fuel at home and in transport"
      }
    ]
  },

  lessons: {
    "T3-C3.2-L3": {
      title: "About Fuels — Lesson 3 (Using Fuels Wisely)",
      bigQuestion:
        "How can people use fuels wisely to meet their needs while protecting Earth’s resources?",

      explanationBlocks: [
        {
          title: "1) Why ‘Using Fuels Wisely’ Matters",
          bullets: [
            "Fuels provide energy for important needs: cooking, heating, transport, and generating electricity.",
            "Many fuels (especially fossil fuels) are nonrenewable, meaning they can run out.",
            "Burning fuels can also affect the environment, so people need to think carefully about how much fuel they use."
          ]
        },
        {
          title: "2) Review: Renewable vs Nonrenewable Fuels",
          bullets: [
            "Renewable fuels (like many biofuels) can be renewed because the source can grow again.",
            "Nonrenewable fuels (coal, oil, and natural gas) form over millions of years and are used up much faster.",
            "Using nonrenewable fuels wisely means reducing waste and improving efficiency."
          ]
        },
        {
          title: "3) Activity 6: Comparing Fuels (Evidence-Based Thinking)",
          bullets: [
            "In this lesson, you compare different fuels using evidence.",
            "You think about important factors such as: where the fuel comes from, how it is produced, and what happens when it is burned.",
            "You also think about advantages and disadvantages (for example, availability, pollution, cost, and renewability)."
          ]
        },
        {
          title: "4) Efficiency: Getting More Useful Energy from the Same Fuel",
          bullets: [
            "When we burn fuel, not all the energy becomes useful for what we want to do.",
            "Some energy is converted into other forms (often heat that escapes), so efficiency is about reducing waste.",
            "More efficient devices and machines use less fuel to do the same job."
          ]
        },
        {
          title: "5) Real-Life Ways to Save Fuel",
          bullets: [
            "At home: turn off lights and devices when not needed; use efficient appliances.",
            "For cooking/heating: reduce heat loss (close doors, use lids on pots, insulate homes).",
            "For transport: share rides, use public transportation, keep tires properly inflated, and plan trips to reduce driving.",
            "These actions reduce fuel use, save money, and help protect natural resources."
          ]
        },
        {
          title: "6) Big Takeaway",
          bullets: [
            "People use fuels to meet needs, but fuels are valuable resources.",
            "Using fuels wisely means: using less when possible, using efficient devices, and choosing renewable sources when available.",
            "Wise fuel use supports both human life and the environment."
          ]
        }
      ],

      // ✅ MCQ quiz (17) — aligned to Lesson 3 goals (wise use, renewability, efficiency)
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the big question of Lesson 3 (Concept 3.2)?",
            options: [
              { key: "A", text: "How do volcanoes form?" },
              { key: "B", text: "How can people use fuels wisely to meet their needs while protecting Earth’s resources?" },
              { key: "C", text: "How do plants make seeds?" },
              { key: "D", text: "Why do magnets stick?" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 3 focuses on wise fuel use and protecting resources."
          },
          {
            id: 2,
            q: "Why is it important to use many fuels wisely?",
            options: [
              { key: "A", text: "Because fuels are unlimited" },
              { key: "B", text: "Because many fuels are nonrenewable and can run out" },
              { key: "C", text: "Because fuels stop gravity" },
              { key: "D", text: "Because fuels make rainbows" }
            ],
            correctKey: "B",
            whyCorrect:
              "Nonrenewable fuels can be used up, so careful use matters."
          },
          {
            id: 3,
            q: "Which fuels are fossil fuels?",
            options: [
              { key: "A", text: "Coal, oil, and natural gas" },
              { key: "B", text: "Water and sunlight" },
              { key: "C", text: "Wood and soil only" },
              { key: "D", text: "Wind and clouds" }
            ],
            correctKey: "A",
            whyCorrect:
              "Coal, oil, and natural gas are the main fossil fuels."
          },
          {
            id: 4,
            q: "Fossil fuels are called nonrenewable because they ____.",
            options: [
              { key: "A", text: "Form very quickly" },
              { key: "B", text: "Are used much faster than they are formed" },
              { key: "C", text: "Grow on trees weekly" },
              { key: "D", text: "Are made by machines" }
            ],
            correctKey: "B",
            whyCorrect:
              "They take millions of years to form and are used quickly."
          },
          {
            id: 5,
            q: "Which is an example of a renewable fuel source?",
            options: [
              { key: "A", text: "Coal" },
              { key: "B", text: "Oil" },
              { key: "C", text: "Biofuels from plants (like wood)" },
              { key: "D", text: "Natural gas" }
            ],
            correctKey: "C",
            whyCorrect:
              "Biofuels from plants can be renewed if managed well."
          },
          {
            id: 6,
            q: "What does efficiency mean in the context of fuels?",
            options: [
              { key: "A", text: "Using more fuel to do less work" },
              { key: "B", text: "Getting more useful energy from the same amount of fuel" },
              { key: "C", text: "Making fuel disappear" },
              { key: "D", text: "Using only sound energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "Efficiency is about reducing waste and doing the same job with less fuel."
          },
          {
            id: 7,
            q: "When fuel is burned, some energy may be wasted because it ____.",
            options: [
              { key: "A", text: "Changes into other forms that escape (often heat)" },
              { key: "B", text: "Stops existing" },
              { key: "C", text: "Turns into water instantly" },
              { key: "D", text: "Becomes gravity only" }
            ],
            correctKey: "A",
            whyCorrect:
              "Energy does not disappear; it often escapes as heat and other forms."
          },
          {
            id: 8,
            q: "Which home action can help save fuel and energy?",
            options: [
              { key: "A", text: "Leaving lights on all day" },
              { key: "B", text: "Turning off devices when not needed" },
              { key: "C", text: "Opening doors to let heat out" },
              { key: "D", text: "Running appliances when not needed" }
            ],
            correctKey: "B",
            whyCorrect:
              "Turning off devices reduces unnecessary energy use."
          },
          {
            id: 9,
            q: "Which action helps reduce heat loss when cooking?",
            options: [
              { key: "A", text: "Using a lid on a pot" },
              { key: "B", text: "Stirring faster" },
              { key: "C", text: "Using a smaller spoon" },
              { key: "D", text: "Turning the lights brighter" }
            ],
            correctKey: "A",
            whyCorrect:
              "A lid reduces heat loss and saves energy."
          },
          {
            id: 10,
            q: "Which transport choice can help reduce fuel use?",
            options: [
              { key: "A", text: "Driving alone for every small trip" },
              { key: "B", text: "Sharing rides or using public transportation" },
              { key: "C", text: "Taking the longest route" },
              { key: "D", text: "Keeping tires underinflated" }
            ],
            correctKey: "B",
            whyCorrect:
              "Sharing rides/public transport reduces total fuel used."
          },
          {
            id: 11,
            q: "Keeping tires properly inflated can help because it ____.",
            options: [
              { key: "A", text: "Increases air pollution" },
              { key: "B", text: "Improves efficiency and can reduce fuel use" },
              { key: "C", text: "Stops the car engine" },
              { key: "D", text: "Creates new fuel" }
            ],
            correctKey: "B",
            whyCorrect:
              "Proper tires reduce resistance and save fuel."
          },
          {
            id: 12,
            q: "Why should people care about pollution from burning fuels?",
            options: [
              { key: "A", text: "Because it can affect the environment" },
              { key: "B", text: "Because it makes fuel renewable" },
              { key: "C", text: "Because it stops water cycles" },
              { key: "D", text: "Because it makes coal form faster" }
            ],
            correctKey: "A",
            whyCorrect:
              "Burning fuels can have negative environmental impacts."
          },
          {
            id: 13,
            q: "Which statement best matches wise fuel use?",
            options: [
              { key: "A", text: "Use as much fuel as possible" },
              { key: "B", text: "Reduce waste, use efficient devices, and choose renewables when possible" },
              { key: "C", text: "Never think about resources" },
              { key: "D", text: "Only use nonrenewable fuels" }
            ],
            correctKey: "B",
            whyCorrect:
              "That summarizes the lesson’s main message."
          },
          {
            id: 14,
            q: "If a resource can be renewed soon after it is used, it is ____.",
            options: [
              { key: "A", text: "Renewable" },
              { key: "B", text: "Nonrenewable" },
              { key: "C", text: "Magnetic" },
              { key: "D", text: "Invisible" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is the definition of renewable resources."
          },
          {
            id: 15,
            q: "If a resource is used faster than it can be replaced, it is ____.",
            options: [
              { key: "A", text: "Renewable" },
              { key: "B", text: "Nonrenewable" },
              { key: "C", text: "Unlimited" },
              { key: "D", text: "Instant" }
            ],
            correctKey: "B",
            whyCorrect:
              "That is the definition of a nonrenewable resource."
          },
          {
            id: 16,
            q: "Which is a good reason to plan trips before driving?",
            options: [
              { key: "A", text: "To use more fuel" },
              { key: "B", text: "To reduce driving and save fuel" },
              { key: "C", text: "To make roads longer" },
              { key: "D", text: "To increase traffic" }
            ],
            correctKey: "B",
            whyCorrect:
              "Planning trips can reduce unnecessary driving and fuel use."
          },
          {
            id: 17,
            q: "Which conclusion best fits Lesson 3?",
            options: [
              { key: "A", text: "Fuels are not important" },
              { key: "B", text: "We should use fuels wisely because resources are valuable" },
              { key: "C", text: "Only sunlight matters" },
              { key: "D", text: "Nonrenewable fuels renew quickly" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 3 emphasizes wise use of valuable fuel resources."
          }
        ]
      },

      // ✅ True/False (17) — aligned to Lesson 3
      tf: {
        questions: [
          {
            id: 1,
            s: "Many fuels are nonrenewable, so they can run out.",
            correct: true,
            reason: "Nonrenewable fuels are used faster than they are replaced."
          },
          {
            id: 2,
            s: "Using fuels wisely can help protect Earth’s resources.",
            correct: true,
            reason: "Wise use reduces waste and preserves resources."
          },
          {
            id: 3,
            s: "Coal, oil, and natural gas are fossil fuels.",
            correct: true,
            reason: "These are the main fossil fuels discussed in this concept."
          },
          {
            id: 4,
            s: "Fossil fuels are renewable because they form quickly.",
            correct: false,
            reason: "They form over millions of years, so they are nonrenewable."
          },
          {
            id: 5,
            s: "Biofuels from plants can be renewable if managed sustainably.",
            correct: true,
            reason: "Plants can grow again, but resources must be managed."
          },
          {
            id: 6,
            s: "Efficiency means using more fuel to do the same task.",
            correct: false,
            reason: "Efficiency means doing the same task with less fuel (less waste)."
          },
          {
            id: 7,
            s: "Some energy from burning fuel can escape as heat and not be useful for the task.",
            correct: true,
            reason: "Energy can transform into forms that escape, often heat."
          },
          {
            id: 8,
            s: "Turning off lights and devices when not needed can save energy and fuel.",
            correct: true,
            reason: "This reduces unnecessary energy use."
          },
          {
            id: 9,
            s: "Using a lid on a pot can reduce heat loss and save energy.",
            correct: true,
            reason: "A lid keeps heat in and improves efficiency."
          },
          {
            id: 10,
            s: "Sharing rides or using public transport can reduce total fuel use.",
            correct: true,
            reason: "Fewer vehicles can mean less fuel burned."
          },
          {
            id: 11,
            s: "Keeping tires properly inflated can help reduce fuel use.",
            correct: true,
            reason: "It improves efficiency by reducing resistance."
          },
          {
            id: 12,
            s: "Pollution from burning fuels can affect the environment.",
            correct: true,
            reason: "Burning fuels can release pollutants."
          },
          {
            id: 13,
            s: "Wise fuel use means wasting as much fuel as possible.",
            correct: false,
            reason: "Wise use means reducing waste and using resources carefully."
          },
          {
            id: 14,
            s: "Nonrenewable resources are used faster than they can be replaced.",
            correct: true,
            reason: "That is the definition of nonrenewable."
          },
          {
            id: 15,
            s: "Planning trips can help reduce unnecessary driving and save fuel.",
            correct: true,
            reason: "Fewer trips means less fuel use."
          },
          {
            id: 16,
            s: "Renewable resources can be wasted without any consequences.",
            correct: false,
            reason: "Even renewable resources should be conserved and not polluted."
          },
          {
            id: 17,
            s: "Lesson 3 encourages people to use fuels efficiently and choose renewables when possible.",
            correct: true,
            reason: "This summarizes the lesson’s main message."
          }
        ]
      }
    }
  }
};
