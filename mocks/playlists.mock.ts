import { CollectionProps } from "@/src/components/ui/common/CollectionCard";

export const MOCK_PLAYLIST: CollectionProps[] = [
  {
    id: "1",
    title: "Vibes Cotonou",
    isAuthor: true, // C'est l'utilisateur (Toi)
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400",
  },
  {
    id: "2",
    title: "Tout-Puissant Orchestre Poly-Rythmo",
    isAuthor: false,
    author: "Orchestre Poly-Rythmo",
    type: "Album",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400",
  },
  {
    id: "3",
    title: "Afro-Pop 229",
    isAuthor: false,
    author: "Zeynab & Fanicko",
    type: "Album",
    image:
      "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=400",
  },
  {
    id: "4",
    title: "Ma Playlist Fidjrossè",
    isAuthor: true,
    image:
      "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400",
  },
];
