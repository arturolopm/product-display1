import { Link } from 'react-router-dom'
export default ({...props}) => {
    const linked = "/"+props.text
    const text = props.text
    
    return(
        <Link to={linked} className="group relative py-8">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className="absolute bottom-0 block w-full h-1 scale-x-0 transition-all duration-200 group-hover:bg-orange-primary group-hover:scale-x-100"></span>
        </Link>
    )
}