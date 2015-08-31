# manifest-loader

given params like this:

`var manifestParams = '?relativeSplit=images/&prefix=dist/images&manifest=rev-manifest&outputDir=' + path.join(__dirname, 'public', 'dist');`

and a manifest like this

`{
  "about-us.jpg": "about-us-9af871125c.jpg",
  "android-badge-grey.png": "android-badge-grey-a600bf6aa2.png"
}`

and a require like this

`var about = require('../images/about-us.jpg');`

you get

`var about = require('../public/dist/images/about-us-9af871125c.jpg');`

