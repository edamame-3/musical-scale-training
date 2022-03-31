import AudioButton from './AudioButton.js';

const Board = () => {
  const boardStyle = {
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5px'
  }
  return (
    <div style={boardStyle}>
      <AudioButton value='ド' url='./assets/audio/do_1-1.mp3' color='#ff7f7f' />
      <AudioButton value='レ' url='./assets/audio/re_1-2.mp3'color='#ff7fff' />
      <AudioButton value='ミ' url='./assets/audio/mi_1-3.mp3' color='#7f7fff'/>
      <AudioButton value='ファ' url='./assets/audio/fa_1-4.mp3' color='#7fffff'/>
      <AudioButton value='ソ' url='./assets/audio/sol_1-5.mp3' color='#7fffbf' />
      <AudioButton value='ラ' url='./assets/audio/la_1-6.mp3' color='#bfff7f' />
      <AudioButton value='シ' url='./assets/audio/si_1-7.mp3' color='#ffff7f' />
      <AudioButton value='ド' url='./assets/audio/do_1-8.mp3' color='#ffbf7f' />
    </div>
  );
};

export default Board;
