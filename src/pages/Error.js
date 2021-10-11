import { NavLink } from "react-router-dom"

const Error = () => {
    return(
        <div>
            <h2>Erreur 404</h2>
            <h3>Nous sommes désolés, mais la page que vous demandé n'existe pas</h3>
            <NavLink>Retourner sur votre page de profil</NavLink> 
        </div>
    )
}

export default Error