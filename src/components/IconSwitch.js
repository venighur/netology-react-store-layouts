function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons btn-switch" onClick={onSwitch}>{icon}</span>
  );
}

export default IconSwitch;