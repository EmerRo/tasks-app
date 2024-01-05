import Taslist from "./components/Taslist"
import TaskForm from "./components/TaskForm"



function App() {
 return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Taslist />
      
      </div>
    </main>
  )
}

export default App