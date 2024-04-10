import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"

const Search = ({ error, username }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 top-0 px-8 py-[1.44rem]">
        <Image src={iconSearch} alt="Search" />
      </div>
      <Input
        type="search"
        placeholder="Search GitHub username..."
        className="pl-20 pr-[7rem]"
        value={username}
      />
      <div className="absolute bottom-0 right-0 top-0 flex items-center gap-6 px-[0.63rem] py-[0.59rem]">
        <p className="text-red mt-1 text-[0.9375rem] font-bold">{error}</p>
        <Button variant="default" className="">
          Search
        </Button>
      </div>
    </div>
  )
}

export default Search
