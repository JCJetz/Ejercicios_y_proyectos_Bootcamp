import './style.css';
import {BsKanban} from 'react-icons/bs'


function Footer () {

    return (
        <footer className='footer__container'>
            <div className='j__container'>
                <BsKanban className='footer-logo'></BsKanban>
                <h4 className='footer-info'>&copy; Jetza 2022</h4>
            </div>
            <div className='github-info__container'>
                <div className='github-logo'></div>
                <h1>Check my GitHub <a className='github-link' rel="noopener noreferrer" target="_blank" href="https://github.com/JCJetz/Ejercicios_y_proyectos_Bootcamp">here</a></h1>
            </div>
        </footer>
    )
}


export default Footer;