import MainPage from './pages/MainPage/MainPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:themeId" element={<QuizPage />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App;
