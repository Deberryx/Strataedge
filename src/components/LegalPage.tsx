type LegalPageProps = {
  label: string;
  title: string;
  introduction: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalPage({ label, title, introduction, updated = "July 17, 2026", children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-line bg-paper-light">
        <div className="site-shell grid py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
          <div>
            <p className="eyebrow">{label}</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-muted">Last updated {updated}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h1 className="page-title">{title}</h1>
            <p className="body-large mt-7 max-w-3xl">{introduction}</p>
          </div>
        </div>
      </header>
      <div className="site-shell grid py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
        <aside className="hidden lg:block">
          <p className="max-w-xs border-l-2 border-azure pl-5 text-sm leading-6 text-muted">
            Questions about this page can be sent to derekasa@strataedge.tech.
          </p>
        </aside>
        <div className="prose-editorial max-w-3xl">{children}</div>
      </div>
    </>
  );
}
