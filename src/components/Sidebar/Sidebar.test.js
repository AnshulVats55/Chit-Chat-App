import { render, screen } from '@testing-library/react'
import SideBar from './SideBar'
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


describe('Sidebar Test', () => {
   test('Components Renders Correctly', async() => {
       render(<SideBar />, {wrapper: Router})
                       
       const link1 = screen.getByRole('link', { name:"Logout",});
       expect(link1).toBeInTheDocument()
       const link2 = screen.getByRole('link', { name:"Home",});
       expect(link2).toBeInTheDocument()
       const link3 = screen.getByRole('link', { name:"Chat",});
       expect(link3).toBeInTheDocument()
      
   })


   test('All Routes Navigating',  () => {
   
      // window.history.pushState({},"","/")
       render(<SideBar />, {wrapper: Router})
     
      // verify page content for default route
       const defaultRoute=screen.getByRole('heading', {
           name: /start writing something !/i
         })
       expect(defaultRoute).toBeInTheDocument()
     
    
     })
     
  
   });
