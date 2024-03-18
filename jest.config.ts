import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => ({
	preset: "ts-jest",
	testEnvironment: "node",
	modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],

	//In order for the tests to work, this must be uncommented

	transform: {
		"^.+\\.ts?$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.test.json",
			},
		],
	},

	verbose: true,
	clearMocks: true,
});
