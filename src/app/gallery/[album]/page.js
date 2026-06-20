import AlbumClient from "./AlbumClient";

const ALBUM_META = {
  "anu-karunathilaka": {
    title: "Anu Karunathilaka | Wedding Album",
    description: "View the romantic wedding photography collection of Anu Karunathilaka captured by Numesh Ravindra in Sri Lanka."
  },
  "manavi-photo-shoot": {
    title: "Manavi Vihara | Portrait Shoot Album",
    description: "Explore the elegant studio and outdoor portrait photography collection of Manavi Vihara by Numesh Ravindra."
  },
  "savindi-edit": {
    title: "Savindi Thathsara | Outdoor Portrait Album",
    description: "Browse the stunning outdoor portrait photography session of Savindi Thathsara by Numesh Ravindra."
  },
  "amandi-edit": {
    title: "Amandi Rathnayake | Curated Album",
    description: "Check out the beautifully curated photography collection of Amandi Rathnayake by Numesh Ravindra."
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const albumSlug = resolvedParams.album;
  const meta = ALBUM_META[albumSlug] || {
    title: "Photo Album",
    description: "View curated photography collections and photo shoots by Numesh Ravindra in Sri Lanka."
  };

  return {
    title: `${meta.title} | Numesh Ravindra Photography`,
    description: meta.description,
    alternates: {
      canonical: `https://numesh-ravindra-photography-website.vercel.app/gallery/${albumSlug}`,
    },
    openGraph: {
      title: `${meta.title} | Numesh Ravindra Photography`,
      description: meta.description,
      url: `https://numesh-ravindra-photography-website.vercel.app/gallery/${albumSlug}`,
      siteName: "Numesh Ravindra Photography",
      locale: "en_LK",
      type: "article",
    }
  };
}

export default async function AlbumPage({ params }) {
  const resolvedParams = await params;
  const albumSlug = resolvedParams.album;
  return <AlbumClient albumSlug={albumSlug} />;
}
