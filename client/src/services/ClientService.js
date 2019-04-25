import Api from "@/services/Api";

export default {
  //***REQUESTS from CLIENT */
  sendMessage(params) {
    return Api().post("/portfolio", params);
  }
};
