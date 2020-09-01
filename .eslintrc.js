module.exports = {
	parser:	'@typescript-eslint/parser',
	plugins: [
		'react-hooks',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'react-hooks/exhaustive-deps': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
