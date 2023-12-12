module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],

	"plugins": [
		
		[
		  "module-resolver",
		  {
			"root": ["./src/index.js"], 
			"alias": {
				"@config": '.src/config'
			}
		  }
		]
	  ]
};
