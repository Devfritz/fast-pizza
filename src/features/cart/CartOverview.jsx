function CartOverview() {
  return (
    <div className="text-sm md:text-lg flex items-center justify-between px-4 py-2 text-stone-200 bg-stone-800">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
