// Assignment: 3 Create Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com

import{test,expect} from '@playwright/test'
test('Locator assignment3',async({page})=>{

    await page.goto('https://login.salesforce.com')
    await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
    await page.getByRole('button', { name: 'Log In' }).click();
// 2. Click on the toggle menu button from the left corner
await page.getByRole('button', { name: 'App Launcher' }).click();

// 3. Click View All and click Individuals from App Launcher
await page.getByRole('button',{name:'View All Applications'}).click()
await page.getByRole('link', { name: 'Individuals' }).click();

// // 4. Click on the Dropdown icon in the Individuals tab
// // 5. Click on New Individual
 await page.getByRole('button',{name:'New'}).click()
// // 6. Enter the Last Name
 await  page.getByRole('textbox',{name:'Last Name'}).fill('last')
// // 7. Click save and verify Individuals Name
 await page.getByText('Save').last().click()
 await page.getByText('last').isVisible
})

