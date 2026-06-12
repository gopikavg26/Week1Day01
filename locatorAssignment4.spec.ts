
// Assignment: 4 Edit Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Individuals tab
import{test,expect} from '@playwright/test'
test('Locator assignment4',async({page})=>{

    await page.goto('https://login.salesforce.com')
    await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'App Launcher' }).click();
    await page.getByRole('button',{name:'View All Applications'}).click()
    await page.getByRole('link', { name: 'Individuals' }).click();


// 5. Search the Individuals last name
 await page.getByRole('searchbox',{name:"Search this list..."}).fill('last');
 await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');
// 6. Click on the Dropdown icon and Select Edit
 await page.getByRole('button', { name: 'Show Actions' }).first().click();
// 7. Select Salutation as 'Mr'
await page.getByRole('button',{name:"Salutation"}).selectOption('Mr.')
// 8. Now enter the first name
await page.getByRole('textbox',{name:"First Name"}).fill('Adam')
// 9. Click on Save and Verify the first name
await page.locator("//span[text()='Save']").click()
await page.getByText("Apple last").isVisible()
})