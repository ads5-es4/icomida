module.exports = {
	default: {
		require: ["business/features/**/*.ts"],
		format: ["@cucumber/pretty-formatter"],
		paths: ["business/features/**/*.feature"],
		requireModule: ["ts-node/register"],
	},
};
