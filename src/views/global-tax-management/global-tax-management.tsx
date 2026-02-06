import AllInOne from "@/components/pages/global-tax-management/all-in-one";
import Hero from "@/components/pages/global-tax-management/hero";
import TrySection from "@/views/overview/try-section";
import { IconWorld } from "@tabler/icons-react";
import { allInOneCards, heroCards } from "./global-tax-management.constants";
import PageWrapper from "@/components/pages/page-wrapper";

const GlobalTaxManagement = () => {
  return (
    <PageWrapper>
      <Hero
        title="Global Tax Management"
        description="SeemaS is redefining how multinational organizations handle tax. Our platform integrates automation, analytics, and regulatory intelligence so global tax teams can file, strategize, and scale with confidence."
        heroBadge={{
          text: "Scalable. Secure. Built for Global Tax Teams.",
          leftIcon: <IconWorld size={16} className="text-blue-primary" />,
        }}
        cards={heroCards}
      />
      <AllInOne
        title="All-in-One Tax Management Platform"
        description="Whether you're managing entity structuring, transfer pricing, or indirect tax obligations — SeemaS gives you the tools to do it fast, accurately, and with total transparency."
        cards={allInOneCards}
      />
      <TrySection />
    </PageWrapper>
  );
};
export default GlobalTaxManagement;
