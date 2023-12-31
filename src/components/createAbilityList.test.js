/**
 * @jest-environment jsdom
 */

import createAbilitiesList from "./createAbilityList.js";

describe("createAbilitiesList", () => {
  const abilities = [
    { ability: { name: "fire" } },
    { ability: { name: "water" } },
    { ability: { name: "earth" } },
  ];
  const list = createAbilitiesList(abilities);
  const firstChild = list.children[0];
  const secondChild = list.children[1];
  const thirdChild = list.children[2];

  test("list nodeName -> ul", () => {
    expect(list.nodeName).toEqual("UL");
  });

  test("firstChild nodeName -> LI", () => {
    expect(firstChild.nodeName).toEqual("LI");
  });

  test("firstChild innerText -> fire", () => {
    expect(firstChild.innerText).toEqual("fire");
  });

  test("secondChild nodeName -> LI", () => {
    expect(secondChild.nodeName).toEqual("LI");
  });

  test("secondChild innerText -> water", () => {
    expect(secondChild.innerText).toEqual("water");
  });

  test("thirdChild nodeName -> LI", () => {
    expect(thirdChild.nodeName).toEqual("LI");
  });

  test("thirdChild innerText -> earth", () => {
    expect(thirdChild.innerText).toEqual("earth");
  });
});
