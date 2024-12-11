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

## Notes

-I noticed a recommendation online to run `npm install --save-dev @tsconfig/vite-react` and also put `"extends": "@tsconfig/vite-react/tsconfig.json"` in my tsconfig.json file...might change how the typing is getting linted. I should do this and then fix any new linter errors that appear, to be extra thorough.
