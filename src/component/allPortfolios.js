import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import consult from '../image/portImages/consult.png'
import forum from '../image/portImages/forum.png'
import samsim from '../image/portImages/samsim.png'
import wish from '../image/portImages/wish.png'

const portfolios = [
  {
    id: 1,
    category: 'Svelte',
    link1: 'https://www.github.com/danmikes/consult',
    link2: 'https://danmikes.github.io/consult',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: consult,
    title: 'Consult'
  },
  {
    id: 2,
    category: 'Svelte',
    link1: 'https://www.github.com/danmikes/forum',
    link2: 'https://danmikes.github.io/forum',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: forum,
    title: 'Forum'
  },
  {
    id: 3,
    category: 'Flask',
    link1: 'https://www.github.com/danmikes/samsim',
    link2: 'https://dmikes.duckdns.org',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: samsim,
    title: 'SamSim'
  },
  {
    id: 4,
    category: 'Flask',
    link1: 'https://www.github.com/danmikes/wish',
    link2: 'https://dmikes.eu.pythonanywhere.com',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: wish,
    title: 'Wish'
  },
]

export default portfolios
