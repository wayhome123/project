const obj = {};

//默认会传过来一个参数Vue
obj.install = function(Vue) {
  console.log("你好", Vue);
};

export default obj;
