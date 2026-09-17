import {test} from "@playwright/test"

test('learn builtin Locator', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")      

await page.getByRole('textbox',{name: 'Username'}).fill('democsr')

await page.getByLabel('Password').fill('crmsfa')

await page.getByRole('button',{name:'login'}).click()
await page.locator('img[src*="crm.png"]').click();

await page.getByText('Leads', { exact: true }).click();

await page.waitForTimeout(2000)

await page.getByRole('link', { name: 'Create Lead', exact: true }).click();

await page.waitForTimeout(2000)

await page.locator('//input[@id="createLeadForm_companyName"]').fill('testleaf');

await page.locator('//input[@id="createLeadForm_firstName"]').fill('Stane')

await page.locator('//input[@id="createLeadForm_lastName"]').fill('Roy')

await page.locator('//input[@name="personalTitle"]').fill('Mr.')

await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Playwright Locator test')

await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('2,00,000,0000')

await page.locator('//input[@name="departmentName"]').fill('testing')

await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('8489444456')

await page.getByRole('button',{name: 'Create Lead'}).click()

await page.waitForTimeout(2000)

});


