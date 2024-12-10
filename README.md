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

## Modal Consolidation Plan

1. [bug] event delegation logic for check vs select todo is not completely typed correctly
2. [restructure]: should not be tracking both `modalVisible` and `currentTodo` states, such that the modal can be displayed because `currentTodo` is not null, while `modalVisible` is still false. see step 3 & 4 for implementing this:
3. when modal is rendered (`useEffect` with `currentTodo` dependency), if currentTodo, setModalVisible to true, setFormData to match values from currentTodo (and setModalVisible to false and setFormData to defaults if currentTodo is null)
4. as part of implementing 3, must change JSX to control the various data inputs with the associated input states. will need to vary approach/typing based on types of elements

## Build Plan

0. implement changes required to follow design point 5 above -- consolidate components and set formData state appropriately (see Modal Consolidation Plan above)

1. implement the ability to add a todo using the modal by clicking the `+ Add new to do` link above the table and saving the form after filling it out appropriately

2. implement modal function of populating with currentTodo data when opened by clicking on a todo label

3. implement ability to mark/update a todo as complete using modal "mark complete" button

4. implement the ability to edit/update a todo by saving after editing modal form

5. add modal form validation so adding/editing respects the form data field specifications expected by the server (and prevents submission with a relevant warning if data requirements not met)

6. implement ability to change todo data back to default (empty) values (for every field including "description", but not directly including "due date"--however, "due date" should change back to default "No Due Date" if month/year do not both keep non-default values)
