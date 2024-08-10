import { Children, createContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Context = createContext()
const ContextProvider = ({ children }) => {
    const navigete = useNavigate();
    const[pass,setPass] = useState('')
    const [show,setShow] = useState(false)
    function chiqish(){
        window.localStorage.removeItem('AdminToken')
        window.location.reload()
        }

    function security(){
        if (!localStorage.getItem("AdminToken")){
          navigete('/parol')
        } else{
          navigete('/admin')
        }
      }

      function enter(){
        if (pass === '1234'){
          localStorage.setItem('AdminToken',pass)
      navigete('./admin')
        } else {
          window.location.reload()
        }
      }


      const yaratish = (e) => {
        e.preventDefault()
        axios.post('http://localhost:1111/sneakers', {
          name: e.target[0].value,
          image: e.target[1].value,
          price: e.target[2].value,
          category: e.target[3].value,
        } ).then(() =>{
          window.location.reload();
        }).catch((err) =>{
          alert(err);
        });
      }


    return(
<div>
    <Context.Provider value={{security,enter,pass,show,setPass,setShow,chiqish,navigete, yaratish}}>
        {children}
    </Context.Provider>
</div>
    )
}
export { Context, ContextProvider };