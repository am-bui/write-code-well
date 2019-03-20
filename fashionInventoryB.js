// This is a variation of the “Fashion Inventory” problem.
// Please DO NOT paste code from before, however. Tackle each problem on its own.
// It’s the same inventory data structure as earlier:

// var inventory = [ { name: 'Brunello Cucinelli', shoes: [ {name: 'tasselled black low-top lace-up', price: 1000}, {name: 'tasselled green low-top lace-up', price: 1100}, {name: 'plain beige suede moccasin', price: 950}, {name: 'plain olive suede moccasin', price: 1050} ] }, { name: 'Gucci', shoes: [ {name: 'red leather laced sneakers', price: 800}, {name: 'black leather laced sneakers', price: 900} ] } ];

// Now output the average cost of all shoes per designer in this format:

// var expected = { 'designers': [ { 'name': 'Brunello Cucinelli', 'averagePrice': 1025 }, { 'name': 'Gucci', 'averagePrice': 850 } ] };
// Write your own unit tests.



function calculateAveragePricePerDesigner (inventory) {
  var newObj = {};
  newObj.designers = inventory.map(designer => {
    return {'name': designer.name, 'averagePrice': averagePrice(designer.shoes)};
    });
    return newObj;
}

function averagePrice(shoeList) {
  return shoeList.reduce((total, shoe) => total + shoe.price, 0)/shoeList.length;
}



// Your Code Should Pass:
//
// describe("calculateAveragePricePerDesigner", function() {
//   it("calculates proper average in correct data structure", function() {
//     var input = [
//       {
//         name: 'Brunello Cucinelli',
//         shoes: [
//           {name: 'tasselled black low-top lace-up', price: 1000},
//           {name: 'tasselled green low-top lace-up', price: 2000},
//           {name: 'plain beige suede moccasin', price: 950},
//           {name: 'plain olive suede moccasin', price: 1050}
//         ]
//       },
//       {
//         name: 'Gucci',
//         shoes: [
//           {name: 'red leather laced sneakers', price: 1000},
//           {name: 'black leather laced sneakers', price: 800}
//         ]
//       }
//     ];
//
//     var result = calculateAveragePricePerDesigner(input);
//
//     expect(result.designers[0].averagePrice).toBe(1250);
//     expect(result.designers[1].averagePrice).toBe(900);
//   })
// })
