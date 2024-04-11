import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"

const Search = ({ error, username }) => {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-0 top-0 px-4 py-[1.44rem] sm:px-8">
        <Image src={iconSearch} alt="Search" />
      </div>
      <Input
        type="search"
        placeholder="Search GitHub username..."
        className="pl-12 pr-[7rem] sm:pl-20"
        value={username}
      />
      <div className="absolute bottom-0 right-0 top-0 flex items-center gap-6 px-[0.63rem] py-[0.59rem]">
        <p className="mt-1 text-[0.9375rem] font-bold text-red">{error}</p>
        <Button variant="default" className="">
          Search
        </Button>
      </div>
    </div>
  )
}

export default Search
