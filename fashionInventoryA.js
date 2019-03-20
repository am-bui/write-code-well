// You have a fashion catalog, an inventory of items from various high-fashion designers.
// Each designer has a lineup of shoes. Each shoe has a name and a price.
//
// It looks like this:
// var currentInventory = [ { name: 'Brunello Cucinelli', shoes: [ {name: 'tasselled black low-top lace-up', price: 1000}, {name: 'tasselled green low-top lace-up', price: 1100}, {name: 'plain beige suede moccasin', price: 950}, {name: 'plain olive suede moccasin', price: 1050} ] }, { name: 'Gucci', shoes: [ {name: 'red leather laced sneakers', price: 800}, {name: 'black leather laced sneakers', price: 900} ] } ];

// Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
// E.g.,
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// …

// Write your own unit tests.



function renderInventory(inventory) {
  return inventory.map(brand => brand.shoes.map(shoe => `${brand.name}, ${shoe.name}, ${shoe.price}`).join('\n')).join('\n');
}



// Your Code Should Pass:
//
// describe('render inventory', function() {
//   it('renders_first_line_correctly', function() {
//     var inventory = [
//       {
//         name: 'Brunello Cucinelli',
//         shoes: [
//           {name: 'tasselled black low-top lace-up', price: 1000},
//           {name: 'tasselled green low-top lace-up', price: 1100},
//           {name: 'plain beige suede moccasin', price: 950},
//           {name: 'plain olive suede moccasin', price: 1050}
//         ]
//       },
//       {
//         name: 'Gucci',
//         shoes: [
//           {name: 'red leather laced sneakers', price: 800},
//           {name: 'black leather laced sneakers', price: 900}
//         ]
//       }
//     ];
//
//     var actual = renderInventory(inventory).split('\n');
//     var expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';
//     expect(actual[0]).toBe(expected);
//   });
//
//   it('renders_second_line_correctly', function() {
//     var inventory = [
//       {
//         name: 'Brunello Cucinelli',
//         shoes: [
//           {name: 'tasselled black low-top lace-up', price: 1000},
//           {name: 'tasselled green low-top lace-up', price: 1100},
//           {name: 'plain beige suede moccasin', price: 950},
//           {name: 'plain olive suede moccasin', price: 1050}
//         ]
//       },
//       {
//         name: 'Gucci',
//         shoes: [
//           {name: 'red leather laced sneakers', price: 800},
//           {name: 'black leather laced sneakers', price: 900}
//         ]
//       }
//     ];
//
//     var actual = renderInventory(inventory).split('\n');
//     var expected = 'Gucci, black leather laced sneakers, 900';
//     expect(actual.pop()).toBe(expected);
//   });
// });
