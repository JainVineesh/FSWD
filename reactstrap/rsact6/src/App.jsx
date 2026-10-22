import './App.css'
import OrderStatusTracker from './components/OrderStatusTracker'
import ProfileSettingsTabs from './components/ProfileSettingsTabs'
import TaskListGroup from './components/TaskListGroup'
function App() {

  return (
    <div>
      <OrderStatusTracker/>
      <ProfileSettingsTabs/>
      <TaskListGroup/>
    </div>
  )
}

export default App
