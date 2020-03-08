// import index from './styles/index.scss'
import FerrellHero from './game';

const canvas = document.getElementById('ferrell-hero');
export const game = new FerrellHero(canvas);



import Disco from './disco';
const canvas2 = document.getElementById('disco');
new Disco(canvas2);