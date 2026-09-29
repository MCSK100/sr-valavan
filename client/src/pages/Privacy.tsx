import { PageHero } from "../components/Layout";
import { Reveal } from "../components/motion";
import Seo from "../components/Seo";
import { CONTACT, pageHeroSlides } from "../data/content";

export default function PrivacyPage() {
  return (
    <main>
      <Seo
        title="Privacy Policy | SR Vallavan Enterprises"
        description="How SR Vallavan Enterprises collects, uses and protects your personal information when you enquire about our pool services."
        path="/privacy-policy"
      />
      <PageHero
        marker="Legal"
        title={
          <>
            Privacy <em>policy.</em>
          </>
        }
        lede="Plain words on what we collect and why. Last updated September 2026."
        images={pageHeroSlides.legal}
        badge="SR VALLAVAN · TAMIL NADU"
      />
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="content-width prose">
          <Reveal>
            <h2>1. What we collect</h2>
            <p>
              When you request a site visit or contact us, we collect your name, phone number,
              email (if shared), site city and project details. Our website may also collect
              basic analytics (pages visited, device type) to improve the site.
            </p>
            <h2>2. How we use it</h2>
            <p>
              We use your details only to respond to your enquiry, schedule site visits, prepare
              estimates and provide maintenance updates. We do not sell, rent or share your
              personal information with third parties for marketing.
            </p>
            <h2>3. WhatsApp & phone</h2>
            <p>
              If you message us on WhatsApp or phone, your number is used solely for
              conversation about your project. You can ask us to delete the conversation
              history on our side at any time.
            </p>
            <h2>4. Data security</h2>
            <p>
              Enquiry details are accessible only to our office team on password-protected
              systems. While no online transmission is 100% secure, we take reasonable steps
              to protect your information.
            </p>
            <h2>5. Your rights</h2>
            <p>
              You may ask for a copy of the data we hold about you, or ask us to correct or
              delete it, by writing to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{" "}
              or calling <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
