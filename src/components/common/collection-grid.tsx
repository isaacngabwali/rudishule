import CollectionCard from '@components/cards/collection-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';

const data = [
  {
  id: 1,
  slug: 'spensa',
  image: 'https://141.145.197.97:7800/down/Rmm7GHzTt7f2',
  title: 'St. Peters Senior Secondary School',
  description:' Shop all the School Scholastic Material for here',
},
{
  id: 2,
  slug: 'kitante-hillschool',
  image: 'https://141.145.197.97:7800/down/SJ4H9tprGhBq',
  title: 'kitante hill school',
  description: 'Shop all the School Scholastic Material for here',
},
{
  id: 3,
  slug: 'mengo-ss',
  image: 'https://141.145.197.97:7800/down/37FCHqqiqaXt',
  title: 'Mengo Senior Secondary School',
  description: 'Shop all the School Scholastic Material for here',
},
{
  id: 4,
  slug: 'bishops',
  image: 'https://141.145.197.97:7800/down/Z6twlaS3zp1X',
  title: 'Bishops Senior Secondary School Mukono',
  description: 'Shop all the School Scholastic Material for here',
}
];

interface Props {
  className?: string;
  headingPosition?: 'left' | 'center';
}

const breakpoints = {
  '1024': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 3,
  },
  '540': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const CollectionGrid: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
  headingPosition = 'left',
}) => {
  const { width } = useWindowSize();
  return (
    <div className={className}>
      <Container>
        <SectionHeader
          sectionHeading="text-curated-collections"
          sectionSubHeading="text-categories-grocery-items"
          headingPosition={headingPosition}
        />
        {width! < 1536 ? (
          <Carousel
            breakpoints={breakpoints}
            autoplay={{ delay: 4000 }}
            prevButtonClassName="ltr:-left-2.5 rtl:-right-2.5 -top-14"
            nextButtonClassName="ltr:-right-2.5 rtl:-left-2.5 -top-14"
            className="-mx-1.5 md:-mx-2 xl:-mx-2.5 -my-4"
            prevActivateId="collection-carousel-button-prev"
            nextActivateId="collection-carousel-button-next"
          >
            {data?.map((item) => (
              <SwiperSlide
                key={`collection-key-${item.id}`}
                className="px-1.5 md:px-2 xl:px-2.5 py-4"
              >
                <CollectionCard
                  key={item.id}
                  collection={item}
                  href={`${ROUTES.BUNDLE}/${item.slug}`}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          <div className="gap-5 2xl:grid 2xl:grid-cols-4 3xl:gap-7">
            {data?.map((item) => (
              <CollectionCard
                key={item.id}
                collection={item}
                href={`${ROUTES.BUNDLE}/${item.slug}`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CollectionGrid;
