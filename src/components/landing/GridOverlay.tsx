const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center px-4 md:px-12">
      <div className="w-full h-full border-x border-dashed border-black/5 max-w-[1440px] grid grid-cols-4 md:grid-cols-12 gap-4 relative">
        <div className="hidden md:block col-span-3 h-full border-r border-dashed border-black/5" />
        <div className="hidden md:block col-span-6 h-full border-r border-dashed border-black/5" />
      </div>
    </div>
  );
};

export default GridOverlay;
