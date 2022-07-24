/**
 *
 */
export interface Tile {
  WallTop: 0;
  WallLeft: 1;
  WallRight: 2;
  WallBottom: 3;
  WallTopBit: 1;
  WallLeftBit: 2;
  WallRightBit: 4;
  WallBottomBit: 8;
  WallBitMask: 15;
}
