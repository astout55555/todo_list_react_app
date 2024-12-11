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
5. use Modal component in flexible way to handle updates and new todos--form data controlled using state, so I don't have to duplicate large amounts of JSX and pass on so many properties a layer deeper to a conditionally rendered NewModal

## Build Plan

0. unrelated, but I noticed a recommendation online to run `npm install --save-dev @tsconfig/vite-react` and also put `"extends": "@tsconfig/vite-react/tsconfig.json"` in my tsconfig.json file...might change how the typing is getting linted...

1. [bug] fix the Mark as Complete handler so that it also checks off the todo...will need to somehow check off that specific todo element...`checked` state is the same name for each todo, so there are multiple `setChecked` functions, with each one referencing/affecting a different `checked` state...

-cannot simply pass down a function from App to both Todo and Modal, since I need to reference a specific Todo element to check off, using its personal `setChecked` function. will need to do something with `useImperativeHandle` to expose those particular functions, but not sure how to associate it with the right todo (they would have the same name? how do I reference the correct one from Modal?)

2. when submitting modal form, use conditional flow based on value of currentTodo to decide whether to update or add a todo (part of solution to implement build plan points 3 and 4 below)

3. implement the ability to edit/update a todo by saving after editing modal form

4. implement the ability to add a todo using the modal by clicking the `+ Add new to do` link above the table and saving the form after filling it out appropriately

5. add modal form validation so adding/editing respects the form data field specifications expected by the server (and prevents submission with a relevant warning if data requirements not met)

6. implement ability to change todo data back to default (empty) values (for every field including "description", but not directly including "due date"--however, "due date" should change back to default "No Due Date" if month/year do not both keep non-default values)
