import TextbookSidebar from "@/components/TextbookSidebar";

export default function TextbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-auto">
      <div className="container pl-10 pr-10 pt-16">
        {/* <TextbookHeader /> */}
        <div className="flex justify-between gap-x-10 pt-5">
          <TextbookSidebar />
          {children}
        </div>
        {/*  <TextbookFooter /> */}
      </div>
    </main>
  );
}
