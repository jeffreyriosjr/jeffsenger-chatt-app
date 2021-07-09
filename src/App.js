import { ChatEngine } from 'react-chat-engine';
import Header from './components/Header';
import  LoginForm  from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = 'ab293aa5-2bd0-4d39-a844-1fdaaa3b9f90';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <Header /> 
     
    <ChatEngine 
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
};




export default App;
