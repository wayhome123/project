import { ADD_COUNT, ADD_TO_CART } from "./mutations-types";

export default {
  addCart(context, payload) {
    return new Promise(res => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid;
      });
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        res("当前商品数量+1");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        res("添加了新的商品");
      }
    });
  }
};
