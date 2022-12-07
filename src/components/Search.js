const Search = (props) => {
    return (
        <div className="searchFood">
            <div>
            <span>Search</span>
            <input onChange={(event) => {
                
            const newList = props.food.filter(singleFood => {
                console.log(singleFood)
                return singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())
            });
            console.log(newList);
            props.setFilteredFood(newList);
            }}/>
        </div>

      </div>
    )
}

export default Search;