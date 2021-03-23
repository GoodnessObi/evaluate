import { checkForName } from "../src/client/js/nameChecker"
   
describe("Testing the nameChecker functionality", () => {  
  test("nameChecker function exists", () => {
    expect(checkForName).toBeDefined();
  })

  test("url input", () => {
    const inputText = 'https://punchng.com/bundesliga-bayern-leverkusen-fire-coach-bosz-after-slump/'
    expect(checkForName(inputText)).toBeTruthy();
  })

  test("url input", () => {
    const inputText = 'itunu'
    expect(checkForName(inputText)).toBeFalsy();
  })
});
