

const Todo = ({todo}) => {


  return (
    <>
      <td className="list_item">
        this is where the todo info goes, but I need to convert it from handlebars...
        {/* {{#if completed}}
        <input type="checkbox" name="item_{{id}}" id="item_{{id}}" checked/>
        {{else}}
        <input type="checkbox" name="item_{{id}}" id="item_{{id}}"/>
        {{/if}}
        <span className="check"></span>
        <label for="item_{{id}}">{{title}} - {{due_date}}</label> */}
      </td>
      <td className="delete">
        <img src="images/trash.png" alt="Delete"/>
      </td>
    </>
  )
}

export default Todo;