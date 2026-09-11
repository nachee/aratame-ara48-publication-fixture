import http from 'node:http';
import { readFileSync } from 'node:fs';
const item=JSON.parse(readFileSync(new URL('./catalog.json',import.meta.url),'utf8'));
http.createServer((_req,res)=>{res.setHeader('Content-Type','text/html');res.end(`<html><body><h1>${item.product}</h1><p>Shipping: ${item.shippingCredits} credits</p></body></html>`)}).listen(3049,'127.0.0.1',()=>console.log('ARA48 invented target ready on 3049'));
