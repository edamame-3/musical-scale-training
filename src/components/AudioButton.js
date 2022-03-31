
const AudioButton = ({value, url, color}) => {
  const audio = new Audio(url);
  const handleClick = () => {
    audio.play();
  }
  const buttonStyle = {
    lineHeight: '100%',
    fontSize: 'xx-large',
    color: '#333',
    fontWeight: '900',
    backgroundColor: color,
  }
  return (
    <button style={buttonStyle} onClick={() => handleClick()}>{value}</button>
  );
};

export default AudioButton;
