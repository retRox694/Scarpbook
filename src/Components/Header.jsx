import logo from '../assests/QrenciaLogo.png'
import './Header.css'

export default function Header()
{
  return(
    <div id='logo'>
      <img src={logo} alt="Qrencia Logo" />
    </div>
  )
}