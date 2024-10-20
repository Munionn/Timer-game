import Player from './components/Player.jsx';
import TimerChellange from './components/TimerChallange.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChellange title="easy" targetTime={10}/>
        <TimerChellange title="not so easy" targetTime={5}/>
        <TimerChellange title="diffucult" targetTime={3}/>
        <TimerChellange title="imposiable" targetTime={1}/>
      </div>
    </>
  );
}

export default App;
