import {expect,test} from "@playwright/test"

test('Assertions', async ({page}) => {
await page.goto("https://leafground.com/input.xhtml")  

await page.locator('//input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled"]')

await expect(page.locator('//input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled"]')).toBeDisabled()

await page.locator('//input[@id="j_idt88:name"]').fill('stane roy asir')

await expect(page.locator('//input[@id="j_idt88:name"]')).toBeEditable()

await page.locator('//input[@id="j_idt106:thisform:age"]').click()

await expect.soft(page.locator('//input[@id="j_idt106:thisform:age"]')).toBeEnabled()

await page.locator('//input[@value="Chennai"]').fill('')

await page.locator('//input[@value="Chennai"]').fill('playwrioght Learning')

});


// soft assertionj with failure //


test('soft Assertions with failure', async ({page}) => {

await page.goto("https://leafground.com/input.xhtml")  

await page.locator('//input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled"]')

await expect.soft(page.locator('//input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled"]')).toBeEnabled()

await page.locator('//input[@id="j_idt88:name"]').fill('stane roy asir')

await expect(page.locator('//input[@id="j_idt88:name"]')).toBeEditable()

await page.locator('//input[@id="j_idt106:thisform:age"]').click()

await expect.soft(page.locator('//input[@id="j_idt106:thisform:age"]')).toBeEnabled()

await page.locator('//input[@value="Chennai"]').fill('')

await page.locator('//input[@value="Chennai"]').fill('playwrioght Learning')

});



