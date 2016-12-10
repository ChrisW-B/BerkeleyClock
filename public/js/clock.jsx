function tick() {
  const element = (
    <div>
      {new Date().toLocaleTimeString('en-US', {hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' }).slice(0, -2)}
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('time')
  );
}

setInterval(tick, 1000);