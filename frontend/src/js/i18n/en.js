export default {
  labels: {
    Education: "Education",
    JoiningYear: "Joining Year",
    City: "City",
    PaymentTier: "Payment Tier",
    Age: "Age",
    Gender: "Gender",
    EverBenched: "Ever benched?",
    ExperienceInCurrentDomain: "Experience (years)"
  },
  values: {
    Gender: {
      Male: "Male",
      Female: "Female"
    },
    EverBenched: {
      Yes: "Yes",
      No: "No"
    }
  },
  messages: {
    title: "Retention Prediction",
    loading: "⏳ Processing...",
    success: "Result",
    error: "Error",
    initial: "Fill the form and click \"Predict\"",

    stay: "The employee is likely to stay in the company.",
    leave: "The employee is at risk of leaving the company.",
    probability: "Probability of leaving"
  },
  risk: {
    low: "Low risk",
    medium: "Medium risk",
    high: "High risk"
  }
};