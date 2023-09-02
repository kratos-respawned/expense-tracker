const TailwindProvider = ({}) => {
  return (
    <div className=" fixed bottom-4 left-5 w-11 h-11 grid place-items-center bg-primary text-primary-foreground rounded-full">
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden  md:block lg:hidden">md</span>
      <span className="hidden  lg:block xl:hidden">lg</span>
      <span className="hidden  2xl:hidden xl:block">xl</span>
    </div>
  );
};

export default TailwindProvider;
