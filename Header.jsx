/*import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/style.css';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/Header.jsx';
    /*<div>
    <div>
        <h1 className="bannertext">React Learning</h1>
        <p className="slogan">Learn from our mistakes is good.Learn from others mistakes is always great.</p>
    </div>
    </div>
}
export default Header;*/
/*function Header()
{
    return (
    <div>
    <div>
        <h1 className='bannertext'> dsukfhnvubg</h1>
        <p className='slogan'>aisubvaeihb</p>
    </div>
    <div/>)
}
export default Header;*/
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/App.js';
export const ChildProp=(props)=>
{
    return(
        <div>
            <h2>Array </h2>

        </div>
    )
}
export const ArraySample=(props)=>{
    const {items}=props;
    return(
        <div>
            <h2>Items List</h2>
            <ul>
                {items.map((item)=>(
                    <li key={item.id}>{item.name}</li>

                ))}

            </ul>
        </div>
    )
}

