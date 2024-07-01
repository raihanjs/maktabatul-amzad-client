export default function SortFilter() {
  return (
    <div className="border bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <p className="font-bold text-lg">Sort</p>
        <button>Reset Sort</button>
      </div>
      <form className="p-4">
        <div className="flex items-center space-x-5 py-1.5">
          <input type="radio" name="sort" id="bestseller" />
          <label className="cursor-pointer" htmlFor="bestseller">
            Best Seller
          </label>
        </div>
        <div className="flex items-center space-x-5 py-1.5">
          <input type="radio" name="sort" id="new" />
          <label className="cursor-pointer" htmlFor="new">
            New Released
          </label>
        </div>
        <div className="flex items-center space-x-5 py-1.5">
          <input type="radio" name="sort" id="lowtohigh" />
          <label className="cursor-pointer" htmlFor="lowtohigh">
            Low To High
          </label>
        </div>
        <div className="flex items-center space-x-5 py-1.5">
          <input type="radio" name="sort" id="hightolow" />
          <label className="cursor-pointer" htmlFor="hightolow">
            High To Low
          </label>
        </div>
      </form>
    </div>
  );
}
