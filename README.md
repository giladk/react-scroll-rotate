# react-scroll-rotate ([demo](https://giladk.github.io/react-scroll-rotate/))
Very simple react component for rotate element based on scroll position

[![NPM](https://img.shields.io/npm/v/react-scroll-rotate.svg)](https://www.npmjs.com/package/react-scroll-rotate)

## Install

```bash
npm install --save react-scroll-rotate
```

## Usage

```jsx
import React, { Component } from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';

function MyTitleComp(props) {
    return (<MyTitleWrapper>
        Hello <ScrollRotate><span>world</span></ScrollRotate>
    </MyTitleWrapper>)
}
```

## Props

| Property      | Type               | Default                               | Description                                                                                                                                  |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `target`  | string | null | Target element id. By default it will use window scroll |
| `throttle`  | number           | null                                  | Use 'throttle' prop to invoke the update once in X seconds |
| `from`  | number           | 0                         | Rotation start point  |
| `to`  | number           | 360                                  | Rotation end point |
| `method`  | string           | 'px'                         | Use 'perc' to change rotation based on scroll percantges. |
| `loops`  | number           | 1                                  | When using method 'perc', define how many loops component will do while scrolling to bottom |
| `animationDuration`  | number           | 0.1                                  | Animation duration  |

## License

MIT
