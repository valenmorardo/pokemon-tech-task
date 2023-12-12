module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},

	plugins: ['node', 'import', 'prettier'],
	
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:node/recommended',
		'plugin:import/errors',
		'plugin:prettier/recommended',
	],
	
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-console': 'warn',
		'no-unused-vars': ['error', { 'args': 'none' }],
		'require-await': 'error',
		'strict': ['error', 'global'],


	},
};
