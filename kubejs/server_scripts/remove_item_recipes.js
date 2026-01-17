/*
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
 */

// Listen for the "recipes" server event.
ServerEvents.recipes((event) => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!
  // A blank condition removes all recipes (obviously not recommended):
  // event.remove({})

  // Steel ingot progression gating. Use CTFMG steel or Oritech bio-steel. CTFMG steel allows for the more efficient creation of Oritech bio-steel.
  event.remove({ output: "oritech:steel_ingot" });
  event.remove({ output: "createnuclear:steel_ingot" });
  event.remove({ output: "alltheores:steel_ingot" });
  // Remove all recipes where output has the Wool tag:
  // event.remove({ output: '#minecraft:wool' })

  // Remove all recipes where any input has the Redstone Dust tag:
  // event.remove({ input: '#forge:dusts/redstone' })

  // Remove all recipes from Farmer's Delight:
  // event.remove({ mod: 'farmersdelight' })

  // Remove all campfire cooking recipes:
  // event.remove({ type: 'minecraft:campfire_cooking' })

  // Remove all recipes that grant stone EXCEPT smelting recipes:
  // event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })

  // Remove recipes that output cooked chicken AND are cooked on a campfire:
  // event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

  // Remove any blasting OR smelting recipes that output minecraft:iron_ingot:
  event.remove({
    type: "oritech:atomic_forge",
    output: "oritech:prometheum_ingot",
  });

  // Remove a recipe by ID. in this case, data/minecraft/recipes/glowstone.json:
  // Note: Recipe ID and output are usually different!
  //event.remove({ id: 'minecraft:glowstone' })

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  console.log("Hello! The recipe event has fired!");
});
