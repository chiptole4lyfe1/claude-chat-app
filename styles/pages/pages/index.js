import { useState, useEffect } from 'react'
import Head from 'next/head'
import ApiKeyInput from '../components/ApiKeyInput'
import Chat from '../components/Chat'

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  
  useEffect(() => {
    // Load API key from localStorage when component mounts
    const savedApiKey = localStorage.getItem('anthropicApiKey')
    if (savedApiKey) {
      setApiKey(savedApiKey)
    }
  }, [])

  const handleApiKeySubmit = (key) => {
    // Save API key to localStorage
    localStorage.setItem('anthropicApiKey', key)
    setApiKey(key)
  }

  return (
    <div className="container">
      <Head>
        <title>Claude 3.7 Chat with Extended Thinking</title>
        <meta name="description" content="Chat with Claude 3.7 Sonnet with extended thinking mode enabled" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Claude 3.7 Chat with Extended Thinking</h1>
        
        <ApiKeyInput 
          apiKey={apiKey}
          onSubmit={handleApiKeySubmit}
        />
        
        {apiKey && <Chat apiKey={apiKey} />}
      </main>
    </div>
  )
}
