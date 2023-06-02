import Head from "next/head";
import siteMetadata from '../../../seoData/siteMetadata'

function SEO({ title, description, canonicalUrl, ogImageUrl, ogTwitterImage }) {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        {/* Basic MetaData > title max: 60, descrip. max: 160 */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='web design, web designers, user experience, web designer, image source, responsive design, webby awards, web design services, social media, graphic design, target audience, online store, user research, web page, visual design, html5 video, search results, web pages, user interface, user experience design, visual elements, motion graphics, wide range, search engines, color scheme, web development, responsive web design, white space, web page design, landing page, phoenix, scottsdale, mesa, tempe, goodyear, buckeye peoria, glendale, arizona'
        />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Fonts & Footers' />

        {/* Twitter MetaData */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={siteMetadata.twitterHandle} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogTwitterImage} />

        {/* Canonical Link: should be the URL of the current page */}
        <link rel='canonical' href={canonicalUrl} />

        {/* Open Graph MetaData */}
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content={siteMetadata.companyName} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={ogImageUrl} />
        <meta property='og:url' content={canonicalUrl} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Fonts & Footers",
              image:
                "https://www.fontsandfooters.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.1119bc54.png&w=384&q=75",
              "@id": "https://www.fontsandfooters.com/",
              url: "https://www.fontsandfooters.com/",
              
              address: {
                "@type": "PostalAddress",
                streetAddress: "2320 E BASELINE RD 148-421",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                postalCode: "85043",
                addressCountry: "US",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </Head>
    </div>
  );
}

export default SEO;
