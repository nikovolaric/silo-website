function Spinner({ page }: { page?: boolean }) {
  return (
    <div
      className={`w-full text-center ${
        page ? "h-dvh absolute top-0 pt-40 bg-neutral z-50" : "py-20"
      }`}
    >
      <span className="loader"></span>
    </div>
  );
}

export default Spinner;
