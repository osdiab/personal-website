import {
  heroTitleCss,
  jobEntryCss,
  jobEntrySectionCss,
  pageContentCss,
  sectionCss,
  sectionHeadingCss,
} from "@/app/page.css";
import { proseCss } from "ui/prose.css";
import { ReactNode } from "react";
import { hyperlinkCss } from "ui/hyperlink.css";

export default function Page() {
  return (
    <div className={pageContentCss}>
      <section className={sectionCss}>
        <h1 className={heroTitleCss}>
          I convert business needs into designs and technical strategy, and
          align engineers to produce world-class products.
        </h1>
      </section>
      <section className={sectionCss}>
        <h2 className={sectionHeadingCss}>Work History</h2>
        <div className={jobEntrySectionCss}>
          <Entry
            companyName="Spinach HR"
            companyUrl="https://www.gotofu.com"
            jobTitle="Co-Founder"
            periodStart="2021"
            periodEnd="2023"
            description="Powers the operations of a major Employer of Record global payroll company, from their sales pipeline to payroll to invoicing. I designed the initial product concept, and built a team that implemented and successfully deployed it at scale at multiple companies. Acquired 2023."
          />
          <Entry
            companyName="Every.org"
            companyUrl="https://www.every.org"
            jobTitle="Co-Founder, Head of Engineering"
            periodStart="2018"
            periodEnd="2021"
            description="The easiest and most efficient way to donate to any U.S. nonprofit. I helped research issues in philanthropy, and built the core of the app. By the time I departed, it was facilitating tens of millions of dollars in donations yearly. Still running!"
          />
          <Entry
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
                Majority U.S. public school market share and powers millions of
                student logins daily. Acquired 2021.
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}
interface EntryProps {
  companyName: string;
  companyUrl?: string;
  jobTitle: string;
  periodStart: string;
  periodEnd: string;
  description: ReactNode;
}

function Entry({
  companyName,
  companyUrl,
  jobTitle,
  periodStart,
  periodEnd,
  description,
}: EntryProps) {
  return (
    <article className={jobEntryCss}>
      <h3>
        {companyUrl ? (
          <a className={hyperlinkCss} href={companyUrl} target="_blank">
            {companyName}
          </a>
        ) : (
          companyName
        )}
      </h3>
      <span>{jobTitle}</span>
      <span>
        {periodStart}–{periodEnd}
      </span>
      <div className={proseCss}>
        <p>{description}</p>
      </div>
    </article>
  );
}
