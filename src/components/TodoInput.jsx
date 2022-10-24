import React, { useState } from "react";

const TodoInput = ({ todos, nextId, setTodos }) => {
  const [value, setValue] = useState("");
  return (
    <div className="form-control w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = { id: nextId.current, content: value, checked: false };
          setTodos((prev) => prev.concat(todo));
          nextId.current++;
          setValue("");
        }}
      >
        <label className="label">
          <span className="label-text-alt">할 일을 추가해주세요!</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoInput;
