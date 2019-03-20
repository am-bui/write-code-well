// This is a variation of the “Fashion Inventory” problem.
// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It’s the same inventory data structure as earlier:

// var inventory = [ { name: 'Brunello Cucinelli', shoes: [ {name: 'tasselled black low-top lace-up', price: 1000}, {name: 'tasselled green low-top lace-up', price: 1100}, {name: 'plain beige suede moccasin', price: 950}, {name: 'plain olive suede moccasin', price: 1050} ] }, { name: 'Gucci', shoes: [ {name: 'red leather laced sneakers', price: 800}, {name: 'black leather laced sneakers', price: 900} ] } ];

// Now find all the black shoes. It’s the same output as part 1, but filtered to only shoe names that contain “black” in them.

// Brunello Cucinelli,tasselled black low-top lace-up,1000
// Gucci,black leather laced sneakers,900

// Write your own unit tests.



// Method 1:

function listAllBlackShoes(data) {
  var result = [];

  for (var i in data) {
    for (var j in data[i].shoes) {
      if (data[i].shoes[j].name.match('black')) {
        result.push(`${data[i].name},${data[i].shoes[i].name},${data[i].shoes[i].price}`);
      }
    }
  }
  return result.join('\n');
}

// Method 2:

// function listAllBlackShoes(data) {
//   var result = [];
//   for (i in data) {
//     result.push(`${data[i].name},${data[i].shoes[i].name},${data[i].shoes[i].price}`);
//   }
//   return result.filter(data => data.includes('black')).join('\n');
// }

// console.log(listAllBlackShoes(inventory))



// Your Code Should Pass:

// describe("listAllBlackShoes", function() {
//   it("should return all black shoes and their properties", function() {
//     var input = [
//       {
//         name: "Brunello Cucinelli",
//         shoes: [
//           {name: 'tasselled black low-top lace-up', price: 1500},
//           {name: 'tasselled green low-top lace-up', price: 1500},
//           {name: 'plain beige suede moccasin', price: 1200}
//         ]
//       },
//       {
//         name: 'Gucci',
//         shoes: [
//           {name: 'red leather laced sneakers', price: 800},
//           {name: 'black leather laced sneakers', price: 900}
//         ]
//       }
//     ]
//
//     var result = listAllBlackShoes(input);
//
//     expect(result).toMatch("Brunello Cucinelli,tasselled black low-top lace-up,1500");
//     expect(result).toMatch("Gucci,black leather laced sneakers,900");
//
//   });
// });
