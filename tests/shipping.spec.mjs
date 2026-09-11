import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const item=JSON.parse(readFileSync(new URL('../fixtures/catalog.json',import.meta.url),'utf8'));
test('shipping @ara48-shipping',async({page})=>{await page.goto('http://127.0.0.1:3049');await expect(page.getByText(`Shipping: ${item.shippingCredits} credits`)).toBeVisible();});
