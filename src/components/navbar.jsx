import './navbar.css'
export default function Navbar() {
    return (
        <>
            <div className='header'>
                <div className='menu'>
                    <img src = "src/assets/menu-bar.png" ></img>
                </div>
                <div className='search_box'>
                    <input type='search'></input>
                    <button>search</button>
                </div>
                

            </div>
        </>
    );
}