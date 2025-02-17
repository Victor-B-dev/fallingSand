class Grid {
  initialize(width, height) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width * height).fill(0);
  }

  clear() {
    this.grid = new Array(this.width * this.height).fill(0);
  }

  set(x, y, color) {
    this.grid[y * this.width + x] = color;
  }
  
  swap(a, b) {
    const temp = this.grid[a];
    this.grid[a] = this.grid[b];
    this.grid[b] = temp;
  }
  
  isEmpty(index) {
    return this.grid[index] === 0;
  }
}