// lesson3-data.js
// Theme 3 → Concept 3.1 → Lesson 3 (Energy and Everyday Devices + Conservation of Energy)
// Data-only file imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.1",
    lessons: [
      {
        id: "T3-C3.1-L3",
        label: "Lesson 3 (3.1) — Energy & Everyday Devices",
        short:
          "Energy input/output • Investigate devices • Useful vs wasted energy • Conservation of energy"
      }
    ]
  },

  lessons: {
    "T3-C3.1-L3": {
      title: "Devices and Energy — Lesson 3",
      bigQuestion:
        "Does all the energy that goes into a device come out as its function, or is some energy wasted?",

      explanationBlocks: [
        {
          title: "1) Key Review: Energy Input → Energy Output",
          bullets: [
            "A device needs energy IN to do work (this is the energy input).",
            "A device produces energy OUT while working (these are energy outputs).",
            "Outputs can be useful (part of the device’s job) and also extra (not helpful for the job)."
          ]
        },
        {
          title: "2) Activity 6: Investigation — Energy and Everyday Devices",
          bullets: [
            "You observe different devices and describe: (1) the device function, (2) energy in, and (3) energy out.",
            "You discuss ideas with your group and record observations in a table.",
            "Example from the lesson: a table lamp’s energy in is electrical energy; its outputs include light energy and thermal (heat) energy."
          ]
        },
        {
          title: "3) Useful Energy vs Wasted (Extra) Energy",
          bullets: [
            "Not all outputs are part of the device’s main function.",
            "Some energy leaves the device in a form that does not help the device do its job (often called wasted or extra energy).",
            "Example: a lamp’s goal is light, but it also releases heat that is not needed for lighting."
          ]
        },
        {
          title: "4) Activity 7: The Conservation of Energy (Core Rule)",
          bullets: [
            "Energy is constantly converted from one form/type to another.",
            "Energy cannot be created or destroyed; it never disappears.",
            "This rule is called the Law of Conservation of Energy."
          ]
        },
        {
          title: "5) Examples of Energy Conversions (From the Lesson)",
          bullets: [
            "Riding a bike: chemical energy in food → kinetic energy (moving) → heat energy from friction (tires rubbing the ground).",
            "Turning on a light bulb: electrical energy → light energy + heat energy.",
            "These examples show that energy changes form, but the total amount of energy is conserved."
          ]
        }
      ],

      // ✅ MCQ quiz (17) — aligned to Lesson 3
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main goal of Lesson 3?",
            options: [
              { key: "A", text: "To learn how to build a battery" },
              { key: "B", text: "To describe energy input and output in everyday devices" },
              { key: "C", text: "To memorize planet names" },
              { key: "D", text: "To study only volcanoes" }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 3 focuses on identifying energy inputs/outputs for devices and discussing whether any energy is wasted."
          },
          {
            id: 2,
            q: "In Activity 6, what do students record for each device?",
            options: [
              { key: "A", text: "Only the device color" },
              { key: "B", text: "Device function, energy in, and energy out" },
              { key: "C", text: "Only the device brand name" },
              { key: "D", text: "Only the device price" }
            ],
            correctKey: "B",
            whyCorrect:
              "The Activity 6 table includes the device function, forms of energy in, and forms of energy out."
          },
          {
            id: 3,
            q: "A table lamp’s energy input is mainly ____.",
            options: [
              { key: "A", text: "Electrical energy" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Gravity energy" },
              { key: "D", text: "Ice energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson example states the table lamp uses electrical energy as the input."
          },
          {
            id: 4,
            q: "A table lamp’s energy outputs include ____.",
            options: [
              { key: "A", text: "Light only" },
              { key: "B", text: "Light and thermal (heat)" },
              { key: "C", text: "Chemical only" },
              { key: "D", text: "Magnetic only" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson example lists light and thermal energy as outputs for a table lamp."
          },
          {
            id: 5,
            q: "Which output is usually the useful output for a lamp?",
            options: [
              { key: "A", text: "Light energy" },
              { key: "B", text: "Heat energy" },
              { key: "C", text: "Sound energy" },
              { key: "D", text: "Nuclear energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "A lamp’s main function is to provide light."
          },
          {
            id: 6,
            q: "Which statement best describes 'wasted' (extra) energy?",
            options: [
              { key: "A", text: "Energy that disappears forever" },
              { key: "B", text: "Energy output that does not help the device do its job" },
              { key: "C", text: "Energy that is created from nothing" },
              { key: "D", text: "Energy that only exists in the Sun" }
            ],
            correctKey: "B",
            whyCorrect:
              "Wasted (extra) energy is an output that does not support the device’s intended function."
          },
          {
            id: 7,
            q: "According to the lesson, can energy disappear or be used up so it is gone?",
            options: [
              { key: "A", text: "Yes, energy disappears" },
              { key: "B", text: "No, energy changes form but does not disappear" },
              { key: "C", text: "Yes, if a device is old" },
              { key: "D", text: "Only in winter" }
            ],
            correctKey: "B",
            whyCorrect:
              "The conservation of energy says energy cannot be created or destroyed—only transformed."
          },
          {
            id: 8,
            q: "The rule 'energy cannot be created nor destroyed' is called ____.",
            options: [
              { key: "A", text: "The Law of Conservation of Energy" },
              { key: "B", text: "The Law of Loud Sounds" },
              { key: "C", text: "The Law of Falling Rocks" },
              { key: "D", text: "The Law of Plant Growth" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson names this rule as the Law of Conservation of Energy."
          },
          {
            id: 9,
            q: "In the bike example, the energy in food is mainly ____ energy.",
            options: [
              { key: "A", text: "Chemical energy" },
              { key: "B", text: "Light energy" },
              { key: "C", text: "Sound energy" },
              { key: "D", text: "Shadow energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Food stores chemical energy, which your body can use."
          },
          {
            id: 10,
            q: "When you push the bike pedals and move, chemical energy is converted into ____ energy.",
            options: [
              { key: "A", text: "Kinetic energy" },
              { key: "B", text: "Nuclear energy" },
              { key: "C", text: "Magnetic energy" },
              { key: "D", text: "No energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Moving objects have kinetic energy."
          },
          {
            id: 11,
            q: "In the bike example, some energy becomes heat because of ____.",
            options: [
              { key: "A", text: "Friction (tires rubbing the ground)" },
              { key: "B", text: "Moonlight" },
              { key: "C", text: "Rainbows" },
              { key: "D", text: "Plant growth" }
            ],
            correctKey: "A",
            whyCorrect:
              "Friction converts some motion energy into heat."
          },
          {
            id: 12,
            q: "When a light bulb is turned on, electrical energy is converted into ____.",
            options: [
              { key: "A", text: "Light and heat energy" },
              { key: "B", text: "Only chemical energy" },
              { key: "C", text: "Only gravity energy" },
              { key: "D", text: "Only sound energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson says a light bulb converts electrical energy into light and heat."
          },
          {
            id: 13,
            q: "Which statement is TRUE about energy conversions?",
            options: [
              { key: "A", text: "Energy can only be one type forever" },
              { key: "B", text: "Energy is constantly converted from one form to another" },
              { key: "C", text: "Energy disappears when a device stops" },
              { key: "D", text: "Energy is only in living things" }
            ],
            correctKey: "B",
            whyCorrect:
              "The lesson explains that energy is constantly converted between forms."
          },
          {
            id: 14,
            q: "Why can a device seem like it 'loses' energy?",
            options: [
              { key: "A", text: "Because energy is destroyed" },
              { key: "B", text: "Because energy is converted to other forms like heat" },
              { key: "C", text: "Because the Sun turns off" },
              { key: "D", text: "Because electricity is imaginary" }
            ],
            correctKey: "B",
            whyCorrect:
              "Energy is not destroyed; it transforms into other forms that may not help the function."
          },
          {
            id: 15,
            q: "Which is the best example of wasted (extra) energy for a lamp?",
            options: [
              { key: "A", text: "Light energy" },
              { key: "B", text: "Thermal (heat) energy" },
              { key: "C", text: "The lamp’s color" },
              { key: "D", text: "The lamp’s shape" }
            ],
            correctKey: "B",
            whyCorrect:
              "Heat is an output, but it is not the lamp’s main purpose."
          },
          {
            id: 16,
            q: "If energy is conserved, what must happen to the energy that goes into a device?",
            options: [
              { key: "A", text: "It must eventually leave the device, possibly as different forms" },
              { key: "B", text: "It can vanish if the device is quiet" },
              { key: "C", text: "It becomes new energy from nothing" },
              { key: "D", text: "It stays trapped forever in the device" }
            ],
            correctKey: "A",
            whyCorrect:
              "Conservation means energy does not disappear; it leaves as outputs (same or different forms)."
          },
          {
            id: 17,
            q: "Which pair correctly matches a device and a likely 'extra' output?",
            options: [
              { key: "A", text: "Lamp → heat" },
              { key: "B", text: "Lamp → sunlight" },
              { key: "C", text: "Bike → moonlight" },
              { key: "D", text: "Food → magnetism" }
            ],
            correctKey: "A",
            whyCorrect:
              "A lamp often produces extra heat while providing light."
          }
        ]
      },

      // ✅ True/False (17) — aligned to Lesson 3
      tf: {
        questions: [
          {
            id: 1,
            s: "Activity 6 asks students to describe energy input and output for different devices.",
            correct: true,
            reason: "That is the purpose of the investigation table in Lesson 3."
          },
          {
            id: 2,
            s: "A device’s energy output can include more than one type of energy.",
            correct: true,
            reason: "Example: a lamp outputs both light and heat."
          },
          {
            id: 3,
            s: "A table lamp’s energy input is electrical energy.",
            correct: true,
            reason: "The lesson example states this directly."
          },
          {
            id: 4,
            s: "A table lamp outputs light energy and thermal (heat) energy.",
            correct: true,
            reason: "This is given in the lesson’s table example."
          },
          {
            id: 5,
            s: "All energy that goes into a device must come out only as the device’s main function.",
            correct: false,
            reason: "Some output energy can be extra/wasted and not part of the main function."
          },
          {
            id: 6,
            s: "Wasted (extra) energy means energy disappears.",
            correct: false,
            reason: "Energy does not disappear; it changes form."
          },
          {
            id: 7,
            s: "Energy can change from one form to another.",
            correct: true,
            reason: "The lesson explains energy conversions."
          },
          {
            id: 8,
            s: "Energy can be created from nothing if we use a powerful machine.",
            correct: false,
            reason: "Conservation of energy says energy cannot be created nor destroyed."
          },
          {
            id: 9,
            s: "The Law of Conservation of Energy says energy cannot be created or destroyed.",
            correct: true,
            reason: "This is the definition given in Lesson 3."
          },
          {
            id: 10,
            s: "In the bike example, food provides chemical energy.",
            correct: true,
            reason: "Food stores chemical energy used by the body."
          },
          {
            id: 11,
            s: "In the bike example, chemical energy can become kinetic energy when the bike moves.",
            correct: true,
            reason: "Movement is kinetic energy."
          },
          {
            id: 12,
            s: "Friction can convert some motion energy into heat energy.",
            correct: true,
            reason: "The lesson mentions heat from tires rubbing the ground."
          },
          {
            id: 13,
            s: "When a light bulb is turned on, electrical energy is converted into light and heat.",
            correct: true,
            reason: "This is one of the lesson examples."
          },
          {
            id: 14,
            s: "If a device feels warm, that heat might be an extra output energy.",
            correct: true,
            reason: "Heat is often an output that is not the main function."
          },
          {
            id: 15,
            s: "Energy conservation means devices do not need energy inputs.",
            correct: false,
            reason: "Devices still need inputs; conservation describes what happens to energy, not that energy is unnecessary."
          },
          {
            id: 16,
            s: "Energy conversions happen only in living things, not in machines.",
            correct: false,
            reason: "Devices like lamps convert electrical energy into other forms."
          },
          {
            id: 17,
            s: "In many devices, some output energy may not help the device do its intended job.",
            correct: true,
            reason: "That is exactly what the lesson asks you to discuss using examples."
          }
        ]
      }
    }
  }
};
