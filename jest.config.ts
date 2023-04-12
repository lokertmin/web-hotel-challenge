/* eslint-disable */
export default {
  displayName: "hotel-challenge",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nrwl/react/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["./src/testUtils/setupTests.ts"],
};
