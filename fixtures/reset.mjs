import { readFileSync } from 'node:fs';
const item=JSON.parse(readFileSync(new URL('./catalog.json',import.meta.url),'utf8'));
if(item.shippingCredits!==5) throw new Error('Invented fixture unavailable');
console.log('Invented fixture ready');
