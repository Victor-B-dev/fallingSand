class Grid {
  private width: number;
  private height: number;
  private grid: Color[][];

  constructor() {
    this.width = 0;
    this.height = 0;
    this.grid = [];
  }

  private initialize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width * height).fill(0);
  }

  clear() {
    this.grid = new Array(this.width * this.height).fill(0);
  }

  private set(x: number, y:number, color: string){
    this.grid[y * this.width + x] = color;
  }

}