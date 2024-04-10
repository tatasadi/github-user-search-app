import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"

const Search = ({ error, username }) => {
  return (
    <div className="relative">
      <Image
        src={iconSearch}
        alt="Search"
        className="absolute left-8 top-[1.44rem]"
      />
      <Input
        type="search"
        placeholder="Search GitHub username..."
        className="pl-20 pr-[7rem]"
        value={username}
      />
      <p className="text-red absolute right-[8.5rem] top-[1.3rem] mt-1 text-[0.9375rem] font-bold">
        {error}
      </p>
      <Button
        variant="default"
        className="absolute right-[0.63rem] top-[0.59rem]"
      >
        Search
      </Button>
    </div>
  )
}

export default Search
