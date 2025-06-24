
const TopBar = () => {
  return (
    <div className="top-bar">
      <a href="mailto:example@example.com">Mail to: example@example.com</a>
      <div className="icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};
export default TopBar;
