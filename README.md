1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:  getElementById return a single element. Unique id. getElementsByName return  NodeList pass CSS3 selector. querySelector is more flexible,  pass it any CSS3 selector and capture first one.  querySelectorAll returns NodeList, pass it any CSS3 selector. 
	     
2.	How do you create and insert a new element into the DOM?
Answer: 	i) first create an element  document.createElement(‘div’)
		ii) Second set the content inside the element  div.innerText = “li”
		iii) third append the child(div) inside the element  container.appendChild(div)
3.	What is Event Bubbling and how does it work?
Answer: Event bubbling  is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM.
How it works?
Answer:When an element is clicked like  button inside a div.  First click on the button. Then it upward to the parent div, then to body, then to html, and last to document. Unless stopped (event.stopPropagation()), The event handler in each parent will also be triggered.
4.	 What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique where  placed a single listener on a common parent element, rather than having separate event listeners for multiple child elements. Then, using event bubbling, you can tell which child the event occurred on.
Why is it useful?
There is only one listener for a parent, no need to give separate listeners for thousands of children..
5.	What is the difference between preventDefault() and stopPropagation() methods?
Answer: two method use in event handling. But they work differently.
preventDefault() stops default behavior of any element like button
stopPropagation() : Prevents an event from bubbling  to the parent element. This means the event will only stop at the target element. 
