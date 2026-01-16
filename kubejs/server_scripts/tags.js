// KubeJS Tags Examples
// This file contains examples of how to modify Minecraft tags using KubeJS
// Tags can be reloaded with /reload command

// Listen to the tags event
onEvent('tags.items', event => {
    // Add items to existing tags
    // Example: Add custom items to the 'minecraft:logs' tag
    // event.add('minecraft:logs', 'kubejs:example_log')
    
    // Add multiple items to a tag
    // event.add('minecraft:logs', ['kubejs:example_log', 'kubejs:another_log'])
    
    // Remove items from tags
    // event.remove('minecraft:logs', 'minecraft:oak_log')
    
    // Remove multiple items
    // event.remove('minecraft:logs', ['minecraft:birch_log', 'minecraft:spruce_log'])
    
    // Add items to custom tags (for mod compatibility)
    // event.add('forge:ingots', 'kubejs:custom_ingot')
    // event.add('forge:gems', 'kubejs:custom_gem')
    
    // Example: Make custom items work with vanilla tools
    // event.add('minecraft:logs_that_burn', 'kubejs:flammable_log')
    // event.add('minecraft:planks', 'kubejs:custom_plank')
    
    // Example: Add items to food tags
    // event.add('forge:foods', 'kubejs:custom_food')
    // event.add('minecraft:foods', 'kubejs:custom_food')
});

onEvent('tags.blocks', event => {
    // Modify block tags
    // Example: Add custom blocks to existing tags
    // event.add('minecraft:logs', 'kubejs:example_log_block')
    
    // Example: Make custom blocks mineable with specific tools
    // event.add('minecraft:mineable/pickaxe', 'kubejs:stone_block')
    // event.add('minecraft:mineable/axe', 'kubejs:wood_block')
    // event.add('minecraft:mineable/shovel', 'kubejs:dirt_block')
    // event.add('minecraft:mineable/hoe', 'kubejs:leaves_block')
    
    // Example: Set block properties via tags
    // event.add('minecraft:needs_iron_tool', 'kubejs:hard_block')
    // event.add('minecraft:needs_diamond_tool', 'kubejs:very_hard_block')
    
    // Example: Add to vanilla block tags
    // event.add('minecraft:planks', 'kubejs:custom_plank_block')
    // event.add('minecraft:leaves', 'kubejs:custom_leaves')
    
    // Example: Remove blocks from tags
    // event.remove('minecraft:logs', 'minecraft:oak_log')
});

onEvent('tags.fluids', event => {
    // Modify fluid tags
    // Example: Add custom fluids to tags
    // event.add('forge:water', 'kubejs:custom_water')
    // event.add('forge:lava', 'kubejs:custom_lava')
    
    // Example: Add to mod-specific fluid tags
    // event.add('forge:crude_oil', 'kubejs:oil')
});

onEvent('tags.entity_types', event => {
    // Modify entity type tags
    // Example: Add custom entities to tags
    // event.add('minecraft:raiders', 'kubejs:custom_raider')
    // event.add('minecraft:impact_projectiles', 'kubejs:custom_projectile')
    
    // Example: Remove entities from tags
    // event.remove('minecraft:raiders', 'minecraft:pillager')
});

// Example: Create and use custom tags
onEvent('tags.items', event => {
    // Create a custom tag (just add items to it, and it will be created)
    // event.add('kubejs:custom_items', [
    //     'kubejs:item_one',
    //     'kubejs:item_two',
    //     'kubejs:item_three'
    // ])
    
    // You can then reference this tag in recipes or other scripts
});

// Common tag examples for mod compatibility:
onEvent('tags.items', event => {
    // Forge/NeoForge common tags:
    // event.add('forge:ingots', 'kubejs:custom_ingot')           // For ingots
    // event.add('forge:nuggets', 'kubejs:custom_nugget')        // For nuggets
    // event.add('forge:gems', 'kubejs:custom_gem')              // For gems
    // event.add('forge:dusts', 'kubejs:custom_dust')             // For dusts
    // event.add('forge:ores', 'kubejs:custom_ore')               // For ores
    // event.add('forge:storage_blocks', 'kubejs:custom_block')   // For storage blocks
    // event.add('forge:rods', 'kubejs:custom_rod')               // For rods
    // event.add('forge:plates', 'kubejs:custom_plate')           // For plates
    // event.add('forge:gears', 'kubejs:custom_gear')             // For gears
    // event.add('forge:coins', 'kubejs:custom_coin')             // For coins
});

// Example: Conditional tag modifications
onEvent('tags.items', event => {
    // You can use conditions to only modify tags in certain scenarios
    // if (Platform.isModLoaded('modid')) {
    //     event.add('modid:tag', 'kubejs:compatible_item')
    // }
});
