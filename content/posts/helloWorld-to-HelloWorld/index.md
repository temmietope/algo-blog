---
title: helloWorld to Hello World
slug: helloWorld-to-HelloWorld
excerpt: Convert camelCase string to Title Case (ES6)
author: Temitope Ayodele
date: 2020-12-30
---

To convert camelCase string to Title Case (ES6)

```jsx
const convertCamelToTitleCase = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())


//Example: convertCamelToTitleCase('todayILearned')
//Result: Today I Learned
``` 