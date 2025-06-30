import {Route, BrowserRouter as Router,Routes} from "react-router-dom"

import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import HomePage from "./Pages/Homepage"
import AboutPage from "./Pages/Aboutpage"
import AdmissionPage from "./Pages/Admissionpage"
import CoursesPage from "./Pages/Coursespage"
import ContactPage from "./Pages/Contactpage"
import NotFoundPage from "./Pages/Notfoundpage"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"


const App =() =>
{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    
<>
<div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanskruti Shivaji Patil"
          studentPhotoUrl="/Images/Sanskruti.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


<Router>
  <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path ="/home" element={<HomePage/>}/>
      <Route path ="/about" element={<AboutPage/>}/>
      <Route path ="/admission" element={<AdmissionPage/>}/>
      <Route path ="/course" element={<CoursesPage/>}/>
      <Route path ="/contact" element={<ContactPage/>}/>
      <Route path ="/NotFound" element={<NotFoundPage/>}/>     
  </Routes>
  <ChatbotComponent/>
  </Router>
  </>


    
  )
}

export default App
