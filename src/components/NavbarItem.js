function NavbarItem(props) {
    function navClickHandler() {
        console.log(props.text, "clicked!");
    }

    return (
        <div>
            <button className='btn' onClick={navClickHandler}>{props.text}</button>
        </div>
    )
}

export default NavbarItem;
