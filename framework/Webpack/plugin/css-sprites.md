```
const SpritesmithPlugin = require('webpack-spritesmith');

```
```
new SpritesmithPlugin({
	src: {
		cwd: resolve(__dirname, 'public/assets/sprites/'),
		glob: '**/*.png'
	},
	target: {
		image: resolve(__dirname, 'public/assets/sprites.png'),
		css: [
			[resolve(__dirname, 'public/assets/style/sprites.css'), {
				
				format: 'function_based_template'
			}],
		]
	},
	customTemplates: {
		'function_based_template': templateFunction,
	},
	apiOptions: {
		cssImageRef: '~sprites.png',
		handlebarsHelpers: {half: function (num) { return num/2; }}
	},
	spritesmithOptions: {
		padding: 4,
	}
})
```

```
var templateFunction = function (data) {
    var shared = '.ico { background-image: url(I); transform:scale(0.5); display: inline-block; }'
        .replace('I', data.sprites[0].image);
 
    var perSprite = data.sprites.map(function (sprite) {
        return '.ico-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
            .replace('N', sprite.name)
            .replace('W', sprite.width )
            .replace('H', sprite.height)
            .replace('X', sprite.offset_x)
            .replace('Y', sprite.offset_y);
    }).join('\n');
 
    return shared + '\n' + perSprite;
};
```
