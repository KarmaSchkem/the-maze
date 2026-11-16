// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`130011000002010201020102010201020102010201020100010000000100000001000000000000000302000200020102000200020002000201020102010001000100000001000100010001000000010000020002000201020002000200000002000200000100010001000000010001020102010001000002000200020002010200000000000200020000010001000100010000000102010201000100000200020002000201020102000000000002000001000100010000000105010001020102010000020002000201020002000200000000000200000100000000000100010001020102010001000002010201020002000200000000000200020000010000000100010001000102010001000100010200020002000200020102000000020002000204000100000001000000000001000000010001020102010201020102010201020102010200`, img`
.222222222222222222
.2...2...2........2
.2.222.2.2.2.222222
.2.2...2.2.2.2...2.
.2.2.222.2.2...2.2.
.2.2.2...2.22222.2.
.2.2.2.222.....2.2.
.2.2.2.2...22222.2.
.2.2.2.22222.....2.
.2.2.2...2.2.22222.
.2.2.222.2.2.....2.
.2.....2.2.22222.2.
.22222.2.2.....2.2.
.2...2.2.2.222.2.2.
22.2.2.2.222...2.2.
2..2...2.....2...2.
222222222222222222.
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
