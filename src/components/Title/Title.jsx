import './Title.css'

export const Title = ({ text = "" }) => {
    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="titulo">
                        <h1><span>Destacado</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}