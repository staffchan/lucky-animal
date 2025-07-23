const animals = [
    { emoji: "🐶", message: "忠実な一日になりそう！" },
    { emoji: "🐱", message: "のんびり気ままにいこう♪" },
    { emoji: "🐰", message: "ワクワクする出会いがあるかも！" },
    { emoji: "🦊", message: "知恵が試される一日かも？" },
    { emoji: "🦁", message: "堂々と行動すると◎" }
  ];
  
  function showAnimal() {
    const result = document.getElementById("result");
    const random = animals[Math.floor(Math.random() * animals.length)];
    result.innerHTML = `${random.emoji} ${random.message}`;
  }