export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>🗑</button>
    </li>
  );
}