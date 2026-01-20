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
  //Create recipes
  event.recipes.create.pressing(
    "spaceploitation:tantalum_sheet", // output
    "spaceploitation:tantalum_ingot", // input
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
  //Ruptured Idol creation
  event.shaped(
    Item.of("simplymore:ruptured_idol", 1), // arg 1: output
    [
      " A ",
      " B ", // arg 2: the shape (array of strings)
      " C ",
    ],
    {
      A: "wstweaks:immolation_blade",
      B: "companions:respawn_totem_block", //arg 3: the mapping object
      C: "arsdelight:enchanters_knife",
    },
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

  //Dimensional Seed recipe
  event.shaped(
    Item.of("allthetweaks:dimensional_seed", 1), // arg 1: output
    [
      "ABC",
      "DEF", // arg 2: the shape (array of strings)
      "GHI",
    ],
    {
      A: "arsdelight:honey_glazed_chimera",
      B: "endersdelight:steak_fries", //arg 3: the mapping object
      C: "farmersdelight:roasted_mutton_chops",
      D: "the_bumblezone:royal_jelly_block",
      E: "ars_nouveau:void_prism",
      F: "allthecompressed:end_stone_6x",
      G: "allthecompressed:cobblestone_6x",
      H: "allthemodium:soul_lava_bucket",
      I: "allthecompressed:blackstone_5x",
    },
  );
  console.log("Hello! The recipe event has fired!");
});

//Begin end-game item recipes
//Nexium emitter recipe
ServerEvents.recipes((event) => {
  event.custom({
    type: "spaceploitation:planet_simulator",
    planet_type: "spaceploitation:venus",
    inputs: [
      { item: "appflux:core_256m", count: 1 },
      { item: "refinedtypes:infinite_energy_storage_part", count: 1 },
      { item: "advanced_ae:quantum_storage_component", count: 1 },
      { item: "create:mechanical_arm", count: 1 },
      { item: "oritech:heisenberg_compensator", count: 1 },
      { item: "spaceploitation:planet_simulator_controller", count: 1 },
      { item: "createnuclear:graphite_rod", count: 1 },
      { item: "oritech:prometheum_ingot", count: 1 },
      { item: "cataclysm:laser_gatling", count: 1 },
    ],
    energy_per_tick: 5000,
    duration: 4000,
    outputs: [
      { item: { id: "allthetweaks:nexium_emitter", count: 1 }, chance: 1.0 },
    ],
  });
  //Dragon Soul recipe
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "block_factorys_bosses:dragon_skull",
      "apothic_enchanting:infused_breath",
      "companions:croissant_dragon_chocolate_armor",
      "irons_spellbooks:dragonskin_spell_book",
      "forbidden_arcanus:golden_dragon_scale",
      "productivebees:inactive_dragon_egg",
      "minecraft:dragon_head",
    ], // input items
    "createornithopterglider:ornithopterglider", // reagent
    "allthetweaks:dragon_soul", // output
    100000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );
});
