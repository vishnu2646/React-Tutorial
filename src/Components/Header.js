
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className="header">
            <h1 style={titleStyle}>{title}</h1>
            <button className="btn" style={btnstyle} type="button" onClick={onAdd} >{showAdd ? 'Close' : 'Add Now'}</button>
        </header>
    )
}
const btnstyle = {
    color:'white',
    backgroundColor:'#007bff',
}
const titleStyle = {
    color:'white',
}
export default Header
