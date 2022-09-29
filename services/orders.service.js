import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../data.json");

const findOrder = (order) => {


  let retVal = {};
  retVal.status = 200;
  if (data.length) {
   let orderData = data.filter((value) => value.OrderNumber === order);
   if(orderData.length>0){
retVal.result = orderData;
   } else {
    retVal.result = [];
   }
  }
  return Promise.resolve(retVal);
};

export { findOrder };

