export const dummyIncome = 5000;
export const dummySavings = 800;

export const dummyExpenses = [
  { name: "rent", cost: 1500 },
  { name: "groceries", cost: 400 },
  { name: "utilities", cost: 150 },
  { name: "insurance", cost: 200 },
  { name: "subscriptions", cost: 50 },
  { name: "phone", cost: 80 },
];

export const dummySideHustles = [
  { name: "freelance", income: 600 },
  { name: "tutoring", income: 200 },
];

export const dummyTotalExpenses = dummyExpenses.reduce((sum, e) => sum + e.cost, 0);
export const dummyTotalSideHustles = dummySideHustles.reduce((sum, h) => sum + h.income, 0);
export const dummyTotal = dummyIncome + dummyTotalSideHustles;
export const dummyDiscretionary = dummyTotal - dummyTotalExpenses - dummySavings;
