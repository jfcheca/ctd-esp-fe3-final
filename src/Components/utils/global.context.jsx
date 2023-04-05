import { response } from "msw";
import { useContext } from "react";
import { useEffect , useState , useReducer } from "react";
import { createContext } from "react";


const initialState = {theme: '', element: []}

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ELEMENT':
      return { ...state, element: action.payload };
    case 'THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  //const [favs, setFavs] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => (response.json()))
    .then(res => dispatch({ type: 'ELEMENT', payload: res }) )

},[])



  const handleThemeChange = () => {

    const dark= {
      backgroundNavbar:"black",
      backgroundHome:"#9b9b9b",
      color:"beige"
  }

      if (state.theme === '') {
        dispatch({ type: 'THEME', payload: dark });
      } else{
        dispatch({ type: 'THEME', payload: '' });
      }

   };

   console.log(state.theme)
   

  return (
    <ContextGlobal.Provider value={{state, handleThemeChange}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);

