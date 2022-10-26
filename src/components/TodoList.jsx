import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos, active, setActive }) => {
  return (
    <div>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>할 일</th>
              <th>완료 상태</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoListItem
                key={index}
                todo={todo}
                setTodos={setTodos}
                index={index}
                setActive={setActive}
              />
            ))}
          </tbody>
        </table>

        <input
          type="checkbox"
          id="my-modal-5"
          className="modal-toggle"
          checked={active}
        />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div
              className="flex justify-center items-center w-7 p-1 ml-auto cursor-pointer"
              onClick={() => {
                setActive(false);
              }}
            >
              ✕
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setActive(false);
                }}
              >
                <div>수정할 할 일을 입력해 주세요</div>
                <input
                  type="text"
                  className="border rounded-md border-gray-500 w-60 h-30"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
