module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'func-names': 'off',
		'no-unused-vars': 'off',
		'no-param-reassign': 'off',
		'prefer-rest-params': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
