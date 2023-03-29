import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAws, faGitAlt, faJsSquare, faLinux, faMicrosoft, faPython } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very enthusiastic about front-end development, Cloud servies
                    Security, looking for a role in established IT company with the opportunity
                    to work with the latest technologies on challenging projects.
                </p>
                <p>
                    I like working on various things simultaneously and keeping up with
                    the decided deadlines! 
                </p>
                <p>
                    In my passtime, I like reading fictional books, playing Cricket and
                    learning about space related things and watching Anime!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faMicrosoft} color='#00C3FF' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faLinux} color='#F000000' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#008098' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faAws} color='#000000' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About