# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/skhbabez/news-homepage-main](https://github.com/skhbabez/news-homepage-main)
- Live Site URL: [https://skhbabez.github.io/news-homepage-main/](https://skhbabez.github.io/news-homepage-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was an interesting exercise to practice semantic layouts. I spent some time studying websites to get a general idea how to lay this page out.

I decided to use this as an opportunity to practice container queries to control the layout. This also gave me an opprtunity to use counter to create custom list elements. 

```css
  .container {
    container-type: inline-size;
  }

  .popular-articles {
    & ol {
      display: flex;
      flex-direction: column;
      counter-reset: count 0;

      @container (min-width : 1024px) {
        flex-direction: row;
      }
    }
    & img {
      aspect-ratio: 100/130;
      max-inline-size: 100px;
      object-fit: cover;
    }
    .article-content {
      counter-increment: count 1;

      &::before {
        content: counter(count, decimal-leading-zero);
      }
    }
  }
```

Implementing the menu was not as straightforward as I thought it would be. At first I made it responsive by reusing the same menu. But this was difficult to implement with a dialog. I eventually decided to go for a simpler approach and just duplicated the menu.

```html
 <div aria-live="assertive" aria-atomic="true">
          <nav
            class="main-navigation-mobile"
            id="main-navigation"
            aria-label="main navigation"
          >
            <dialog>
              <button id="close-button" type="button" aria-label="close menu">
                <img src="assets/images/icon-menu-close.svg" alt="" />
              </button>
              <ul>
<!-- content -->
              </ul>
            </dialog>

            <button
              id="open-button"
              type="button"
              aria-label="open menu"
              aria-haspopup="dialog"
            >
              <img src="assets/images/icon-menu.svg" alt="" />
            </button>
          </nav>
          <nav class="main-navigation" aria-label="main navigation">
            <ul>
<!-- content -->
            </ul>
          </nav>
        </div>
```

### Continued development
I am not perfectly happy with my semantic layout and accessibility. I will keep reading though some more materialand try to apply what I Learned her to the next projecz

### Useful resources

- [Fat Footer](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element) - This helped better understand what a fat footer is and how to implement it.
- [article vs section](https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/) - Great article on how to decide when to use a section or an article.
- [aria atomic](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/#aria-atomic%3A-what-is-contained-in-an-announcement%3F) - Great article on how to use aria live regions.
- [functional images](https://www.w3.org/WAI/tutorials/images/functional/#example-3-icon-image-conveying-information-within-link-text) -Good resource that helped me create better functional images.

