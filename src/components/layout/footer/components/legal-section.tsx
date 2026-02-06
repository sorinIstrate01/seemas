import VerticalSeparator from "@/components/icons/vertical-separator"
import FooterItem from "./footer-item"

const LegalSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4">
      <small className="text-body-s flex-grow text-zinc-400">
        &#169; SeemaS {new Date().getFullYear()}. All Rights Reserved
      </small>
      <div className="flex items-center gap-2">
      <FooterItem href="/terms-of-service" label="Terms of Service" />
      <VerticalSeparator />
      <FooterItem href="/privacy-policy" label="Privacy Policy" />
    </div>
    </div>
  );
};

export default LegalSection;
