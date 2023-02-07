import http from "../../http";
import { useEffect, useState } from "react";
import { ITarefa } from "../../interfaces/ITarefas";
import "./ToDoLists.css";

export default function ToDoLists() {
  const token = sessionStorage.getItem("token");
  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState<ITarefa[]>([]);

  useEffect(() => {
    http
      .get<ITarefa[]>("/tarefas", authHeader)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setData(Date());

    const task = { tarefa, data };

    await http
      .post("/tarefas", task, authHeader)
      .then(() => {
        setTarefa("");
        setData("");
      })
      .catch();
  }

  async function deletaTarefa(task: ITarefa) {
    await http
      .delete(`/tarefas/${task._id}`, authHeader)
      .then(() => {
        setTasks(tasks.filter((t) => t._id !== task._id));
      })
      .catch((err) => console.log(err));
  }

  async function tarefaCompleta(task: ITarefa) {
    await http
      .put(`/tarefas/${task._id}`, { checked: "true" }, authHeader)
      .then(() => {})
      .catch((err) => console.log(err));
  }

  return (
    <div id="to-dos" className="container">
      {/* Insert Task */}
      <div className="tile is-ancestor">
        <div className="tile is-4 is-parent">
          <div className="tile is-child box">
            <div className="title-tiles insert-task">Insert Task</div>
            <div className="box-content">
              <strong>What do you need today?</strong>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label" style={{ textAlign: "left" }}>
                    Task
                  </label>
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => setTarefa(e.target.value)}
                    value={tarefa}
                    placeholder="put your task here"
                  />
                </div>
                <div className="field box-btn-form">
                  <button className="submit-btn">Submit Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* To-do List */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="title-tiles list-task">To-Do List</div>
            <div className="box-content">
              <p>
                <strong>Take a breath.</strong>
              </p>
              <p>
                <strong>Start doing.</strong>
              </p>

              <div
                className="content"
                style={{ textAlign: "left", justifyContent: "left" }}
              >
                {tasks.map((task) => (
                  <ul>
                    {!task.checked && (
                      <li
                        key={task._id}
                        draggable="true"
                        style={{ listStyle: "none" }}
                      >
                        <input
                          type="checkbox"
                          onChange={() => tarefaCompleta(task)}
                        />
                        {task.tarefa}
                        <button
                          className="btns-edit-delete"
                          onClick={() => deletaTarefa(task)}
                        >
                          <i className="fa-sharp fa-solid fa-xmark"></i>
                        </button>
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title-tiles completed-task">Completed Tasks</p>

            <div className="box-content">
              <p>Congratulations</p>
              <p>
                <strong>You've completed this tasks!</strong>
              </p>
              <div
                className="content"
                style={{ textAlign: "left", justifyContent: "left" }}
              >
                {tasks.map((task) => (
                  <ul>
                    {task.checked && (
                      <li key={task._id} style={{ listStyle: "none" }}>
                        {task.checked ? (
                          <input type="checkbox" defaultChecked />
                        ) : (
                          <input type="checkbox" />
                        )}
                        {task.tarefa}
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
