export {
  login,
  register,
  makeOrder,
  isLoggedIn,
  addToCart,
  getUserCart,
  getUserOrders,
} from "./user";
export { getMeal, getMeals } from "./menu";
export {
  managerLogin,
  getCompletedOrders,
  getUnCompletedOrders,
  getDeliveryEmpolyees,
  acceptOrder,
} from "./manager";
export {
  deliveryLogin,
  getEmployeeCompletedOrders,
  getEmployeeUnCompletedOrders,
} from "./delivery";

export {
  adminLogin,
  getAdminOrders,
  getAdminEmployees,
  getAdminUsers,
  getAdminMeals,
  deleteMeal,
  createMeal,
  updateMeal,
  updateEmpolyee,
  createEmployee,
  deleteEmployee,
} from "./admin";
