import PropTypes from 'prop-types'
//como estoy trabajando con Vite, instalo los Prop Types

export const FirstApp = ({
    title,
    subtitle,
    name
}) => {



    return (
        <>
        <h1>{title}</h1>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}

//Los default props "entran", "se leen" antes que los propTypes
FirstApp.defaultProps = {
    title:'no hay titulo',
    subtitle:"no hay subtitulo",
    name:"Fernando Herrera"
}
