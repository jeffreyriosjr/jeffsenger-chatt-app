import { ChatEngine } from 'react-chat-engine';
import  LoginForm  from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

  return (
    
    <ChatEngine 
    height="100vh"
    projectID="ab293aa5-2bd0-4d39-a844-1fdaaa3b9f90"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  );
};




export default App;
