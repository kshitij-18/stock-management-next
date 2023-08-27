import React from 'react'

const SearchFrom = ({ categories }) => {
    return (
        <div className="mb-4 flex space-x-4">
        <input
          className="flex-1 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search Stocks"
        //   value={searchQuery}
        //   onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="flex-1 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        //   value={selectedCategory}
        //   onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
    )
}

export default SearchFrom