// lesson4-data.js
// Theme 3 → Concept 3.1 → Lesson 4 (Follow the Flow)
// This file is imported by the HTML (type="module")

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.1",
    lessons: [
      {
        id: "T3-C3.1-L4",
        label: "Lesson 4 (3.1) — Follow the Flow",
        short:
          "Energy is conserved • Inputs/Outputs • Hair dryer outputs • ‘Lost’ energy is converted (often heat/sound)"
      }
    ]
  },

  lessons: {
    "T3-C3.1-L4": {
      title: "Devices and Energy — Lesson 4 (Follow the Flow)",
      bigQuestion:
        "What kinds of energy transfer must occur for light from the Sun to power a cell phone?",

      explanationBlocks: [
        {
          title: "1) Why do batteries die? (The key idea)",
          bullets: [
            "A device never creates energy from nothing.",
            "When a battery ‘dies’, it means the stored energy has been transferred out of the battery and converted into other forms.",
            "So the important question becomes: Where did the energy go, and what did it turn into?"
          ]
        },
        {
          title: "2) Energy is conserved (Law of Conservation of Energy)",
          bullets: [
            "Energy is conserved: it is neither created nor destroyed.",
            "Energy can change form (electrical → light, heat, sound, motion), but it does not disappear.",
            "This means every bit of energy that goes into a device must eventually leave the device."
          ]
        },
        {
          title: "3) Inputs and Outputs (Follow the Flow)",
          bullets: [
            "Devices have energy inputs (energy going in) and energy outputs (energy leaving).",
            "Outputs can be the ‘useful’ energy that helps the device do its job, and also ‘non-useful’ energy that does not help the main function.",
            "When people say a device ‘loses’ energy, it usually means the energy changed into a form they are not focusing on."
          ]
        },
        {
          title: "4) Example: Hair Dryer (Energy In → Many Energies Out)",
          bullets: [
            "Input: electrical energy enters through the cord.",
            "Inside the dryer, electrical energy is converted into other types.",
            "Outputs: thermal energy (heat), kinetic energy (moving air from the fan), and sound energy (noise).",
            "Sound can feel like ‘lost’ energy because it does not help dry hair, but it is still an output energy."
          ]
        },
        {
          title: "5) Big takeaway (What to write in your answers)",
          bullets: [
            "Always list the input energy first.",
            "Then list all the outputs you can observe or infer (heat, motion, sound, light…).",
            "Explain that energy didn’t disappear — it was converted and flowed out of the device."
          ]
        }
      ],

      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the main idea of Lesson 4 (Follow the Flow)?",
            options: [
              { key: "A", text: "Energy is created inside devices." },
              { key: "B", text: "Energy is conserved, so energy in must equal energy out (in some form)." },
              { key: "C", text: "Only batteries contain energy." },
              { key: "D", text: "Devices work without any energy input." }
            ],
            correctKey: "B",
            whyCorrect:
              "Lesson 4 explains conservation of energy and how energy flows through devices as inputs and outputs."
          },
          {
            id: 2,
            q: "According to the lesson, energy is conserved. This means energy is ____.",
            options: [
              { key: "A", text: "Only created" },
              { key: "B", text: "Only destroyed" },
              { key: "C", text: "Neither created nor destroyed" },
              { key: "D", text: "Always disappearing" }
            ],
            correctKey: "C",
            whyCorrect:
              "The conservation of energy statement means it is neither created nor destroyed."
          },
          {
            id: 3,
            q: "What must eventually happen to all energy that goes into a device?",
            options: [
              { key: "A", text: "It must leave the device (same or different form)." },
              { key: "B", text: "It must disappear forever." },
              { key: "C", text: "It must turn into water." },
              { key: "D", text: "It must stay trapped inside the device." }
            ],
            correctKey: "A",
            whyCorrect:
              "Lesson 4 states that all energy entering a device must eventually leave it, possibly in different forms."
          },
          {
            id: 4,
            q: "What do we call energy going into a device?",
            options: [
              { key: "A", text: "Energy outputs" },
              { key: "B", text: "Energy inputs" },
              { key: "C", text: "Energy erasers" },
              { key: "D", text: "Energy shadows" }
            ],
            correctKey: "B",
            whyCorrect:
              "Energy going into a device is called an energy input."
          },
          {
            id: 5,
            q: "What do we call energy leaving a device?",
            options: [
              { key: "A", text: "Energy outputs" },
              { key: "B", text: "Energy inputs" },
              { key: "C", text: "Energy locks" },
              { key: "D", text: "Energy roots" }
            ],
            correctKey: "A",
            whyCorrect:
              "Energy leaving a device is called an energy output."
          },
          {
            id: 6,
            q: "In the hair dryer example, the input energy is mainly ____ energy.",
            options: [
              { key: "A", text: "Electrical" },
              { key: "B", text: "Nuclear" },
              { key: "C", text: "Gravitational" },
              { key: "D", text: "Chemical only" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson states the hair dryer receives electrical energy through the cord."
          },
          {
            id: 7,
            q: "Which of these is NOT listed as an output of the hair dryer in Lesson 4?",
            options: [
              { key: "A", text: "Thermal energy (heat)" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Kinetic energy (moving air)" },
              { key: "D", text: "Magnetic energy" }
            ],
            correctKey: "D",
            whyCorrect:
              "The lesson lists thermal, sound, and kinetic as outputs, not magnetic energy."
          },
          {
            id: 8,
            q: "Why can sound from a hair dryer seem like ‘lost’ energy?",
            options: [
              { key: "A", text: "Because sound energy is destroyed." },
              { key: "B", text: "Because sound energy does not help dry hair." },
              { key: "C", text: "Because sound energy turns into electricity." },
              { key: "D", text: "Because sound energy is always useful." }
            ],
            correctKey: "B",
            whyCorrect:
              "Sound is an output, but it does not contribute to the main function (drying hair)."
          },
          {
            id: 9,
            q: "If a device seems to ‘lose’ energy, what is the best explanation from the lesson?",
            options: [
              { key: "A", text: "Energy has been converted into other forms." },
              { key: "B", text: "Energy vanished." },
              { key: "C", text: "Energy was never there." },
              { key: "D", text: "Energy can only move in circles." }
            ],
            correctKey: "A",
            whyCorrect:
              "Lesson 4 explains that energy doesn’t disappear; it changes form."
          },
          {
            id: 10,
            q: "Which statement best matches the idea of ‘follow the flow’?",
            options: [
              { key: "A", text: "Only track the useful output." },
              { key: "B", text: "Track how energy enters, changes form, and leaves a device." },
              { key: "C", text: "Ignore outputs because they don’t matter." },
              { key: "D", text: "Energy stays the same type all the time." }
            ],
            correctKey: "B",
            whyCorrect:
              "Following the flow means tracing energy inputs, transformations, and outputs."
          },
          {
            id: 11,
            q: "A working device must have ____.",
            options: [
              { key: "A", text: "Outputs only" },
              { key: "B", text: "Inputs only" },
              { key: "C", text: "Energy input and energy outputs" },
              { key: "D", text: "No energy at all" }
            ],
            correctKey: "C",
            whyCorrect:
              "Lesson 4 states devices have energy that goes in and energy that goes out."
          },
          {
            id: 12,
            q: "In Lesson 4, which output from the hair dryer is linked to the fan and moving air?",
            options: [
              { key: "A", text: "Kinetic energy" },
              { key: "B", text: "Chemical energy" },
              { key: "C", text: "Gravitational energy" },
              { key: "D", text: "Nuclear energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Moving air and the spinning fan are examples of kinetic energy output."
          },
          {
            id: 13,
            q: "Which output energy from a hair dryer is most directly useful for drying hair?",
            options: [
              { key: "A", text: "Thermal energy (heat)" },
              { key: "B", text: "Sound energy" },
              { key: "C", text: "Magnetic energy" },
              { key: "D", text: "Shadow energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Heat helps evaporate water from hair, so thermal energy is directly useful."
          },
          {
            id: 14,
            q: "Which output energy also helps drying because it moves air across wet hair?",
            options: [
              { key: "A", text: "Kinetic energy" },
              { key: "B", text: "Radiation from the Moon" },
              { key: "C", text: "Soil energy" },
              { key: "D", text: "Magnetic energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "Moving air is motion, which is kinetic energy output."
          },
          {
            id: 15,
            q: "What is the best definition of an energy output?",
            options: [
              { key: "A", text: "Energy entering a device" },
              { key: "B", text: "Energy leaving a device" },
              { key: "C", text: "Energy that never changes" },
              { key: "D", text: "Energy that disappears" }
            ],
            correctKey: "B",
            whyCorrect:
              "Outputs are the forms of energy that leave the device."
          },
          {
            id: 16,
            q: "Which idea is most important when answering questions in Lesson 4?",
            options: [
              { key: "A", text: "Energy can be created if a device is powerful." },
              { key: "B", text: "Energy can be destroyed if a battery is empty." },
              { key: "C", text: "Energy changes form, so track inputs and all outputs." },
              { key: "D", text: "Only light counts as energy." }
            ],
            correctKey: "C",
            whyCorrect:
              "The lesson emphasizes conversion and tracking energy flow through inputs and outputs."
          },
          {
            id: 17,
            q: "Which statement is TRUE according to Lesson 4?",
            options: [
              { key: "A", text: "A device can use energy without releasing any energy." },
              { key: "B", text: "All energy that goes into a device must eventually leave it." },
              { key: "C", text: "Energy disappears when it becomes sound." },
              { key: "D", text: "Only heat can enter a device." }
            ],
            correctKey: "B",
            whyCorrect:
              "This directly matches the conservation idea explained in the lesson."
          }
        ]
      },

      tf: {
        questions: [
          {
            id: 1,
            s: "Energy is conserved, meaning it is neither created nor destroyed.",
            correct: true,
            reason: "That is the definition of energy conservation in the lesson."
          },
          {
            id: 2,
            s: "All energy that goes into a device must eventually leave it.",
            correct: true,
            reason: "Lesson 4 states energy in must come out, possibly as different forms."
          },
          {
            id: 3,
            s: "Devices have energy inputs and energy outputs.",
            correct: true,
            reason: "The lesson defines inputs and outputs as energy in and energy out."
          },
          {
            id: 4,
            s: "If energy changes form, it means energy disappeared.",
            correct: false,
            reason: "Changing form is not disappearing; energy still exists."
          },
          {
            id: 5,
            s: "When a device seems to ‘lose’ energy, the energy has usually been converted to another type.",
            correct: true,
            reason: "The lesson explains ‘lost’ energy is actually converted energy."
          },
          {
            id: 6,
            s: "A hair dryer gets its energy input mainly as electrical energy through a cord.",
            correct: true,
            reason: "Lesson 4 says the input comes through the cord as electrical energy."
          },
          {
            id: 7,
            s: "Thermal energy, sound energy, and kinetic energy are outputs of a hair dryer.",
            correct: true,
            reason: "These are explicitly listed as hair dryer outputs in the lesson."
          },
          {
            id: 8,
            s: "Sound energy from a hair dryer helps it dry hair.",
            correct: false,
            reason: "The lesson says sound does not contribute to the main job of drying hair."
          },
          {
            id: 9,
            s: "Kinetic energy from a hair dryer can be connected to moving air.",
            correct: true,
            reason: "Moving air is motion, which is kinetic energy."
          },
          {
            id: 10,
            s: "Energy outputs can be the same type as the input, or different types.",
            correct: true,
            reason: "The lesson states energy can leave in the same or a different form."
          },
          {
            id: 11,
            s: "Energy conservation means devices can create new energy as long as they have batteries.",
            correct: false,
            reason: "Conservation says energy cannot be created from nothing."
          },
          {
            id: 12,
            s: "‘Follow the Flow’ means tracing how energy enters a device, changes form, and leaves it.",
            correct: true,
            reason: "That is the purpose of Activity 8 and the lesson explanation."
          },
          {
            id: 13,
            s: "If a battery dies, the stored energy has been transferred out and converted into other forms.",
            correct: true,
            reason: "A dead battery means its stored energy has been used and transformed."
          },
          {
            id: 14,
            s: "A device can have more than one energy output at the same time.",
            correct: true,
            reason: "The hair dryer has multiple outputs (heat, sound, motion)."
          },
          {
            id: 15,
            s: "Thermal energy output from a hair dryer can be useful for drying hair.",
            correct: true,
            reason: "Heat helps evaporate water from hair."
          },
          {
            id: 16,
            s: "Energy inputs and outputs are only important for hair dryers, not other devices.",
            correct: false,
            reason: "Inputs and outputs apply to all devices, not just hair dryers."
          },
          {
            id: 17,
            s: "Energy can be destroyed if it becomes a form we do not need.",
            correct: false,
            reason: "Even if it is not useful, energy is not destroyed—only converted."
          }
        ]
      }
    }
  }
};
