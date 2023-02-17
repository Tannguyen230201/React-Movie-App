import loading from '../../assets/image/loadinger1.gif'
import '../Loading/Loading.scss'

const LoadingIcon = () => {
    return (
        <div className='img_loading'>
            <img src={loading} alt="Loading..." /> 
        </div>
    )
}


export default LoadingIcon