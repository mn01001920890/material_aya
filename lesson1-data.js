// lesson1-data.js
// Theme 3 → Concept 3.1 → Lesson 1
// Data-only file used by html.html

export const COURSE = {
  appTitle: "Science (Grade 4) • Theme 3",
  nav: {
    conceptTitle: "Concept 3.1",
    lessons: [
      {
        id: "T3-C3.1-L1",
        label: "Lesson 1 (3.1) — Devices & Energy",
        short: "Devices need energy • Batteries • I wonder… • Mars rover problem"
      }
    ]
  },

  lessons: {
    "T3-C3.1-L1": {
      title: "Devices and Energy — Lesson 1",
      bigQuestion:
        "What kinds of energy transfer must occur for light from the Sun to power a cell phone?",

      // ✅ Lesson 1 explanation blocks (no energy chain here)
      explanationBlocks: [
        {
          title: "1) What is a Device? (Main Idea)",
          bullets: [
            "A device is something made to do a job (move, turn, lift, record, etc.).",
            "To do any job, a device needs energy input — no energy → no work."
          ]
        },
        {
          title: "2) Earth Example: Remote-Controlled Devices",
          bullets: [
            "Remote-controlled cars/robots can turn corners, move arms, or operate cameras.",
            "In this lesson, these devices use electricity.",
            "Batteries are the onboard energy source inside the device.",
            "When batteries are exhausted (empty), we recharge them or replace them."
          ],
          image: {
            src: "lesson1_sketch_car_battery.png",
            caption:
              "Sketch: The battery is inside the device (onboard) and supplies electricity."
          }
        },
        {
          title: "3) Important Point: Sometimes Recharge/Replace is NOT Possible",
          bullets: [
            "On Earth it’s usually easy: plug into a charger or buy new batteries.",
            "But in some situations you cannot recharge or buy new batteries.",
            "So we must think about other energy sources for devices."
          ]
        },
        {
          title: "4) Ask Questions Like a Scientist (I wonder…)",
          bullets: [
            "The lesson asks you to write ‘I wonder…’ questions about devices and energy.",
            "Good questions start with: I wonder why… / I wonder how… / I wonder where…",
            "Example: “I wonder where the energy comes from in this device.”",
            "This helps you think like a scientist: ask questions before solving."
          ]
        },
        {
          title: "5) Mars Example: Why a Rover is Different (Analyze Like a Scientist)",
          bullets: [
            "Mars is very far away, so missions use robots/rovers instead of people.",
            "A rover still needs energy and uses electricity (like remote-controlled toys).",
            "But it cannot simply buy batteries or plug into a socket.",
            "So the activity asks you to list possible energy sources the rover could use (different ideas are possible)."
          ],
          image: {
            src: "lesson1_sketch_mars_rover.png",
            caption:
              "Sketch: The rover needs energy far from Earth, so scientists must plan its energy source."
          }
        }
      ],

      // ✅ MCQ quiz (17) — all aligned to Lesson 1
      mcq: {
        questions: [
          {
            id: 1,
            q: "What is the big question of Lesson 1?",
            options: [
              { key: "A", text: "How do mountains form?" },
              { key: "B", text: "What kinds of energy transfer must occur for light from the Sun to power a cell phone?" },
              { key: "C", text: "How do plants make seeds?" },
              { key: "D", text: "Why do earthquakes happen?" }
            ],
            correctKey: "B",
            whyCorrect:
              "Because Lesson 1 starts with this exact guiding question about sunlight energy transfer to a device."
          },
          {
            id: 2,
            q: "Why do remote-controlled devices need energy?",
            options: [
              { key: "A", text: "To change the weather" },
              { key: "B", text: "To move and do tasks (turn, move arms, operate cameras)" },
              { key: "C", text: "To grow leaves" },
              { key: "D", text: "To make oceans larger" }
            ],
            correctKey: "B",
            whyCorrect:
              "Because energy is needed to do work (motion and tasks)."
          },
          {
            id: 3,
            q: "According to the lesson, remote-controlled devices use ____.",
            options: [
              { key: "A", text: "Electricity" },
              { key: "B", text: "Soil" },
              { key: "C", text: "No energy" },
              { key: "D", text: "Water only" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson states these devices use electricity."
          },
          {
            id: 4,
            q: "What is an onboard energy source?",
            options: [
              { key: "A", text: "Energy stored inside the device" },
              { key: "B", text: "Energy floating in the air" },
              { key: "C", text: "Energy from oceans" },
              { key: "D", text: "Energy from earthquakes" }
            ],
            correctKey: "A",
            whyCorrect:
              "Onboard means carried inside the device."
          },
          {
            id: 5,
            q: "In the lesson, batteries are described as ____.",
            options: [
              { key: "A", text: "An onboard energy source" },
              { key: "B", text: "A type of cloud" },
              { key: "C", text: "A kind of rock" },
              { key: "D", text: "A plant part" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explains batteries provide energy from inside the device."
          },
          {
            id: 6,
            q: "What happens when batteries are exhausted?",
            options: [
              { key: "A", text: "They become louder" },
              { key: "B", text: "They are empty and may stop powering the device" },
              { key: "C", text: "They grow bigger" },
              { key: "D", text: "They turn into water" }
            ],
            correctKey: "B",
            whyCorrect:
              "Exhausted means used up/empty, so the device may stop."
          },
          {
            id: 7,
            q: "On Earth, what can we often do when batteries are exhausted?",
            options: [
              { key: "A", text: "Recharge them or replace them" },
              { key: "B", text: "Throw the device into the ocean" },
              { key: "C", text: "Wait for mountains to form" },
              { key: "D", text: "Shake the device to create energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson says recharged or replaced."
          },
          {
            id: 8,
            q: "Why does the lesson say recharging/replacing is sometimes NOT possible?",
            options: [
              { key: "A", text: "Because chargers are illegal" },
              { key: "B", text: "Because in some places you cannot plug in or buy new batteries" },
              { key: "C", text: "Because electricity never works" },
              { key: "D", text: "Because batteries are always free" }
            ],
            correctKey: "B",
            whyCorrect:
              "Some situations are far from stores/sockets, so you must think of other sources."
          },
          {
            id: 9,
            q: "Why do Mars missions use robots/rovers instead of people (in this lesson)?",
            options: [
              { key: "A", text: "Because Mars is far away" },
              { key: "B", text: "Because Mars is under the ocean" },
              { key: "C", text: "Because Mars is inside Earth" },
              { key: "D", text: "Because rovers do not need energy" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson explains Mars is very far away, so robots are used."
          },
          {
            id: 10,
            q: "Why can’t a Mars rover use the easy Earth solution (store/socket)?",
            options: [
              { key: "A", text: "Because it is far away from stores and sockets like on Earth" },
              { key: "B", text: "Because batteries never work" },
              { key: "C", text: "Because rovers are made of paper" },
              { key: "D", text: "Because Earth has no chargers" }
            ],
            correctKey: "A",
            whyCorrect:
              "Mars rovers are far from Earth resources, so simple charging/buying is not available."
          },
          {
            id: 11,
            q: "Which statement best matches ‘energy transfer’ (as a simple idea)?",
            options: [
              { key: "A", text: "Energy moving from one place to another" },
              { key: "B", text: "A new planet being made" },
              { key: "C", text: "A device becoming heavier" },
              { key: "D", text: "A rock changing color" }
            ],
            correctKey: "A",
            whyCorrect:
              "Energy transfer means energy goes from a source to something else."
          },
          {
            id: 12,
            q: "What does Activity 2 ask you to do?",
            options: [
              { key: "A", text: "Write ‘I wonder…’ questions about devices and energy" },
              { key: "B", text: "Build a real Mars rover at home" },
              { key: "C", text: "Measure volcano temperatures" },
              { key: "D", text: "Draw an animal food chain" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 2 is an ‘Ask Questions Like a Scientist’ task using ‘I wonder…’ questions."
          },
          {
            id: 13,
            q: "If a student says: “I wonder where the energy comes from,” which skill is this?",
            options: [
              { key: "A", text: "Asking questions like a scientist" },
              { key: "B", text: "Painting" },
              { key: "C", text: "Cooking" },
              { key: "D", text: "Sleeping" }
            ],
            correctKey: "A",
            whyCorrect:
              "That is scientific questioning, exactly what Activity 2 practices."
          },
          {
            id: 14,
            q: "Activity 3 mainly asks you to do what?",
            options: [
              { key: "A", text: "Analyze the rover and list possible energy sources" },
              { key: "B", text: "Grow a tree on Mars" },
              { key: "C", text: "Build a real rocket at home" },
              { key: "D", text: "Write about earthquakes" }
            ],
            correctKey: "A",
            whyCorrect:
              "Activity 3 is ‘Analyze Like a Scientist’ about rover energy options."
          },
          {
            id: 15,
            q: "Which is TRUE according to the lesson?",
            options: [
              { key: "A", text: "Devices need energy to do work" },
              { key: "B", text: "Devices work without energy" },
              { key: "C", text: "Batteries never become exhausted" },
              { key: "D", text: "Rovers can easily buy batteries on Mars" }
            ],
            correctKey: "A",
            whyCorrect:
              "The lesson’s main idea is that devices require energy to work."
          },
          {
            id: 16,
            q: "What does ‘exhausted battery’ mean?",
            options: [
              { key: "A", text: "Battery is empty (no energy left)" },
              { key: "B", text: "Battery is a plant" },
              { key: "C", text: "Battery is louder" },
              { key: "D", text: "Battery is a rock" }
            ],
            correctKey: "A",
            whyCorrect:
              "Exhausted means used up/empty."
          },
          {
            id: 17,
            q: "Why does the lesson use the Mars rover example?",
            options: [
              { key: "A", text: "To show a case where charging/replacing is hard and we must think of other sources" },
              { key: "B", text: "To teach volcanoes" },
              { key: "C", text: "To teach oceans" },
              { key: "D", text: "To teach earthquakes" }
            ],
            correctKey: "A",
            whyCorrect:
              "It is the ‘hard case’ that forces us to think about energy sources."
          }
        ]
      },

      // ✅ True/False quiz (17) — no energy chain statements here
      tf: {
        questions: [
          { id: 1,  s: "Devices need energy to work.", correct: true,  reason: "Without energy input, a device cannot do work." },
          { id: 2,  s: "Remote-controlled devices in the lesson use electricity.", correct: true,  reason: "The lesson states these devices use electricity." },
          { id: 3,  s: "Batteries are an onboard energy source inside the device.", correct: true,  reason: "Onboard means inside the device." },
          { id: 4,  s: "If batteries are exhausted, the device always works normally.", correct: false, reason: "Exhausted means empty, so it may stop." },
          { id: 5,  s: "On Earth, we can often recharge or replace batteries easily.", correct: true,  reason: "Chargers and stores are usually available on Earth." },
          { id: 6,  s: "Charging/replacing is always possible in every situation.", correct: false, reason: "The lesson says sometimes it is not possible." },
          { id: 7,  s: "Mars missions in the lesson use robots/rovers because Mars is far away.", correct: true,  reason: "Distance makes sending people difficult." },
          { id: 8,  s: "Mars rovers do not need energy.", correct: false, reason: "Rovers need energy to operate." },
          { id: 9,  s: "A Mars rover can easily plug into a socket like at home.", correct: false, reason: "No easy sockets/stores like Earth." },
          { id: 10, s: "The rover example helps us think about other energy sources.", correct: true,  reason: "That is the purpose of the rover activity." },
          { id: 11, s: "Energy transfer can be thought of as energy moving from one place to another.", correct: true,  reason: "That is the basic meaning of transfer." },
          { id: 12, s: "The big question connects sunlight to powering a device.", correct: true,  reason: "It asks how sunlight energy transfer can power a phone." },
          { id: 13, s: "Activity 2 asks students to write ‘I wonder…’ questions.", correct: true,  reason: "It is an ‘Ask Questions Like a Scientist’ activity." },
          { id: 14, s: "Activity 3 asks students to list possible energy sources for the rover.", correct: true,  reason: "It is an analysis task about rover energy." },
          { id: 15, s: "Batteries never run out of energy.", correct: false, reason: "The lesson says batteries can become exhausted." },
          { id: 16, s: "When batteries are exhausted, recharging or replacing is one solution (on Earth).", correct: true, reason: "The lesson explicitly says recharge or replace." },
          { id: 17, s: "For the rover, students can suggest different possible energy sources.", correct: true, reason: "The task is to list possible ways, not only one fixed answer." }
        ]
      }
    }
  }
};
