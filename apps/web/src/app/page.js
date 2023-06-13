"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_css_1 = require("@/app/page.css");
var prose_css_1 = require("@osdiab-website/ui/prose.css");
var hyperlink_css_1 = require("@osdiab-website/ui/hyperlink.css");
var clever_svg_1 = require("@/assets/logos/clever.svg");
var spinach_svg_1 = require("@/assets/logos/spinach.svg");
var every_org_svg_1 = require("@/assets/logos/every-org.svg");
function Page() {
    return (<div className={page_css_1.pageContentCss}>
      <section className={page_css_1.sectionCss}>
        <h1 className={page_css_1.heroTitleCss}>
          I convert business needs into designs and technical strategy, and
          align engineers to produce world-class products.
        </h1>
      </section>
      <section className={page_css_1.sectionCss}>
        <h2 className={page_css_1.sectionHeadingCss}>Work History</h2>
        <div className={page_css_1.jobEntrySectionCss}>
          <Entry CompanyLogoType={spinach_svg_1.default} companyName="Spinach HR" companyUrl="https://www.gotofu.com" jobTitle="Co-Founder" periodStart="2021" periodEnd="2023" description="A whitelabel platform that powers the operations of major Employer of Record global payroll companies, from sales pipeline to payroll to invoicing. I designed the initial product concept, and built a team that implemented and successfully deployed it at scale at multiple companies. Acquired 2023."/>
          <Entry CompanyLogoType={every_org_svg_1.default} companyName="Every.org" companyUrl="https://www.every.org" jobTitle="Co-Founder, Head of Engineering" periodStart="2018" periodEnd="2021" description="The easiest and most efficient way to donate to any U.S. nonprofit. I helped research issues in philanthropy, and built the core of the app. By the time I departed, it was facilitating tens of millions of dollars in donations yearly. Still running!"/>
          <Entry CompanyLogoType={clever_svg_1.default} companyName="Clever" companyUrl="https://www.clever.com" jobTitle="Full-Stack Engineer" periodStart="2014" periodEnd="2017" description={<>
                Single sign-on and simple APIs to query fragmented student
                databases. I{" "}
                <a href="https://clever.com/products/badges">
                  implemented Clever Badges
                </a>
                , allowing young children to access education tech at school.
                Majority U.S. public school market share and powers millions of
                student logins daily. Acquired 2021.
              </>}/>
        </div>
      </section>
    </div>);
}
exports.default = Page;
function Entry(_a) {
    var CompanyLogoType = _a.CompanyLogoType, companyName = _a.companyName, companyUrl = _a.companyUrl, jobTitle = _a.jobTitle, periodStart = _a.periodStart, periodEnd = _a.periodEnd, description = _a.description;
    var companyLogo = (<CompanyLogoType className={page_css_1.companyLogoSvgCss} role="img" aria-label={companyName}/>);
    return (<article className={page_css_1.jobEntryCss}>
      <h3>
        {companyUrl ? (<a className={hyperlink_css_1.hyperlinkCss} href={companyUrl} target="_blank">
            {companyLogo}
          </a>) : (companyLogo)}
      </h3>
      <span>{jobTitle}</span>
      <span>
        {periodStart}–{periodEnd}
      </span>
      <div className={prose_css_1.proseCss}>
        <p>{description}</p>
      </div>
    </article>);
}
