
import PropTypes from 'prop-types'
 const Pic = ({className,src,alt}) => {
  return (
    <picture>
        <img src={src} alt={alt} className={`${className} h-full object-cover`}/>
    </picture>
  )
}
Pic.propTypes = {
  className : PropTypes.string,
  src : PropTypes.string.isRequired,
  alt : PropTypes.string
}
export default Pic;
