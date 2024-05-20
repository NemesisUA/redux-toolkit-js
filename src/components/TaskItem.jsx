import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeTask, toggleComplete } from '../store/tasksSlice';

const TaskItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />

      <span>{text}</span>

      <span className='delete-item'
        onClick={() => dispatch(removeTask({ id }))}
      >&times;</span>
    </li>
  )
}

export default TaskItem

TaskItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
}