# Welcome to the Primate's Test Task for Front End Developers!

This project serves as an assessment of your skills and provides an opportunity to showcase your abilities.

## Task Description

Your task will focus on HTML and CSS (SCSS) and will involve working with the project structure and using GitHub. You will be assessed on your knowledge of working with design files.

Please fork this repository and when you are done with your work create a PR so we can take a look at your work. Thank you.

The task is to add Call to action and listing components to the project. For the CTA component, you need to write semantic HTML structure along with CSS styles that match the provided designs. For the listing component, the HTML structure is already provided, so focus on the CSS styles and make changes only if necessary.

## Getting Started

To start the project, you will need a node (at least v16 but we used v18 in project tests) and a node package manager such as npm, yarn, pnpm, etc. 
Once you've got it, follow these steps:

1. Install dependencies: `pnpm install`
2. Run the project: `pnpm start`
3. Go to [http://localhost:1234](http://localhost:1234) to see the project.

## Note

### Parcel
We use parcel for compilation, it sometimes struggle with updating after changes. Just give it a restart, re-running `pnpm start` command and it should be good to go.

### Mono
This project uses the `@primate-inc/mono` package, which provides helpful utilities for working with SCSS and Figma. You are encouraged to explore and leverage this package during your development process.

Examples of how to use this package can be found within this project. For more information, you can also visit the package repository at [https://github.com/primate-inc/mono](https://github.com/primate-inc/mono).

Feel free to reach out if you have any questions or need assistance during the test task. Good luck!

### NOTES

1 - address feedback notes:

1a - address box heights - look into margin top and bottom / see if possible to overlay figma image or screenshot and match this
1b - address CTA feedback comments

2 - try and refactor code to use mixin / mono package
3 - add an extra breakpoint for Ipad

