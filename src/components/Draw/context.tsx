const PERLIN_YWRAPB = 4;
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
const PERLIN_ZWRAPB = 8;
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
const PERLIN_SIZE = 4095;
const scaled_cosine = (i: number) => 0.5 * (1.0 - Math.cos(i * Math.PI));

export type Vector = {
  x: number;
  y: number;
  z: number;
};

class DrawContext2D {
  private context: CanvasRenderingContext2D | null = null;
  public windowWidth: number;
  public windowHeight: number;
  public frameCount = 0;
  public mouseX = 0;
  public mouseY = 0;
  private perlin: number[] | null = null;
  private perlin_octaves = 4;
  private perlin_amp_falloff = 0.5;
  private doStroke = false;

  public constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
    this.windowWidth = canvas.width;
    this.windowHeight = canvas.height;
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });
  }

  public resize(width: number, height: number): void {
    this.windowWidth = width;
    this.windowHeight = height;
  }

  public getContext(): CanvasRenderingContext2D | null {
    return this.context;
  }

  public updateFrame(): void {
    this.context?.clearRect(0, 0, this.windowWidth, this.windowHeight);
    this.frameCount++;
  }

  public fill(color: string): void {
    if (this.context) {
      this.context.fillStyle = color;
    }
  }

  public background(color: string): void {
    if (this.context) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.windowWidth, this.windowHeight);
    }
  }

  public noStroke(): void {
    this.doStroke = false;
  }

  public stroke(color: string): void {
    if (this.context) {
      this.context.strokeStyle = color;
      this.doStroke = true;
    }
  }

  public strokeWeight(weight: number): void {
    if (this.context) {
      this.context.lineWidth = weight;
    }
  }

  public line(x1: number, y1: number, x2: number, y2: number): void {
    if (this.context) {
      this.context.beginPath();
      this.context.moveTo(x1, y1);
      this.context.lineTo(x2, y2);
      this.context.stroke();
    }
  }

  public circle(x: number, y: number, diameter: number): void {
    if (this.context) {
      this.context.beginPath();
      this.context.arc(x, y, diameter / 2, 0, Math.PI * 2);
      this.context.fill();
      if (this.doStroke) {
        this.context.stroke();
      }
    }
  }

  public noise(x: number, y = 0, z = 0): number {
    if (this.perlin == null) {
      this.perlin = new Array(PERLIN_SIZE + 1);
      for (let i = 0; i < PERLIN_SIZE + 1; i++) {
        this.perlin[i] = Math.random();
      }
    }

    if (x < 0) {
      x = -x;
    }
    if (y < 0) {
      y = -y;
    }
    if (z < 0) {
      z = -z;
    }

    let xi = Math.floor(x),
      yi = Math.floor(y),
      zi = Math.floor(z);
    let xf = x - xi;
    let yf = y - yi;
    let zf = z - zi;
    let rxf, ryf;

    let r = 0;
    let ampl = 0.5;

    let n1, n2, n3;

    for (let o = 0; o < this.perlin_octaves; o++) {
      let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);

      rxf = scaled_cosine(xf);
      ryf = scaled_cosine(yf);

      n1 = this.perlin[of & PERLIN_SIZE];
      n1 += rxf * (this.perlin[(of + 1) & PERLIN_SIZE] - n1);
      n2 = this.perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE];
      n2 += rxf * (this.perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2);
      n1 += ryf * (n2 - n1);

      of += PERLIN_ZWRAP;
      n2 = this.perlin[of & PERLIN_SIZE];
      n2 += rxf * (this.perlin[(of + 1) & PERLIN_SIZE] - n2);
      n3 = this.perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE];
      n3 += rxf * (this.perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3);
      n2 += ryf * (n3 - n2);

      n1 += scaled_cosine(zf) * (n2 - n1);

      r += n1 * ampl;
      ampl *= this.perlin_amp_falloff;
      xi <<= 1;
      xf *= 2;
      yi <<= 1;
      yf *= 2;
      zi <<= 1;
      zf *= 2;

      if (xf >= 1.0) {
        xi++;
        xf--;
      }
      if (yf >= 1.0) {
        yi++;
        yf--;
      }
      if (zf >= 1.0) {
        zi++;
        zf--;
      }
    }
    return r;
  }

  public atan2(y: number, x: number): number {
    return Math.atan2(y, x);
  }

  public cos(angle: number): number {
    return Math.cos(angle);
  }

  public sin(angle: number): number {
    return Math.sin(angle);
  }

  public createVector(x: number, y: number, z: number): Vector {
    return { x, y, z };
  }

  dist(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
}

export default DrawContext2D;
