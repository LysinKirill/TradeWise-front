import { useState } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="page-settings">
      <h2>Platform Settings</h2>
      <div className="settings-group">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
}