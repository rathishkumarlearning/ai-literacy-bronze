export const courseData = {
  title: "AI Literacy for Kids",
  description: "Learn AI the fun way! 🤖✨",
  chapters: [
    {
      id: 1,
      title: "🤖 What is AI?",
      color: "#FF6B35",
      lessons: [
        {
          id: "1-1",
          title: "What is Artificial Intelligence?",
          content: {
            description: "AI is like a smart helper that can learn from examples! Let's find out what makes AI so special. 🌟",
            sections: [
              { type: "heading", level: 2, content: "🤔 So What IS Artificial Intelligence?" },
              { type: "text", content: "Imagine you have a super smart robot friend. You show it thousands of pictures of cats and dogs, and after a while, it can tell the difference all by itself! That's basically what **Artificial Intelligence** (AI) does — it's a computer program that can learn from examples and make decisions.\n\nThe word **\"Artificial\"** means \"made by humans\" (not natural), and **\"Intelligence\"** means \"the ability to think and learn.\" Put them together and you get: **a thinking machine made by humans!**" },
              { type: "tip", content: "🌟 **Fun Fact!** The term \"Artificial Intelligence\" was first used in 1956 — that's over 65 years ago! Scientists have been dreaming about smart machines for a really long time." },
              { type: "heading", level: 2, content: "🧩 AI is Like a Super Pattern Finder" },
              { type: "text", content: "Here's the big secret about AI: **it's really good at finding patterns!**\n\nThink about how you learned to read. You saw the letter \"A\" thousands of times in books, on signs, and in school. After a while, your brain learned the pattern — and now you recognize \"A\" instantly, even in different fonts!\n\nAI works the same way. Show it enough examples, and it learns the pattern. That's why AI can:\n\n• Recognize your face in photos 📸\n• Understand what you say to Siri or Alexa 🗣️\n• Suggest videos you might like on YouTube 🎬\n• Beat humans at chess and video games 🎮" },
              { type: "heading", level: 2, content: "🏠 AI is Already All Around You!" },
              { type: "text", content: "You might not realize it, but you use AI every single day! Here are some examples:\n\n• **Autocorrect** on your phone — AI predicts what word you're trying to type\n• **Netflix & YouTube** — AI recommends shows and videos just for you\n• **Video game enemies** — AI controls how they move and fight\n• **Spam filters** — AI keeps junk emails out of your inbox\n• **Face filters** on Snapchat and Instagram — AI finds your face and adds fun effects" },
              { type: "warning", content: "⚠️ **Good to Know!** AI is super smart at specific tasks, but it can't do EVERYTHING. An AI that plays chess can't also drive a car. Each AI is trained for one particular job!" },
              { type: "heading", level: 2, content: "💡 Let's See AI in Action!" },
              { type: "code", language: "python", filename: "my_first_ai.py", code: "# Let's pretend to be a simple AI!\n# This AI learns what fruits you like\n\nfavorite_fruits = []\n\n# Training the AI with examples\nfruits_i_like = [\"apple\", \"banana\", \"strawberry\"]\nfruits_i_dont = [\"durian\", \"jackfruit\"]\n\nprint(\"🤖 AI Learning Mode!\")\nprint(f\"You like: {fruits_i_like}\")\nprint(f\"You don't like: {fruits_i_dont}\")\n\n# AI makes a prediction\nnew_fruit = \"mango\"\nprint(f\"\\n🤔 Would you like {new_fruit}?\")\nprint(\"🤖 AI says: Probably yes! (It's sweet like your favorites!)\")" },
              {
                type: "quiz",
                question: "What does \"Artificial Intelligence\" mean?",
                options: [
                  { id: "a", text: "A robot that looks like a human" },
                  { id: "b", text: "A computer program that can learn and make decisions" },
                  { id: "c", text: "A video game character" },
                  { id: "d", text: "A type of smartphone" }
                ],
                correct: "b",
                explanation: "AI stands for Artificial Intelligence — it's a computer program that can learn from examples and make smart decisions! 🎉"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "AI vs Humans — What's the Difference?",
          content: {
            description: "Humans and AI are both smart, but in very different ways! Let's compare. 🧠⚡",
            sections: [
              { type: "heading", level: 2, content: "🏆 The Ultimate Showdown: Human Brain vs AI" },
              { type: "text", content: "Your brain is the most amazing computer in the universe! It has about **86 billion neurons** (tiny brain cells) that work together to help you think, feel, dream, and create.\n\nAI is also incredibly powerful, but in different ways. Let's see how they compare!" },
              { type: "heading", level: 3, content: "⚡ What AI Does BETTER Than Humans:" },
              { type: "list", items: [
                "**Speed** — AI can do math millions of times faster than you 🏎️",
                "**Memory** — AI never forgets! It can remember billions of facts perfectly 🧠",
                "**Repetition** — AI never gets bored or tired doing the same thing over and over 🔄",
                "**Data processing** — AI can read thousands of books in seconds 📚",
                "**Consistency** — AI doesn't have bad days or make mistakes from being tired 😴"
              ]},
              { type: "heading", level: 3, content: "💪 What HUMANS Do BETTER Than AI:" },
              { type: "list", items: [
                "**Creativity** — We can imagine things that have never existed! 🎨",
                "**Emotions** — We feel love, joy, sadness, excitement 💝",
                "**Common sense** — We know not to put a fish in a tree 🐟🌳",
                "**Learning from few examples** — You can learn what a giraffe is from ONE picture! 🦒",
                "**Understanding context** — We get jokes, sarcasm, and hidden meanings 😂",
                "**Physical skills** — We can dance, swim, and do gymnastics! 🤸"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** A 4-year-old child can learn new things faster than the most powerful AI in the world! Your brain is incredible at learning from just a few examples." },
              { type: "heading", level: 2, content: "🤝 AI + Humans = Super Team!" },
              { type: "text", content: "The best results happen when humans and AI work TOGETHER! Here's how:\n\n• **Doctors + AI** = Finding diseases faster and saving more lives 🏥\n• **Artists + AI** = Creating amazing art that neither could make alone 🎨\n• **Scientists + AI** = Discovering new medicines and materials 🔬\n• **Students + AI** = Learning in fun, personalized ways 📖\n\nAI isn't here to replace humans — it's here to help us be even MORE awesome!" },
              { type: "warning", content: "⚠️ **Good to Know!** AI doesn't have feelings or consciousness. When an AI chatbot says \"I'm happy to help!\", it doesn't actually FEEL happy. It's just predicting what words to say next!" },
              { type: "code", language: "python", filename: "human_vs_ai.py", code: "# Let's compare human and AI abilities!\n\nprint(\"🧠 Human Brain vs 🤖 AI\")\nprint(\"=\" * 30)\n\n# Math speed test\nprint(\"\\n📊 Math: 847293 × 293847\")\nprint(\"AI: 248,949,498,771 (instant!)\")\nprint(\"Human: Give me a calculator... 😅\")\n\n# Creativity test  \nprint(\"\\n🎨 Write a poem about a cloud:\")\nprint(\"Human: Creates something beautiful & unique\")\nprint(\"AI: Mixes patterns from poems it's read\")\n\n# Common sense test\nprint(\"\\n🤔 Is a penguin a good pet?\")\nprint(\"Human: No! They need ice and fish!\")\nprint(\"AI: Depends on training data... 🤷\")" },
              {
                type: "quiz",
                question: "What is something humans can do BETTER than AI?",
                options: [
                  { id: "a", text: "Calculate huge numbers quickly" },
                  { id: "b", text: "Remember billions of facts" },
                  { id: "c", text: "Understand jokes and emotions" },
                  { id: "d", text: "Process data 24/7 without sleep" }
                ],
                correct: "c",
                explanation: "Humans are WAY better at understanding emotions, humor, sarcasm, and social situations. AI can process data fast, but it doesn't truly 'get' jokes! 😄"
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "AI in Your Daily Life",
          content: {
            description: "You use AI more than you think! Let's discover all the hidden AI around you. 🔍",
            sections: [
              { type: "heading", level: 2, content: "📱 AI in Your Pocket" },
              { type: "text", content: "Every time you pick up a smartphone, you're using AI! Let's go through a typical day and spot all the AI:" },
              { type: "heading", level: 3, content: "🌅 Morning" },
              { type: "list", items: [
                "**Face ID** unlocks your phone by recognizing YOUR face among billions 📱",
                "**Weather app** uses AI to predict if you need an umbrella ☔",
                "**Smart alarm** learns your sleep patterns to wake you gently 😴"
              ]},
              { type: "heading", level: 3, content: "🏫 At School" },
              { type: "list", items: [
                "**Google Search** uses AI to find the best answers for your homework 📝",
                "**Google Translate** uses AI to translate between 100+ languages 🌍",
                "**Spell checker** suggests corrections as you type ✏️",
                "**Math apps** like Photomath use AI to solve equations from photos 📸"
              ]},
              { type: "heading", level: 3, content: "🎮 Fun Time" },
              { type: "list", items: [
                "**YouTube** recommends videos you'll love based on what you've watched 🎬",
                "**TikTok** uses AI to show you the perfect For You Page 📲",
                "**Minecraft** NPCs use simple AI to move around and react 🎮",
                "**Spotify** creates personalized playlists just for you 🎵",
                "**Snapchat filters** use AI to find your face and add effects 🤪"
              ]},
              { type: "heading", level: 3, content: "🏠 At Home" },
              { type: "list", items: [
                "**\"Hey Siri / Alexa / Google!\"** — Voice AI understands your questions 🗣️",
                "**Netflix** suggests shows based on what you've enjoyed 📺",
                "**Robot vacuums** use AI to navigate around furniture 🤖",
                "**Smart thermostats** learn when to heat or cool your home 🌡️"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** TikTok's AI is so good at learning what you like that it can figure out your interests in less than 40 minutes of watching videos! That's why it's so hard to stop scrolling!" },
              { type: "warning", content: "⚠️ **Good to Know!** When YouTube or TikTok recommends videos, remember: the AI wants you to keep watching as long as possible. It's okay to take breaks! Your brain needs rest too. 🧘" },
              { type: "code", language: "python", filename: "ai_around_me.py", code: "# Count the AI in your daily life!\n\nmy_ai_list = {\n    \"Morning\": [\"Face ID\", \"Weather App\", \"Smart Alarm\"],\n    \"School\": [\"Google Search\", \"Spell Check\", \"Calculator\"],\n    \"Fun\": [\"YouTube\", \"TikTok\", \"Video Games\", \"Spotify\"],\n    \"Home\": [\"Siri/Alexa\", \"Netflix\", \"Smart TV\"]\n}\n\ntotal = 0\nfor time_of_day, ai_tools in my_ai_list.items():\n    print(f\"\\n{time_of_day}: {len(ai_tools)} AI tools\")\n    for tool in ai_tools:\n        print(f\"  🤖 {tool}\")\n    total += len(ai_tools)\n\nprint(f\"\\n🎉 You use {total} AI tools every day!\")" },
              {
                type: "quiz",
                question: "Which of these does NOT use AI?",
                options: [
                  { id: "a", text: "YouTube video recommendations" },
                  { id: "b", text: "A regular light switch" },
                  { id: "c", text: "Snapchat face filters" },
                  { id: "d", text: "Google Search results" }
                ],
                correct: "b",
                explanation: "A regular light switch is just a simple on/off mechanism — no AI needed! But YouTube, Snapchat filters, and Google all use advanced AI. 💡"
              }
            ]
          }
        },
        {
          id: "1-4",
          title: "The History of AI — A Fun Timeline",
          content: {
            description: "AI has been around longer than you think! Let's travel through time! ⏰",
            sections: [
              { type: "heading", level: 2, content: "⏰ A Journey Through AI History" },
              { type: "text", content: "People have dreamed about creating intelligent machines for hundreds of years! Let's take a fun trip through time to see how AI has grown from a wild dream into the technology we use every day." },
              { type: "heading", level: 3, content: "🏛️ Ancient Dreams (Thousands of years ago)" },
              { type: "text", content: "Even ancient Greeks told stories about mechanical servants made by the gods! The idea of \"thinking machines\" is really, really old. People have always imagined having smart helpers." },
              { type: "heading", level: 3, content: "🖥️ 1950s — AI is Born!" },
              { type: "text", content: "In 1950, a brilliant scientist named **Alan Turing** asked: \"Can machines think?\" He created the famous **Turing Test** — if a computer can fool a human into thinking it's a real person in a conversation, it passes!\n\nIn 1956, scientists met at **Dartmouth College** and officially named this field \"Artificial Intelligence.\" AI was born! 🎉" },
              { type: "heading", level: 3, content: "🎮 1960s-70s — Early Experiments" },
              { type: "text", content: "Scientists built the first chatbot called **ELIZA** in 1966. It could have simple conversations and people were amazed! (Even though it was just matching patterns in text.)\n\nAI learned to play checkers and simple games. But computers were still HUGE — filling entire rooms! 🏗️" },
              { type: "heading", level: 3, content: "❄️ 1970s-80s — The AI Winter" },
              { type: "text", content: "People got too excited and promised AI would do everything. When it couldn't, everyone got disappointed. Funding dried up. This sad period is called the **\"AI Winter\"** — like a long, cold nap for AI research. ❄️😴" },
              { type: "heading", level: 3, content: "♟️ 1997 — AI Beats a Chess Champion!" },
              { type: "text", content: "IBM's computer **Deep Blue** beat world chess champion **Garry Kasparov**! This was HUGE news. For the first time, a machine beat the best human at a strategy game. The world was shocked! ♟️🏆" },
              { type: "heading", level: 3, content: "📱 2010s — AI Goes Mainstream" },
              { type: "text", content: "**2011**: Siri launched on iPhones — the first popular voice assistant! 🗣️\n**2012**: AI learned to recognize cats in YouTube videos (seriously!) 🐱\n**2016**: Google's AlphaGo beat the world champion at Go — a game way harder than chess!\n**2017**: AI started creating art, music, and writing stories! 🎨" },
              { type: "heading", level: 3, content: "🚀 2020s — The AI Explosion!" },
              { type: "text", content: "**2022**: ChatGPT launched and EVERYONE started talking about AI! 💬\n**2023**: AI can create realistic images from text descriptions 🖼️\n**2024**: AI helps scientists discover new medicines and materials 💊\n**Today**: AI is everywhere — and YOU are learning about it! 🌟" },
              { type: "tip", content: "🌟 **Fun Fact!** The computer that beat Kasparov at chess in 1997 was the size of a large refrigerator. Today, the AI on your phone is thousands of times more powerful! 📱" },
              {
                type: "quiz",
                question: "When was the term 'Artificial Intelligence' officially created?",
                options: [
                  { id: "a", text: "1920" },
                  { id: "b", text: "1956" },
                  { id: "c", text: "1997" },
                  { id: "d", text: "2022" }
                ],
                correct: "b",
                explanation: "The term 'Artificial Intelligence' was coined at the Dartmouth Conference in 1956! That's when scientists officially started the field of AI. 🎓"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "🧠 How Does AI Learn?",
      color: "#7C3AED",
      lessons: [
        {
          id: "2-1",
          title: "Teaching AI Like Training a Pet",
          content: {
            description: "Training AI is a lot like teaching your dog new tricks! Let's find out how. 🐕",
            sections: [
              { type: "heading", level: 2, content: "🐶 AI Learns Just Like Your Pet!" },
              { type: "text", content: "Have you ever trained a pet? When your dog sits on command, you give it a treat. When it doesn't sit, no treat. Over time, your dog learns: **sitting = treat = good!**\n\nAI learns in a very similar way! Instead of treats, AI gets feedback that says \"correct!\" or \"wrong!\" After thousands (or millions!) of tries, it gets really good." },
              { type: "heading", level: 2, content: "📚 The Three Ways AI Learns" },
              { type: "heading", level: 3, content: "1. 🏷️ Supervised Learning (Learning with a Teacher)" },
              { type: "text", content: "This is like having a teacher who shows you flash cards:\n\n• Teacher shows a picture: \"This is a CAT\" 🐱\n• Teacher shows another: \"This is a DOG\" 🐶\n• After thousands of examples, AI can tell cats from dogs on its own!\n\nThe \"teacher\" is the human who **labels** the data (tells the AI what each example is)." },
              { type: "heading", level: 3, content: "2. 🔍 Unsupervised Learning (Learning Alone)" },
              { type: "text", content: "Imagine dumping a huge box of LEGO bricks on the floor. Without anyone telling you, you'd probably sort them by color or shape, right?\n\nThat's unsupervised learning! The AI looks at data and finds patterns ALL BY ITSELF. No labels needed! It groups similar things together." },
              { type: "heading", level: 3, content: "3. 🎮 Reinforcement Learning (Learning from Rewards)" },
              { type: "text", content: "This is EXACTLY like training a pet! The AI:\n\n• Tries something → Gets a reward or punishment\n• Tries again → Adjusts based on feedback\n• Repeats millions of times → Becomes an expert!\n\nThis is how AI learns to play video games. It starts terrible, but after playing millions of games against itself, it becomes unbeatable! 🏆" },
              { type: "tip", content: "🌟 **Fun Fact!** Google's AlphaGo learned to play Go by playing against ITSELF over 4.9 million games. That's like playing non-stop for thousands of years of human time!" },
              { type: "code", language: "python", filename: "training_ai.py", code: "# Let's simulate training an AI!\n\nimport random\n\n# Our AI is learning to recognize fruits\ntraining_data = [\n    (\"round, red, small\", \"apple\"),\n    (\"long, yellow, soft\", \"banana\"),\n    (\"round, orange, bumpy\", \"orange\"),\n]\n\nprint(\"🤖 Training Mode!\")\nprint(\"=\" * 30)\n\nfor features, fruit in training_data:\n    print(f\"\\n📝 Features: {features}\")\n    print(f\"✅ Label: {fruit}\")\n    print(\"🧠 AI learned this pattern!\")\n\n# Now test the AI\nprint(\"\\n🎯 Testing Mode!\")\nprint(\"Features: round, red, small\")\nprint(\"🤖 AI predicts: apple! ✅\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI needs WAY more examples than humans to learn. You can learn what a zebra is from one picture. AI might need 10,000 pictures! But once it learns, it never forgets!" },
              {
                type: "quiz",
                question: "In Reinforcement Learning, how does AI learn?",
                options: [
                  { id: "a", text: "By reading textbooks" },
                  { id: "b", text: "By trying things and getting rewards or punishments" },
                  { id: "c", text: "By copying humans exactly" },
                  { id: "d", text: "By being programmed with every possible answer" }
                ],
                correct: "b",
                explanation: "Reinforcement Learning is like training a pet — the AI tries something, gets feedback (reward or punishment), and learns to do better next time! 🐕🦴"
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Data — AI's Food",
          content: {
            description: "Data is like food for AI — without it, AI can't learn anything! But not all food is healthy... 🍎🍕",
            sections: [
              { type: "heading", level: 2, content: "🍽️ AI is Hungry for Data!" },
              { type: "text", content: "If AI is a brain, then **data is its food**. Just like you need to eat food to grow and be strong, AI needs to \"eat\" data to learn and get smarter.\n\nBut here's the important part: **the quality of the food matters!** 🥗" },
              { type: "heading", level: 2, content: "🗑️ Garbage In, Garbage Out!" },
              { type: "text", content: "There's a famous saying in computer science: **\"Garbage In, Garbage Out\"** (GIGO). It means:\n\n• If you feed AI **good data** → It makes **good decisions** ✅\n• If you feed AI **bad data** → It makes **bad decisions** ❌\n\nImagine teaching a kid that 2+2=5. They'd get every math problem wrong! Same with AI — if the training data is wrong or biased, the AI will learn the wrong things." },
              { type: "heading", level: 3, content: "📊 What Counts as Data?" },
              { type: "text", content: "Data can be almost anything! Here are some examples:\n\n• **Photos and videos** — For teaching AI to see 📸\n• **Text and books** — For teaching AI to read and write 📚\n• **Audio recordings** — For teaching AI to hear and speak 🎤\n• **Numbers and statistics** — For teaching AI to predict 📈\n• **Game moves** — For teaching AI to play games 🎮" },
              { type: "tip", content: "🌟 **Fun Fact!** ChatGPT was trained on about 570 GB of text data. That's roughly 300 billion words — or about 1 million books! 📚📚📚" },
              { type: "heading", level: 2, content: "🏷️ Labeled vs Unlabeled Data" },
              { type: "text", content: "**Labeled data** is like a textbook with answers:\n• Photo of cat → labeled \"cat\" ✅\n• Photo of dog → labeled \"dog\" ✅\n\n**Unlabeled data** is like a pile of photos with no labels:\n• Photo → ??? 🤷\n• Photo → ??? 🤷\n\nLabeling data takes a LOT of time. Sometimes humans have to manually label millions of images! That's why some companies hire thousands of people just to label data." },
              { type: "code", language: "python", filename: "data_quality.py", code: "# Good Data vs Bad Data\n\nprint(\"📊 Data Quality Matters!\")\nprint(\"=\" * 30)\n\n# Good training data\ngood_data = [\n    {\"animal\": \"cat\", \"legs\": 4, \"sound\": \"meow\"},\n    {\"animal\": \"dog\", \"legs\": 4, \"sound\": \"woof\"},\n    {\"animal\": \"bird\", \"legs\": 2, \"sound\": \"chirp\"},\n]\n\n# Bad training data (has errors!)\nbad_data = [\n    {\"animal\": \"cat\", \"legs\": 8, \"sound\": \"moo\"},  # Wrong!\n    {\"animal\": \"dog\", \"legs\": 2, \"sound\": \"chirp\"}, # Wrong!\n]\n\nprint(\"\\n✅ Good Data:\")\nfor d in good_data:\n    print(f\"  {d['animal']}: {d['legs']} legs, says '{d['sound']}'\")\n\nprint(\"\\n❌ Bad Data:\")\nfor d in bad_data:\n    print(f\"  {d['animal']}: {d['legs']} legs, says '{d['sound']}'\")\n\nprint(\"\\n🤖 AI trained on bad data = bad predictions!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** If you only show AI pictures of golden retrievers when teaching it about \"dogs\", it might think all dogs are golden retrievers! AI needs DIVERSE data to learn properly. 🐕🐩🐕‍🦺" },
              {
                type: "quiz",
                question: "What does 'Garbage In, Garbage Out' mean?",
                options: [
                  { id: "a", text: "AI can process trash and recycle it" },
                  { id: "b", text: "Bad input data leads to bad AI results" },
                  { id: "c", text: "AI works best with messy data" },
                  { id: "d", text: "You should throw away old computers" }
                ],
                correct: "b",
                explanation: "GIGO means if you feed AI bad or incorrect data, it will produce bad or incorrect results. Quality data = quality AI! 📊✨"
              }
            ]
          }
        },
        {
          id: "2-3",
          title: "Practice Makes Perfect — How AI Gets Smarter",
          content: {
            description: "Just like you get better at things with practice, AI improves through training! Let's see how. 💪",
            sections: [
              { type: "heading", level: 2, content: "🎯 Training: How AI Practices" },
              { type: "text", content: "Remember learning to ride a bike? At first, you wobbled and fell. But every time you tried again, you got a little better. Eventually, you could ride without thinking about it!\n\nAI goes through the same process — but MUCH faster:\n\n1. **Start**: AI makes random guesses (like wobbling on a bike) 🚲\n2. **Check**: Compare AI's guess to the right answer ✅❌\n3. **Adjust**: AI tweaks itself to be a tiny bit better 🔧\n4. **Repeat**: Do this millions of times! 🔄\n\nThis process is called **training** or **learning**." },
              { type: "heading", level: 2, content: "📉 The Learning Curve" },
              { type: "text", content: "When AI starts training, it's terrible — maybe only 10% accurate. But as it practices more and more:\n\n• After 1,000 tries → 50% accurate (coin flip!) 🪙\n• After 10,000 tries → 80% accurate (pretty good!) 👍\n• After 1,000,000 tries → 95% accurate (amazing!) 🌟\n• After 10,000,000 tries → 99% accurate (superhuman!) 🏆\n\nThis is why AI needs so much computer power — it's practicing millions or billions of times!" },
              { type: "tip", content: "🌟 **Fun Fact!** Training GPT-4 (the AI behind ChatGPT) cost over $100 million and used thousands of powerful computers running for months! That's a LOT of practice! 💰" },
              { type: "heading", level: 2, content: "🧪 Testing the AI" },
              { type: "text", content: "After training, scientists test the AI on data it has NEVER seen before. This is like taking a test at school on material you studied.\n\n• If AI does well on new data → It truly learned! ✅\n• If AI only does well on training data → It just memorized answers! ❌\n\nMemorizing instead of learning is called **overfitting** — like a student who memorizes answers without understanding the concepts." },
              { type: "code", language: "python", filename: "ai_training.py", code: "# Simulating AI training!\n\nprint(\"🤖 AI Training Simulator\")\nprint(\"=\" * 30)\n\naccuracy = 10  # Start at 10%\n\nfor round_num in range(1, 6):\n    # AI gets better each round\n    accuracy = min(accuracy + 18, 99)\n    \n    bar = \"█\" * (accuracy // 5) + \"░\" * (20 - accuracy // 5)\n    print(f\"\\nRound {round_num}: [{bar}] {accuracy}%\")\n    \n    if accuracy < 50:\n        print(\"  😅 Still learning...\")\n    elif accuracy < 80:\n        print(\"  🙂 Getting better!\")\n    elif accuracy < 95:\n        print(\"  😊 Pretty good!\")\n    else:\n        print(\"  🤩 Almost perfect!\")\n\nprint(\"\\n🎉 Training complete! AI is ready!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Even the best AI isn't 100% perfect. That's why humans always need to check AI's work, especially for important things like medical diagnoses or self-driving cars!" },
              {
                type: "quiz",
                question: "What is 'overfitting' in AI?",
                options: [
                  { id: "a", text: "When AI is too big for the computer" },
                  { id: "b", text: "When AI memorizes training data instead of truly learning" },
                  { id: "c", text: "When AI exercises too much" },
                  { id: "d", text: "When AI runs out of memory" }
                ],
                correct: "b",
                explanation: "Overfitting is when AI memorizes the training data but can't handle new, unseen data. It's like memorizing test answers without understanding the subject! 📝"
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "👀 AI That Can See",
      color: "#EC4899",
      lessons: [
        {
          id: "3-1",
          title: "Computer Vision — Teaching Computers to See",
          content: {
            description: "Computers can see and understand images — but how do they do it? 👁️",
            sections: [
              { type: "heading", level: 2, content: "👁️ How Do Computers 'See'?" },
              { type: "text", content: "When you look at a photo of a dog, you instantly know it's a dog. But a computer doesn't \"see\" a dog — it sees a giant grid of **pixels** (tiny colored dots)!\n\nEvery image is made up of millions of pixels, and each pixel is just three numbers: how much **Red**, **Green**, and **Blue** it contains (RGB). So to a computer, a photo is just a massive spreadsheet of numbers! 🔢\n\n**Computer Vision** is the field of AI that teaches computers to understand what these numbers mean — to go from \"a bunch of colored dots\" to \"that's a golden retriever playing fetch!\" 🐕" },
              { type: "heading", level: 2, content: "🔍 How Computer Vision Works" },
              { type: "text", content: "The AI looks at images in layers, from simple to complex:\n\n1. **Layer 1**: Finds edges and lines (like an outline drawing) ✏️\n2. **Layer 2**: Combines edges into shapes (circles, rectangles) 🔲\n3. **Layer 3**: Recognizes parts (eyes, ears, nose) 👃\n4. **Layer 4**: Puts it all together → \"It's a dog!\" 🐶\n\nThis is similar to how YOUR brain processes images, just broken down into mathematical steps!" },
              { type: "tip", content: "🌟 **Fun Fact!** The human eye has about 130 million light-detecting cells. A good camera has about 50 million pixels. But AI can analyze images way faster than we can!" },
              { type: "heading", level: 2, content: "🌍 Computer Vision in the Real World" },
              { type: "list", items: [
                "**Face ID** on your phone recognizes your face instantly 📱",
                "**Google Photos** can find all your pics of your pet 🐱",
                "**Self-driving cars** see roads, signs, and pedestrians 🚗",
                "**Medical AI** can spot diseases in X-rays and scans 🏥",
                "**Factory robots** inspect products for defects 🏭",
                "**Wildlife cameras** automatically identify animals 🦁"
              ]},
              { type: "code", language: "python", filename: "pixels.py", code: "# How computers see images!\n\nprint(\"📸 How a Computer Sees a Photo\")\nprint(\"=\" * 35)\n\n# A tiny 3x3 pixel \"image\" of a smiley\nsmiley = [\n    [\"⬜\", \"😊\", \"⬜\"],\n    [\"😊\", \"⬜\", \"😊\"],\n    [\"⬜\", \"😊\", \"⬜\"]\n]\n\nprint(\"\\nWhat YOU see: 😊\")\nprint(\"\\nWhat a COMPUTER sees:\")\nfor row in smiley:\n    print(\"  \".join(row))\n\nprint(\"\\nAs numbers (RGB values):\")\nprint(\"  [255,255,255] [255,200,0] [255,255,255]\")\nprint(\"  [255,200,0]   [255,255,255] [255,200,0]\")\nprint(\"  [255,255,255] [255,200,0] [255,255,255]\")\nprint(\"\\n🤖 AI turns these numbers into meaning!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Computer Vision can make mistakes! It might confuse a chihuahua with a muffin (they really do look similar in photos!). That's why we can't rely on AI vision 100% for critical decisions. 🐕🧁" },
              {
                type: "quiz",
                question: "How does a computer 'see' an image?",
                options: [
                  { id: "a", text: "The same way humans do, with eyes" },
                  { id: "b", text: "As a grid of numbers representing colored pixels" },
                  { id: "c", text: "By reading the filename" },
                  { id: "d", text: "It can't see at all" }
                ],
                correct: "b",
                explanation: "Computers see images as grids of pixels, where each pixel is represented by numbers (RGB values). AI then learns to understand what those numbers mean! 🔢🖼️"
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Face Filters & Photo Magic",
          content: {
            description: "How do Snapchat and Instagram filters know where your face is? AI magic! 🤳✨",
            sections: [
              { type: "heading", level: 2, content: "🤳 The Magic Behind Face Filters" },
              { type: "text", content: "You know those fun Snapchat filters that give you dog ears, make you look old, or add sparkles? They use **AI face detection** — and it's really clever!\n\nHere's how it works in 3 steps:\n\n**Step 1: Find the Face** 🔍\nAI scans the image and finds your face among everything else in the photo.\n\n**Step 2: Map the Landmarks** 📍\nAI places dozens of invisible dots on your face — on your eyes, nose, mouth, jaw, eyebrows. These are called **facial landmarks** (usually 68-468 points!).\n\n**Step 3: Apply the Effect** ✨\nThe filter uses these dots to know EXACTLY where to place the dog ears, sunglasses, or makeup. As you move, the dots move too, so the filter follows your face!" },
              { type: "tip", content: "🌟 **Fun Fact!** Modern face detection AI can track up to 468 points on your face in real-time, 30 times per second! That's how filters move so smoothly when you turn your head. 🎯" },
              { type: "heading", level: 2, content: "📸 More Photo AI Magic" },
              { type: "list", items: [
                "**Portrait Mode** — AI separates you from the background to create a blurry effect 📷",
                "**Night Mode** — AI brightens dark photos while keeping them sharp 🌙",
                "**Photo Search** — Search for \"beach\" and find all your beach photos 🏖️",
                "**Remove objects** — AI can erase people or objects from photos! 🪄",
                "**Aging filters** — AI predicts what you'll look like in 30 years 👴",
                "**Face swap** — AI maps one face onto another person's head 🔄"
              ]},
              { type: "warning", content: "⚠️ **Good to Know!** Face filters are fun, but face recognition technology can also be used to track people without their permission. That's why some places are creating rules about how face AI can be used!" },
              { type: "code", language: "python", filename: "face_filter.py", code: "# How face filters work (simplified!)\n\nprint(\"🤳 Face Filter Simulator\")\nprint(\"=\" * 30)\n\n# Step 1: Find the face\nprint(\"\\n🔍 Step 1: Scanning for face...\")\nprint(\"   Face detected! ✅\")\n\n# Step 2: Map landmarks\nlandmarks = {\n    \"left_eye\": (120, 150),\n    \"right_eye\": (200, 150),\n    \"nose\": (160, 190),\n    \"mouth\": (160, 220),\n    \"left_ear\": (100, 140),\n    \"right_ear\": (220, 140)\n}\n\nprint(\"\\n📍 Step 2: Mapping face landmarks:\")\nfor part, position in landmarks.items():\n    print(f\"   {part}: position {position}\")\n\n# Step 3: Apply filter\nprint(\"\\n✨ Step 3: Applying 'Puppy' filter!\")\nprint(\"   🐕 Dog ears placed above eyes\")\nprint(\"   👅 Tongue placed below mouth\")\nprint(\"   👃 Puppy nose placed on nose\")\nprint(\"\\n🎉 Filter applied! You look adorable!\")" },
              {
                type: "quiz",
                question: "What are 'facial landmarks' in AI face detection?",
                options: [
                  { id: "a", text: "Famous face-shaped buildings" },
                  { id: "b", text: "Points mapped on your face (eyes, nose, mouth, etc.)" },
                  { id: "c", text: "The colors of your face" },
                  { id: "d", text: "Your facial expressions" }
                ],
                correct: "b",
                explanation: "Facial landmarks are specific points (68-468 of them!) that AI maps onto your face. They help the AI know exactly where your eyes, nose, mouth, and other features are! 📍😊"
              }
            ]
          }
        },
        {
          id: "3-3",
          title: "Self-Driving Cars — AI Eyes on the Road",
          content: {
            description: "How can a car drive itself? It uses AI eyes to see the road! 🚗🤖",
            sections: [
              { type: "heading", level: 2, content: "🚗 Cars That Drive Themselves!" },
              { type: "text", content: "Imagine sitting in a car that drives you to school while you relax, do homework, or watch videos. That's the dream of **self-driving cars** (also called autonomous vehicles)!\n\nCompanies like **Tesla, Waymo** (Google), and **Cruise** are building cars that use AI to drive. But how do they work?" },
              { type: "heading", level: 2, content: "👁️ How Self-Driving Cars See" },
              { type: "text", content: "Self-driving cars have a LOT of sensors — like super-powered robot eyes:\n\n🎥 **Cameras** (8+) — See in color, read signs, spot traffic lights\n📡 **LIDAR** — Shoots millions of laser beams to create a 3D map\n📻 **Radar** — Detects objects and measures their speed\n🛰️ **GPS** — Knows exactly where the car is on Earth\n\nAll this data flows into the AI brain, which combines everything to create a complete picture of the road!" },
              { type: "heading", level: 2, content: "🧠 The AI Brain Makes Decisions" },
              { type: "text", content: "Every second, the AI must:\n\n1. **Detect** — What's around me? (cars, people, signs, lanes) 🔍\n2. **Predict** — What will that pedestrian do next? 🚶\n3. **Plan** — What's the safest path to take? 🗺️\n4. **Act** — Steer, brake, or accelerate! 🎮\n\nIt does all of this in **milliseconds** — faster than any human could!" },
              { type: "tip", content: "🌟 **Fun Fact!** A self-driving car generates about 4 TERABYTES of data per day. That's like downloading 1,000 movies! All this data helps the AI learn to drive better. 📊" },
              { type: "heading", level: 2, content: "🏆 Levels of Self-Driving" },
              { type: "list", items: [
                "**Level 0** — No automation (old-school driving) 🚙",
                "**Level 1** — AI helps with ONE thing (cruise control) 🔵",
                "**Level 2** — AI steers AND controls speed (Tesla Autopilot) 🟢",
                "**Level 3** — AI handles most driving, human as backup 🟡",
                "**Level 4** — AI drives itself in most situations! 🟠",
                "**Level 5** — Full self-driving, no steering wheel needed! 🔴"
              ]},
              { type: "text", content: "Most cars today are at Level 2-3. We're still working toward Level 5!" },
              { type: "warning", content: "⚠️ **Good to Know!** Self-driving cars are NOT perfect yet. They can struggle with unusual situations like construction zones, heavy rain, or unexpected objects on the road. That's why a human driver should always be ready to take over!" },
              {
                type: "quiz",
                question: "Which sensor shoots lasers to create a 3D map of the road?",
                options: [
                  { id: "a", text: "Camera" },
                  { id: "b", text: "GPS" },
                  { id: "c", text: "LIDAR" },
                  { id: "d", text: "Speedometer" }
                ],
                correct: "c",
                explanation: "LIDAR (Light Detection and Ranging) shoots millions of tiny laser beams and measures how they bounce back to create a detailed 3D map of everything around the car! 📡"
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "💬 AI That Can Talk & Write",
      color: "#06B6D4",
      lessons: [
        {
          id: "4-1",
          title: "Chatbots — AI That Talks Back",
          content: {
            description: "How do chatbots understand what you type and respond? Let's find out! 💬🤖",
            sections: [
              { type: "heading", level: 2, content: "💬 What Are Chatbots?" },
              { type: "text", content: "A **chatbot** is an AI program that can have a conversation with you through text (or sometimes voice). You've probably used one without even knowing it!\n\nChatbots are EVERYWHERE:\n• Customer service on websites 🛒\n• Siri, Alexa, Google Assistant 📱\n• ChatGPT and other AI assistants 🤖\n• In-game characters in video games 🎮" },
              { type: "heading", level: 2, content: "🧠 How Do Chatbots Understand You?" },
              { type: "text", content: "When you type a message, the chatbot goes through several steps:\n\n1. **Read your message** — Convert text into numbers the AI can understand\n2. **Understand intent** — Figure out what you WANT (asking a question? making a request?)\n3. **Find the answer** — Search its knowledge or generate a response\n4. **Reply** — Convert the answer back into natural language\n\nThis whole process happens in less than a second! ⚡" },
              { type: "heading", level: 2, content: "📊 Simple vs Smart Chatbots" },
              { type: "text", content: "**Simple chatbots** (rule-based):\n• Follow a script with if/then rules\n• \"If user says 'hello', respond with 'Hi there!'\"\n• Can only handle planned conversations\n\n**Smart chatbots** (AI-powered):\n• Use machine learning to understand language\n• Can handle unexpected questions\n• Learn and improve over time\n• ChatGPT is a super smart chatbot!" },
              { type: "tip", content: "🌟 **Fun Fact!** The first chatbot ever made was called ELIZA (1966). It pretended to be a therapist and just repeated your words back as questions. \"I feel sad\" → \"Why do you feel sad?\" Simple, but people loved it!" },
              { type: "code", language: "python", filename: "simple_chatbot.py", code: "# Build a simple chatbot!\n\nprint(\"🤖 SimpleBot v1.0\")\nprint(\"Type 'bye' to exit\")\nprint(\"=\" * 30)\n\nresponses = {\n    \"hello\": \"Hi there! How are you? 👋\",\n    \"how are you\": \"I'm great, thanks for asking! 😊\",\n    \"what is ai\": \"AI is when computers learn to think! 🧠\",\n    \"tell me a joke\": \"Why did the AI cross the road? To get to the other dataset! 😂\",\n    \"bye\": \"Goodbye! Have an awesome day! 🌟\"\n}\n\nprint(\"\\nYou: hello\")\nprint(f\"Bot: {responses['hello']}\")\nprint(\"\\nYou: tell me a joke\")\nprint(f\"Bot: {responses['tell me a joke']}\")\nprint(\"\\nYou: bye\")\nprint(f\"Bot: {responses['bye']}\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Chatbots don't actually UNDERSTAND what you're saying the way humans do. They're really good at predicting what words should come next, but they don't have feelings or real understanding!" },
              {
                type: "quiz",
                question: "What was the first chatbot ever created?",
                options: [
                  { id: "a", text: "ChatGPT" },
                  { id: "b", text: "Siri" },
                  { id: "c", text: "ELIZA" },
                  { id: "d", text: "Alexa" }
                ],
                correct: "c",
                explanation: "ELIZA was created in 1966 by Joseph Weizenbaum at MIT. It was a simple chatbot that pretended to be a therapist! 🏥"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "How ChatGPT Works",
          content: {
            description: "ChatGPT is one of the most famous AI tools ever! Let's peek under the hood. 🔧🤖",
            sections: [
              { type: "heading", level: 2, content: "🤖 Meet ChatGPT" },
              { type: "text", content: "ChatGPT is a **Large Language Model** (LLM) — a super-powered AI that's really, REALLY good at understanding and generating text. It was created by **OpenAI** and launched in November 2022.\n\nBut how does it work? Let's break it down in simple terms!" },
              { type: "heading", level: 2, content: "📚 Step 1: Reading the Internet" },
              { type: "text", content: "Before ChatGPT could talk to you, it had to read A LOT. It was trained on a huge chunk of the internet:\n\n• Books 📚\n• Websites 🌐\n• Articles 📰\n• Wikipedia 📖\n• Code repositories 💻\n\nThat's hundreds of billions of words! Imagine reading every book in every library in the world — that's what ChatGPT did (sort of)." },
              { type: "heading", level: 2, content: "🧠 Step 2: Learning Word Patterns" },
              { type: "text", content: "ChatGPT didn't memorize everything it read. Instead, it learned **patterns** about how words and sentences work.\n\nIt learned things like:\n• After \"Once upon a\" → \"time\" usually comes next\n• After \"The capital of France is\" → \"Paris\" is the most likely word\n• Sad stories use different words than happy stories\n\nIt's like the world's best autocomplete! Your phone predicts the next word — ChatGPT does the same thing, but a billion times better." },
              { type: "heading", level: 2, content: "✍️ Step 3: Generating Responses" },
              { type: "text", content: "When you ask ChatGPT a question, here's what happens:\n\n1. It reads your message\n2. It predicts the most likely next word\n3. Then the next word after that\n4. And the next...\n5. Until it forms a complete answer!\n\nIt generates text **one word at a time**, picking the best word each step. That's why sometimes you can see it \"typing\" — it's literally building the answer word by word!" },
              { type: "tip", content: "🌟 **Fun Fact!** GPT stands for \"Generative Pre-trained Transformer.\" Generative = it creates text. Pre-trained = it learned before you used it. Transformer = the type of AI architecture (invented in 2017)." },
              { type: "heading", level: 2, content: "🚫 What ChatGPT CAN'T Do" },
              { type: "list", items: [
                "It doesn't **actually know** things — it predicts likely answers",
                "It can **make things up** (called \"hallucinations\") 🤥",
                "It doesn't **browse the internet** in real-time (unless given tools)",
                "It doesn't **have feelings** or consciousness 🧘",
                "It can be **wrong** — always double-check important info! ✅"
              ]},
              { type: "warning", content: "⚠️ **Good to Know!** ChatGPT sometimes makes up facts that sound really convincing but are totally wrong. This is called a \"hallucination.\" Always verify important information from trusted sources!" },
              { type: "code", language: "python", filename: "how_gpt_works.py", code: "# Simplified: How ChatGPT generates text\n\nprint(\"🤖 How ChatGPT Works (Simplified)\")\nprint(\"=\" * 35)\n\n# ChatGPT predicts the next word\nprompt = \"The sky is\"\npredictions = {\n    \"blue\": 0.65,\n    \"beautiful\": 0.15,\n    \"clear\": 0.10,\n    \"dark\": 0.05,\n    \"falling\": 0.05\n}\n\nprint(f\"\\nPrompt: '{prompt} ___'\")\nprint(\"\\n📊 AI's predictions for next word:\")\nfor word, prob in predictions.items():\n    bar = \"█\" * int(prob * 40)\n    print(f\"  '{word}': {bar} {prob*100:.0f}%\")\n\nprint(\"\\n🎯 AI picks: 'blue' (highest probability!)\")\nprint(f\"Result: '{prompt} blue'\")\nprint(\"\\n💡 Then it predicts the NEXT word, and so on!\")" },
              {
                type: "quiz",
                question: "How does ChatGPT generate its responses?",
                options: [
                  { id: "a", text: "It searches the internet for answers" },
                  { id: "b", text: "It predicts the most likely next word, one at a time" },
                  { id: "c", text: "It copies answers from a database" },
                  { id: "d", text: "A human types the responses secretly" }
                ],
                correct: "b",
                explanation: "ChatGPT generates text by predicting the most likely next word, then the next, and the next — building the response one word at a time! It's like super-advanced autocomplete. ✍️"
              }
            ]
          }
        },
        {
          id: "4-3",
          title: "AI Writing Stories & Poems",
          content: {
            description: "AI can write stories, poems, and even songs! Let's explore creative AI. ✍️📖",
            sections: [
              { type: "heading", level: 2, content: "📖 AI as a Creative Writer" },
              { type: "text", content: "AI can now write things that are surprisingly creative:\n\n• **Stories** — complete with characters, plot twists, and endings 📚\n• **Poems** — with rhymes, metaphors, and feelings 🎭\n• **Songs** — lyrics that actually make sense 🎵\n• **Jokes** — some actually funny ones! 😂\n• **Scripts** — for plays, movies, and YouTube videos 🎬\n\nBut is AI actually \"creative\"? That's a big question!" },
              { type: "heading", level: 2, content: "🎨 How AI Writes Creatively" },
              { type: "text", content: "When AI writes a story, it doesn't have imagination like you do. Instead, it:\n\n1. **Learned patterns** from millions of stories it read during training\n2. **Combines patterns** in new ways when you give it a prompt\n3. **Uses randomness** to make things surprising and original\n\nIt's like a chef who learned thousands of recipes — they can mix ingredients in new ways to create dishes nobody has tasted before! 👨‍🍳" },
              { type: "tip", content: "🌟 **Fun Fact!** In 2023, an AI-written book briefly appeared on Amazon's bestseller list! Some authors are using AI as a brainstorming partner to help them write faster." },
              { type: "heading", level: 2, content: "🤔 Is AI Really Creative?" },
              { type: "text", content: "This is a big debate! Some people say:\n\n**\"Yes, AI is creative!\"** 🎨\n• It combines ideas in ways nobody has before\n• Its output can surprise and inspire people\n• Creativity might just be pattern mixing\n\n**\"No, AI isn't creative!\"** 🚫\n• It doesn't have original ideas or feelings\n• It can only remix what humans already created\n• True creativity needs consciousness and intention\n\nWhat do YOU think? 🤔" },
              { type: "code", language: "python", filename: "ai_poet.py", code: "# AI Poetry Generator (simplified!)\n\nimport random\n\nprint(\"🎭 AI Poetry Generator\")\nprint(\"=\" * 30)\n\n# Word banks learned from reading lots of poems\nadjectives = [\"bright\", \"gentle\", \"magical\", \"golden\", \"dancing\"]\nnouns = [\"stars\", \"dreams\", \"flowers\", \"moonlight\", \"ocean\"]\nverbs = [\"sparkle\", \"whisper\", \"glow\", \"dance\", \"sing\"]\n\nprint(\"\\n📝 Generating a poem...\\n\")\n\nlines = [\n    f\"The {adjectives[0]} {nouns[0]} {verbs[0]} tonight,\",\n    f\"Like {adjectives[1]} {nouns[1]} taking flight.\",\n    f\"With {adjectives[2]} {nouns[2]} all around,\",\n    f\"The {adjectives[3]} {nouns[3]} makes no sound.\"\n]\n\nfor line in lines:\n    print(f\"  {line}\")\n\nprint(\"\\n✨ Not bad for a robot poet!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** If you use AI to help write a school essay, you should tell your teacher! Many schools have rules about using AI for homework. It's best to use AI as a helper, not to do all the work for you." },
              {
                type: "quiz",
                question: "How does AI create 'original' stories and poems?",
                options: [
                  { id: "a", text: "It has a vivid imagination" },
                  { id: "b", text: "It copies stories word-for-word from books" },
                  { id: "c", text: "It combines patterns learned from millions of texts in new ways" },
                  { id: "d", text: "Human writers secretly help it" }
                ],
                correct: "c",
                explanation: "AI creates by combining patterns it learned from reading millions of texts. It mixes these patterns in new ways, kind of like remixing songs to create something new! 🎨"
              }
            ]
          }
        },
        {
          id: "4-4",
          title: "Voice Assistants — Hey Siri, Hey Alexa!",
          content: {
            description: "How do voice assistants understand what you say? The answer is amazing AI! 🗣️🤖",
            sections: [
              { type: "heading", level: 2, content: "🗣️ Talking to Your Devices" },
              { type: "text", content: "\"Hey Siri, what's the weather?\"\n\"Alexa, play my favorite song!\"\n\"OK Google, set a timer for 5 minutes!\"\n\nVoice assistants use THREE types of AI working together:\n\n1. **Speech Recognition** — Convert your voice into text (\"hearing\") 👂\n2. **Natural Language Processing** — Understand what you mean (\"thinking\") 🧠\n3. **Text-to-Speech** — Convert the answer into spoken words (\"speaking\") 🔊" },
              { type: "heading", level: 2, content: "👂 How AI Hears You" },
              { type: "text", content: "When you speak, your voice creates **sound waves** — vibrations in the air. The microphone captures these vibrations and turns them into numbers.\n\nThe AI then:\n1. Removes background noise (dog barking, TV, traffic) 🔇\n2. Breaks your speech into tiny sound chunks 🧩\n3. Matches each chunk to letters and words 🔤\n4. Combines everything into a sentence 📝\n\nThis all happens in less than half a second! ⚡" },
              { type: "tip", content: "🌟 **Fun Fact!** Modern voice AI can understand speech with over 95% accuracy — about as well as a human listener! It can even understand different accents, mumbly speech, and noisy rooms." },
              { type: "heading", level: 2, content: "🔊 How AI Talks Back" },
              { type: "text", content: "**Text-to-Speech** (TTS) converts text into natural-sounding speech. Early TTS sounded very robotic 🤖, but modern AI voices sound almost human!\n\nThe AI learns to:\n• Pause at commas and periods 🛑\n• Go up at the end of questions ❓\n• Show emotion (excited, calm, concerned) 🎭\n• Pronounce words correctly in different languages 🌍" },
              { type: "code", language: "python", filename: "voice_assistant.py", code: "# How Voice Assistants Process Speech\n\nprint(\"🗣️ Voice Assistant Pipeline\")\nprint(\"=\" * 35)\n\n# Step 1: Speech to Text\nprint(\"\\n👂 Step 1: Speech Recognition\")\nprint('   Sound waves → \"What is the weather today\"')\n\n# Step 2: Understand Intent\nprint(\"\\n🧠 Step 2: Understanding\")\nprint('   Intent: GET_WEATHER')\nprint('   Date: today')\nprint('   Location: current')\n\n# Step 3: Get Answer\nprint(\"\\n🔍 Step 3: Finding Answer\")\nprint('   Weather API → Sunny, 72°F')\n\n# Step 4: Generate Response\nprint(\"\\n💬 Step 4: Creating Response\")\nprint('   \"It\\'s sunny and 72 degrees today!\"')\n\n# Step 5: Text to Speech\nprint(\"\\n🔊 Step 5: Speaking\")\nprint('   Text → Natural voice output')\nprint('   🤖 \"It\\'s sunny and 72 degrees today!\" 🌞')" },
              { type: "warning", content: "⚠️ **Good to Know!** Voice assistants are always \"listening\" for their wake word (\"Hey Siri\", \"Alexa\"). This means there's a microphone always on. Most companies say they don't record everything, but it's important to know your devices are listening!" },
              {
                type: "quiz",
                question: "What are the THREE types of AI that voice assistants use?",
                options: [
                  { id: "a", text: "Camera, GPS, and Bluetooth" },
                  { id: "b", text: "Speech Recognition, Language Understanding, and Text-to-Speech" },
                  { id: "c", text: "Reading, Writing, and Math" },
                  { id: "d", text: "WiFi, Data, and Battery" }
                ],
                correct: "b",
                explanation: "Voice assistants combine Speech Recognition (hearing), Natural Language Processing (understanding), and Text-to-Speech (speaking) to have conversations with you! 🗣️🧠🔊"
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "🎨 AI That Creates",
      color: "#22C55E",
      lessons: [
        {
          id: "5-1",
          title: "AI Art — Making Pictures with Words",
          content: {
            description: "Type a description and AI creates a picture! How does this magic work? 🖼️✨",
            sections: [
              { type: "heading", level: 2, content: "🖼️ From Words to Pictures" },
              { type: "text", content: "Imagine typing \"a cute robot riding a unicorn through a rainbow galaxy\" and getting a beautiful image in seconds! That's exactly what **AI image generators** like **DALL-E, Midjourney, and Stable Diffusion** can do.\n\nThese tools are called **text-to-image AI** — you describe what you want in words (called a \"prompt\"), and the AI creates it!" },
              { type: "heading", level: 2, content: "🧠 How AI Creates Images" },
              { type: "text", content: "Here's the simplified version:\n\n1. **Training**: The AI studied millions of images paired with descriptions\n2. **Learning**: It learned connections — \"sunset\" = warm colors, \"cat\" = furry with pointy ears\n3. **Creating**: When you give it a prompt, it starts with random noise (like TV static) and gradually shapes it into a matching image\n4. **Refining**: It makes the image clearer and more detailed step by step\n\nIt's like sculpting — starting with a blob of clay and chiseling it into a masterpiece! 🗿" },
              { type: "tip", content: "🌟 **Fun Fact!** The process AI uses is called \"diffusion\" — it literally starts with pure noise and removes the noise bit by bit until a picture appears. It's like magic developing photos in reverse! 📸" },
              { type: "heading", level: 2, content: "✍️ The Art of Prompt Writing" },
              { type: "text", content: "Better prompts = better images! Here are tips:\n\n• **Be specific**: \"A golden retriever\" → \"A fluffy golden retriever puppy playing in autumn leaves\"\n• **Add style**: \"...in watercolor style\" or \"...in pixel art\"\n• **Set the mood**: \"...in warm sunset lighting\" or \"...in a mysterious dark forest\"\n• **Add details**: colors, textures, camera angle, time of day" },
              { type: "code", language: "python", filename: "ai_art_prompts.py", code: "# Writing great AI art prompts!\n\nprint(\"🎨 AI Art Prompt Builder\")\nprint(\"=\" * 30)\n\n# Build a prompt step by step\nsubject = \"a friendly robot\"\naction = \"reading a book\"\nsetting = \"in a cozy library\"\nstyle = \"Studio Ghibli animation style\"\nlighting = \"warm golden afternoon light\"\n\nprompt = f\"{subject} {action} {setting}, {style}, {lighting}\"\n\nprint(f\"\\n📝 Your prompt:\")\nprint(f'   \"{prompt}\"')\n\nprint(\"\\n🖼️ This would create a beautiful image of:\")\nprint(\"   A cute robot in a Ghibli-style library!\")\nprint(\"\\n💡 Tips for better prompts:\")\nprint(\"   ✅ Be specific and descriptive\")\nprint(\"   ✅ Include an art style\")\nprint(\"   ✅ Describe the lighting/mood\")\nprint(\"   ❌ Don't be too vague\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI art has created big debates. Some artists worry that AI was trained on their work without permission. It's important to respect artists and understand that AI art raises real ethical questions about creativity and ownership." },
              {
                type: "quiz",
                question: "How does AI generate images from text descriptions?",
                options: [
                  { id: "a", text: "It searches the internet for matching photos" },
                  { id: "b", text: "It starts with noise and gradually shapes it into an image" },
                  { id: "c", text: "It takes a screenshot of a 3D model" },
                  { id: "d", text: "It pastes together pieces of existing photos" }
                ],
                correct: "b",
                explanation: "AI image generation works through 'diffusion' — starting with random noise and gradually removing it to reveal an image that matches your text description! ✨🖼️"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "AI Music — Robots That Compose",
          content: {
            description: "AI can compose music, create beats, and even sing! Let's listen up! 🎵🤖",
            sections: [
              { type: "heading", level: 2, content: "🎵 AI as a Musician" },
              { type: "text", content: "Just like AI can write text and create images, it can now compose music! AI music tools can:\n\n• Create complete songs from a text description 🎶\n• Generate background music for videos 🎬\n• Create beats and instrumentals 🥁\n• Compose music in any genre or style 🎸\n• Even clone voices to \"sing\" songs 🎤" },
              { type: "heading", level: 2, content: "🧠 How AI Composes Music" },
              { type: "text", content: "AI music works similarly to AI text:\n\n1. **Training**: AI listened to millions of songs across all genres\n2. **Learning patterns**: It learned that certain notes sound good together (chords), rhythms create different moods, and verses lead to choruses\n3. **Creating**: Given a prompt like \"happy pop song with acoustic guitar,\" it generates music that matches\n\nSome popular AI music tools: **Suno, Udio, AIVA, and Mubert**" },
              { type: "tip", content: "🌟 **Fun Fact!** In 2023, an AI-generated song imitating Drake and The Weeknd went viral with millions of plays before being taken down. It sounded SO real that many people couldn't tell it was AI! 🎤" },
              { type: "heading", level: 2, content: "🎼 What Makes Music... Music?" },
              { type: "text", content: "To understand AI music, let's break down what music IS:\n\n• **Melody** — The tune you hum 🎵\n• **Harmony** — Multiple notes played together (chords) 🎹\n• **Rhythm** — The beat and timing 🥁\n• **Tempo** — How fast or slow ⏱️\n• **Dynamics** — Loud vs quiet parts 🔊\n• **Lyrics** — The words (if any) 📝\n\nAI learned the \"rules\" of how these elements work together by analyzing tons of songs!" },
              { type: "code", language: "python", filename: "ai_music.py", code: "# AI Music Basics\n\nprint(\"🎵 AI Music Composer\")\nprint(\"=\" * 30)\n\n# Musical notes\nnotes = [\"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\"]\n\n# Simple melody pattern\nmelody = [\"C\", \"E\", \"G\", \"E\", \"C\", \"D\", \"F\", \"D\"]\n\nprint(\"\\n🎹 Generated Melody:\")\nprint(\"  \", \" → \".join(melody))\n\n# Mood mapping\nmoods = {\n    \"happy\": {\"key\": \"C Major\", \"tempo\": \"120 BPM\", \"emoji\": \"😊\"},\n    \"sad\": {\"key\": \"A Minor\", \"tempo\": \"70 BPM\", \"emoji\": \"😢\"},\n    \"epic\": {\"key\": \"D Minor\", \"tempo\": \"140 BPM\", \"emoji\": \"🔥\"},\n    \"chill\": {\"key\": \"G Major\", \"tempo\": \"90 BPM\", \"emoji\": \"😌\"}\n}\n\nprint(\"\\n🎭 Mood → Music Settings:\")\nfor mood, settings in moods.items():\n    print(f\"  {settings['emoji']} {mood}: {settings['key']}, {settings['tempo']}\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI-generated music raises questions about copyright. If AI was trained on a musician's songs, who owns the AI-created music? These are tricky legal questions being debated right now!" },
              {
                type: "quiz",
                question: "How does AI learn to compose music?",
                options: [
                  { id: "a", text: "It takes music lessons from human teachers" },
                  { id: "b", text: "It analyzes millions of songs to learn musical patterns" },
                  { id: "c", text: "It randomly mashes notes together" },
                  { id: "d", text: "It can only copy existing songs" }
                ],
                correct: "b",
                explanation: "AI learns to compose by analyzing patterns in millions of songs — learning which notes sound good together, common rhythms, song structures, and how different genres work! 🎶"
              }
            ]
          }
        },
        {
          id: "5-3",
          title: "AI Video Games — Smart Characters",
          content: {
            description: "The enemies and characters in your favorite games use AI! Let's see how. 🎮🧠",
            sections: [
              { type: "heading", level: 2, content: "🎮 AI in Your Favorite Games" },
              { type: "text", content: "Every time you play a video game, you're interacting with AI! Those enemies that chase you, NPCs (Non-Player Characters) that talk to you, and opponents that adapt to your strategy — they're all powered by AI.\n\nLet's look at how different games use AI:" },
              { type: "heading", level: 3, content: "🧟 Enemy AI" },
              { type: "text", content: "In games like **Minecraft**, **Fortnite**, and **Zelda**, enemy AI controls how monsters and opponents behave:\n\n• **Patrol routes** — Enemies walk predetermined paths 🚶\n• **Detection** — They \"see\" or \"hear\" your character 👀\n• **Chase behavior** — They follow you when detected 🏃\n• **Attack patterns** — They have different attacks and strategies ⚔️\n• **Difficulty scaling** — Enemies get harder as you level up 📈" },
              { type: "heading", level: 3, content: "🗣️ NPC AI" },
              { type: "text", content: "NPCs are the characters you talk to in games. Traditional NPCs have scripted dialogue (pre-written conversations), but NEW games are using ChatGPT-style AI to let NPCs have real conversations!\n\nImagine asking a game character ANY question and getting a unique, unscripted answer. That's the future of gaming! 🚀" },
              { type: "heading", level: 3, content: "🏗️ World Generation" },
              { type: "text", content: "Games like **Minecraft** and **No Man's Sky** use AI to generate entire worlds!\n\n• **Minecraft** creates random terrain, caves, and biomes using procedural generation\n• **No Man's Sky** generated 18 QUINTILLION unique planets (that's 18 with 18 zeros!) 🪐\n• Each world is different every time you play!" },
              { type: "tip", content: "🌟 **Fun Fact!** The ghosts in Pac-Man each have different AI personalities! Blinky chases directly, Pinky tries to ambush, Inky is unpredictable, and Clyde is random. Game designers gave each ghost its own strategy!" },
              { type: "code", language: "python", filename: "game_ai.py", code: "# Simple Game AI - Enemy Behavior\n\nprint(\"🎮 Game AI Simulator\")\nprint(\"=\" * 30)\n\nplayer_pos = 5\nenemy_pos = 0\nenemy_health = 100\n\nprint(f\"\\n🦸 Player at position: {player_pos}\")\nprint(f\"🧟 Enemy at position: {enemy_pos}\")\n\n# Enemy AI decision making\nfor turn in range(1, 4):\n    distance = abs(player_pos - enemy_pos)\n    \n    print(f\"\\n--- Turn {turn} ---\")\n    print(f\"📏 Distance to player: {distance}\")\n    \n    if distance > 3:\n        action = \"🏃 Chase! (Moving closer)\"\n        enemy_pos += 2\n    elif distance > 1:\n        action = \"🏹 Ranged attack!\"\n    else:\n        action = \"⚔️ Melee attack!\"\n    \n    print(f\"🧟 AI decides: {action}\")\n    print(f\"🧟 Enemy now at: {enemy_pos}\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Game companies are starting to use AI to generate game content (levels, quests, dialogue). While this is exciting, some worry it might replace human game designers. The best games will probably always need human creativity + AI tools together!" },
              {
                type: "quiz",
                question: "In Pac-Man, what's special about the ghost AI?",
                options: [
                  { id: "a", text: "They all behave exactly the same" },
                  { id: "b", text: "Each ghost has a different AI personality and strategy" },
                  { id: "c", text: "They move randomly with no AI" },
                  { id: "d", text: "Players control the ghosts" }
                ],
                correct: "b",
                explanation: "Each Pac-Man ghost has unique AI! Blinky chases directly, Pinky ambushes, Inky is unpredictable, and Clyde is random. This variety makes the game challenging and fun! 👻🎮"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "🔍 AI Detective — Pattern Finding",
      color: "#FBBF24",
      lessons: [
        {
          id: "6-1",
          title: "Spot the Pattern!",
          content: {
            description: "AI is the ultimate pattern detective! Let's learn how classification works. 🔍🕵️",
            sections: [
              { type: "heading", level: 2, content: "🕵️ AI: The Pattern Detective" },
              { type: "text", content: "One of AI's superpowers is finding patterns in data that humans might miss. This is called **classification** — sorting things into categories.\n\nYour brain does this all the time! When you see an animal, your brain instantly classifies it: \"That's a dog... that's a cat... that's a bird.\" AI does the same thing, but with ALL kinds of data!" },
              { type: "heading", level: 2, content: "📊 How Classification Works" },
              { type: "text", content: "Here's the simple version:\n\n1. **Collect examples** — Gather lots of labeled data 📦\n2. **Find features** — What makes each category different? 🔍\n3. **Draw boundaries** — Learn the rules that separate categories 📏\n4. **Classify new items** — Sort new, unseen items into categories! ✅\n\nExample: Is this email **spam** or **not spam**?\n• Has lots of exclamation marks!!! → probably spam 📧\n• From someone you know → probably not spam 👤\n• Promises free money → definitely spam! 💰🚫" },
              { type: "tip", content: "🌟 **Fun Fact!** Your email's spam filter classifies hundreds of emails per day. Gmail's AI blocks about 10 million spam emails every MINUTE across all users! 📧🛡️" },
              { type: "heading", level: 2, content: "🎯 Types of Classification" },
              { type: "list", items: [
                "**Binary** — Two categories: Yes/No, Spam/Not Spam, Cat/Dog 🔀",
                "**Multi-class** — Many categories: Dog breed identification (200+ breeds!) 🐕",
                "**Multi-label** — Multiple labels per item: A photo can be \"outdoor,\" \"sunset,\" AND \"beach\" 🏖️"
              ]},
              { type: "code", language: "python", filename: "pattern_finder.py", code: "# AI Pattern Finder!\n\nprint(\"🔍 AI Classification Demo\")\nprint(\"=\" * 30)\n\n# Classify fruits by features\nfruits = [\n    {\"color\": \"red\", \"shape\": \"round\", \"size\": \"small\"},\n    {\"color\": \"yellow\", \"shape\": \"long\", \"size\": \"medium\"},\n    {\"color\": \"orange\", \"shape\": \"round\", \"size\": \"medium\"},\n]\n\nprint(\"\\n📊 Training data:\")\nprint(\"  Red + Round + Small = Apple 🍎\")\nprint(\"  Yellow + Long + Medium = Banana 🍌\")\nprint(\"  Orange + Round + Medium = Orange 🍊\")\n\nprint(\"\\n🤔 New fruit: Green + Round + Large\")\nprint(\"🤖 AI predicts: Watermelon! 🍉\")\n\nprint(\"\\n🤔 New fruit: Purple + Round + Small\")\nprint(\"🤖 AI predicts: Grape! 🍇\")\nprint(\"\\n✅ Pattern matching at work!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI classification can make mistakes, especially with things it hasn't seen before. A classifier trained only on cats and dogs might not know what to do with a hamster! It would try to classify it as one or the other. 🐹" },
              {
                type: "quiz",
                question: "What is 'classification' in AI?",
                options: [
                  { id: "a", text: "Teaching AI to count numbers" },
                  { id: "b", text: "Sorting items into categories based on patterns" },
                  { id: "c", text: "Making AI more classified (secret)" },
                  { id: "d", text: "Organizing files on a computer" }
                ],
                correct: "b",
                explanation: "Classification is when AI learns to sort items into categories by finding patterns in the data — like sorting emails into 'spam' and 'not spam'! 🔍📊"
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "Recommendation Systems — 'You Might Also Like...'",
          content: {
            description: "How does Netflix know what shows you'll love? AI recommendation magic! 🎬✨",
            sections: [
              { type: "heading", level: 2, content: "🎬 How Does Netflix Know You So Well?" },
              { type: "text", content: "Have you ever noticed that Netflix, YouTube, and Spotify seem to know EXACTLY what you want to watch or listen to? That's because they use **recommendation systems** — AI that predicts what you'll enjoy based on patterns!\n\nAbout **80%** of what people watch on Netflix comes from recommendations. The AI is basically choosing most of your entertainment! 🍿" },
              { type: "heading", level: 2, content: "🧠 How Recommendations Work" },
              { type: "heading", level: 3, content: "Method 1: \"People Like You\"" },
              { type: "text", content: "**Collaborative Filtering** finds people with similar tastes:\n\n• You liked movies A, B, and C\n• Sarah also liked movies A, B, and C\n• Sarah also liked movie D\n• AI thinks: \"You'll probably like movie D too!\"\n\nIt's like getting recommendations from a friend who shares your taste! 🤝" },
              { type: "heading", level: 3, content: "Method 2: \"Similar Content\"" },
              { type: "text", content: "**Content-Based Filtering** looks at what you've enjoyed:\n\n• You watched 3 superhero movies → Recommend more superhero movies! 🦸\n• You listened to pop music → Suggest similar pop artists! 🎵\n• You read science articles → Show more science content! 🔬" },
              { type: "tip", content: "🌟 **Fun Fact!** Netflix's recommendation AI saves the company about $1 BILLION per year by keeping subscribers happy! If people can always find something they love, they don't cancel. 💰" },
              { type: "heading", level: 2, content: "🔄 The Filter Bubble Problem" },
              { type: "text", content: "There's a downside to recommendation AI: **filter bubbles**.\n\nIf you only watch comedy videos, the AI will only show you comedy. You never discover new genres! You get stuck in a \"bubble\" of similar content.\n\nThat's why it's important to:\n• Try new things occasionally 🌟\n• Search for different topics 🔍\n• Don't let AI choose everything for you! 🎯" },
              { type: "code", language: "python", filename: "recommendations.py", code: "# How recommendation systems work!\n\nprint(\"🎬 Movie Recommendation Engine\")\nprint(\"=\" * 35)\n\n# Your watch history\nmy_movies = [\"Spider-Man\", \"Iron Man\", \"Batman\"]\n\nprint(f\"📺 Your history: {my_movies}\")\nprint(\"🏷️ Genre detected: Superhero!\")\n\n# Find similar movies\nrecommendations = [\n    \"🦸 Thor: Love and Thunder\",\n    \"🦇 The Batman (2022)\",\n    \"🕷️ Into the Spider-Verse\",\n    \"💥 Black Panther\"\n]\n\nprint(\"\\n✨ Recommended for you:\")\nfor i, movie in enumerate(recommendations, 1):\n    print(f\"  {i}. {movie}\")\n\nprint(\"\\n💡 Based on: You love superhero movies!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Recommendations are designed to keep you watching/scrolling. It's important to set time limits! Just because AI suggests \"one more video\" doesn't mean you should watch it. Take breaks! 🧘" },
              {
                type: "quiz",
                question: "What is a 'filter bubble'?",
                options: [
                  { id: "a", text: "A bubble that filters water" },
                  { id: "b", text: "When AI only shows you content similar to what you already like" },
                  { id: "c", text: "A type of video filter" },
                  { id: "d", text: "A privacy setting on your phone" }
                ],
                correct: "b",
                explanation: "A filter bubble is when recommendation AI keeps showing you the same type of content, so you never discover new and different things. Try to break out of your bubble! 🫧"
              }
            ]
          }
        },
        {
          id: "6-3",
          title: "Spam Filters — AI Protecting Your Inbox",
          content: {
            description: "AI protects you from annoying and dangerous emails every day! Let's see how. 📧🛡️",
            sections: [
              { type: "heading", level: 2, content: "📧 What is Spam?" },
              { type: "text", content: "**Spam** is unwanted email — junk mail, scam messages, and phishing attempts that clog up your inbox. Without AI spam filters, about **85%** of all emails would be spam! 😱\n\nThat means for every real email you get, there are about 5-6 spam emails that the AI quietly blocks!" },
              { type: "heading", level: 2, content: "🔍 How Spam Filters Work" },
              { type: "text", content: "AI spam filters look at many clues to decide if an email is spam:\n\n**Red flags 🚩:**\n• Unusual sender address (like xyz123@scam.com)\n• Subject line in ALL CAPS or with lots of !!!\n• Contains words like \"FREE\", \"WINNER\", \"URGENT!!!\"\n• Includes suspicious links\n• Asks for personal information\n• Poor grammar and spelling\n• Too good to be true offers\n\nThe AI weighs ALL of these factors together to make a decision." },
              { type: "tip", content: "🌟 **Fun Fact!** The word \"spam\" for junk email comes from a Monty Python comedy sketch where everything on a restaurant menu contains Spam (the canned meat). \"Spam, spam, spam, spam!\" 🥫😂" },
              { type: "heading", level: 2, content: "🧠 Training the Spam Filter" },
              { type: "text", content: "Every time you click \"Report Spam\" or move a spam email out of spam, you're TRAINING the AI!\n\n• **Mark as spam** → AI learns \"emails like this are unwanted\" ❌\n• **Not spam** → AI learns \"emails like this are okay\" ✅\n\nMillions of people doing this every day makes the spam filter smarter and smarter!" },
              { type: "code", language: "python", filename: "spam_filter.py", code: "# Simple Spam Detector!\n\nprint(\"📧 AI Spam Filter\")\nprint(\"=\" * 30)\n\ndef check_spam(email):\n    spam_score = 0\n    spam_words = [\"free\", \"winner\", \"click here\", \"urgent\", \"!!!\"]\n    \n    for word in spam_words:\n        if word in email.lower():\n            spam_score += 25\n    \n    if spam_score >= 50:\n        return \"🚫 SPAM!\"\n    elif spam_score >= 25:\n        return \"⚠️ Suspicious\"\n    else:\n        return \"✅ Safe\"\n\nemails = [\n    \"Hi! Meeting at 3pm tomorrow.\",\n    \"FREE WINNER!!! Click here URGENT!!!\",\n    \"Your homework is due Friday.\",\n    \"You won a FREE iPhone! Click here!\"\n]\n\nfor email in emails:\n    result = check_spam(email)\n    print(f\"\\n📧 '{email}'\")\n    print(f\"   → {result}\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Sometimes spam filters make mistakes! Important emails can end up in your spam folder. Check your spam folder occasionally to make sure nothing important got caught by accident." },
              {
                type: "quiz",
                question: "How can YOU help train the spam filter AI?",
                options: [
                  { id: "a", text: "By deleting all your emails" },
                  { id: "b", text: "By marking unwanted emails as spam" },
                  { id: "c", text: "By writing code for the filter" },
                  { id: "d", text: "By turning off your email" }
                ],
                correct: "b",
                explanation: "Every time you click 'Report Spam' or 'Not Spam,' you're giving the AI feedback that helps it learn to better classify emails. You're literally training the AI! 📧🧠"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "🎮 Build Your Own AI",
      color: "#8B5CF6",
      lessons: [
        {
          id: "7-1",
          title: "Teachable Machine — Train AI in Your Browser",
          content: {
            description: "You can train your own AI right in your web browser! No coding needed! 🖥️🤖",
            sections: [
              { type: "heading", level: 2, content: "🖥️ What is Teachable Machine?" },
              { type: "text", content: "**Google's Teachable Machine** (teachablemachine.withgoogle.com) is an awesome free tool that lets ANYONE train AI — no coding required!\n\nYou can teach AI to recognize:\n• 📸 **Images** — Show it pictures from your webcam\n• 🎤 **Sounds** — Make sounds and it learns to tell them apart\n• 💪 **Poses** — Strike poses and it identifies them" },
              { type: "heading", level: 2, content: "🎯 How to Use Teachable Machine" },
              { type: "text", content: "It's super easy! Here are the steps:\n\n**Step 1: Create Categories** 📁\nDecide what you want the AI to learn. For example: \"Rock\", \"Paper\", \"Scissors\"\n\n**Step 2: Collect Training Data** 📸\nUse your webcam to take lots of photos for each category. The more photos, the better!\n\n**Step 3: Train the Model** 🧠\nClick \"Train Model\" and wait. The AI learns the patterns!\n\n**Step 4: Test It** 🎯\nShow the AI new images and see if it can classify them correctly!\n\nThat's it! You just built AI! 🎉" },
              { type: "tip", content: "🌟 **Fun Fact!** You can train a Teachable Machine model in under 5 minutes! Try training it to recognize different hand gestures — like thumbs up 👍, peace sign ✌️, and wave 👋!" },
              { type: "heading", level: 2, content: "💡 Fun Project Ideas" },
              { type: "list", items: [
                "**Emotion detector** — Train it to recognize happy, sad, and surprised faces 😊😢😲",
                "**Pet identifier** — Is it a dog, cat, or hamster? 🐕🐱🐹",
                "**ASL letters** — Teach it American Sign Language alphabet! 🤟",
                "**Sound classifier** — Clap, snap, whistle detection! 👏",
                "**Pose game** — Standing, sitting, jumping, dancing! 💃"
              ]},
              { type: "code", language: "python", filename: "teachable_machine.py", code: "# How Teachable Machine works (concept)\n\nprint(\"🤖 Teachable Machine Concept\")\nprint(\"=\" * 30)\n\n# Step 1: Collect data\nprint(\"\\n📸 Step 1: Collecting data...\")\ncategories = {\n    \"Rock ✊\": 50,\n    \"Paper ✋\": 50,\n    \"Scissors ✌️\": 50\n}\n\nfor category, count in categories.items():\n    print(f\"  {category}: {count} photos collected\")\n\n# Step 2: Train\nprint(\"\\n🧠 Step 2: Training AI...\")\nprint(\"  Finding patterns in images...\")\nprint(\"  Learning hand shapes...\")\nprint(\"  Training complete! ✅\")\n\n# Step 3: Test\nprint(\"\\n🎯 Step 3: Testing!\")\nprint(\"  You show: ✊ (fist)\")\nprint(\"  AI predicts: Rock! (97% confidence)\")\nprint(\"  ✅ Correct!\\n\")\nprint(\"🎉 You built AI!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Make sure to collect DIVERSE training data! Take photos from different angles, with different backgrounds, and in different lighting. Otherwise, the AI might learn to recognize the background instead of your hand! 📸" },
              {
                type: "quiz",
                question: "What can you train on Google's Teachable Machine?",
                options: [
                  { id: "a", text: "Only text documents" },
                  { id: "b", text: "Images, sounds, and poses" },
                  { id: "c", text: "Only math problems" },
                  { id: "d", text: "Only videos" }
                ],
                correct: "b",
                explanation: "Teachable Machine lets you train AI to recognize images (from your webcam), sounds (from your microphone), and body poses — all in your browser with no coding! 🖥️🎉"
              }
            ]
          }
        },
        {
          id: "7-2",
          title: "Build a Rock-Paper-Scissors AI",
          content: {
            description: "Let's build an AI that can play Rock-Paper-Scissors against you! ✊✋✌️",
            sections: [
              { type: "heading", level: 2, content: "✊✋✌️ Rock, Paper, Scissors vs AI!" },
              { type: "text", content: "Let's build a Rock-Paper-Scissors game where you play against an AI that tries to predict your moves! This is a great way to understand how AI can learn patterns in human behavior." },
              { type: "heading", level: 2, content: "🧠 The AI Strategy" },
              { type: "text", content: "Humans aren't very good at being random. We tend to:\n\n• Repeat moves when we're winning 🔄\n• Change moves after losing 🔀\n• Have favorite moves we pick more often ⭐\n\nA smart AI can learn these patterns and predict what you'll do next! It watches your history and looks for habits." },
              { type: "heading", level: 2, content: "💻 Let's Code It!" },
              { type: "code", language: "python", filename: "rps_ai.py", code: "# Rock Paper Scissors AI!\n\nimport random\n\nprint(\"✊✋✌️ Rock Paper Scissors AI!\")\nprint(\"=\" * 35)\n\n# Track player's history\nhistory = []\n\ndef ai_predict(history):\n    \"\"\"AI predicts your next move!\"\"\"\n    if len(history) < 3:\n        # Not enough data yet, pick randomly\n        return random.choice([\"rock\", \"paper\", \"scissors\"])\n    \n    # Count what player picks most\n    rock_count = history.count(\"rock\")\n    paper_count = history.count(\"paper\")\n    scissors_count = history.count(\"scissors\")\n    \n    # Predict player's most likely move\n    if rock_count >= paper_count and rock_count >= scissors_count:\n        predicted = \"rock\"\n    elif paper_count >= scissors_count:\n        predicted = \"paper\"\n    else:\n        predicted = \"scissors\"\n    \n    # Play the counter move!\n    counters = {\"rock\": \"paper\", \"paper\": \"scissors\", \"scissors\": \"rock\"}\n    return counters[predicted]\n\n# Simulate a game\nmoves = [\"rock\", \"rock\", \"scissors\", \"rock\", \"paper\"]\n\nfor move in moves:\n    ai_move = ai_predict(history)\n    history.append(move)\n    print(f\"\\nYou: {move} | AI: {ai_move}\")\n    \n    if move == ai_move:\n        print(\"  🤝 Tie!\")\n    elif (move == \"rock\" and ai_move == \"scissors\") or \\\n         (move == \"paper\" and ai_move == \"rock\") or \\\n         (move == \"scissors\" and ai_move == \"paper\"):\n        print(\"  🎉 You win!\")\n    else:\n        print(\"  🤖 AI wins!\")" },
              { type: "tip", content: "🌟 **Fun Fact!** There are competitive Rock-Paper-Scissors tournaments! Top players study their opponents' patterns — just like our AI does. The World RPS Championship has been held since 2002!" },
              { type: "heading", level: 2, content: "🎯 Making the AI Smarter" },
              { type: "text", content: "Our simple AI just counts your most-used move. A smarter AI could also:\n\n• Look at your **last 2-3 moves** for sequences 🔄\n• Detect if you **switch after losing** 🔀\n• Learn your **response to its moves** 🧠\n• Use **probability** instead of just counting 📊\n\nThe more it learns about YOUR specific patterns, the harder it becomes to beat!" },
              { type: "warning", content: "⚠️ **Good to Know!** The best strategy against a pattern-finding AI? Be truly random! Humans think they're being random but usually aren't. That's why AI can often beat us at prediction games!" },
              {
                type: "quiz",
                question: "How does the RPS AI try to beat you?",
                options: [
                  { id: "a", text: "It always picks rock" },
                  { id: "b", text: "It finds patterns in your moves and plays the counter" },
                  { id: "c", text: "It picks randomly every time" },
                  { id: "d", text: "It reads your mind" }
                ],
                correct: "b",
                explanation: "The AI tracks your move history, finds patterns (like your most common move), predicts what you'll do next, and plays the counter move! Try to be more random to beat it! ✊✋✌️"
              }
            ]
          }
        },
        {
          id: "7-3",
          title: "Create an AI Drawing Classifier",
          content: {
            description: "Build an AI that can recognize your drawings! Like a smarter version of Pictionary! 🎨🤖",
            sections: [
              { type: "heading", level: 2, content: "🎨 AI That Recognizes Drawings" },
              { type: "text", content: "Have you played **Quick, Draw!** by Google? It's a game where you draw something and AI tries to guess what it is. Let's understand how this works and build a simplified version!\n\nThe AI behind Quick, Draw! was trained on over **50 million drawings** from players around the world. It learned to recognize 345 different categories of doodles!" },
              { type: "heading", level: 2, content: "🧠 How Drawing Recognition Works" },
              { type: "text", content: "When you draw something, the AI doesn't see a picture — it sees a series of **strokes** (lines):\n\n1. **Input**: The AI receives your drawing as a sequence of points\n2. **Features**: It looks for key features — circles, lines, curves\n3. **Pattern matching**: It compares your features to drawings it's seen before\n4. **Prediction**: It outputs its best guess with a confidence percentage\n\nFor example, if you draw something with:\n• A circle + two dots + a curve = 😊 Smiley face!\n• A triangle + square + rectangle = 🏠 House!\n• Four legs + tail + ears = 🐱 Cat!" },
              { type: "tip", content: "🌟 **Fun Fact!** Go play Quick, Draw! at quickdraw.withgoogle.com — it's free and super fun! Your drawings help train Google's AI. Over 15 billion drawings have been collected from players worldwide! 🎨" },
              { type: "code", language: "python", filename: "drawing_classifier.py", code: "# Drawing Classifier Concept!\n\nprint(\"🎨 AI Drawing Classifier\")\nprint(\"=\" * 30)\n\n# Define what features each drawing has\ndrawing_features = {\n    \"house\": [\"triangle\", \"square\", \"rectangle\", \"small_square\"],\n    \"cat\": [\"circle\", \"triangles\", \"whiskers\", \"tail\"],\n    \"tree\": [\"rectangle\", \"cloud_shape\", \"lines\"],\n    \"sun\": [\"circle\", \"lines_outward\"],\n    \"flower\": [\"circle\", \"ovals\", \"line\"]\n}\n\n# Simulated user drawing\nuser_drawing = [\"circle\", \"triangles\", \"whiskers\", \"tail\"]\n\nprint(f\"\\n📝 Your drawing features: {user_drawing}\")\nprint(\"\\n🤖 Comparing to known drawings...\")\n\nfor name, features in drawing_features.items():\n    matches = len(set(user_drawing) & set(features))\n    total = max(len(features), len(user_drawing))\n    score = matches / total * 100\n    bar = \"█\" * int(score / 5)\n    print(f\"  {name}: [{bar}] {score:.0f}%\")\n\nprint(\"\\n🎯 Best match: CAT! 🐱\")\nprint(\"   Confidence: 100%\")" },
              { type: "heading", level: 2, content: "🎯 Try It Yourself!" },
              { type: "text", content: "Here are some fun drawing AI projects to try:\n\n1. **Quick, Draw!** (quickdraw.withgoogle.com) — Play against Google's AI\n2. **AutoDraw** (autodraw.com) — AI turns your doodles into clean drawings\n3. **Sketch RNN** — AI that completes your drawings\n4. **Teachable Machine** — Train your own drawing classifier with your webcam!" },
              { type: "warning", content: "⚠️ **Good to Know!** Drawing AI works best with simple doodles. If your drawing is too complex or unusual, the AI might get confused. It learned from millions of simple drawings, so keeping it simple helps!" },
              {
                type: "quiz",
                question: "How many drawings was Google's Quick, Draw! AI trained on?",
                options: [
                  { id: "a", text: "100 drawings" },
                  { id: "b", text: "10,000 drawings" },
                  { id: "c", text: "Over 50 million drawings" },
                  { id: "d", text: "Just 5 drawings" }
                ],
                correct: "c",
                explanation: "Quick, Draw! was trained on over 50 million drawings from players around the world! The more drawings people contribute, the smarter the AI gets. 🎨🧠"
              }
            ]
          }
        },
        {
          id: "7-4",
          title: "Machine Learning Playground",
          content: {
            description: "Let's explore how machine learning algorithms work with a fun playground! 🎢🧠",
            sections: [
              { type: "heading", level: 2, content: "🎢 Welcome to the ML Playground!" },
              { type: "text", content: "**Machine Learning** (ML) is the part of AI where computers learn from data. There are many different ML algorithms (methods), and each works differently.\n\nLet's explore the most popular ones with fun analogies!" },
              { type: "heading", level: 3, content: "🌳 Decision Trees — Playing 20 Questions" },
              { type: "text", content: "A Decision Tree works like the game 20 Questions:\n\n\"Is it bigger than a car?\" → Yes/No\n\"Does it have legs?\" → Yes/No\n\"Can it fly?\" → Yes/No\n\nEach question splits the possibilities until you narrow it down to the answer!" },
              { type: "heading", level: 3, content: "📍 K-Nearest Neighbors — Ask Your Friends" },
              { type: "text", content: "KNN is like asking your closest friends for advice:\n\n\"5 of my 7 nearest neighbors are cats → I'm probably a cat!\"\n\nIt looks at the most similar items and goes with the majority vote. Simple but effective!" },
              { type: "heading", level: 3, content: "🧠 Neural Networks — Mini Brains" },
              { type: "text", content: "Neural Networks are inspired by YOUR brain! They have layers of connected \"neurons\":\n\n• **Input layer** — Receives data (like your eyes receive light)\n• **Hidden layers** — Process and transform data (like thinking)\n• **Output layer** — Makes a decision (like your brain deciding \"that's a cat\")\n\nDeep Learning = Neural Networks with LOTS of hidden layers!" },
              { type: "tip", content: "🌟 **Fun Fact!** Try TensorFlow Playground (playground.tensorflow.org)! It's a free website where you can build and watch neural networks learn in real-time. It's mesmerizing! 🧠✨" },
              { type: "code", language: "python", filename: "ml_playground.py", code: "# Machine Learning Algorithms Explained!\n\nprint(\"🎢 ML Algorithm Playground\")\nprint(\"=\" * 30)\n\n# Decision Tree\nprint(\"\\n🌳 Decision Tree:\")\nprint(\"  Q: Has feathers? → Yes\")\nprint(\"  Q: Can fly? → Yes\")\nprint(\"  Q: Is small? → Yes\")\nprint(\"  Result: It's a sparrow! 🐦\")\n\n# K-Nearest Neighbors\nprint(\"\\n📍 K-Nearest Neighbors:\")\nprint(\"  5 nearest items: 🐱🐱🐱🐶🐱\")\nprint(\"  Votes: Cat=4, Dog=1\")\nprint(\"  Result: It's a cat! 🐱\")\n\n# Neural Network\nprint(\"\\n🧠 Neural Network:\")\nprint(\"  Input: [pixel values of image]\")\nprint(\"  Layer 1: Detects edges\")\nprint(\"  Layer 2: Detects shapes\")\nprint(\"  Layer 3: Detects features\")\nprint(\"  Output: 95% dog, 5% cat\")\nprint(\"  Result: It's a dog! 🐶\")" },
              { type: "heading", level: 2, content: "🌐 Try These ML Playgrounds!" },
              { type: "list", items: [
                "**TensorFlow Playground** — playground.tensorflow.org 🧠",
                "**Teachable Machine** — teachablemachine.withgoogle.com 📸",
                "**Quick, Draw!** — quickdraw.withgoogle.com 🎨",
                "**AI Experiments** — experiments.withgoogle.com/collection/ai 🔬"
              ]},
              { type: "warning", content: "⚠️ **Good to Know!** No single ML algorithm is best for everything. Different problems need different approaches — just like you wouldn't use a hammer to cut paper! The skill is knowing which tool to use. 🔧" },
              {
                type: "quiz",
                question: "Which ML algorithm works like the game '20 Questions'?",
                options: [
                  { id: "a", text: "Neural Network" },
                  { id: "b", text: "K-Nearest Neighbors" },
                  { id: "c", text: "Decision Tree" },
                  { id: "d", text: "Random Forest" }
                ],
                correct: "c",
                explanation: "A Decision Tree asks yes/no questions to narrow down the answer, just like playing 20 Questions! Each question splits the data into smaller groups. 🌳"
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "🛡️ AI Safety & Ethics",
      color: "#EF4444",
      lessons: [
        {
          id: "8-1",
          title: "AI Bias — When AI Gets It Wrong",
          content: {
            description: "AI can be unfair if it's trained on biased data. Let's understand why this matters! ⚖️",
            sections: [
              { type: "heading", level: 2, content: "⚖️ What is AI Bias?" },
              { type: "text", content: "**Bias** means unfairness — when something favors one group over another. AI can be biased too, and it's a BIG problem!\n\nRemember \"Garbage In, Garbage Out\"? If the data used to train AI reflects human biases and prejudices, the AI will learn those biases too.\n\nFor example: If a hiring AI is trained mostly on data from male employees, it might unfairly rate female candidates lower. That's not fair! 🚫" },
              { type: "heading", level: 2, content: "🔍 Real Examples of AI Bias" },
              { type: "list", items: [
                "**Photo recognition** — Some AI was worse at recognizing faces with darker skin because the training data mostly had lighter-skinned faces 📸",
                "**Language AI** — Some AI associated certain jobs with specific genders (\"doctor\" = male, \"nurse\" = female) 👨‍⚕️👩‍⚕️",
                "**Loan AI** — Some AI systems denied loans unfairly to people from certain neighborhoods 🏘️",
                "**Voice AI** — Some voice assistants struggled to understand accents they weren't trained on 🗣️"
              ]},
              { type: "heading", level: 2, content: "🤔 Why Does Bias Happen?" },
              { type: "text", content: "AI bias happens for several reasons:\n\n1. **Biased training data** — The data doesn't represent everyone equally 📊\n2. **Historical bias** — Past data reflects unfair historical practices 📜\n3. **Missing data** — Some groups aren't included in the dataset 🕳️\n4. **Human bias** — The people building AI have their own unconscious biases 🧠" },
              { type: "tip", content: "🌟 **Fun Fact!** Companies are now hiring \"AI Ethics\" teams specifically to check for bias in their AI systems. It's becoming a whole new career field! ⚖️👩‍💻" },
              { type: "heading", level: 2, content: "✅ How to Fix AI Bias" },
              { type: "list", items: [
                "**Diverse data** — Train AI on data that represents ALL people 🌍",
                "**Diverse teams** — Build AI with people from different backgrounds 👥",
                "**Testing** — Check if AI performs equally well for all groups 🧪",
                "**Transparency** — Let people know how AI makes decisions 🔍",
                "**Oversight** — Have humans review AI decisions for fairness ⚖️"
              ]},
              { type: "code", language: "python", filename: "bias_checker.py", code: "# AI Bias Checker Concept\n\nprint(\"⚖️ AI Bias Checker\")\nprint(\"=\" * 30)\n\n# Check if training data is balanced\ntraining_data = {\n    \"Group A\": 9000,\n    \"Group B\": 1000,  # Underrepresented!\n}\n\nprint(\"\\n📊 Training Data Distribution:\")\ntotal = sum(training_data.values())\nfor group, count in training_data.items():\n    pct = count / total * 100\n    bar = \"█\" * int(pct / 5)\n    status = \"✅\" if pct > 30 else \"⚠️ UNDERREPRESENTED\"\n    print(f\"  {group}: [{bar}] {pct:.0f}% {status}\")\n\nprint(\"\\n🚨 Warning: Data is NOT balanced!\")\nprint(\"   Group B only has 10% of data\")\nprint(\"   AI may perform poorly for Group B\")\nprint(\"\\n💡 Fix: Collect more data for Group B!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI bias isn't just a tech problem — it's a fairness problem that affects real people's lives. When AI makes decisions about jobs, loans, or healthcare, bias can cause real harm. That's why it's SO important to build fair AI! 💙" },
              {
                type: "quiz",
                question: "Why can AI be biased?",
                options: [
                  { id: "a", text: "AI is mean on purpose" },
                  { id: "b", text: "AI chooses to be unfair" },
                  { id: "c", text: "AI learns bias from imbalanced or unfair training data" },
                  { id: "d", text: "AI can never be biased" }
                ],
                correct: "c",
                explanation: "AI doesn't choose to be biased — it learns bias from the data it's trained on. If the data is unfair or imbalanced, the AI will be unfair too. That's why diverse, balanced data is crucial! ⚖️"
              }
            ]
          }
        },
        {
          id: "8-2",
          title: "Deepfakes — Not Everything Is Real",
          content: {
            description: "AI can create fake videos and images that look totally real! Let's learn how to spot them. 🎭🔍",
            sections: [
              { type: "heading", level: 2, content: "🎭 What Are Deepfakes?" },
              { type: "text", content: "**Deepfakes** are AI-generated fake videos, images, or audio that look incredibly real. The word comes from \"deep learning\" + \"fake.\"\n\nAI can now:\n• Put one person's face on another person's body 🔄\n• Make someone appear to say things they never said 🗣️\n• Create photos of people who don't exist 👤\n• Clone someone's voice from just a few seconds of audio 🎤\n\nSome deepfakes are SO convincing that even experts have trouble spotting them!" },
              { type: "heading", level: 2, content: "🧠 How Deepfakes Are Made" },
              { type: "text", content: "Deepfakes use a type of AI called **GANs** (Generative Adversarial Networks). Here's how they work:\n\nImagine two AI artists:\n\n🎨 **The Forger** — Creates fake images\n🔍 **The Detective** — Tries to spot fakes\n\nThey compete against each other:\n• The Forger makes a fake → The Detective spots it → \"Too blurry!\"\n• The Forger improves → The Detective spots it → \"Eyes look wrong!\"\n• The Forger improves more → The Detective can't tell! → PERFECT FAKE!\n\nThis competition makes both AI better and better!" },
              { type: "tip", content: "🌟 **Fun Fact!** The website thispersondoesnotexist.com generates AI faces of people who have never existed. Every face looks completely real but is 100% fake! Go check it out! 👻" },
              { type: "heading", level: 2, content: "🔍 How to Spot Deepfakes" },
              { type: "list", items: [
                "**Check the eyes** — Do they blink naturally? Are they symmetrical? 👀",
                "**Look at the edges** — Hair, ears, and glasses might look blurry or weird at the edges 🔲",
                "**Watch for glitches** — Weird distortions when the face turns or moves 📹",
                "**Listen carefully** — AI voice might sound slightly robotic or unnatural 🎧",
                "**Check the source** — Is it from a trusted source? 📰",
                "**Use AI detectors** — There are tools designed to detect deepfakes! 🔬"
              ]},
              { type: "code", language: "python", filename: "deepfake_detector.py", code: "# Deepfake Warning Signs Checker!\n\nprint(\"🔍 Deepfake Detection Guide\")\nprint(\"=\" * 30)\n\nchecklist = [\n    (\"Eyes blink naturally?\", True),\n    (\"Skin texture consistent?\", True),\n    (\"Hair edges look normal?\", False),  # Suspicious!\n    (\"Lip sync matches audio?\", True),\n    (\"No weird distortions?\", False),  # Suspicious!\n    (\"From trusted source?\", True),\n]\n\nprint(\"\\n📋 Checking video...\\n\")\nsuspicious = 0\nfor check, passed in checklist:\n    status = \"✅ PASS\" if passed else \"🚨 FAIL\"\n    print(f\"  {status} — {check}\")\n    if not passed:\n        suspicious += 1\n\nprint(f\"\\n📊 Result: {suspicious} suspicious signs found\")\nif suspicious == 0:\n    print(\"✅ Likely real!\")\nelif suspicious <= 2:\n    print(\"⚠️ Might be a deepfake — investigate more!\")\nelse:\n    print(\"🚨 Probably a deepfake!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Deepfakes can be used to spread misinformation and bully people. If you see a suspicious video, don't share it! Always verify before sharing content online. When in doubt, check trusted news sources. 🛡️" },
              {
                type: "quiz",
                question: "What does 'GAN' stand for in deepfake technology?",
                options: [
                  { id: "a", text: "General Artificial Network" },
                  { id: "b", text: "Generative Adversarial Network" },
                  { id: "c", text: "Global AI Node" },
                  { id: "d", text: "Graphic Animation Nexus" }
                ],
                correct: "b",
                explanation: "GAN stands for Generative Adversarial Network. It uses two competing AI systems — a 'forger' that creates fakes and a 'detective' that tries to spot them — to generate incredibly realistic content! 🎭"
              }
            ]
          }
        },
        {
          id: "8-3",
          title: "Privacy — Protecting Your Data from AI",
          content: {
            description: "Your data is valuable! Let's learn how to protect your privacy in the age of AI. 🔒🛡️",
            sections: [
              { type: "heading", level: 2, content: "🔒 Your Data is Valuable!" },
              { type: "text", content: "Every time you use an app, browse the web, or talk to a voice assistant, you create **data**. This data is incredibly valuable because it helps companies build better AI and target ads.\n\nHere's some data you create daily:\n\n• **Location data** — Where you go 📍\n• **Search history** — What you look up 🔍\n• **Social media** — What you like, share, and post 📱\n• **Voice recordings** — What you say to Siri/Alexa 🎤\n• **Shopping data** — What you buy 🛒" },
              { type: "heading", level: 2, content: "🛡️ How to Protect Your Privacy" },
              { type: "list", items: [
                "**Think before you share** — Do you really need to post that? 🤔",
                "**Check app permissions** — Does a flashlight app really need your location? 🔦",
                "**Use strong passwords** — Different ones for each account! 🔑",
                "**Be careful with personal info** — Don't share your address, school, or phone number online 🏠",
                "**Review privacy settings** — Most apps let you control what data they collect ⚙️",
                "**Ask a parent** — When in doubt, ask a trusted adult! 👨‍👩‍👧"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** Your data is so valuable that some people call it \"the new oil\"! Companies like Google and Facebook make billions of dollars from data-driven advertising. 💰" },
              { type: "code", language: "python", filename: "privacy_check.py", code: "# Privacy Checkup Tool!\n\nprint(\"🔒 Privacy Checkup\")\nprint(\"=\" * 30)\n\nchecklist = [\n    \"Strong, unique passwords for each account\",\n    \"Two-factor authentication enabled\",\n    \"App permissions reviewed\",\n    \"Privacy settings configured\",\n    \"Location sharing limited\",\n    \"Don't share personal info publicly\"\n]\n\nprint(\"\\n📋 Your Privacy Checklist:\\n\")\nfor i, item in enumerate(checklist, 1):\n    print(f\"  {i}. ☐ {item}\")\n\nprint(\"\\n💡 Check off each item to protect your data!\")\nprint(\"🛡️ Your privacy is YOUR right!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Once data is on the internet, it's very hard to delete completely. Think of the internet like a permanent marker — not a pencil. Be thoughtful about what you share online! 📝" },
              {
                type: "quiz",
                question: "Which is the BEST way to protect your online privacy?",
                options: [
                  { id: "a", text: "Use the same easy password everywhere" },
                  { id: "b", text: "Share everything publicly so there are no secrets" },
                  { id: "c", text: "Use strong unique passwords and review app permissions" },
                  { id: "d", text: "Never use the internet at all" }
                ],
                correct: "c",
                explanation: "Using strong unique passwords and carefully reviewing what permissions apps have is the best balance of enjoying technology while staying safe! 🔑🛡️"
              }
            ]
          }
        }
      ]
    },
    {
      id: 9,
      title: "🌍 AI Changing the World",
      color: "#14B8A6",
      lessons: [
        {
          id: "9-1",
          title: "AI in Medicine — Helping Doctors Save Lives",
          content: {
            description: "AI is helping doctors find diseases earlier and save more lives! 🏥💙",
            sections: [
              { type: "heading", level: 2, content: "🏥 AI as a Doctor's Super Assistant" },
              { type: "text", content: "AI isn't replacing doctors — it's giving them **superpowers**! AI can analyze medical images, predict diseases, and help find new medicines faster than ever before.\n\nHere are some amazing ways AI is saving lives:" },
              { type: "heading", level: 3, content: "🔬 Spotting Diseases Earlier" },
              { type: "text", content: "AI can analyze X-rays, MRIs, and CT scans to spot diseases that human eyes might miss:\n\n• **Cancer detection** — AI can find tiny tumors in mammograms with 94% accuracy 🎗️\n• **Eye diseases** — AI scans retina photos to detect diabetic eye disease 👁️\n• **Skin conditions** — Take a photo of a mole and AI can check if it's dangerous 📸\n• **Heart problems** — AI analyzes heart rhythm data to predict heart attacks ❤️" },
              { type: "heading", level: 3, content: "💊 Discovering New Medicines" },
              { type: "text", content: "Creating a new medicine usually takes 10-15 years and costs $2.6 billion! AI is speeding this up dramatically:\n\n• AI can test millions of potential drug combinations virtually 🧪\n• It predicts which molecules might work as medicine 🔬\n• AI helped develop COVID-19 vaccines in record time! 💉" },
              { type: "tip", content: "🌟 **Fun Fact!** In 2023, AI discovered a new antibiotic that can kill drug-resistant bacteria — something scientists had been trying to do for decades! The AI tested 6,680 compounds and found the winner. 🏆" },
              { type: "code", language: "python", filename: "medical_ai.py", code: "# AI in Medicine Example\n\nprint(\"🏥 Medical AI Assistant\")\nprint(\"=\" * 30)\n\nprint(\"\\n🔬 Analyzing X-ray scan...\")\nprint(\"  Checking for abnormalities...\")\nprint(\"  Comparing to 1 million healthy scans...\")\nprint(\"  ✅ No issues detected!\")\n\nprint(\"\\n💊 Drug Discovery AI:\")\ncompounds_tested = 1000000\nhits = 47\nprint(f\"  Compounds screened: {compounds_tested:,}\")\nprint(f\"  Potential candidates: {hits}\")\nprint(f\"  Top candidate: Compound #847329\")\nprint(f\"  Predicted effectiveness: 89%\")\nprint(\"\\n🎉 What took years now takes weeks!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI medical tools always work WITH doctors, never alone. A doctor always reviews AI's findings before making any medical decisions. AI is a helper, not a replacement!" },
              {
                type: "quiz",
                question: "How is AI helping in medicine?",
                options: [
                  { id: "a", text: "Replacing all doctors" },
                  { id: "b", text: "Spotting diseases in scans and discovering new medicines faster" },
                  { id: "c", text: "Only counting pills" },
                  { id: "d", text: "AI can't help with medicine" }
                ],
                correct: "b",
                explanation: "AI helps doctors by analyzing medical images to spot diseases earlier and by accelerating drug discovery. It's a powerful tool that makes medicine better for everyone! 🏥✨"
              }
            ]
          }
        },
        {
          id: "9-2",
          title: "AI for the Planet — Fighting Climate Change",
          content: {
            description: "AI is helping protect our planet and fight climate change! 🌍💚",
            sections: [
              { type: "heading", level: 2, content: "🌍 AI to the Rescue!" },
              { type: "text", content: "Climate change is one of the biggest challenges facing our planet. But AI is becoming a powerful tool in the fight to protect Earth!\n\nHere's how AI is helping the environment:" },
              { type: "heading", level: 3, content: "⚡ Smart Energy" },
              { type: "text", content: "• **Smart power grids** — AI predicts energy demand and reduces waste ⚡\n• **Google's DeepMind** reduced their data center cooling energy by 40% using AI! ❄️\n• **Wind & solar optimization** — AI predicts weather to maximize renewable energy 🌞💨" },
              { type: "heading", level: 3, content: "🌳 Protecting Nature" },
              { type: "text", content: "• **Wildlife monitoring** — AI cameras identify and count endangered species 🐘\n• **Deforestation detection** — AI analyzes satellite images to spot illegal logging 🛰️\n• **Ocean health** — AI monitors coral reef health from underwater cameras 🐠\n• **Wildfire prediction** — AI predicts where wildfires might start 🔥" },
              { type: "heading", level: 3, content: "♻️ Reducing Waste" },
              { type: "text", content: "• **Smart recycling** — AI robots sort recyclables faster and better ♻️\n• **Food waste reduction** — AI predicts how much food stores need to order 🥗\n• **Precision farming** — AI tells farmers exactly where to water and fertilize 🌾" },
              { type: "tip", content: "🌟 **Fun Fact!** AI-powered precision farming can reduce water usage by 30% and pesticide use by 90%! That's a huge win for the planet. 🌱" },
              { type: "code", language: "python", filename: "green_ai.py", code: "# AI for the Environment!\n\nprint(\"🌍 AI Planet Protector\")\nprint(\"=\" * 30)\n\nimpact = {\n    \"Energy saved\": \"40% less cooling energy\",\n    \"Water saved\": \"30% less in smart farms\",\n    \"Wildlife tracked\": \"10,000+ species monitored\",\n    \"Trees saved\": \"Deforestation alerts in real-time\",\n}\n\nprint(\"\\n💚 AI Environmental Impact:\\n\")\nfor area, result in impact.items():\n    print(f\"  🌱 {area}: {result}\")\n\nprint(\"\\n🌍 AI is helping save our planet!\")\nprint(\"   And YOU can help too — learn about\")\nprint(\"   AI and use it for good! 💪\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI itself uses a lot of energy! Training large AI models produces carbon emissions. Scientists are working on making AI more energy-efficient so it can help the planet without hurting it." },
              {
                type: "quiz",
                question: "How did Google's DeepMind help the environment?",
                options: [
                  { id: "a", text: "By planting trees" },
                  { id: "b", text: "By reducing data center cooling energy by 40%" },
                  { id: "c", text: "By cleaning the ocean" },
                  { id: "d", text: "By building solar panels" }
                ],
                correct: "b",
                explanation: "Google's DeepMind AI reduced the energy needed to cool their massive data centers by 40%! That's a huge amount of energy saved. 💚⚡"
              }
            ]
          }
        },
        {
          id: "9-3",
          title: "AI in Space — Exploring the Stars",
          content: {
            description: "AI is helping us explore the universe and discover new worlds! 🚀🌟",
            sections: [
              { type: "heading", level: 2, content: "🚀 AI in the Final Frontier" },
              { type: "text", content: "Space is HUGE — so huge that humans can't explore it alone. AI is our partner in discovering the secrets of the universe!\n\nFrom Mars rovers to finding new planets, AI is essential to space exploration." },
              { type: "heading", level: 3, content: "🔴 Mars Rovers" },
              { type: "text", content: "NASA's **Perseverance** and **Curiosity** rovers on Mars use AI to:\n\n• Navigate rocky terrain without human help 🪨\n• Choose interesting rocks to study 🔬\n• Avoid dangerous obstacles 🚫\n• Make decisions on their own (because signals take 20 minutes to reach Mars!) ⏱️" },
              { type: "heading", level: 3, content: "🌍 Discovering New Planets" },
              { type: "text", content: "AI helps find **exoplanets** (planets around other stars):\n\n• NASA's **Kepler telescope** collected massive amounts of data 📊\n• AI analyzed the data and found planets humans missed! 🪐\n• AI has helped discover over 300 new exoplanets! 🌟\n• Some might even have conditions for life! 👽" },
              { type: "heading", level: 3, content: "🛸 Other Space AI" },
              { type: "list", items: [
                "**Satellite images** — AI processes millions of Earth observation photos 🛰️",
                "**Space debris tracking** — AI tracks 30,000+ pieces of space junk to avoid collisions 💥",
                "**Astronaut health** — AI monitors astronaut health on the ISS 🧑‍🚀",
                "**SETI** — AI searches for signals from alien civilizations! 📡"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** It takes radio signals about 20 minutes to travel from Earth to Mars. That means a Mars rover can't wait for human instructions — it needs AI to make quick decisions on its own! 🤖🔴" },
              { type: "code", language: "python", filename: "space_ai.py", code: "# AI in Space Exploration!\n\nprint(\"🚀 Space AI Explorer\")\nprint(\"=\" * 30)\n\nprint(\"\\n🔴 Mars Rover AI Status:\")\nprint(\"  📍 Location: Jezero Crater, Mars\")\nprint(\"  🔋 Battery: 87%\")\nprint(\"  🧠 AI Mode: Autonomous navigation\")\nprint(\"  📸 Photos taken today: 247\")\nprint(\"  🪨 Interesting rocks found: 3\")\n\nprint(\"\\n🪐 Exoplanet Hunter AI:\")\nprint(\"  Stars analyzed: 150,000\")\nprint(\"  Planets found: 324\")\nprint(\"  Potentially habitable: 12\")\nprint(\"  🌟 Closest: 39 light-years away\")\n\nprint(\"\\n🛸 Space is big. AI helps us explore it!\")" },
              { type: "warning", content: "⚠️ **Good to Know!** Space AI needs to be EXTREMELY reliable because you can't fix a broken robot on Mars! Space AI goes through years of testing before being deployed. One bug could ruin a billion-dollar mission! 🔧" },
              {
                type: "quiz",
                question: "Why do Mars rovers need AI?",
                options: [
                  { id: "a", text: "Because they like to think" },
                  { id: "b", text: "Because signals take 20 minutes, so they can't wait for human instructions" },
                  { id: "c", text: "Because Mars has Wi-Fi" },
                  { id: "d", text: "Because NASA is lazy" }
                ],
                correct: "b",
                explanation: "Radio signals take about 20 minutes to travel between Earth and Mars, so rovers can't wait for human instructions for every decision. AI lets them navigate and make decisions independently! 🔴🤖"
              }
            ]
          }
        }
      ]
    },
    {
      id: 10,
      title: "🚀 Your AI Future",
      color: "#F97316",
      lessons: [
        {
          id: "10-1",
          title: "AI Jobs of Tomorrow",
          content: {
            description: "What jobs will exist in the future thanks to AI? The future is exciting! 💼🚀",
            sections: [
              { type: "heading", level: 2, content: "💼 The Future of Work" },
              { type: "text", content: "AI is changing the job landscape — but don't worry! While some jobs will change, tons of exciting NEW jobs are being created. Here are some cool AI-related careers:" },
              { type: "heading", level: 3, content: "🤖 AI & Tech Jobs" },
              { type: "list", items: [
                "**AI/ML Engineer** — Build and train AI systems 🧠",
                "**Prompt Engineer** — Write perfect prompts for AI tools ✍️",
                "**AI Ethics Specialist** — Make sure AI is fair and safe ⚖️",
                "**Data Scientist** — Find insights in massive datasets 📊",
                "**Robotics Engineer** — Build smart robots 🤖",
                "**AI Trainer** — Teach AI new skills by providing training data 🏋️"
              ]},
              { type: "heading", level: 3, content: "🎨 Creative + AI Jobs" },
              { type: "list", items: [
                "**AI Art Director** — Guide AI to create amazing visuals 🎨",
                "**AI Music Producer** — Use AI tools to create music 🎵",
                "**AI Game Designer** — Build games with smart AI characters 🎮",
                "**AI Content Creator** — Use AI to create engaging content 📱"
              ]},
              { type: "heading", level: 3, content: "🌍 AI + Other Fields" },
              { type: "list", items: [
                "**AI Doctor/Researcher** — Use AI to diagnose diseases 🏥",
                "**AI Lawyer** — Use AI for legal research ⚖️",
                "**AI Farmer** — Use AI for precision agriculture 🌾",
                "**AI Environmental Scientist** — Use AI to protect the planet 🌍"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** The job \"Prompt Engineer\" didn't exist before 2022! Some prompt engineers earn over $300,000 per year just for writing good instructions for AI. Imagine getting paid to talk to AI all day! 💰" },
              { type: "heading", level: 2, content: "💪 Skills You Need for AI Jobs" },
              { type: "list", items: [
                "**Curiosity** — Always want to learn new things! 🔍",
                "**Critical thinking** — Question everything, including AI's answers 🤔",
                "**Creativity** — Think of new ways to use AI 💡",
                "**Math & science** — The foundation of AI 📐",
                "**Communication** — Explain AI to non-tech people 🗣️",
                "**Ethics** — Think about the impact of technology on people ❤️"
              ]},
              { type: "code", language: "python", filename: "future_jobs.py", code: "# AI Jobs of the Future!\n\nprint(\"🚀 AI Career Explorer\")\nprint(\"=\" * 30)\n\ncareers = {\n    \"Prompt Engineer\": {\"salary\": \"$150-300K\", \"emoji\": \"✍️\"},\n    \"AI Ethics Specialist\": {\"salary\": \"$120-200K\", \"emoji\": \"⚖️\"},\n    \"ML Engineer\": {\"salary\": \"$130-250K\", \"emoji\": \"🧠\"},\n    \"AI Art Director\": {\"salary\": \"$100-180K\", \"emoji\": \"🎨\"},\n    \"Robotics Engineer\": {\"salary\": \"$110-200K\", \"emoji\": \"🤖\"},\n}\n\nprint(\"\\n💼 Hot AI Careers:\\n\")\nfor title, info in careers.items():\n    print(f\"  {info['emoji']} {title}\")\n    print(f\"     Salary: {info['salary']}\")\n\nprint(\"\\n💡 The best preparation?\")\nprint(\"   Stay curious and keep learning! 📚\")" },
              { type: "warning", content: "⚠️ **Good to Know!** The most important skill for the AI future isn't coding — it's LEARNING HOW TO LEARN. AI changes so fast that what you learn today might be different tomorrow. Stay curious and adaptable!" },
              {
                type: "quiz",
                question: "Which job didn't exist before 2022?",
                options: [
                  { id: "a", text: "Software Engineer" },
                  { id: "b", text: "Prompt Engineer" },
                  { id: "c", text: "Data Scientist" },
                  { id: "d", text: "Web Developer" }
                ],
                correct: "b",
                explanation: "Prompt Engineering became a real job after ChatGPT launched in late 2022! It's the art of writing perfect instructions for AI to get the best results. ✍️🤖"
              }
            ]
          }
        },
        {
          id: "10-2",
          title: "How to Keep Learning About AI",
          content: {
            description: "Your AI journey is just beginning! Here are the best resources to keep learning. 📚🌟",
            sections: [
              { type: "heading", level: 2, content: "📚 Your Learning Adventure Continues!" },
              { type: "text", content: "Congratulations — you've learned SO much about AI! But this is just the beginning. AI is growing every day, and there's always more to discover. Here are the best ways to keep learning:" },
              { type: "heading", level: 2, content: "🌐 Free Online Resources" },
              { type: "list", items: [
                "**Scratch** (scratch.mit.edu) — Build AI projects with block coding 🧩",
                "**Code.org** — Free coding courses with AI activities 💻",
                "**Google's AI Experiments** (experiments.withgoogle.com) — Play with AI demos 🎮",
                "**Teachable Machine** — Train your own AI models 🤖",
                "**Khan Academy** — Free courses on computer science and AI 📖",
                "**CS First by Google** — Video-based coding lessons 🎥"
              ]},
              { type: "heading", level: 2, content: "📖 Great Books for Kids" },
              { type: "list", items: [
                "**\"How to Be Good at Science\"** — DK Books 📕",
                "**\"AI For Kids\"** — Dale Lane (hands-on projects!) 📗",
                "**\"Hello Ruby\"** — Linda Liukas (adventures in coding) 📘",
                "**\"The Wild Robot\"** — Peter Brown (fiction about a robot learning) 📙"
              ]},
              { type: "heading", level: 2, content: "🎯 Fun AI Activities" },
              { type: "list", items: [
                "**Play Quick, Draw!** — Help train Google's drawing AI 🎨",
                "**Talk to ChatGPT** — Ask it questions and explore! 💬",
                "**Try AI image generators** — Create art with text prompts 🖼️",
                "**Join coding clubs** — Find a club at school or online 👥",
                "**Enter AI competitions** — Like science fairs but for AI! 🏆",
                "**Start a project** — Build something with AI! 🔨"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** Many successful AI researchers started learning to code when they were YOUR age! The earlier you start, the more time you have to become amazing at it. You're already ahead of the game! 🏆" },
              { type: "heading", level: 2, content: "🐍 Learn Python — The Language of AI" },
              { type: "text", content: "**Python** is the #1 programming language for AI. It's also one of the easiest to learn! Here are great places to start:\n\n• **Python.org** — Official tutorials\n• **Codecademy** — Interactive Python course\n• **Replit** (replit.com) — Code Python in your browser\n• **This course!** — You've already seen Python examples! 🐍" },
              { type: "code", language: "python", filename: "keep_learning.py", code: "# Your AI Learning Journey!\n\nprint(\"🌟 Your AI Learning Path\")\nprint(\"=\" * 30)\n\nsteps = [\n    \"✅ Learn what AI is (DONE!)\",\n    \"✅ Understand how AI learns (DONE!)\",\n    \"✅ Explore AI applications (DONE!)\",\n    \"✅ Learn about AI ethics (DONE!)\",\n    \"🔲 Learn Python programming\",\n    \"🔲 Build your first AI project\",\n    \"🔲 Join a coding community\",\n    \"🔲 Enter an AI competition\",\n    \"🔲 Teach someone else about AI\",\n    \"🔲 Change the world with AI!\"\n]\n\nprint(\"\\n📍 Your progress:\\n\")\nfor step in steps:\n    print(f\"  {step}\")\n\nprint(\"\\n🚀 You're on your way to greatness!\")\nprint(\"   Keep learning, keep building,\")\nprint(\"   keep being awesome! 💪\")" },
              { type: "warning", content: "⚠️ **Good to Know!** AI is a tool, not magic. The most important thing isn't the AI itself — it's the PROBLEMS you choose to solve with it. Think about what matters to you and how AI could help!" },
              {
                type: "quiz",
                question: "What programming language is most used for AI?",
                options: [
                  { id: "a", text: "JavaScript" },
                  { id: "b", text: "Python" },
                  { id: "c", text: "Spanish" },
                  { id: "d", text: "HTML" }
                ],
                correct: "b",
                explanation: "Python is the #1 programming language for AI and Machine Learning! It's popular because it's easy to read and has tons of AI libraries. 🐍"
              }
            ]
          }
        },
        {
          id: "10-3",
          title: "Your AI Project Ideas — Go Build Something!",
          content: {
            description: "Time to build your own AI project! Here are ideas to get you started. 🔨🚀",
            sections: [
              { type: "heading", level: 2, content: "🔨 It's Building Time!" },
              { type: "text", content: "The best way to learn AI is to **BUILD something**! Here are project ideas organized by difficulty. Pick one that excites you and go for it!" },
              { type: "heading", level: 2, content: "🟢 Beginner Projects (No coding needed!)" },
              { type: "list", items: [
                "**Teachable Machine Classifier** — Train AI to recognize your pets, family members, or hand gestures 📸",
                "**AI Art Gallery** — Use AI image generators to create a themed art collection 🎨",
                "**Chatbot Conversation** — Have a deep conversation with ChatGPT about a topic you love and document what you learned 💬",
                "**AI Music Mix** — Use AI music tools to create a short album 🎵",
                "**Quick, Draw! Challenge** — See how many categories you can teach AI to recognize 🖊️"
              ]},
              { type: "heading", level: 2, content: "🟡 Intermediate Projects (Some coding)" },
              { type: "list", items: [
                "**Spam Email Classifier** — Build a program that detects spam emails 📧",
                "**Mood Detector** — Use Teachable Machine to detect facial expressions 😊😢😡",
                "**Smart Playlist** — Write code that recommends songs based on your favorites 🎵",
                "**AI Quiz Game** — Create a quiz game that adapts difficulty to the player 🎮",
                "**Weather Predictor** — Use data to predict tomorrow's weather ☀️🌧️"
              ]},
              { type: "heading", level: 2, content: "🔴 Advanced Projects (Coding required)" },
              { type: "list", items: [
                "**Image Classifier** — Build a Python program that classifies images using ML 🖼️",
                "**Chatbot from Scratch** — Code your own chatbot in Python 🤖",
                "**Game AI** — Create a game where AI opponents learn from your play style 🎮",
                "**Sentiment Analyzer** — Build a tool that detects if text is positive or negative 📊",
                "**AI for Good** — Build an AI tool that solves a problem in your community 🌍"
              ]},
              { type: "tip", content: "🌟 **Fun Fact!** Many tech companies were started by young people building projects for fun! Mark Zuckerberg built Facebook in his dorm room at 19. You could be the next great AI inventor! 🌟" },
              { type: "heading", level: 2, content: "📋 Project Planning Template" },
              { type: "code", language: "python", filename: "my_ai_project.py", code: "# My AI Project Planner!\n\nprint(\"🚀 AI Project Planner\")\nprint(\"=\" * 30)\n\nproject = {\n    \"name\": \"My Awesome AI Project\",\n    \"problem\": \"What problem am I solving?\",\n    \"audience\": \"Who is this for?\",\n    \"ai_type\": \"What type of AI will I use?\",\n    \"data\": \"What data do I need?\",\n    \"tools\": \"What tools will I use?\",\n    \"timeline\": \"How long will it take?\"\n}\n\nprint(\"\\n📋 Fill in your project plan:\\n\")\nfor key, question in project.items():\n    print(f\"  {key.upper()}: {question}\")\n\nprint(\"\\n🎯 Example:\")\nprint(\"  NAME: Pet Mood Detector\")\nprint(\"  PROBLEM: Is my cat happy or grumpy?\")\nprint(\"  AUDIENCE: Pet owners\")\nprint(\"  AI TYPE: Image classification\")\nprint(\"  DATA: Photos of cats with different moods\")\nprint(\"  TOOLS: Teachable Machine\")\nprint(\"  TIMELINE: 1 weekend\")\nprint(\"\\n🔨 Now go build something amazing!\")" },
              { type: "heading", level: 2, content: "🎉 You Did It!" },
              { type: "text", content: "**Congratulations on completing AI Literacy for Kids!** 🎊🎉\n\nYou've learned:\n• ✅ What AI is and how it works\n• ✅ How AI learns from data\n• ✅ AI that can see, talk, write, and create\n• ✅ How to find patterns and build AI\n• ✅ AI safety, ethics, and privacy\n• ✅ How AI is changing the world\n• ✅ Your future with AI\n\nYou are now **AI literate** — you understand one of the most important technologies of our time! Now go out there and use this knowledge to build, create, and make the world a better place! 🌍✨\n\n**Remember: AI is a tool. YOU are the inventor. Go build something awesome!** 🚀" },
              { type: "warning", content: "⚠️ **One Last Thing!** Share what you've learned with friends and family. The more people understand AI, the better we can all use it responsibly. You're now an AI ambassador! 🌟" },
              {
                type: "quiz",
                question: "What's the BEST way to learn more about AI?",
                options: [
                  { id: "a", text: "Just read about it" },
                  { id: "b", text: "Wait until you're an adult" },
                  { id: "c", text: "Build projects and experiment with AI tools" },
                  { id: "d", text: "Memorize facts about AI" }
                ],
                correct: "c",
                explanation: "The best way to learn AI is by DOING! Build projects, experiment with tools like Teachable Machine, try coding in Python, and have fun creating. Learning by doing beats reading any day! 🔨🚀"
              }
            ]
          }
        }
      ]
    }
  ]
}