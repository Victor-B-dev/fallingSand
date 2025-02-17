class Grid {
  private width: number;
  private height: number;
  private grid: number[][];

  constructor() {
    this.width = 0;
    this.height = 0;
    this.grid = [];
  }

  initialize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width * height).fill(0);
  }

  clear() {
    this.grid = new Array(this.width * this.height).fill(0);
  }










}