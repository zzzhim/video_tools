import { Button } from "@mui/material"
import styles from "./index.module.scss"

const Home = () => {
  const handleConcat = () => {
    window.electron.ipcRenderer.sendMessage("ipc-examples", [ 111 ])
  }

  return <div>
    <span className={styles.a}>333</span>
    <Button onClick={() => handleConcat()}>合并字幕</Button>
  </div>
}

export default Home
