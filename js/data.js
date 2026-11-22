/* ==========================================================================
   RANDOM QUOTE GENERATOR — quote bank
   44 quotes across 6 categories. Each quote: text, author, category.
   ========================================================================== */
window.QUOTE_DATA = [
  // Motivation
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivation" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "motivation" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivation" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "motivation" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "motivation" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "motivation" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", category: "motivation" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "motivation" },

  // Wisdom
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "wisdom" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "wisdom" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", category: "wisdom" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu", category: "wisdom" },
  { text: "What we think, we become.", author: "Buddha", category: "wisdom" },
  { text: "The best time to plant a tree was twenty years ago. The second best time is now.", author: "Chinese Proverb", category: "wisdom" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", category: "wisdom" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "wisdom" },

  // Success
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "success" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "success" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "success" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "success" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "success" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "success" },

  // Life
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "life" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", category: "life" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "life" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "life" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", category: "life" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison", category: "life" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", category: "life" },
  { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell", category: "life" },

  // Humor
  { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Anonymous", category: "humor" },
  { text: "I used to think I was indecisive, but now I'm not so sure.", author: "Anonymous", category: "humor" },
  { text: "I told my computer I needed a break, and now it won't stop sending me KitKat ads.", author: "Anonymous", category: "humor" },
  { text: "My bed is a magical place where I suddenly remember everything I was supposed to do.", author: "Anonymous", category: "humor" },
  { text: "I'm on a seafood diet. I see food and I eat it.", author: "Anonymous", category: "humor" },
  { text: "I would like to thank my arms for always being by my side, my legs for supporting me, and my fingers because I can always count on them.", author: "Anonymous", category: "humor" },
  { text: "If at first you don't succeed, then skydiving definitely isn't for you.", author: "Steven Wright", category: "humor" },

  // Love
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", category: "love" },
  { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", category: "love" },
  { text: "Where there is love there is life.", author: "Mahatma Gandhi", category: "love" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", category: "love" },
  { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo", category: "love" },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", category: "love" },
  { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Anonymous", category: "love" }
];
