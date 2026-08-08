import AlbumClient from "./AlbumClient";

const ALBUM_META = {
  "anu-karunathilaka": {
    title: "Anu Karunathilaka | Wedding Album",
    description: "View the romantic wedding photography collection of Anu Karunathilaka captured by Numesh Ravindra in Sri Lanka.",
    coverPath: "/gallery/portraits/Anu%20Karunathilaka/IMG_1.jpg"
  },
  "manavi-photo-shoot": {
    title: "Manavi Vihara | Portrait Shoot Album",
    description: "Explore the elegant studio and outdoor portrait photography collection of Manavi Vihara by Numesh Ravindra.",
    coverPath: "/gallery/portraits/Manavi%20photo%20shoot/Cover.jpg"
  },
  "savindi-edit": {
    title: "Savindi Thathsara | Outdoor Portrait Album",
    description: "Browse the stunning outdoor portrait photography session of Savindi Thathsara by Numesh Ravindra.",
    coverPath: "/gallery/portraits/Savindi%20Edit/IMG_5089.jpg"
  },
  "amandi-edit": {
    title: "Amandi Rathnayake | Curated Album",
    description: "Check out the beautifully curated photography collection of Amandi Rathnayake by Numesh Ravindra.",
    coverPath: "/gallery/portraits/amandi%20Edit/10.jpg"
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const albumSlug = resolvedParams.album;
  const BASE_URL = "https://numesh-ravindra-photography-website.vercel.app";
  const meta = ALBUM_META[albumSlug] || {
    title: "Photo Album",
    description: "View curated photography collections and photo shoots by Numesh Ravindra in Sri Lanka.",
    coverPath: null
  };

  const ogImage = meta.coverPath
    ? `${BASE_URL}${meta.coverPath}`
    : "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80";

  return {
    title: `${meta.title} | Numesh Ravindra Photography`,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/gallery/${albumSlug}`,
    },
    openGraph: {
      title: `${meta.title} | Numesh Ravindra Photography`,
      description: meta.description,
      url: `${BASE_URL}/gallery/${albumSlug}`,
      siteName: "Numesh Ravindra Photography",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: "en_LK",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Numesh Ravindra Photography`,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export default async function AlbumPage({ params }) {
  const resolvedParams = await params;
  const albumSlug = resolvedParams.album;
  return <AlbumClient albumSlug={albumSlug} />;
}
