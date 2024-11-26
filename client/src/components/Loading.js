import { Spinner } from "react-bootstrap"
function Loading() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
        }}>
        <Spinner animation='border' variant='primary' />
        </div>
  )
}

export default Loading