```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
}
```