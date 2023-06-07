import './Search.css'
function Search(){
    return(
        <>
        <div className='search-container'>
            <form class="search-box">
            
             <i class="fa fa-search" aria-hidden="true" style={{marginRight:'15px', color:'lightgray'}}></i>
             <input style={{ width:'200px',background:'rgb(247 247 243)'}} type="search" name="focus" placeholder="Search" id="search-input" value=""/>
            </form>
        </div>

        </>
    )
}

export default Search;