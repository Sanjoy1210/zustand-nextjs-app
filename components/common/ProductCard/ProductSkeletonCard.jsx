const ProductSkeletonCard = () => {
  return (
    <div className="relative max-w-sm w-full mx-auto break-words rounded-md bg-white bg-clip-border shadow-md">
      <div className="animate-pulse flex flex-col">
        <div>
          <div className="relative aspect-video bg-slate-200"></div>
          <div className="rounded-full ml-auto -mt-4 z-50 relative mr-3 cursor-pointer h-10 w-10 bg-slate-200 flex items-center justify-center"></div>
        </div>
        <div className="flex-auto p-3 pb-5 space-y-2">
          <h3 className="bg-slate-200 rounded h-6"></h3>
          <h3 className="bg-slate-200 rounded h-6"></h3>
        </div>
        <div className="p-3">
          <div className="flex flex-col space-y-2">
            <p className="bg-slate-200 rounded h-6 w-[205px]"></p>
            <div className="grid grid-cols-2 gap-4">
              <p className="bg-slate-200 rounded h-6"></p>
              <p className="bg-slate-200 rounded h-6"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonCard;
