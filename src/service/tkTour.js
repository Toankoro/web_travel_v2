// service.js
const db = require("../models/index");

const getTotalTours = async () => {
  try {
    const totalTours = await db.DetailTours.count({
    });
    return totalTours;
  } catch (error) {
    throw new Error('Error fetching total tours');
  }
};
const getTotalFeedback = async () => {
  try {
    const totalFeedback = await db.Feedbacks.count({
    });
    return totalFeedback;
  } catch (error) {
    throw new Error('Error fetching total feedbacks');
  }
};
const getRateGood = async () => {
  try {
    const totalRateGood = await db.Users.count({
      
    });
    return totalRateGood;
  } catch (error) {
    throw new Error('Error fetching total feedbacks');
  }
};
const getTourListWithFeedbackCount = async () => {
  try {
    let tourList = await db.DetailTours.findAll({
      
    });
    return tourList;
  } catch (error) {
    throw error;
  }
};
module.exports = { getTotalTours, getTotalFeedback, getRateGood,getTourListWithFeedbackCount };
