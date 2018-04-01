// Nau standard eslint rules, save it as .eslintrc.js
module.exports = {
	root: true,
	extends: ['nau'],
	rules: {
		strict: 'off',
		'no-var': 'off',
		'vars-on-top': 'off',
		'prefer-template': 'off',
		'object-shorthand': 'off',
		'no-use-before-define': 'off',
		'prefer-arrow-callback': 'off',
		'no-param-reassign': 'off',
		'global-require': 'off',
		'no-restricted-syntax': 'off',
		'no-redeclare': 'off',
		'no-prototype-builtins': 'off',
		'no-mixed-operators': 'off',
		'no-shadow': 'off',
		'new-cap': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'ignore',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'import/no-unresolved': [2, { ignore: ['keystone'] }],
	},
	globals: {
		$: true,
		grecaptcha: true,
		autoComplete: true,
	},
	env: {
		node: true,
		browser: true,
	},
	plugins: ['import'],
};
