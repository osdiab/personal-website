import {
  companyLogoSvgCss,
  companyTitleCss,
  heroTitleCss,
  jobDescriptionCss,
  jobEntryCss,
  jobEntrySectionCss,
  jobHeaderCss,
  jobLinkIconCss,
  jobMetadataCss,
  jobTitleCss,
  pageContentCss,
  pageCss,
  sectionCss,
  timeCss,
} from "~/app/page.css";
import { ReactNode } from "react";
import CleverLogo from "~/assets/logos/clever.svg";
import SpinachLogo from "~/assets/logos/spinach.svg";
import EveryOrgLogo from "~/assets/logos/every-org.svg";
import { ExternalLink } from "lucide-react";
import { hyperlinkCss } from "~/app/hyperlink.css";
import { SvgComponent } from "~/types";

export default function Page() {
  return (
    <div className={pageCss}>
      <div className={pageContentCss}>
        <section className={sectionCss}>
          <h1 className={heroTitleCss}>
            I convert business needs into designs and technical strategy, and
            align engineers to produce world-class products.
          </h1>
        </section>
        <section className={sectionCss}>
          <div className={jobEntrySectionCss}>
            <Entry
              CompanyLogoType={SpinachLogo as SvgComponent}
              companyName="Spinach HR"
              companyUrl="https://www.gotofu.com"
              jobTitle="Co-Founder, Head of Engineering"
              periodStart="2021"
              periodEnd="2023"
              description="A whitelabel platform that powers the operations of major Employer of Record global payroll companies, from sales pipeline to payroll to invoicing. I designed the initial product concept, and built a team that implemented and successfully deployed it at scale at multiple companies. Acquired 2023."
            />
            <Entry
              CompanyLogoType={EveryOrgLogo as SvgComponent}
              companyName="Every.org"
              companyUrl="https://www.every.org"
              jobTitle="Co-Founder, Head of Engineering"
              periodStart="2018"
              periodEnd="2021"
              description="The easiest and most efficient way to donate to any U.S. nonprofit. I helped research issues in philanthropy, and built the core of the app. By the time I departed, it was facilitating tens of millions of dollars in donations yearly. Still running!"
            />
            <Entry
              CompanyLogoType={CleverLogo as SvgComponent}
              companyName="Clever"
              companyUrl="https://www.clever.com"
              jobTitle="Full-Stack Engineer"
              periodStart="2014"
              periodEnd="2017"
              description={
                <>
                  Single sign-on and simple APIs to query fragmented student
                  databases. I{" "}
                  <a href="https://clever.com/products/badges">
                    implemented Clever Badges
                  </a>
                  , allowing young children to access education tech at school.
                  Majority U.S. public school market share and powers millions
                  of student logins daily. Acquired 2021.
                </>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}

interface EntryProps {
  CompanyLogoType: SvgComponent;
  companyName: string;
  companyUrl?: string;
  jobTitle: string;
  periodStart: string;
  periodEnd: string;
  description: ReactNode;
}

function Entry({
  CompanyLogoType: CompanyLogoType,
  companyName,
  companyUrl,
  jobTitle,
  periodStart,
  periodEnd,
  description,
}: EntryProps) {
  const companyLogo = (
    <span className={companyTitleCss}>
      <CompanyLogoType
        className={companyLogoSvgCss}
        role="img"
        aria-label={companyName}
      />
      {companyUrl && (
        <ExternalLink
          className={jobLinkIconCss}
          aria-label={`Visit ${companyName} website`}
        />
      )}
    </span>
  );
  return (
    <article className={jobEntryCss}>
      <header className={jobHeaderCss}>
        <h3>
          {companyUrl ? (
            <a
              className={hyperlinkCss()}
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {companyLogo}
            </a>
          ) : (
            companyLogo
          )}
        </h3>
        <div className={jobMetadataCss}>
          <span className={jobTitleCss}>{jobTitle}</span>
          <span className={timeCss}>
            {periodStart}–{periodEnd}
          </span>
        </div>
      </header>
      <div className={jobDescriptionCss}>
        <p>{description}</p>
      </div>
    </article>
  );
}
