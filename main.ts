function Lvl_2 () {
    blockSettings.writeNumber("lvl", 2)
    game.splash("Level 2")
    tiles.setCurrentTilemap(tilemap`niveau1`)
    StartLvl()
}
function Lvl_1 () {
    blockSettings.writeNumber("lvl", 1)
    game.splash("Level 1")
    tiles.setCurrentTilemap(tilemap`niveau1`)
    StartLvl()
}
info.onCountdownEnd(function () {
    info.startCountup()
    blockSettings.writeNumber("run", 1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("You finished level :", blockSettings.readNumber("lvl"))
    game.splash("Time :", info.getTimeElapsed())
    info.pauseCountup()
    sprites.destroy(mySprite)
    Render.setViewMode(ViewMode.tilemapView)
})
function StartLvl () {
    info.setScore(blockSettings.readNumber("lvl"))
    info.clearCountup()
    blockSettings.writeNumber("run", 0)
    info.startCountdown(3)
    mySprite = Render.getRenderSpriteVariable()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
}
let mySprite: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 180
}
scene.setBackgroundColor(12)
Lvl_1()
game.onUpdateInterval(5, function () {
    if (blockSettings.readNumber("run") == 0) {
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
    }
})
