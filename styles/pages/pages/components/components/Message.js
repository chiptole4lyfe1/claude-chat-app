import ReactMarkdown from 'react-markdown'

export default function Message({ content, role, thinking }) {
  return (
    <div className={`message ${role === 'user' ? 'user-message' : 'assistant-message'}`}>
      {thinking ? (
        <div className="thinking">Claude is thinking...</div>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  )
}
