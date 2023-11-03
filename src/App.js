import MainPage from './pages/MainPage/MainPage';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme" element={<QuizPage />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App;
