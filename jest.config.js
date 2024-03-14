module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: [
    "**/?(*.)+(jest).ts"
  ],
  testEnvironment: "jsdom"

  // "transform": {
  //   "^.+\\.(ts|js|html)$": "jest-preset-angular"
  // },
};
