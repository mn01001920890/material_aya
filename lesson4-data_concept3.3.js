// lesson4-data_concept3.3.js
// Theme 3 → Concept 3.3 → Lesson 4 (Share)
// Renewable Energy Resources — Scientific Explanation (Claim • Evidence • Reasoning)
// This file is imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.3",
    lessons: [
      {
        id: "T3-C3.3-L4",
        label: "Lesson 4 (3.3) — Share: Renewable Electricity",
        short:
          "Windmills & watermills revisited • Answer the big question • Write a scientific explanation (claim-evidence-reasoning)"
      }
    ]
  },

  lessons: {
    "T3-C3.3-L4": {
      title: "Renewable Energy Resources — Lesson 4 (Share)",
      bigQuestion:
        "What are the different ways we can use renewable energy to generate electricity?",

      explanationBlocks: [
        {
          title: "1) What Lesson 4 Is Doing (Share Section)",
          bullets: [
            "Lesson 4 is a *Share* lesson: you use what you learned in the previous lessons to explain the big question clearly.",
            "You look again at the images of windmills and watermills and describe them using your new understanding of energy and electricity.",
            "Then you write a full scientific explanation (not just a short answer)."
          ]
        },
        {
          title: "2) Revisit: Windmills and Watermills (Then vs Now)",
          bullets: [
            "Long ago, windmills and watermills were machines that helped people do work (like crushing grain to make flour), before electricity was common.",
            "Today, we use similar ideas but with modern turbines and generators to produce electricity.",
            "Your job is to explain how your understanding is different now compared to the beginning."
          ],
          evidenceNote:
            "In the book, Lesson 1 introduces windmills/watermills as machines used to do work (like crushing grain), and asks why modern turbines look different. See: :contentReference[oaicite:0]{index=0}"
        },
        {
          title: "3) The Big Answer (Different Renewable Ways to Make Electricity)",
          bullets: [
            "Solar energy: solar panels (solar cells) catch the Sun’s radiant energy and convert it directly into electricity.",
            "Wind energy: wind turbines use the kinetic energy of moving air to spin blades; the system generates electrical energy and sends it by wires.",
            "Water energy (hydroelectricity): a dam stores water’s potential energy; released water falls, turns turbines, and generators produce electricity."
          ],
          evidenceNote:
            "Solar panels convert the Sun’s radiant energy into electricity: :contentReference[oaicite:1]{index=1}  • Wind turbines convert wind kinetic energy into electrical energy: :contentReference[oaicite:2]{index=2}  • Hydroelectric dams use falling water to spin turbines and generate electricity: :contentReference[oaicite:3]{index=3}"
        },
        {
          title: "4) Lesson 4 Activity 8: What You Must Produce",
          bullets: [
            "You must look again at the windmill/watermill images and describe them now using correct science ideas.",
            "You must explain how your new explanation is different from before.",
            "You must answer the Can You Explain question: “What are the different ways we can use renewable energy to generate electricity?”"
          ],
          evidenceNote:
            "Activity 8 instructions and the Can You Explain question appear in Lesson 4 Share. :contentReference[oaicite:4]{index=4}"
        },
        {
          title: "5) Scientific Explanation Format (Claim → Evidence → Reasoning)",
          bullets: [
            "Claim: a one-sentence answer to the big question (not yes/no).",
            "Evidence: facts/examples from what you learned (solar panels, wind turbines, hydroelectric dams).",
            "Reasoning: explain *why* the evidence supports your claim (energy transformations: radiant/kinetic/potential → electrical).",
            "Final explanation: combine claim + evidence + reasoning into a clear paragraph."
          ],
          evidenceNote:
            "Lesson 4 explicitly tells you to write a claim, then evidence, then reasoning, then the final explanation. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}"
        },
        {
          title: "6) A Model Student Answer (Example You Can Copy-Style)",
          bullets: [
            "Claim: “We can generate electricity using renewable energy from the Sun, wind, and moving water.”",
            "Evidence: “Solar panels change the Sun’s radiant energy into electricity. Wind turbines use wind’s kinetic energy to generate electricity. Hydroelectric dams release stored water so falling water turns turbines and generators.”",
            "Reasoning: “These methods work because energy can be transferred and transformed: radiant energy, kinetic energy, and potential energy can be converted into electrical energy that travels through wires.”",
            "Scientific explanation (paragraph): Combine the three parts into one paragraph with clear sentences."
          ]
        }
      ],

      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main purpose of Lesson 4 in Concept 3.3?",
            options: [
              { key: "A", text: "To introduce brand-new renewable resources for the first time" },
              { key: "B", text: "To share learning by writing a scientific explanation using claim, evidence, and reasoning" },
              { key: "C", text: "To build a real dam in the classroom" },
              { key: "D", text: "To classify rocks by size" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 4 is the Share lesson where you answer the big question using a scientific explanation format (claim-evidence-reasoning)."
          },
          {
            id: 2,
            q: "Which question does Lesson 4 ask students to answer again?",
            options: [
              { key: "A", text: "How do volcanoes erupt?" },
              { key: "B", text: "What are the different ways we can use renewable energy to generate electricity?" },
              { key: "C", text: "How do plants reproduce?" },
              { key: "D", text: "Why do earthquakes happen?" }
            ],
            correctKey: "B",
            whyCorrect:
              "The Share section returns to the Can You Explain question about renewable ways to generate electricity."
          },
          {
            id: 3,
            q: "In Lesson 4, what do students look at again from Wonder?",
            options: [
              { key: "A", text: "Windmills and watermills images" },
              { key: "B", text: "Animal food chain pictures" },
              { key: "C", text: "Rock layers" },
              { key: "D", text: "Cloud types" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 8 says to look again at the windmill and watermill images first seen in Wonder."
          },
          {
            id: 4,
            q: "Which part of a scientific explanation should be ONE sentence answering the question?",
            options: [
              { key: "A", text: "Evidence" },
              { key: "B", text: "Reasoning" },
              { key: "C", text: "Claim" },
              { key: "D", text: "Conclusion only" }
            ],
            correctKey: "C",
            whyCorrect:
              "A claim is a one-sentence answer to the Can You Explain question."
          },
          {
            id: 5,
            q: "Which set lists three renewable ways to generate electricity taught in Concept 3.3?",
            options: [
              { key: "A", text: "Coal, gasoline, natural gas" },
              { key: "B", text: "Solar panels, wind turbines, hydroelectric dams" },
              { key: "C", text: "Plastic, glass, metal" },
              { key: "D", text: "Earthquakes, volcanoes, landslides" }
            ],
            correctKey: "B",
            whyCorrect:
              "The concept covers generating electricity using solar, wind, and falling/moving water."
          },
          {
            id: 6,
            q: "Solar panels generate electricity mainly by converting ____ energy into electrical energy.",
            options: [
              { key: "A", text: "Radiant (sunlight) energy" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Nuclear energy from rocks" },
              { key: "D", text: "Heat from a stove only" }
            ],
            correctKey: "A",
            whyCorrect:
              "Solar cells catch the Sun’s radiant energy and convert it into electricity."
          },
          {
            id: 7,
            q: "Wind turbines use the ____ energy of wind to generate electricity.",
            options: [
              { key: "A", text: "Chemical" },
              { key: "B", text: "Kinetic" },
              { key: "C", text: "Magnetic" },
              { key: "D", text: "No energy" }
            ],
            correctKey: "B",
            whyCorrect:
              "Moving air has kinetic energy, which turns the blades and helps generate electricity."
          },
          {
            id: 8,
            q: "In a hydroelectric dam, stored water behind the dam has mainly ____ energy.",
            options: [
              { key: "A", text: "Gravitational potential energy" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Chemical energy" },
              { key: "D", text: "Light energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Water held at a height stores gravitational potential energy."
          },
          {
            id: 9,
            q: "When water is released in a hydroelectric dam, it turns turbines and generators to produce ____.",
            options: [
              { key: "A", text: "Flour" },
              { key: "B", text: "Electricity" },
              { key: "C", text: "Coal" },
              { key: "D", text: "Gasoline" }
            ],
            correctKey: "B",
            whyCorrect:
              "Turbines and generators in the dam generate electricity."
          },
          {
            id: 10,
            q: "Which statement best describes 'evidence' in the Lesson 4 writing task?",
            options: [
              { key: "A", text: "A guess with no examples" },
              { key: "B", text: "Facts and examples that support your claim" },
              { key: "C", text: "A one-word answer" },
              { key: "D", text: "A drawing with no labels" }
            ],
            correctKey: "B",
            whyCorrect:
              "Evidence is the information (facts/examples) that supports the claim."
          },
          {
            id: 11,
            q: "Which statement best describes 'reasoning' in a scientific explanation?",
            options: [
              { key: "A", text: "Explaining why the evidence supports the claim" },
              { key: "B", text: "Listing random facts" },
              { key: "C", text: "Repeating the claim word-for-word" },
              { key: "D", text: "Ignoring the evidence" }
            ],
            correctKey: "A",
            whyCorrect:
              "Reasoning connects evidence to the claim by explaining the science behind it."
          },
          {
            id: 12,
            q: "Lesson 4 asks: 'How is your explanation different from before?' This means you should ____.",
            options: [
              { key: "A", text: "Use new science ideas you learned (energy, turbines, electricity)" },
              { key: "B", text: "Use fewer words than before" },
              { key: "C", text: "Avoid mentioning wind and water" },
              { key: "D", text: "Write the same answer again" }
            ],
            correctKey: "A",
            whyCorrect:
              "You should show growth by using what you learned in the concept."
          },
          {
            id: 13,
            q: "Which is a strong example of a one-sentence claim for this lesson?",
            options: [
              { key: "A", text: "Yes." },
              { key: "B", text: "Renewable energy can generate electricity using the Sun, wind, and moving water." },
              { key: "C", text: "Windmills are old." },
              { key: "D", text: "I like solar panels." }
            ],
            correctKey: "B",
            whyCorrect:
              "It answers the big question in one sentence without being yes/no."
          },
          {
            id: 14,
            q: "What makes windmills/watermills from hundreds of years ago different from many modern turbines?",
            options: [
              { key: "A", text: "Modern systems often connect turbines to generators to produce electricity" },
              { key: "B", text: "Old mills used electricity from batteries" },
              { key: "C", text: "Modern turbines are powered by coal only" },
              { key: "D", text: "There is no difference" }
            ],
            correctKey: "A",
            whyCorrect:
              "Earlier mills commonly did mechanical work; modern turbines are used to generate electrical energy."
          },
          {
            id: 15,
            q: "If your claim says 'Renewable energy can generate electricity in different ways,' which evidence best supports it?",
            options: [
              { key: "A", text: "Solar panels convert sunlight into electricity; wind turbines use wind; dams use falling water." },
              { key: "B", text: "Some animals migrate in winter." },
              { key: "C", text: "Rocks can be smooth or rough." },
              { key: "D", text: "The Moon reflects sunlight." }
            ],
            correctKey: "A",
            whyCorrect:
              "These are direct examples of different renewable methods to generate electricity."
          },
          {
            id: 16,
            q: "In an energy transformation story, the best final output we care about in this concept is usually ____.",
            options: [
              { key: "A", text: "Electrical energy" },
              { key: "B", text: "Sand" },
              { key: "C", text: "Paint color" },
              { key: "D", text: "Rock shape" }
            ],
            correctKey: "A",
            whyCorrect:
              "Concept 3.3 focuses on generating electricity from renewable resources."
          },
          {
            id: 17,
            q: "Which order matches the Lesson 4 writing plan?",
            options: [
              { key: "A", text: "Reasoning → Claim → Evidence" },
              { key: "B", text: "Claim → Evidence → Reasoning → Scientific explanation" },
              { key: "C", text: "Evidence → Scientific explanation → Claim" },
              { key: "D", text: "Scientific explanation only (skip the plan)" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 4 asks you to write a claim first, then evidence, then reasoning, then the full explanation."
          }
        ]
      },

      tf: {
        questions: [
          {
            id: 1,
            s: "Lesson 4 is a Share lesson where students use new ideas to answer the big question.",
            correct: true,
            reason: "The Share section focuses on using what you learned to explain the Can You Explain question."
          },
          {
            id: 2,
            s: "In Activity 8, students look again at windmills and watermills first seen in Wonder.",
            correct: true,
            reason: "Activity 8 explicitly tells students to revisit those images."
          },
          {
            id: 3,
            s: "A claim should be a one-sentence answer to the Can You Explain question.",
            correct: true,
            reason: "Lesson 4 defines the claim this way."
          },
          {
            id: 4,
            s: "Evidence is the part where you explain why the facts support your claim.",
            correct: false,
            reason: "That is reasoning; evidence is the facts/examples themselves."
          },
          {
            id: 5,
            s: "Reasoning connects evidence to the claim by explaining the science.",
            correct: true,
            reason: "Reasoning explains how and why the evidence supports the claim."
          },
          {
            id: 6,
            s: "Solar panels can convert the Sun’s radiant energy into electricity.",
            correct: true,
            reason: "Solar cells catch radiant energy and turn it into electricity."
          },
          {
            id: 7,
            s: "Wind turbines use wind’s kinetic energy to help generate electrical energy.",
            correct: true,
            reason: "Wind turns blades; the system generates electricity."
          },
          {
            id: 8,
            s: "Hydroelectric dams generate electricity by using falling water to turn turbines.",
            correct: true,
            reason: "Falling water spins turbines and generators in the dam."
          },
          {
            id: 9,
            s: "Coal and gasoline are renewable ways to generate electricity.",
            correct: false,
            reason: "Coal and gasoline are nonrenewable fuels."
          },
          {
            id: 10,
            s: "In the Share lesson, students should explain how their new explanation is different from before.",
            correct: true,
            reason: "Lesson 4 asks how the explanation has changed after learning."
          },
          {
            id: 11,
            s: "A strong claim usually starts with 'Yes' or 'No'.",
            correct: false,
            reason: "The claim should not be a yes/no answer; it should be a clear statement."
          },
          {
            id: 12,
            s: "Modern turbines often connect to generators to make electricity.",
            correct: true,
            reason: "Turbines and generators are used in wind and hydroelectric systems."
          },
          {
            id: 13,
            s: "Early windmills and watermills were used only for lighting streets at night.",
            correct: false,
            reason: "They were commonly used to do mechanical work like grinding grain."
          },
          {
            id: 14,
            s: "Your evidence for this lesson can include examples from solar, wind, and water systems.",
            correct: true,
            reason: "Those examples directly support claims about renewable electricity."
          },
          {
            id: 15,
            s: "Reasoning is optional and not needed in a scientific explanation.",
            correct: false,
            reason: "Lesson 4 requires claim, evidence, and reasoning."
          },
          {
            id: 16,
            s: "Lesson 4 tells students to plan first, then write the full scientific explanation.",
            correct: true,
            reason: "It asks for claim, then evidence and reasoning, then the final explanation."
          },
          {
            id: 17,
            s: "In Concept 3.3, one key goal is understanding that renewable resources can be used to generate electricity.",
            correct: true,
            reason: "That is the core idea of the concept and the Can You Explain question."
          }
        ]
      }
    }
  }
};
