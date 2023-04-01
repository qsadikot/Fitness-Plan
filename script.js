document.getElementById("nutrition-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user inputs
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity_level = document.getElementById("activity_level").value;
  const goal = document.getElementById("goal").value;

  // Calculate BMR
  let bmr;
  if (gender === "M") {
    bmr = 88.36 + (13.4 * weight) + (5.0 * height) - (6.8 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  // Calculate TDEE based on activity level
  let tdee;
  if (activity_level === "sedentary") {
    tdee = bmr * 1.2;
  } else if (activity_level === "moderate") {
    tdee = bmr * 1.55;
  } else {
    tdee = bmr * 1.9;
  }

  // Calculate calorie deficit/surplus based on goal
  let calorie_intake;
  if (goal === "lose weight") {
    calorie_intake = tdee - 500;
  } else {
    calorie_intake = tdee + 500;
  }

  // Display calorie goal
  const calorieGoalElement = document.getElementById("calorie-goal");
  calorieGoalElement.textContent = `You should consume ${calorie_intake.toFixed(0)} calories per day to achieve your goal.`;

  // Display recommended gym plan
  const gymPlanElement = document.getElementById("gym-plan");
  if (goal === "lose weight") {
    gymPlanElement.innerHTML = `
      Cardio: 30-60 minutes, 3-5 times per week<br>
      Weight training: 2-3 times per week, focusing on compound exercises
    `;
  } else {
    gymPlanElement.innerHTML = `
      Weight training: 4-5 times per week, focusing on compound exercises<br>
      Cardio: 20-30 minutes, 2-3 times per week
    `;
  }

  // Show results
  document.getElementById("results").style.display = "block";
});