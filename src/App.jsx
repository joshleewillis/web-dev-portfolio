import './App.css';
import Header from './Components/Header.jsx';
import ProjectGrid from './Components/ProjectGrid.jsx';
import Footer from './Components/Footer.jsx';

function MainPortfolioPage() {
  return (
    <>
      <div id="app-container">
        <Header />
        <ProjectGrid />
        <Footer />
      </div>
    </>
  );
}

export default MainPortfolioPage;
