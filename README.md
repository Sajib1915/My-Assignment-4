# Job Application Tracker

A simple job application tracking web app built with HTML, CSS, and Vanilla JavaScript.

## Features

- View all available job listings
- Mark jobs as Interview or Rejected
- Toggle between Interview and Rejected status
- Delete jobs from the list
- Dashboard showing total, interview, and rejected counts
- Responsive design for mobile devices

---

## Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

These are all ways to select elements from the DOM, but they work a bit differently from each other.

`getElementById` looks for a single element that has a specific `id`. Since an id is supposed to be unique on a page, it always returns just one element. I used this in my project to grab things like the dashboard counters — for example, `document.getElementById("totalCount")`.

`getElementsByClassName` is different because it returns all elements that share a certain class name, not just one. The result is something called an HTMLCollection, which is similar to an array. So if I wrote `document.getElementsByClassName("tab")`, it would give me all three tab buttons at once.

`querySelector` is my personal favorite because it is the most flexible. You can pass any CSS selector into it — like `"#id"`, `".class"`, or even `"div > p"`. The catch is that it only returns the first matching element it finds. `querySelectorAll` does the same thing but returns all matching elements as a NodeList, which I can loop through. In this project I used `document.querySelectorAll(".tab")` to get all the tab buttons and add click events to each one.

---

### 2. How do you create and insert a new element into the DOM?

To create a new element, I use `document.createElement()` and give it the tag name I want. After that, I can set its content using `innerHTML` or `textContent`, and add classes using `classList.add()`. Finally, I attach it to the page using `appendChild()`.

Here is a simple example:

```javascript
const card = document.createElement("div");
card.classList.add("job-card");
card.innerHTML = "<p>New Job</p>";
document.getElementById("jobContainer").appendChild(card);
```

I used this exact pattern in my `renderCards()` function. Every time the page loads or a button is clicked, I create fresh job cards using `createElement` and append them into the job container.

---

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is the way JavaScript handles events by traveling upward through the DOM. When you click on an element, the event does not just stay on that element — it "bubbles up" to its parent, then to the grandparent, all the way up to the `document`.

A simple example to understand this:

```html
<div onclick="alert('div clicked')">
  <button onclick="alert('button clicked')">Click me</button>
</div>
```

If I click the button, I will first see "button clicked" and then immediately "div clicked" — even though I only clicked the button. That is event bubbling in action. The click event fired on the button and then traveled up to the div.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a smarter way of handling events. Instead of putting an event listener on every single child element, I put just one listener on the parent and let bubbling do the rest. When a child is clicked, the event bubbles up to the parent, and I check which child triggered it using `e.target`.

```javascript
document.getElementById("jobContainer").addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-interview")) {
    // handle interview button click
  }
});
```

This is really useful for two reasons. First, it saves memory because I only need one listener instead of many. Second, it works perfectly with dynamically created elements — elements that did not exist when the page first loaded. Since my job cards are created dynamically with JavaScript, event delegation is a great fit for this kind of project.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Both methods are called on an event object, but they do completely different things.

`preventDefault()` stops the browser from doing what it normally would for that element. For example, clicking a link usually takes you to a new page. If I call `preventDefault()` on that click event, the page will stay where it is.

```javascript
document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault(); // stops the page from navigating
});
```

`stopPropagation()` on the other hand does not care about the browser's default behavior. It just stops the event from bubbling up to parent elements. So if I click a button inside a div and I call `stopPropagation()` on the button's click event, the div will never know the click happened.

```javascript
document.querySelector("button").addEventListener("click", function(e) {
  e.stopPropagation(); // event stops here, parent won't hear it
});
```

The simplest way I think about it: `preventDefault()` controls what the browser does after the event, while `stopPropagation()` controls how far the event travels through the DOM.
