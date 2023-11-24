import { useEffect,useState ,useRef} from "react"
import { apiData } from "./types/apiTypes"
import { Link } from "react-router-dom"
import { setProperty } from "./redux/property"
import { useDispatch } from "react-redux"
type TSearchBar={
    sales:apiData[]
    rents:apiData[]
}
function SearchBar({ sales, rents }: TSearchBar) {
    const dispatch = useDispatch()
const results=useRef<HTMLDivElement>(null)
    const [search, setSearch] = useState<string >('')
    const [SalesAndRents, setSalesAndRents] = useState<apiData[]>(sales.concat(rents))
    const [filtered, setFiltered] = useState<apiData[]>()

    useEffect(() => {
        if (search.length !== 0) {
        const filter=SalesAndRents?.filter((item:apiData)=>item.title.toLowerCase().includes(search))
        setFiltered(filter)
    } else {
        setFiltered([])
    }

    }, [search, SalesAndRents])

    useEffect(() => {
        if (results.current) {
            if (filtered && filtered.length>0) {
                results.current.style.transition = '1s ease-in-out'
                results.current.style.height = '200px'
                
            } else {
                results.current.style.height = '0px'

            }
        }
    }, [filtered])
    

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }
    return (
        <div className="col-12 search ">
            <input
            className="col-12 form-control p-2"
            type="search"
                placeholder="Search For Properties"
                onChange={(e) => handleChange(e)}
                value={search}
            />
            <div ref={results} className="col-12 rounded mt-1 results row-gap-md-3 row-gap-4 d-flex flex-column justify-content-start ">
                {filtered?.map((item: apiData) => {
                    return <Link onClick={() => dispatch(setProperty(item))} className=" col-12 links  text-center " to={`/properties/${item.title}`} key={item.id}>{item.title}</Link>
                })}
            </div>
    </div>
)
}

export default SearchBar