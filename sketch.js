// dP1/dt =aP1 - b P1P2
// dP2/dt =cP1P2 - dP2
// dengan r merupakan konstanta pertumbuhan
// dan M adalah carrying capacity

let t = [];
// Variabel tak bebas
let P1 = [];
let P2 = [];
// Parameter model
let a;
let b;
let c;
let d;
// Kondisi awal
let P10;
let P20;

let tMax = 200;
let dt = 0.1;

let grafik

function setup() {
  createCanvas(400, 400);
  P10 = createInput("20");
  P10.position(20,410);
  P20 = createInput("40");
  P20.position(100,410);
  a = createSlider(0.1, 1,0.4, 0.01); //min, max, value, step
  a.position(20,445);
  a.size(80)
  b = createSlider(0, 0.25,0.1,0.01);
  b.position(20,475);
  b.size(80)
  c = createSlider(0, 0.8,0.1,0.01);//min, max, value, step
  c.position(140,445);
  c.size(80)
  d = createSlider(0.5,3,0.5,0.1); //min, max, value, step
  d.position(140,475);
  d.size(80)
  

  let p = createP('Kondisi awal');
  p.style('font-size', '14px');
  p.position(20, 380);  
  let q = createP('Parameter a');
  q.style('font-size', '14px');
  q.position(20, 420);
  let h = createP('Parameter b')
  h.style('font-size', '14px');
  h.position(20, 450);
  let n = createP('Parameter c')
  n.style('font-size', '14px');
  n.position(140, 420);
  let g = createP('Parameter d')
  g.style('font-size', '14px');
  g.position(140, 450);
  
  solve(); 
  grafik = new Chart(this, config);  
  P10.changed(solve); // ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
  b.changed(solve);
  c.changed(solve);
  d.changed(solve);
}
function draw() {
  grafik.update()

}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  bs = float(b.value());
  cs = float(c.value());
  ds = float(d.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt*as*P1[i]       -  dt*bs*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt*cs*P1[i+1]*P2[i] -  dt*ds*P2[i];
    t[i+1] = round((i+1)*dt,3);
  }
}
