const htmlStrings = [
  "<p></p>",
  '<div><div class="testing"></div></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><button class="targetClassName"></button></div><div class="classname"></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span></span></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
  '<div class="a"><p class="targetClassName asdf"><b>aasdfasdfsdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
];

describe("getElementsByClassName", () => {
  beforeEach(() => {
    $("body").addClass("targetClassName");
  });

  afterEach(() => {
    $("body").removeClass("targetClassName");
  });

  it("should not use the native method", () => {
    spyOn(document, "getElementsByClassName");
    const $rootElement = $(htmlStrings[0]);
    $("body").append($rootElement);
    getElementsByClassName("targetClassName");
    expect(document.getElementsByClassName).not.toHaveBeenCalled();
    document.getElementsByClassName.calls.reset();
  });

  for (let i = 0; i < htmlStrings.length; i++) {
    testHTMLStrings(htmlStrings[i], i);
  }

  function testHTMLStrings(htmlString, index) {
    it(`should match the results of calling the getElementsByClassName method, htmlStrings index: ${index}`, () => {
      const $rootElement = $(htmlString);
      $("body").append($rootElement);
      const result = getElementsByClassName("targetClassName");
      const expectedNodeList = document.getElementsByClassName(
        "targetClassName"
      );
      const expectedArray = Array.prototype.slice.apply(expectedNodeList);
      expect(result).toEqual(expectedArray);
      $rootElement.remove();
    });
  }
});
