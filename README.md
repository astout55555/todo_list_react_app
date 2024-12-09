# Todo List React App (frontend only)

## Author: Alex Stout

# Development Plan

## General Design

1. copy over all html as the returned jsx/tsx for the app component. not using handlebars for this version, so each handlebars script tag should be replaced by a component handling the same stuff, which will use that markup itself instead
  -note: do not need to produce the sidebar and its complicated behavior! remove scripts/html associated with only the sidebar
  -keep classes (change to `className`) to use the same css
2. use a `todoListService` to handle the CRUD operations for the todoList
  -ensure CRUD operations are reflected in the server and the browser / component states
3. fetch all todos from the server on load with `useEffect` hook
4. when todo is selected, change `currentTodo` state by selecting the correct Todo from the list using its ID (accessible as data on the element?) - use `currentTodo` info to populate modal - change state to null when modal is closed

## Build Plan

1. update error handling to avoid duplication?

2. build the modal form with appropriate inputs and placeholder text

3. implement the ability to add a todo using the modal by clicking the `+ Add new to do` link above the table

4. implement the ability to edit/update a todo by clicking on its label and changing the information in the modal (which should populate with selected Todo's info)

5. implement ability to close modal by clicking outside it, avoiding any add/edit of a todo and resetting the form values for the next time it is opened

6. implement ability to mark/update a todo as complete using modal "mark complete" button

7. add warning that action cannot be done when user clicks "Mark As Complete" when adding a new todo

8. implement ability to change todo data back to default (empty) values (for every field including "description", but not directly including "due date"--however, "due date" should change back to default "No Due Date" if month/year do not both keep non-default values)
