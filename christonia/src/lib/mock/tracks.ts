export const tracks = [
  {
    id: "orthodox",
    name: "Orthodox",
    description:
      "This track guides you through our complete Orthodoxy curriculum. The courses must be taken in order. You'll explore the ancient roots of the Orthodox Church, the Ecumenical Councils, the development of the Biblical canon, and the Great Schism. You'll examine the liturgical life of Orthodoxy, the theology of icons, the veneration of the saints, and the central role of Holy Tradition. You'll also study Orthodox apologetics, addressing theological and historical criticisms from an Orthodox perspective.",
    link: "/tracks/orthodox",
    courseCount: 8,
  },
  {
    id: "catholic",
    name: "Catholic",
    description:
      "This track guides you through our complete Catholicism curriculum. The courses must be taken in order. You'll explore the history of the Catholic Church, including its apostolic roots, the development of the papacy, the Ecumenical Councils, and the Eastern schism. You’ll study Catholic doctrine, the sacraments, the veneration of Mary and the saints, the role of tradition alongside Scripture, and dive into Catholic apologetics.",
    link: "/tracks/catholic",
    courseCount: 8,
  },
  {
    id: "protestant",
    name: "Protestant",
    description:
      "This track guides you through our complete Protestantism curriculum. The courses must be taken in order. You'll explore the origins of the Reformation, the teachings of Martin Luther and other reformers, and the rise of Protestant denominations. You'll study core doctrines like Sola Scriptura, Sola Fide, and the priesthood of all believers. You'll also examine Protestant approaches to Scripture, worship, and church life, and learn how to engage in inter-Christian conversations from a Protestant perspective.",
    link: "/tracks/protestant",
    courseCount: 8,
  },
];

export function getTrackById(trackId: string) {
  return tracks.find((track) => track.id === trackId);
}

export function getTracks() {
  return tracks;
}
