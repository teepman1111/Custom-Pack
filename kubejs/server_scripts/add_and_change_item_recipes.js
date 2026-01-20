/*
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
 */

// Listen for the "recipes" server event.
ServerEvents.recipes((event) => {
  //Mace progresion changes and replacement in critical recipe
  event.replaceInput(
    { input: "minecraft:mace" },
    "minecraft:mace",
    "oritech:electric_mace",
  );
  event.shaped(
    Item.of("fargostalismans:nether_star_talisman", 1), // arg 1: output
    [
      "ABA",
      "DCE", // arg 2: the shape (array of strings)
      "AFA",
    ],
    {
      A: "minecraft:nether_star",
      B: "minecraft:mace", //arg 3: the mapping object
      C: "fargostalismans:talisman_base_epic",
      D: "minecraft:netherite_sword",
      E: "minecraft:netherite_axe",
      F: "minecraft:trident",
    },
  );

  //Integrate end-game Oritech with Ars and Iron's
  event.recipes.ars_nouveau.imbuement(
    "oritech:heisenberg_compensator", // input item
    "oritech:prometheum_ingot", // output
    "10000", // source cost
    [
      "oritech:overcharged_crystal",
      "oritech:overcharged_crystal",
      "irons_spellbooks:arcane_ingot",
    ], // pedestal items
  );

  //Gate ATM mage set behind late-game Iron's Spellbooks
  event.smithing(
    "allthewizardgear:allthemodium_mage_helmet", // arg 1: output
    "allthemodium:allthemodium_upgrade_smithing_template", // arg 2: the smithing template
    "#allthewizardgear:base_wizard_helmet", // arg 3: the item to be upgraded
    "irons_spellbooks:divine_soulshard", // arg 4: the upgrade item
  );
  event.smithing(
    "allthewizardgear:allthemodium_mage_chestplate", // arg 1: output
    "allthemodium:allthemodium_upgrade_smithing_template", // arg 2: the smithing template
    "#allthewizardgear:base_wizard_chestplate", // arg 3: the item to be upgraded
    "irons_spellbooks:divine_soulshard", // arg 4: the upgrade item
  );
  event.smithing(
    "allthewizardgear:allthemodium_mage_leggings", // arg 1: output
    "allthemodium:allthemodium_upgrade_smithing_template", // arg 2: the smithing template
    "#allthewizardgear:base_wizard_leggings", // arg 3: the item to be upgraded
    "irons_spellbooks:divine_soulshard", // arg 4: the upgrade item
  );
  event.smithing(
    "allthewizardgear:allthemodium_mage_boots", // arg 1: output
    "allthemodium:allthemodium_upgrade_smithing_template", // arg 2: the smithing template
    "#allthewizardgear:base_wizard_boots", // arg 3: the item to be upgraded
    "irons_spellbooks:divine_soulshard", // arg 4: the upgrade item
  );

  console.log("Hello! The recipe event has fired!");
});
