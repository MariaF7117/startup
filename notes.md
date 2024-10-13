## This Page is for Notes for the Midterm and Final

### Github Assignment (What I Learned)
  The biggest thing I learned from this assignment was how to resolve merge conflicts in github. Very vital information to know for the future, so here is some documentatio for future Maria.
```sh
➜  git fetch
➜  git status
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

➜  git pull

Auto-merging test.md
CONFLICT (content): Merge conflict in test.md
Automatic merge failed; fix conflicts and then commit the result.
```

We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

```sh
➜  git commit -am "merge(notes) combined both edits"
➜  git push
```
These notes are taken from the gitHub.md assignment which full documentation can be found here [GitHub Assignemnt](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md)

# CSS Notes for Midterm

## CSS Basics
- **CSS (Cascading Style Sheets)**: Used to style HTML documents.
- **Selectors**: Patterns used to select elements to style.
  - **Type Selector**: `div`, `p`, etc.
  - **Class Selector**: `.classname`
  - **ID Selector**: `#idname`
  - **Attribute Selector**: `[type="text"]`
  - **Pseudo-classes**: `:hover`, `:first-child`
  - **Pseudo-elements**: `::before`, `::after`

## Box Model
- **Components**:
  - **Content**: The actual content of the box.
  - **Padding**: Space between content and border (inside the box).
  - **Border**: A border surrounding the padding.
  - **Margin**: Space outside the border (between boxes).
- **Sizing**: `width`, `height`, `max-width`, `min-width`, `box-sizing` (default is `content-box`, change to `border-box` for easier sizing).

## Layout Techniques
- **Positioning**:
  - `static`: Default, flows with the document.
  - `relative`: Positioned relative to its normal position.
  - `absolute`: Positioned relative to the nearest positioned ancestor.
  - `fixed`: Positioned relative to the viewport.
  - `sticky`: Toggles between relative and fixed based on scroll position.

- **Display**:
  - `block`: Takes full width, starts on a new line.
  - `inline`: Takes only as much width as necessary, doesn't start on a new line.
  - `inline-block`: Like inline, but allows width and height.
  - `flex`: Enables a flexible layout.
  - `grid`: For creating grid-based layouts.

## Flexbox
- **Container properties**: 
  - `display: flex;`
  - `flex-direction`: `row`, `column`, `row-reverse`, `column-reverse`
  - `justify-content`: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`
  - `align-items`: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

- **Item properties**: 
  - `flex-grow`: Defines the ability for a flex item to grow.
  - `flex-shrink`: Defines the ability for a flex item to shrink.
  - `flex-basis`: Defines the default size of an element before the remaining space is distributed.

## Grid Layout
- **Container properties**:
  - `display: grid;`
  - `grid-template-columns`: Define the number and size of columns.
  - `grid-template-rows`: Define the number and size of rows.
  - `gap`: Space between grid items.

- **Item properties**:
  - `grid-column`: Specifies how many columns an element should span.
  - `grid-row`: Specifies how many rows an element should span.

## CSS Styles
- **Colors**: Use `hex`, `rgb()`, `rgba()`, `hsl()`, or `hsla()`.
- **Fonts**: `font-family`, `font-size`, `font-weight`, `font-style`.
- **Text**: `text-align`, `text-decoration`, `line-height`, `letter-spacing`.
- **Background**: `background-color`, `background-image`, `background-size`, `background-position`.

## Responsive Design
- **Media Queries**: Apply styles based on device characteristics.
  ```css
  @media (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
```