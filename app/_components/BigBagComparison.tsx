function BigBagComparison({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-20 flex flex-col gap-6 text-primary">
      <h4 className="font-raj font-bold text-2xl">
        {srb
          ? "U odnosu na konvencionalan 'big-bag' transport, silo transport nudi:"
          : slo
          ? "V primerjavi z konvencionalnim 'big-bag' transportom, silo transport nudi:"
          : "Compared to big-bag transport, silo transport offers:"}
      </h4>
      <div className="grid grid-cols-2 gap-5 items-center md:grid-cols-4">
        <p className="text-center font-semibold px-2.5 py-6 border border-primary h-full shadow-lg rounded-lg">
          {srb
            ? "Štedi najmanje 10€/t time što ne koristi ambalažu i palete"
            : slo
            ? "Prihranek vsaj 10 €/t pri stroških embalaže in palet"
            : "Savings of at least 10€/t in packaging and pallet costs "}
        </p>
        <p className="text-center font-semibold px-2.5 py-6 border border-primary h-full shadow-lg rounded-lg">
          {srb
            ? "Viša produktivnost zahvaljujući većoj automatizaciji"
            : slo
            ? "Višjo produktivnost zaradi avtomatizacije"
            : "Higher productivity through automation"}
        </p>
        <p className="text-center font-semibold px-2.5 py-6 border border-primary h-full shadow-lg rounded-lg">
          {srb
            ? "Manji rastur pri istovaru i manji gubici robe"
            : slo
            ? "Manjša ali ničelna izguba pri razkladanju"
            : "Less (or no) loss during unloading"}
        </p>
        <p className="text-center font-semibold px-2.5 py-6 border border-primary h-full shadow-lg rounded-lg">
          {srb
            ? "Veća količina materijala prevezena po jednom transportu"
            : slo
            ? "Večje količine prepeljanega materiala na eno vožnjo"
            : "Larger quantities transported per trip"}
        </p>
      </div>
      <p className="text-secondary">
        {srb
          ? "Baveći se ovim izazovima, silosi nude ne samo operativnu efikasnost već i"
          : slo
          ? "Z reševanjem teh izzivov silosi ne ponujajo le operativne učinkovitosti, temveč tudi"
          : "By addressing these challenges, silos offer not only operational efficiency but also"}
        <span className="font-bold">
          {srb
            ? " brži povraćaj ulaganja i niže režijske troškove."
            : slo
            ? " hitrejšo donosnost naložb in nižje režijske stroške."
            : " faster return on investment and lower overhead costs."}
        </span>
      </p>
    </div>
  );
}

export default BigBagComparison;
