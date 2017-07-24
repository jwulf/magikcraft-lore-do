# magikcraft-lore-do

An iterator the way the Gods intended

To use:

```
yarn add magikcraft-lore-do
```

In Typescript:

```
import { Do } from 'magikcraft-lore-do'

// Do 10 fireballs with a 0.5 second (500ms) delay between each one.

Do(10).times(magik.infierno).delay(500).start();
```

In JavaScript:

```
const Do = require('magikcraft-lore-do');

Do(10).times(magik.infierno).delay(500).start();
```