import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


const Widget = ({type}) => {

    let data;

    // temporary amount of money
    const amount = Math.floor(Math.random() * 100);
    const diff = Math.floor(Math.random() * 100);

    switch (type) {
        case 'users':
            data = {
                title: 'USERS',
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon className='icon' style={{
                        color: 'crimson', 
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'}} />
                ),
            }
            break;
        case 'orders':
            data = {
                title: 'USERS',
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon className='icon' style={{
                        color: 'crimson', 
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'}} />
                ),
            }
            break;
        case 'earnings':
            data = {
                title: 'USERS',
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon className='icon' style={{
                        color: 'crimson', 
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'}} />
                ),
            }
            break;
        case 'balance':
            data = {
                title: 'USERS',
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon className='icon' style={{
                        color: 'crimson', 
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'}} />
                ),
            }
            break;
        default:
            break;
    }



  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
        </div>
    </div>
  )
}

export default Widget