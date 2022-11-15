import { test, expect } from '@playwright/test'

test('Vue body', async ({ page }) => {
  await page.goto('http://localhost:1339')

  await page.locator('#btn').scrollIntoViewIfNeeded()

  const scrollPosFirst = await page.evaluate(() => window.scrollY)

  await page.locator('#btn').click()

  const bodyStyleTop = await page.evaluate(() => parseInt(document.body.style.top) * -1)
  await expect(bodyStyleTop).toBe(scrollPosFirst)

  await page.evaluate(async () => window.scrollTo(0, 3000))

  const scrollPosAfterClick = await page.evaluate(() => window.scrollY)
  await expect(scrollPosAfterClick).toBe(0)

  await page.locator('#btn').click()

  const scrollPosLast = await page.evaluate(() => window.scrollY)
  await expect(scrollPosLast).toBe(scrollPosFirst)
})

test('Vue div', async ({ page }) => {
  await page.goto('http://localhost:1339/demo-div')

  await page.locator('#btn').scrollIntoViewIfNeeded()

  const scrollPosFirst = await page.evaluate(() => window.scrollY)
  const element = await page.locator('#demo')

  await page.locator('#btn').click()

  const elStyleTop = await element.evaluate(el => parseInt(el.style.top) * -1)

  await expect(elStyleTop).toBe(scrollPosFirst)

  await page.evaluate(async () => window.scrollTo(0, 3000))

  const scrollPosAfterClick = await page.evaluate(() => window.scrollY)
  await expect(scrollPosAfterClick).toBe(0)

  await page.locator('#btn').click()

  const scrollPosLast = await page.evaluate(() => window.scrollY)
  await expect(scrollPosLast).toBe(scrollPosFirst)
})
