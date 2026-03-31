import { portfolioData } from "../../components/Works/portfolioData";
import PortfolioDetail from "../../components/Works/PortfolioDetail/PortfolioDetail";
import ScrollToTop from "../../components/Works/ScrollToTop";

export function generateStaticParams() {
  return portfolioData.map((item) => ({ id: item.id }));
}

export default async function WorksDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <ScrollToTop targetId={id} />
      <PortfolioDetail id={id} />
    </>
  );
}

