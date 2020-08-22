var shopinglist = [
  {
    item: "lord of ring ",
    item_type: "book",
    amount: 800,
  },
  {
    item: "lord od ring",
    item_type: "movie",
    amount: 200,
  },
  {
    item: "reebok",
    item_type: "shoe",
    amount: 700,
  },
  {
    item: "the half girlfriend",
    item_type: "book",
    amount: 450,
  },
];
var shop_result = shopinglist
  .filter(item => item.item_type === "book")
  .map(item => item.amount)
  .reduce((current, previous) => current + previous, 0);
console.log("result :", shop_result);
