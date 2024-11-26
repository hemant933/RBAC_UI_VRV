import React, { useEffect } from 'react'
import MainScreen from '../MainScreen'
import {Link}  from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux'
import  {deleteTask, getTasks}  from '../../actions/taskActions'
import Loading from '../Loading'
import ErrorMessage from '../ErrorMessage'
function MyTasks() {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.taskList);
  const { loading, tasks, error } = taskList;
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const taskDelete = useSelector(state => state.taskDelete);
  const {loading:loadingDelete, error:errorDelete, success:successDelete} = taskDelete;
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
       dispatch(deleteTask(id));
       window.location.reload();
    }
  }
  useEffect(() => {
    dispatch(getTasks());
    if (!userInfo) {
      window.location.href = '/';
    }
  }, [dispatch, userInfo, successDelete]);
  console.log(tasks);
  return (
    <MainScreen title={`Welcome Back ... ${userInfo.name}`}>
      <Link to="createtask">
        <Button className="btn btn-primary">Create a Task</Button>
      </Link>
      {errorDelete && <ErrorMessage variant='danger' >{errorDelete}</ErrorMessage>}
      {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
      {loading && <Loading />}
      {tasks?.map(task => (
        <Accordion key={task._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: 'flex' }}>
              <span style={{
                color: 'black',
                textDecoration: 'none',
                flex: 1,
                cursor: 'pointer',
                alignSelf: 'center',
                fontSize: 18,
              }}>
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                  {task.title}
                </Accordion.Header>
              </span>
              <div>
                <Button href={`/task/${task._id}`}>Edit</Button>
                <Button variant='danger' className='mx-2' onClick={() => deleteHandler(task._id)}>Delete</Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant='success'>Category - {task.category}</Badge>
                </h4>
                <blockquote className='blockquote mb-0'>
                  <p>
                    {task.content}
                  </p>
                  <footer className='blockquote-footer'>
                    Created on - <cite title='Source Title'>{task.createdAt.substring(0, 10)}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
       ))}
    </MainScreen>
  )
}

export default MyTasks