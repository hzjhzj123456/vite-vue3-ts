module.export = {
	env:{
		broswer:true,
		es2021:true,
		node:true,
	},
	extends:['plugin:vue/essential','airbnb-base'],
	parserOptions:{
		ecmaVersion:12,
		parser:'@typescript-eslint/parser',
		sourseType:'moudle',
	},
	plugin:['vue','@typescript-eslint'],
	rules:{}
}
