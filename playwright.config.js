const { expect, chromium } = require("@playwright/test");// This is a import

const config=({
  testdir:'./tests',
  fullyParallel: true,
  timeout:60*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  use:{
    browsername:'chromium',
    headless:false,
    screenshot:'on',
    trace:'on',
    trace:'retain-on-failure',
    video:'retain-on-failure',
    video:'on',
  },
})
module.exports=config;