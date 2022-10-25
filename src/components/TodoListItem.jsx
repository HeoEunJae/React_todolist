import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = ({ todo, setTodos }) => {
  const { id, content, checked } = todo;
  return (
    <tr>
      <th>{id}</th>
      <td>{content}</td>
      <td>
        <div
          onClick={() => {
            alert("체크 출력됨");
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit">
        <div>
          <MdModeEditOutline />
        </div>
      </td>
      <td className="remove">
        <div
          onClick={() => {
            alert("클릭은 되냐");
            setTodos((todos) => todos.filter((todo) => todo.id !== id));
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
