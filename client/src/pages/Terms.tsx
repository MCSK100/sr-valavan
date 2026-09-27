import { PageHero } from "../components/Layout";
import { Reveal } from "../components/motion";
import Seo from "../components/Seo";
import { CONTACT } from "../data/content";

export default function TermsPage() {
  return (
    <main>
      <Seo
        title="Terms of Service | SR Valavan Enterprises"
        description="Terms governing estimates, pool construction contracts, warranties and maintenance services by SR Valavan Enterprises."
        path="/terms"
      />
      <PageHero
        marker="Legal"
        title={
          <>
            Terms of <em>service.</em>
          </>
        }
        lede="The working rules behind our estimates, builds and care plans. Last updated September 2026."
      />
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="content-width prose">
          <Reveal>
            <h2>1. Estimates</h2>
            <p>
              Site visits and estimates are free within our service cities. An estimate is valid
              for 30 days and is based on the site conditions observed during the visit. Hidden
              conditions (rock, high water table, unmapped utilities) are documented and priced
              transparently if encountered.
            </p>
            <h2>2. Contracts & payments</h2>
            <p>
              Work begins on a signed work order with stage-wise payments tied to verifiable
              milestones — typically advance, shell completion, tiling, and handover. No stage
              is billed before it is demonstrated on site or by photo update.
            </p>
            <h2>3. Warranties</h2>
            <p>
              We warrant waterproofing for 10 years and structure for 5 years from handover,
              provided the pool is maintained per our care manual or an active AMC. Equipment
              carries manufacturer warranties (typically 1–2 years). Damage from misuse,
              ground movement beyond design tolerance, or third-party alterations is excluded.
            </p>
            <h2>4. Maintenance plans</h2>
            <p>
              AMC visits follow a fixed weekday schedule. Missed visits due to denied access are
              rescheduled once; consumables beyond the plan (e.g., storm clean-ups) are billed
              at pre-shared rates. Plans renew annually and can be cancelled with 30 days’
              notice.
            </p>
            <h2>5. Contact</h2>
            <p>
              Questions about these terms? Write to{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
