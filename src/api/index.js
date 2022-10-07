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
  getDeliveryEmpolyees
} from "./manager";
export {
  deliveryLogin,
  getEmployeeCompletedOrders,
  getEmployeeUnCompletedOrders,
} from "./delivery";
