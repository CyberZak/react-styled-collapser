# Slide up/down component for React + Styled Components

React component for sliding up and down it's content.

See [DEMO](https://lexkrstn.github.io/react-styled-collapser/)

## Benefits:

- Does not depend on any external effect library (yes, **NO jQuery**).
- Fast animations. The effect is done with **CSS3** transitions.

## Installation

```bash
npm i -S react-styled-collapser
```

## Example of use

```javascript
<Button onClick={this.toggle} expanded>
    {this.state.collapsed ? 'Reveal' : 'Hide'}
</Button>
<Collapser collapsed={this.state.collapsed}>
    ...
</Collapser>
```

For more examples take a look into `/src/docs/index.js`.

## Props

- `collapsed` (*boolean*) Defines current state.
- `duration` (*integer, default=200*) Effect duration in milliseconds.
- `easing` (*string, default="ease"*) CSS3 easing function.
- `collapsedHeight` (*integer, default=0*) Maximum height of content shown in
  collapsed state.
- `hasCropper` (*integer, default=true*) Whether to show a shrinked content
  indicator line in half-collapsed state.
