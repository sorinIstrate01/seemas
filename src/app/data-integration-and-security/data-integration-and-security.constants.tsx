import { OtherFeatureCardProps } from "@/components/cards/feature-card";
import { FeatureCardProps } from "@/components/feature-card/feature-card";
import { getOtherProductsForProduct } from "@/constants/other-products";
import { AccordionItemType } from "@/views/tax-provision/end-to-end";
import Image from "next/image";

export const features: FeatureCardProps[] = [
  {
    title: "Enterprise-Grade Encryption",
    description:
      "Your data, secured at every stage. SeemaS employs bank-level encryption for data both in transit and at rest, ensuring no unauthorized access—ever. All transmissions and document storage are locked down with cutting-edge security protocols.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/shield-checked-centered.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/shield-checked-centered-md.svg"}
          className="object-contain hidden sm:block xl:hidden"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/shield-checked-centered-sm.svg"}
          className="object-cover block sm:hidden"
          alt="Feature 3"
        />
      </div>
    ),
  },
  {
    title: "Granular Access Controls & Multi-Factor Authentication",
    description:
      "Only the right people see the right data. Assign user-specific roles and permissions, pair them with robust multi-factor authentication, and meet or exceed FTC Safeguards Rule and global regulatory requirements. Every login and access point is tightly restricted and monitored.",
    content: (
      <div className="relative h-[230px] md:h-full w-full overflow-hidden px-10 md:px-20">
        <Image
          fill
          src={"/data-integration-and-security/card-2.svg"}
          className="object-contain md:object-cover"
          alt="Feature 2"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "AI-Powered Error Detection & Automated Integrity Checks",
    description:
      "Eliminate manual mistakes—guarantee accuracy. SeemaS auto-validates imported data, runs consistency checks across years and entities, and uses AI to flag discrepancies. You get error-free filings and data confidence—year after year. With SeemaS, your data isn’t just compliant—it’s resilient, private, and protected at every step. Tax confidence starts with security. SeemaS makes it seamless.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/star.svg"}
          className="object-contain md:object-cover"
          alt="Feature 2"
        />
      </div>
    ),
    className: "xl:flex-col-reverse",
  },
  {
    title: "Continuous Monitoring, Audit Trails & Real-Time Alerts",
    description:
      "Full transparency, instant response. Benefit from 24/7 monitoring and automated anomaly detection. SeemaS creates immutable audit trails for every action—so you can instantly trace, review, and respond to any suspicious activity or data change.",
    content: (
      <div className="relative h-[230px] md:h-full w-full">
        <Image
          fill
          src={"/features/bell-dashboard.svg"}
          className="object-cover hidden xl:block"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bell-dashboard-md.svg"}
          className="object-contain hidden sm:block xl:hidden"
          alt="Feature 3"
        />
        <Image
          fill
          src={"/features/bell-dashboard-sm.svg"}
          className="object-cover block sm:hidden"
          alt="Feature 3"
        />
      </div>
    ),
  },
];

export const endToEndItems: AccordionItemType[] = [
  {
    title: "Enterprise Data Integration",
    content:
      "Unify your tax and finance functions with seamless enterprise data integration — connect systems, eliminate silos, and power accurate reporting and compliance from a single source of truth.",
  },
  {
    title: "Multi-system Connectivity",
    content:
      "Enable effortless multi-system connectivity — integrate data across ERPs, CRMs, and tax engines to drive consistency, accuracy, and efficiency across your entire tax and finance ecosystem.",
  },
  {
    title: "Advanced Security Protocols",
    content:
      "Protect your data with advanced security protocols — ensure end-to-end encryption, access control, and regulatory compliance across every layer of your tax and finance operations.",
  },
  {
    title: "Data Privacy Compliance",
    content:
      "Ensure global data privacy compliance with built-in controls — safeguard sensitive information, meet regulatory standards like GDPR and CCPA, and maintain trust across your tax and finance operations.",
  },
  {
    title: "Real-time Data Synchronization",
    content:
      "Achieve real-time data synchronization across systems — ensure accuracy, consistency, and up-to-the-minute visibility for smarter, faster tax and finance decisions.",
  },
];

export const otherProducts: Array<OtherFeatureCardProps> =
  getOtherProductsForProduct("data_integration_and_security");
