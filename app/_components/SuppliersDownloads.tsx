function SuppliersDownloads({ srb }: { srb?: boolean }) {
  return (
    <div>
      <p className="font-light">
        {srb
          ? "Za dodatne informacije i preuzimanje relevantnih dokumenata, molimo vas da posetite sledeće linkove:"
          : "For additional information, please see relevant documents."}
      </p>
      <div></div>
    </div>
  );
}

export default SuppliersDownloads;
