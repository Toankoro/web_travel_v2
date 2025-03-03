const Tour = require("../models/tours");
const tourService = require("../service/tourService");
const tkTour = require("../service/tkTour");
exports.getTours = (req, res, next) => {
  Tour.fetchAll((tours) => {
    res.render("admin/products", {
      tous: tours,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.createTour = async (req, res, next) => {
  try {
    const { title, imageUrl, price, description } = req.body; // Lấy dữ liệu từ request body

    const response = await tourService.createNewTour({
      title,
      imageUrl,
      price,
      description,
    }); // Gọi hàm createNewTour từ service
    console.log(response); // In ra message trả về từ service (nếu có)

    res.status(201).json({ message: "Tour created successfully!" }); // Trả về response thành công
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating tour" }); // Trả về response lỗi
  }
};

exports.getAddTour = (req, res, next) => {
  res.render("admin/list-response", {
    pageTitle: "Add Tour",
    path: "/admin/add-tour",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getResponse = async (req, res, next) => {
  let listFeedback = await tourService.getAllCustomerFeedback();
  console.log("da vao duoc");
  console.log(listFeedback);
  res.render("admin/list-response", {
    pageTitle: "Response Customer",
    path: "/admin/get-response",
    listFeedback: listFeedback,
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.getTest = async (req, res, next) => {
    const statistics1 = await tkTour.getTotalTours(); // Gọi hàm từ service để lấy totalTours
    const statistics2 = await tkTour.getTotalFeedback();
    const statistics3 = await tkTour.getRateGood();
    const statistics5 = await tkTour.getTourListWithFeedbackCount();
    res.render("admin/statistic", {
      pageTitle: "Statistic",
      path: "/admin/statistic",
      statistics1: statistics1, // Truyền totalTours vào view
      statistics2: statistics2, // Truyền totalTours vào view
      statistics3: statistics3, // Truyền totalTours vào view
      statistics5: statistics5,
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
    
  // } catch (error) {
  //   // Xử lý lỗi nếu có
  //   // res.status(500).send('Error fetching total tours111');
  // }
};
