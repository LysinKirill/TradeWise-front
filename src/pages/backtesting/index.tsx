export default function Backtesting() {
  return (
    <div className="page-backtesting">
      <h2>Strategy Backtesting</h2>
      <div className="backtest-controls">
        <button>Run Backtest</button>
        <select>
          <option>Select Strategy</option>
        </select>
      </div>
    </div>
  );
}