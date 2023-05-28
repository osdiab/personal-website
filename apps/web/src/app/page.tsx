import { heroTitleCss, sectionCss } from "@/app/page.css";

export default function Page() {
  return (
    <>
      <section className={sectionCss}>
        <h1 className={heroTitleCss}>
          I shape business needs into designs and technical strategy, and align
          engineers to produce world class products.
        </h1>
      </section>
    </>
  );
}
