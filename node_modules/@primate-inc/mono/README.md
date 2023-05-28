```
      ___           ___           ___           ___     
     /__/\         /  /\         /__/\         /  /\    
    |  |::\       /  /::\        \  \:\       /  /::\   
    |  |:|:\     /  /:/\:\        \  \:\     /  /:/\:\  
  __|__|:|\:\   /  /:/  \:\   _____\__\:\   /  /:/  \:\ 
 /__/::::| \:\ /__/:/ \__\:\ /__/::::::::\ /__/:/ \__\:\
 \  \:\~~ \_\/ \  \:\ /  /:/ \  \:\~~\~~\/ \  \:\ /  /:/
  \  \:\        \  \:\  /:/   \  \:\        \  \:\  /:/ 
   \  \:\        \  \:\/:/     \  \:\        \  \:\/:/  
    \  \:\        \  \::/       \  \:\        \  \::/   
     \__\/         \__\/         \__\/         \__\/    

```

## Welcome to MONO

MONO is a framework agnostic utility library for scss. It helps to manage your styles between Figma Tokens and your project.

## Installation

For now entirely manual.

Future Installation

Requirements

- npm package installer (npm, yarn, pnpm, etc)
- Dart Sass compiler


```
pnpm add -D @primate-inc/mono

pnpm mono init -p ./styles
```

This will install MONO and copy files into the `styles/mono`. Replace example `tokens.json` file with your [DesignTokens](https://github.com/lukasoppermann/design-tokens) exported from Figma. Next you can update all the other files to match your preferences and new tokens file.

```
pnpm mono tokens -p ./styles
```

Next you can import mono at the beginig of your stylesheet `@import 'styles/mono';` and compile you scss files using preffered tool.

## Usage

MONO contains a set of helpful functions and mixins to use your tokens data more efficiently.

### Typography mixin:

This converts typography token into responsive css styles.

```
@include typography(header)
```

### Screen mixin:

This serves as a media query generator. Simply provide it with a breakpoint from tokens and properties.

```
@include screen(desktop) {
      margin-left: 2rem;
}
```

### Token function:

Mostly used to assign tokens to more functional slots, but can also be used to assign a value to css property.

```
$slots: (
    page: (
        background: token(color, blue, 500);
    )
);
```
or
```
div {
    background: token('color', 'white');
}
```

#### Slot function:

Slots are like a catalog for your styles. Their names are more meaningful and functional comparing to tokens.

```
body {
    background: slot(page, background);
}
```
or
```
:root {
    --text-color: slot(page, text);
}
```

#### Responsive Slot mixin:

You can use your slot as responsive using breakpoints names as keys in a map instead of the value in $slots map.

```
$tokens: (
    breakpoints: (
        desktop: ...,
        tablet: ...,
        ...etc
    )
);
```

Note: `default` and any custom breakpoints can be added in $slots map.


```
$slots: (
    grid: (
        wide: (
            default: '1 / -1',
            tablet: '3 / -3',
            desktop: '3 / 8,
        )
    )
);
```
```
div {
      @include responsive-slot('grid-column', grid, wide);
}
```

## License
This project is licensed under the MIT License.

