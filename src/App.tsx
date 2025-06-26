import './App.css'
import Alert from './components/shared/Alert'
import Button from './components/shared/Button'
import Input from './components/shared/Input'
import Text from './components/shared/Text'
import TextField from './components/shared/TextField'
import { useAlertContext } from './context/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text color="blue">t1</Text>
      <Button>button</Button>
      <Input placeholder="login" />

      <TextField label="아이디" />

      {/* <Alert
        title="알림"
        onButtonClick={() => {}}
        open={true}
        description="알럿"
      ></Alert> */}
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: 'dd',
            onButtonClick: () => {},
          })
        }}
      >
        알럿 오픈
      </Button>
    </div>
  )
}

export default App
