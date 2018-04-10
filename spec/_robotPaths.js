describe("robotPaths", () => {
  it("should exist", () => {
    expect(RobotPaths).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof RobotPaths).toEqual("function");
  });

  it("should return a number", () => {
    const path = new RobotPaths(3);
    expect(path).toBeDefined();
    expect(typeof path.solve).toEqual("function");
    const result = path.solve();
    expect(typeof result).toEqual("number");
  });

  it("should return a number greater than zero for non-empty grids", () => {
    const result = new RobotPaths(3).solve();
    expect(result).toBeGreaterThan(0);
  });

  it("should correctly identify the number of unique paths for a 1x1 grid", () => {
    const result = new RobotPaths(1).solve();
    expect(result).toEqual(1);
  });

  it("should correctly identify the number of unique paths for a 2x2 grid", () => {
    const result = new RobotPaths(2).solve();
    expect(result).toEqual(2);
  });

  it("should correctly identify the number of unique paths for a 3x3 grid", () => {
    const result = new RobotPaths(3).solve();
    expect(result).toEqual(12);
  });

  it("should correctly identify the number of unique paths for a 4x4 grid", () => {
    const result = new RobotPaths(4).solve();
    expect(result).toEqual(184);
  });

  it("should correctly identify the number of unique paths for a 5x5 grid", () => {
    const result = new RobotPaths(5).solve();
    expect(result).toEqual(8512);
  });

  it("should correctly identify the number of unique paths for 6x6 grid", () => {
    const result = new RobotPaths(6).solve();
    expect(result).toEqual(1262816);
  });
});
