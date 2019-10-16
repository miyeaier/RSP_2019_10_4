let pc_choice = PC_Choice();

function PC_Choice() {
  const rand_num = Math.random();
  if (rand_num < 0.333) {
    return "rock";
  } else if (rand_num < 0.666) {
    return "scissors";
  } else if (rand_num < 1.000) {
    return "paper";
  }
}

function Compare(user_choice, computer_choice) {

  if (user_choice === computer_choice) {
    return "Tie";
  } else if (user_choice === "rock") {
    if (computer_choice === "scissors") {
      return ("user win");
    } else {
      return ("cumputer win")
    }
  } else if (user_choice === "rock") {
    if (computer_choice === "paper") {
      return ("user win");
    } else {

      return ("cumputer win")
    }

  } else if (user_choice === "scissors") {
    if (computer_choice === "paper") {
      return ("user win");
    } else {

      return ("cumputer wun")
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PC_Choice, Compare;
}