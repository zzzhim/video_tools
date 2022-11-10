import { Button } from "@mui/material"

const Home = () => {
  const handleConcat = () => {
    window.electron.ipcRenderer.sendMessage("ipc-examples", [ 111 ])
  }

  return <div>
    <Button onClick={() => handleConcat()}>合并字幕</Button>
  </div>
}

export default Home
