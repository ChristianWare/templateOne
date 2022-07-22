import styles from '../styles/gallery.module.css'
import PageIntro from '../src/comps/utils/pageIntro/PageIntro';
import BG from '../public/images/bg3.jpg'
import PhotoGroup from '../src/comps/utils/photoGroup/PhotoGroup';
import SectionHeader from '../src/comps/utils/sectionHeader/SectionHeader';

function gallery() {
    return (
      <section>
        <PageIntro
          src={BG}
          heading='Picture Perfect'
          copy='Here are some examples of our best work. We are proud of what we have accomplisehd as a smal local business for the past 10 year. Feel Free to call us to see how you can have your picture added to our gallery of fine work'
        />
        <SectionHeader text='Our Work' />
        <PhotoGroup />
      </section>
    );
}

export default gallery
