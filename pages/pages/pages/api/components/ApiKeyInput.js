import { useState, useEffect } from 'react'

export default function ApiKeyInput({ apiKey, onSubmit }) {
  const [inputKey, setInputKey] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  
  useEffect(() => {
    setInputKey(apiKey || '')
  }, [apiKey])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(inputKey)
    setIsEditing(false)
  }
  
  return (
    <div className="api-key-container">
      {!isEditing && apiKey ? (
        <div>
          <p>API Key: <span>••••••••{apiKey.slice(-4)}</span></p>
          <button onClick={() => setIsEditing(true)}>Change API Key</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="api-key">Enter your Anthropic API Key:</label>
          <input
            id="api-key"
            type="password"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="sk-ant-api03-..."
            required
          />
          <button type="submit">Save API Key</button>
          <p className="info-text">
            Your API key is stored only in your browser's local storage and is never sent to our servers.
          </p>
        </form>
      )}
    </div>
  )
}
