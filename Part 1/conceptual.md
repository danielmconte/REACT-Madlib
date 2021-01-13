### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
		It's a front-end library that specializes in the creation of components that can be easily used over and over. 

- What is Babel?
	A transpiler needs to interpret jsx.

- What is JSX?
	JSX refers to the syntax that combines the conventions of html and javascript.

- How is a Component created in React?
	In it's own file, a component is created and then called in another file.

- What are some difference between state and props?
	A state can change, but a prop does not.

- What does "downward data flow" refer to in React?
	Information being passed down to component children.  For example, props are often passed down 
	from a "higher" component to components initiated within that component, and so on.

- What is a controlled component?
	When the component stays on top of any changes, a common example is with a form that tracks the input as it is typed.

- What is an uncontrolled component?
	When a component is using something external to itself, for example an api, that it can't monitor every change.

- What is the purpose of the `key` prop when rendering a list of components?
	To give a unique id to each element in the list.  

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	The position of an element in an array is liable to change, and so it's key prop would change as well.  We prefer the key prop
	to be tied to the element for the duration of its tenure (ie as long as the app is running).  

- Describe useEffect.  What use cases is it used for in React components?
	For "side effects," it is used for fetching data, timers.  Sets the component up so that it is not restarting the timer 
	or fetching the data everytime the component rerenders.  

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	useRef is used for something, such as a video, that needs to persist across renders.  It does not cause a rerender for every change.  
	In the example of the video a it would keep track of the timestamp in the video, even if the component changed something about the playback (like speeding it up).

- When would you use a ref? When wouldn't you use one?
	The example above of a video that you do not want to restart, just because some effect like playback speed is changed.

- What is a custom hook in React? When would you want to write one?
	Custom hooks are components that are used to handle repeating logic, so that we are not writing the same code over and over and over again.
