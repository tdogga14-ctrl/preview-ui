export default function App() {
  return (
    <div className="min-h-screen p-10">
      <div className="preview-loading">
        <i>⏳</i>
        <p>Preview UI plugin is loaded if this is centered + spaced.</p>

        <div className="progress">
          <div className="progress-bar" style={{ width: "60%" }} />
        </div>

        <div className="skeleton mt-4" />
      </div>
    </div>
  );
}
