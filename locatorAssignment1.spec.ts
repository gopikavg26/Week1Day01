// Assignment: 1 Create Lead

import{test,expect} from '@playwright/test'
test('Locator assignments 1',async({page})=>{


// 1. Login to https://login.salesforce.com
await page.goto('https://login.salesforce.com')
await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
await page.getByRole('button', { name: 'Log In' }).click();
// 2. Click on toggle menu button from the left corner
await page.getByRole('button', { name: 'App Launcher' }).click();


// 3. Click view All and click Sales from App Launcher
 await page.getByRole('button', { name: 'View All Applications' }).click();
 await page.locator(`//p[text()='Sales']`).click();

// 4. Click on Leads tab
 await page.getByText('Leads').first().click();

// 5. Click on New button
await page.locator('//div[@title="New"]').click()

// // 6. Select Salutation dropdown
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByText('Mr.').click();

// 7. Enter the Last Name
await page.locator('.input-639').last().fill('abc')
// 8. Enter the Company Name
await page.locator('.input-647').fill('xyz company')
// 9. Click Save and Verify Leads name created
await page.getByRole('button',{name:'SaveEdit'}).click()
await page.getByText('Mr.  abc').isVisible()
})