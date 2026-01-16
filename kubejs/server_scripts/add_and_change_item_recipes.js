/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!
  // MACE REPLACEMENT 
  event.replaceInput({input: 'minecraft:mace' },'minecraft:mace','oritech:electric_mace')
  event.shaped(
  Item.of('fargostalismans:nether_star_talisman', 1), // arg 1: output
  [
    'ABA',
    'DCE', // arg 2: the shape (array of strings)
    'AFA'
  ],
  {
    A: 'minecraft:nether_star',
    B: 'minecraft:mace',  //arg 3: the mapping object
    C: 'fargostalismans:talisman_base_epic',
    D: 'minecraft:netherite_sword',
    E: 'minecraft:netherite_axe',
    F: 'minecraft:trident'
  }
)

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  console.log('Hello! The recipe event has fired!')
})